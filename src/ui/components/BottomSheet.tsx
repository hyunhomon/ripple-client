import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import StatusRow from '@components/StatusRow';
import ParticipantProgress from '@components/ParticipantProgress';
import UserCard from '@components/UserCard';
import Button from '@components/Button'

import TimeIcon from '@icons/ic_time.svg';
import FormatIcon from '@icons/ic_format.svg';
import MicIcon from '@icons/ic_mic_on.svg';
import { lightColors as colors } from '@theme/ColorScheme';

interface BottomSheetContentProps {
    isHost: boolean;
    onStartDebate?: () => void;
  }  

  export default function BottomSheetContent({ isHost, onStartDebate }: BottomSheetContentProps) {
    return (
      <View style={styles.container}>
        {/* 상태 박스 */}
        <StatusRow
          items={[
            { icon: <TimeIcon width={20} height={20} />, label: '10분' },
            { icon: <FormatIcon width={20} height={20} />, label: '정석' },
            { icon: <MicIcon width={20} height={20} /> },
          ]}
        />
  
        {/* 인원 진행바 */}
        <ParticipantProgress current={4} total={10} />
  
        {/* 유저 리스트 */}
        {Array(4).fill(0).map((_, i) => (
          <UserCard
            key={i}
            name="김현호"
            level={14}
            avatarUrl="https://via.placeholder.com/36"
            rightLabel="매너 좋음"
            isHost={isHost}
          />
        ))}
  
        {/* ✅ 토론 시작 버튼 - 관리자만 */}
        {isHost && (
          <View>
            {/* 실사용 시 아래처럼 교체 */}
            <Button text="토론 시작" backgroundColor="primary" onPress={onStartDebate} />
          </View>
        )}
      </View>
    );
  }
  

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    paddingVertical: 10,
    paddingHorizontal: 16,
    gap: 14,
    borderTopLeftRadius: 10, 
    borderTopRightRadius: 10,
  },
  content: {
    gap: 14,
  },
  handleBar: {
    width: 60,
    height: 6,
    borderRadius: 2,
    backgroundColor: colors.onSurface,
    alignSelf: 'center',
    marginTop: 8,
    marginBottom: 6,
  },
});
