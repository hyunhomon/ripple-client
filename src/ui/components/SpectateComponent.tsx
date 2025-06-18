import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Typography } from '@theme/Typography';
import { lightColors as colors } from '@theme/ColorScheme';

import PeopleIcon from '@icons/ic_people.svg';
import SpectateIcon from '@icons/ic_spectate.svg';
import FormatIcon from '@icons/ic_format.svg';
import MicIcon from '@components/MicIcon';
import InfoIcon from '@components/InfoIcon';

interface SpectateComponentProps {
  title: string;
  time: string;
  participate: string;
  spectate: string;
  format: string;
  micStatus: 'on' | 'off';
}

const SpectateComponent = ({ title, time, participate, spectate, format, micStatus }: SpectateComponentProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.rowSpaceBetween}>
        <View style={styles.contentColumn}>
          <Text style={[Typography.titleMedium, { color: colors.onBackground }]}>{title}</Text>
          <View style={styles.infoRow}>
            <InfoIcon icon={PeopleIcon} text={participate} />
            <InfoIcon icon={SpectateIcon} text={spectate} />
            <InfoIcon icon={FormatIcon} text={format} />
            <MicIcon status={micStatus} />
          </View>
        </View>
        <View style={styles.badgeWrapper}>
          <View style={styles.badgeBox}>
            <Text style={[Typography.bodySmall, { color: colors.onSurfaceVariant }]}>{time}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SpectateComponent;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: colors.surface,
    borderRadius: 10
  },
  rowSpaceBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 8,
  },
  contentColumn: {
    flex: 1,
    flexDirection: 'column',
    gap: 10,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  badgeWrapper: {
    justifyContent: 'center',
  },
  badgeBox: {
    backgroundColor: colors.background,
    borderRadius: 999,
    paddingHorizontal: 12,
    paddingVertical: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
