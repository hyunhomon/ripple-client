import { useEffect, useRef, useState } from 'react';
import dgram from 'react-native-udp';
import {
  JoinRequest,
  LeaveRequest,
  MicRequest,
  VoiceRequest,
  MessageRequest,
  UdpResponse,
} from '../models/udpModels';
import { PORT, sendUdpMessage } from '../repository/udpRepository';

interface Message {
  sender: 'me' | 'other';
  text: string;
}

export function useVoiceChat(player_id: string, channel_id: string) {
  const [players, setPlayers] = useState<string[]>([]);
  const [micOn, setMicOn] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const socketRef = useRef<ReturnType<typeof dgram.createSocket> | null>(null);

  useEffect(() => {
    const socket = dgram.createSocket({ type: 'udp4' });
    socket.bind(PORT);

    socket.on('message', (msg) => {
      try {
        const raw = msg.toString();
        console.log('[Hook] Incoming message:', raw);
        const res: UdpResponse = JSON.parse(raw);

        switch (res.type) {
          case 'message':
            setMessages(prev => [...prev, {
              sender: res.player_id === player_id ? 'me' : 'other',
              text: res.data
            }]);
            break;
          case 'voice':
            // future implementation
            break;
          case 'join':
          case 'leave':
            setPlayers(res.players);
            break;
          case 'mic':
            setMicOn(res.data);
            setPlayers(res.players);
            break;
          default:
            break;
        }
      } catch (e) {
        console.error('[Hook] 수신 파싱 실패:', e);
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
    try {
      await sendUdpMessage(socketRef.current!, req);
    } catch (err) {
      console.error('[sendJoin] Error:', err);
    }
  };

  const sendLeave = async () => {
    const req: LeaveRequest = { type: 'leave', player_id, channel_id };
    try {
      await sendUdpMessage(socketRef.current!, req);
    } catch (err) {
      console.error('[sendLeave] Error:', err);
    }
  };

  const sendMic = async (state: boolean) => {
    const req: MicRequest = { type: 'mic', player_id, channel_id, data: state };
    try {
      await sendUdpMessage(socketRef.current!, req);
    } catch (err) {
      console.error('[sendMic] Error:', err);
    }
  };

  const sendVoice = async (data: string) => {
    const req: VoiceRequest = { type: 'voice', player_id, channel_id, data };
    try {
      await sendUdpMessage(socketRef.current!, req);
    } catch (err) {
      console.error('[sendVoice] Error:', err);
    }
  };

  const sendMessage = async (text: string) => {
    const req: MessageRequest = { type: 'message', player_id, channel_id, data: text };
    console.log('[Hook] Sending message:', req);
    try {
      await sendUdpMessage(socketRef.current!, req);
      console.log('[Hook] Message sent successfully');
    } catch (err) {
      console.error('[sendMessage] Error:', err);
    }
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
