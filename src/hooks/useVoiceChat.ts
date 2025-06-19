import { useEffect, useRef, useState } from 'react';
import dgram from 'react-native-udp';
import {
  JoinRequest,
  LeaveRequest,
  MicRequest,
  VoiceRequest,
  MessageRequest,
} from '../models/udpModels';
import { PORT, sendUdpMessage } from '../repository/udpRepository';

export function useVoiceChat(player_id: string, channel_id: string) {
  const [players, setPlayers] = useState<string[]>([]);
  const [micOn, setMicOn] = useState(false);
  const [messages, setMessages] = useState<string[]>([]);
  const socketRef = useRef<any>(null);

  useEffect(() => {
    const socket = dgram.createSocket({type: 'udp4'});
    socket.bind(PORT);
    socket.on('message', (msg) => {
      try {
        const res = JSON.parse(msg.toString());
        switch (res.type) {
          case 'message':
            setMessages(prev => [...prev, `${res.player_id}: ${res.data}`]);
            break;
          case 'voice':
            break;
          case 'join':
          case 'leave':
            setPlayers(res.players);
            break;
          case 'mic':
            setMicOn(res.data);
            setPlayers(res.players);
            break;
        }
      } catch (e) {
        console.error('수신 파싱 실패:', e);
      }
    });

    socketRef.current = socket;
    sendJoin();

    return () => {
      sendLeave();
      socket.close();
    };
  }, []);

  const sendJoin = async () => {
    const req: JoinRequest = { type: 'join', player_id, channel_id };
    await sendUdpMessage(socketRef.current, req);
  };

  const sendLeave = async () => {
    const req: LeaveRequest = { type: 'leave', player_id, channel_id };
    await sendUdpMessage(socketRef.current, req);
  };

  const sendMic = async (state: boolean) => {
    const req: MicRequest = { type: 'mic', player_id, channel_id, data: state };
    await sendUdpMessage(socketRef.current, req);
  };

  const sendVoice = async (data: string) => {
    const req: VoiceRequest = { type: 'voice', player_id, channel_id, data };
    await sendUdpMessage(socketRef.current, req);
  };

  const sendMessage = async (text: string) => {
    const req: MessageRequest = { type: 'message', player_id, channel_id, data: text };
    await sendUdpMessage(socketRef.current, req);
  };

  return {
    players,
    micOn,
    messages,
    sendJoin,
    sendLeave,
    sendMic,
    sendVoice,
    sendMessage,
  };
}
