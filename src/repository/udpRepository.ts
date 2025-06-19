import dgram from 'react-native-udp';
import {
  UdpRequest,
  UdpResponse,
} from '../models/udpModels';

type UdpSocket = ReturnType<typeof dgram.createSocket>;

export const PORT = 6163;
export const HOST = '219.241.14.27';

export async function sendUdpMessage<T extends UdpRequest, R extends UdpResponse>(
  socket: UdpSocket,
  message: T
): Promise<R> {
  return new Promise((resolve, reject) => {
    const payload = Buffer.from(JSON.stringify(message));
    let isResolved = false;

    const timeout = setTimeout(() => {
      if (!isResolved) reject(new Error('UDP 응답 타임아웃'));
    }, 3000);

    const listener = (msg: Buffer) => {
      try {
        const res: R = JSON.parse(msg.toString());
        if (res.type === message.type) {
          clearTimeout(timeout);
          socket.off('message', listener);
          resolve(res);
          isResolved = true;
        }
      } catch (e) {
        // 무시
      }
    };

    socket.on('message', listener);

    socket.send(payload, 0, payload.length, PORT, HOST, (err) => {
      if (err) {
        clearTimeout(timeout);
        socket.off('message', listener);
        reject(err);
      }
    });
  });
}
