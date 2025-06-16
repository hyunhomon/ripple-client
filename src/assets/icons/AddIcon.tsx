// src/icons/AddIcon.tsx
import React from 'react';
import { SvgXml } from 'react-native-svg';

interface AddIconProps {
  width?: number;
  height?: number;
  fill?: string;
}

const AddIcon = ({ width = 28, height = 28, fill = '#000' }: AddIconProps) => {
  const xml = `
  <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 25 24" fill="none">
  <mask id="mask0_548_11686" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="25" height="24">
    <rect x="0.5" width="${width}" height="${height}" fill="#D9D9D9"/>
  </mask>
  <g mask="url(#mask0_548_11686)">
    <path d="M11.175 13.325H6.34453C5.97653 13.325 5.6637 13.1962 5.40603 12.9385C5.14836 12.681 5.01953 12.3682 5.01953 12C5.01953 11.6318 5.14836 11.319 5.40603 11.0615C5.6637 10.8038 5.97653 10.675 6.34453 10.675H11.175V5.84452C11.175 5.47652 11.3039 5.16368 11.5615 4.90602C11.819 4.64835 12.1319 4.51952 12.5 4.51952C12.8682 4.51952 13.181 4.64835 13.4385 4.90602C13.6962 5.16368 13.825 5.47652 13.825 5.84452V10.675H18.6555C19.0235 10.675 19.3364 10.8038 19.594 11.0615C19.8517 11.319 19.9805 11.6318 19.9805 12C19.9805 12.3682 19.8517 12.681 19.594 12.9385C19.3364 13.1962 19.0235 13.325 18.6555 13.325H13.825V18.1555C13.825 18.5235 13.6962 18.8363 13.4385 19.094C13.181 19.3517 12.8682 19.4805 12.5 19.4805C12.1319 19.4805 11.819 19.3517 11.5615 19.094C11.3039 18.8363 11.175 18.5235 11.175 18.1555V13.325Z" fill="${fill}"/>
  </g>
</svg>
  `;

  return <SvgXml xml={xml} />;
};

export default AddIcon;
