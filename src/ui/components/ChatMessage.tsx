import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { lightColors as colors } from '@theme/ColorScheme';
import { Typography } from '@theme/Typography';

type ChatMessageProps = {
  isMine: boolean;
  message: string;
  profileImage?: string;
  isFirstInGroup?: boolean;
};

export default function ChatMessage({
  isMine,
  message,
  profileImage,
  isFirstInGroup = true,
}: ChatMessageProps) {
  return (
    <View
      style={[
        styles.messageContainer,
        isMine ? styles.alignRight : styles.alignLeft,
        !isFirstInGroup && styles.continuedMessage,
      ]}
    >
      {!isMine && isFirstInGroup && (
        <Image source={{ uri: profileImage }} style={styles.avatar} />
      )}
      <View
        style={[
          styles.bubble,
          isMine ? styles.myBubble : styles.otherBubble,
        ]}
      >
        <Text
          style={[
            Typography.bodyMedium,
            { color: isMine ? colors.onPrimary : colors.onBackground },
          ]}
        >
          {message}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  messageContainer: {
    flexDirection: 'row',
    paddingVertical: 6,
    paddingHorizontal: 20,
    alignItems: 'flex-start',
  },
  continuedMessage: {
    paddingTop: 1,
    paddingBottom: 1,
  },
  alignLeft: {
    justifyContent: 'flex-start',
  },
  alignRight: {
    justifyContent: 'flex-end',
  },
  avatar: {
    width: 28,
    height: 28,
    borderRadius: 14,
    marginRight: 6,
    marginTop: 2,
  },
  bubble: {
    maxWidth: '75%',
    borderRadius: 12,
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
