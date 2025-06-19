import React, { useState } from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import GoBackBar from '@components/GoBackBar';
import ChatMessage from '@components/ChatMessage';
import InputField from '@components/InputField';

import { lightColors as colors } from '@theme/ColorScheme';
import GoBackIcon from '@icons/ic_goback.svg';
import InfoIcon from '@icons/ic_info.svg';

type Message = {
  text: string;
  isMine: boolean;
};

export default function WaitingDebatePage() {
  // ✅ 상대방 메시지 하나 포함한 초기값
  const [messages, setMessages] = useState<Message[]>([
    {
      text: '안녕하세요. 여성징병제에 대해 어떻게 생각하시나요?',
      isMine: false,
    },
  ]);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (!input.trim()) return;

    const newMessage: Message = {
      text: input.trim(),
      isMine: true,
    };
    setMessages(prev => [...prev, newMessage]);
    setInput('');
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <SafeAreaView style={{ backgroundColor: colors.surface }}>
        <GoBackBar
          title="여성징병제는 도입되어야 하는가"
          leftIcon={<GoBackIcon width={24} height={24} />}
          rightIcon={<InfoIcon width={24} height={24} />}
          onLeftPress={() => {}}
          onRightPress={() => {}}
        />
      </SafeAreaView>

      <ScrollView
        style={styles.scrollArea}
        contentContainerStyle={{ paddingBottom: 16 }}
      >
        {messages.map((item, idx) => {
          const prev = messages[idx];
          const isFirstInGroup = !(prev?.isMine && item.isMine);

          return (
            <ChatMessage
              key={idx}
              isMine={item.isMine}
              message={item.text}
              profileImage={
                item.isMine ? undefined : 'https://via.placeholder.com/28'
              }
              isFirstInGroup={isFirstInGroup}
            />
          );
        })}
      </ScrollView>

      <InputField
        value={input}
        onChangeText={setInput}
        onSend={sendMessage}
      />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  scrollArea: { flex: 1 },
});
