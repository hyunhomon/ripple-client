import { NativeModules, NativeEventEmitter } from 'react-native';
import { Buffer } from 'buffer';

const { AudioRecord } = NativeModules;
const { Opus } = NativeModules;

// 입력 스트림 시작 및 Opus 인코딩
export const startMicCapture = (onEncoded: (opusData: Uint8Array) => void) => {
  AudioRecord.init({
    sampleRate: 16000,
    channels: 1,
    bitsPerSample: 16,
    audioSource: 6, // VOICE_RECOGNITION
    wavFile: 'mic_record.wav',
  });

  AudioRecord.start();

  const audioEmitter = new NativeEventEmitter(AudioRecord);
  audioEmitter.addListener('data', async (data) => {
    try {
      const pcmBuffer = Buffer.from(data, 'base64');
      const encoded = await Opus.encode(pcmBuffer);
      onEncoded(encoded);
    } catch (err) {
      console.error('Opus encoding failed:', err);
    }
  });
};

// Opus 데이터를 PCM으로 디코딩 후 출력
export const playOpusStream = async (opusData: Uint8Array) => {
  try {
    const pcm = await Opus.decode(opusData);
    // PCM 데이터를 재생하는 로직 필요 (예: NativeAudioOutput.write(pcm))
    console.log('Decoded PCM size:', pcm.length);
  } catch (err) {
    console.error('Opus decoding failed:', err);
  }
};
