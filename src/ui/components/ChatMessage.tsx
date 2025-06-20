import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { lightColors as colors } from '@theme/ColorScheme';
import { Typography } from '@theme/Typography';

interface ChatMessageProps {
  sender: 'me' | 'other';
  message: string;
  profileImage?: string;
}

const ChatMessage = ({ sender, message, profileImage }: ChatMessageProps) => {
  const isMine = sender === 'me';

  return (
    <View style={[styles.messageContainer, isMine ? styles.alignRight : styles.alignLeft]}>
      {/* 상대방만 프로필 이미지 표시 */}
      {!isMine && profileImage && (
        <Image source={{ uri: profileImage }} style={styles.avatar} />
      )}
      <View style={[styles.bubble, isMine ? styles.myBubble : styles.otherBubble]}>
        <Text style={[Typography.bodyMedium, { color: isMine ? colors.onPrimary : colors.onSurface }]}>
          {message}
        </Text>
      </View>
    </View>
  );
};

export default ChatMessage;

const styles = StyleSheet.create({
  messageContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 4,
    alignItems: 'flex-end',
  },
  alignLeft: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  alignRight: {
    justifyContent: 'flex-end',
    flexDirection: 'row-reverse',
  },
  avatar: {
    width: 28,
    height: 28,
    borderRadius: 14,
    marginHorizontal: 6,
  },
  bubble: {
    maxWidth: '75%',
    borderRadius: 14,
    paddingVertical: 8,
    paddingHorizontal: 12,
    flexShrink: 1,
  },
  otherBubble: {
    backgroundColor: colors.surface,
  },
  myBubble: {
    backgroundColor: colors.primary,
  },
});
