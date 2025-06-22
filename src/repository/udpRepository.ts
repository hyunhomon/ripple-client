import dgram from 'react-native-udp';
import { Buffer } from 'buffer';
import { UdpRequest, UdpResponse } from '../models/udpModels';

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

    console.log('[UDP] Sending:', message);

    const timeout = setTimeout(() => {
      if (!isResolved) {
        console.warn('[UDP] Timeout: No response received');
        socket.off('message', listener);
        reject(new Error('UDP 응답 타임아웃'));
      }
    }, 3000);

    const listener = (msg: Buffer) => {
      try {
        const raw = msg.toString();
        console.log('[UDP] Received raw:', raw);
        const res: R = JSON.parse(raw);

        if (res.type === message.type) {
          isResolved = true;
          clearTimeout(timeout);
          socket.off('message', listener);
          console.log('[UDP] Matched response:', res);
          resolve(res);
        } else {
          console.log('[UDP] Unmatched response (ignored):', res);
        }
      } catch (e) {
        console.warn('[UDP] Failed to parse message:', e);
      }
    };

    socket.once('message', listener);

    socket.send(payload, 0, payload.length, PORT, HOST, (err) => {
      if (err) {
        clearTimeout(timeout);
        socket.off('message', listener);
        console.error('[UDP] Send error:', err);
        reject(err);
      } else {
        console.log('[UDP] Payload sent to', HOST, PORT);
      }
    });
  });
}
