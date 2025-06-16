import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Svg, { Path } from 'react-native-svg';

interface MannerStatusProps {
  percent: number; // 0 ~ 100
}

const MannerStatus: React.FC<MannerStatusProps> = ({ percent }) => {
  const clamped = Math.max(0, Math.min(percent, 100));
  const sweepAngle = (clamped / 100) * 180;

  const radius = 50;
  const strokeWidth = 10;
  const cx = 60;
  const cy = 60;

  const getArc = (sweep: number, color: string) => {
    const start = polarToCartesian(cx, cy, radius, 180);
    const end = polarToCartesian(cx, cy, radius, 180 - sweep);
    const largeArcFlag = sweep > 180 ? 1 : 0;

    return (
      <Path
        d={`M ${start.x} ${start.y} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${end.x} ${end.y}`}
        stroke={color}
        strokeWidth={strokeWidth}
        fill="none"
        strokeLinecap="round"
      />
    );
  };

  return (
    <View style={styles.card}>
      <Svg width={120} height={70}>
        {getArc(180, '#eee')} // 배경 반원
        {getArc(sweepAngle, '#4A90E2')} // 퍼센트 반원
      </Svg>
      <Text style={styles.mainText}>{getMannerLabel(percent)}</Text>
      <Text style={styles.subText}>매너 상태</Text>
    </View>
  );
};

const getMannerLabel = (percent: number) => {
  if (percent < 20) return '나쁨';
  if (percent < 60) return '보통';
  return '좋음';
};

function polarToCartesian(cx: number, cy: number, r: number, angleInDegrees: number) {
  const angleInRadians = (angleInDegrees * Math.PI) / 180.0;
  return {
    x: cx + r * Math.cos(angleInRadians),
    y: cy - r * Math.sin(angleInRadians), // 여기서 y는 위로!
  };
}

const styles = StyleSheet.create({
  card: {
    width: 140,
    height: 140,
    backgroundColor: '#fafafa',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainText: {
    position: 'absolute',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4A90E2',
    marginTop: 4,
  },
  subText: {
    fontSize: 14,
    color: '#aaa',
  },
});

export default MannerStatus;
