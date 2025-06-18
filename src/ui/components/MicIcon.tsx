import React from 'react';
import MicOnIcon from '@icons/ic_mic_on.svg';
import MicOffIcon from '@icons/ic_mic_off.svg';
import { lightColors as colors } from '@theme/ColorScheme';

interface MicIconProps {
  status: 'on' | 'off';
}

const MicIcon = ({ status }: MicIconProps) => {
  const Icon = status === 'on' ? MicOnIcon : MicOffIcon;
  return <Icon width={16} height={16} fill={colors.onSurfaceVariant} />;
};

export default MicIcon;