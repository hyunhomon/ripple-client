import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { Typography } from '@theme/Typography';
import { lightColors as colors } from '@theme/ColorScheme';

interface MannerStatusProps {
  percent: number;
}

const MannerStatus: React.FC<MannerStatusProps> = ({ percent }) => {
  const clamped = Math.max(0, Math.min(percent, 100));
  const sweepAngle = (clamped / 100) * 200;

  const radius = 44;
  const strokeWidth = 10;
  const cx = 70;
  const cy = 73;

  const polarToCartesian = (cx: number, cy: number, r: number, angleInDegrees: number) => {
    const angleInRadians = (angleInDegrees * Math.PI) / 180.0;
    return {
      x: cx + r * Math.cos(angleInRadians),
      y: cy + r * Math.sin(angleInRadians),
    };
  };
  // 위로 조금만 올리기
  // 시작점을 리버스 시키기 ->
  const getArc = (sweep: number, color: string) => {
    if (color === colors.outline) {
      const start = polarToCartesian(cx, cy, radius, 170);
      const end = polarToCartesian(cx, cy, radius, 10);
      
      return (
        <Path
          d={`M ${start.x} ${start.y} A ${radius} ${radius} 0 1 1 ${end.x} ${end.y}`}
          stroke={color}
          strokeWidth={strokeWidth}
          fill="none"
          strokeLinecap="round"
        />
      );
    } else {
      // 빨간색 프로그래스: 파란색 시작점(30도)에서 sweep만큼
      const start = polarToCartesian(cx, cy, radius, 170);
      const end = polarToCartesian(cx, cy, radius, 170 + sweep);
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
    }
  };

  const getMannerLabel = (percent: number) => {
    if (percent < 20) return '매우나쁨';
    if (percent < 40) return '나쁨';
    if (percent < 70) return '보통';
    if (percent < 90) return '양호';
    return '최고';
  };

  return (
    <View style={styles.container}>
      <Svg width={140} height={136}>
        {getArc(240, colors.outline)}
        {getArc(sweepAngle, colors.primary)}
      </Svg>
      <View style={styles.textContainer}>
        <Text style={[Typography.titleMedium, { color: colors.primary }]}> {getMannerLabel(percent)} </Text>
        <Text style={[Typography.bodyMedium, { color: colors.onSurfaceVariant, marginTop: 18 }]}>매너 상태</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 140,
    height: 136,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.surface,
    borderRadius: 12,
  },
  textContainer: {
    position: 'absolute',
    top: 60,
    alignItems: 'center',
  },
});

export default MannerStatus;
