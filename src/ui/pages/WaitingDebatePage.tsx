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

import { useVoiceChat } from '../../hooks/useVoiceChat';

import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../../../App'; // ↓ 예시 타입 선언 참고

type WaitingDebateRouteProp = RouteProp<RootStackParamList, 'WaitingDebate'>;

interface Message {
  sender: 'me' | 'other';
  text: string;
}

export default function WaitingDebatePage({ route }: any) {
  const routes = useRoute<WaitingDebateRouteProp>();
  const { player_id } = routes.params;
  const {
    players,
    micOn,
    messages,
    sendJoin,
    sendLeave,
    sendMic,
    sendVoice,
    sendMessage,
  } = useVoiceChat(player_id, 'test4');
  // const { topic, current = 0, total = 10 } = route.params;

//   const [messages, setMessages] = useState<Message[]>([
//   { sender: 'other', text: '안녕하세요. 저는 나제준입니다. 여성징병제에 대해서 어떻게 생각하세요?' },
//   { sender: 'me', text: '도입이 필요하다고 생각해요. 국방력 부족 문제가 현재 심각한데 조금이라도 보완하는 방향이 좋지 않을까요?' },
//   { sender: 'other', text: '저는 그 반대의 생각을 가지고 있어요. 오히려 신체적 능력이 부족한 여성 인력을 양성하는 데 비용투자를 하는 것보다 실질적인 군수물품 개발이 낫지 않을까요?' },
//   { sender: 'me', text: '그건 맞는 말이긴 하지만, 단순히 신체적인 능력만으로 병역 자격을 나누는 건 시대착오적이에요. 최근 전장은 기술 중심으로 바뀌고 있잖아요. 그 안에서 여성도 충분히 기여할 수 있다고 생각해요.' },
//   { sender: 'other', text: '물론 기술병과라면 여성도 충분히 역할을 할 수 있겠죠. 하지만 그렇게 되면 결국 남성과 여성 간의 징병 기준이 달라져야 할 텐데, 그건 오히려 역차별 문제가 발생하지 않을까요?' },
//   { sender: 'me', text: '그럴 수도 있지만, 현재도 남성 중에서도 특수병과나 대체복무처럼 다양한 방식으로 병역 의무를 수행하잖아요. 여성도 다양한 선택지 안에서 의무를 지는 방향이면 균형이 맞을 수 있다고 봐요.' },
//   { sender: 'other', text: '그렇다면 결국 중요한 건 "의무의 형평성"이라는 거군요. 남성만이 병역의무를 진다는 건 불공평하다, 그런 의미에서 여성도 참여해야 한다는 거고요.' },
//   { sender: 'me', text: '맞아요. 병역의무가 단지 전투만이 아니라 사회적 책임의 일환이라면, 성별에 관계없이 모두가 감당해야 할 몫이라고 생각해요. 단, 그 방식은 유연할 필요가 있겠죠.' },
//   { sender: 'other', text: '들어보니 일리가 있네요. 저도 무작정 반대보단, 시대에 맞게 병역제도 자체를 재설계할 필요는 있다고 느껴요. 중요한 건 효율성과 형평성의 균형이겠네요.' },
// ]);

  const [input, setInput] = useState('');

  const sheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ['40%', '80%'], []);
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const handleSheetChange = useCallback((index: number) => {
    setIsSheetOpen(index !== -1);
  }, []);

  const setMessage = () => {
    if (!input.trim()) return;
    sendMessage(input.trim());
    setInput('');
  };

  return (
    <>

      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <SafeAreaView style={{ backgroundColor: colors.surface }}>
          <GoBackBar
            title={"여성징병제는 도입되어야 하는가?"}
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

        <InputField value={input} onChangeText={setInput} onSend={setMessage} />
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
