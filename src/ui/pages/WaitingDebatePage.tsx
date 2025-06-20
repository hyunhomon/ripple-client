import React, { useCallback, useRef, useMemo, useState } from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Pressable,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';

import GoBackBar from '@components/GoBackBar';
import ChatMessage from '@components/ChatMessage';
import InputField from '@components/InputField';
import BottomSheetComponent from '@components/BottomSheet';

import GoBackIcon from '@icons/ic_goback.svg';
import InfoIcon from '@icons/ic_info.svg';
import { lightColors as colors } from '@theme/ColorScheme';

interface Message {
  sender: 'me' | 'other';
  text: string;
}

export default function WaitingDebatePage({ route }: any) {
  const { topic, current = 0, total = 10 } = route.params;

  const [messages, setMessages] = useState<Message[]>([
    { sender: 'other', text: '안녕하세요. 여성징병제에 대해 어떻게 생각하시나요?' },
  ]);
  const [input, setInput] = useState('');

  const sheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ['40%', '80%'], []);
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const handleSheetChange = useCallback((index: number) => {
    setIsSheetOpen(index !== -1);
  }, []);

  const sendMessage = () => {
    if (!input.trim()) return;
    const newMessage: Message = { text: input.trim(), sender: 'me' };
    setMessages(prev => [...prev, newMessage]);
    setInput('');
  };

  return (
    <>
      {/* 어두운 배경 오버레이 */}
      {isSheetOpen && (
        <View style={styles.overlay}>
          <Pressable style={{ flex: 1 }} onPress={() => sheetRef.current?.close()} />
        </View>
      )}

      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <SafeAreaView style={{ backgroundColor: colors.surface }}>
          <GoBackBar
            title={topic}
            leftIcon={<GoBackIcon width={24} height={24} />}
            rightIcon={<InfoIcon width={24} height={24} />}
            onRightPress={() => sheetRef.current?.snapToIndex(0)}
          />
        </SafeAreaView>

        {/* 채팅 영역 */}
        <ScrollView style={styles.scrollArea} contentContainerStyle={{ paddingBottom: 16 }}>
          {messages.map((item, idx) => {
            const prev = messages[idx - 1];
            const isSameSenderAsPrev = prev?.sender === item.sender;
            const marginTop = isSameSenderAsPrev ? 2 : 10;

            return (
              <View key={idx} style={{ marginTop }}>
                <ChatMessage
                  sender={item.sender}
                  message={item.text}
                  profileImage={item.sender === 'me' ? undefined : 'https://via.placeholder.com/28'}
                />
              </View>
            );
          })}
        </ScrollView>

        <InputField value={input} onChangeText={setInput} onSend={sendMessage} />
      </KeyboardAvoidingView>

      {/* 바텀 시트 */}
      <BottomSheet
        ref={sheetRef}
        snapPoints={snapPoints}
        index={-1}
        enablePanDownToClose={true}
        onChange={handleSheetChange}
        backgroundStyle={{
          backgroundColor: colors.background,
          borderTopLeftRadius: 14,
          borderTopRightRadius: 14,
          borderWidth: 1,
          borderColor: colors.onSurface,
        }}
        handleIndicatorStyle={{
          backgroundColor: colors.onSurface,
          width: 60,
          height: 6,
          borderRadius: 24,
          marginTop: 10,
          marginBottom: -4,
        }}
      >
        <BottomSheetView>
          <BottomSheetComponent isHost={true}/>
        </BottomSheetView>
      </BottomSheet>
    </>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  scrollArea: { flex: 1 },
  overlay: {
    position: 'absolute',
    top: 0, bottom: 0, left: 0, right: 0,
    backgroundColor: 'rgba(0,0,0,0.4)',
    zIndex: 10,
  },
});
