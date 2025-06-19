export type PlayerId = string;
export type ChannelId = string;

export interface BaseEvent {
  type: string;
  player_id: PlayerId;
  channel_id: ChannelId;
}

// JOIN
export interface JoinRequest extends BaseEvent {
  type: 'join';
}

export interface JoinResponse {
  type: 'join';
  player_id: PlayerId;
  players: PlayerId[];
}

// LEAVE
export interface LeaveRequest extends BaseEvent {
  type: 'leave';
}

export interface LeaveResponse {
  type: 'leave';
  player_id: PlayerId;
  players: PlayerId[];
}

// MIC ON/OFF
export interface MicRequest extends BaseEvent {
  type: 'mic';
  data: boolean;
}

export interface MicResponse {
  type: 'mic';
  player_id: PlayerId;
  players: PlayerId[];
  data: boolean;
}

// VOICE
export interface VoiceRequest extends BaseEvent {
  type: 'voice';
  data: string;
}

export interface VoiceResponse {
  type: 'voice';
  player_id: PlayerId;
  players: PlayerId[];
  data: string;
}

// MESSAGE
export interface MessageRequest extends BaseEvent {
  type: 'message';
  data: string;
}

export interface MessageResponse {
  type: 'message';
  player_id: PlayerId;
  players: PlayerId[];
  data: string;
}

export type UdpRequest =
  | JoinRequest
  | LeaveRequest
  | MicRequest
  | VoiceRequest
  | MessageRequest;

export type UdpResponse =
  | JoinResponse
  | LeaveResponse
  | MicResponse
  | VoiceResponse
  | MessageResponse;
