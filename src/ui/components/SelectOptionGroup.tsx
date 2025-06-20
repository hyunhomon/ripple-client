import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import SelectOptionButton from './SelectOptionButton';

type Option = {
  label: string;
  icon: React.ReactNode;
};

type SelectOptionGroupProps = {
  options: Option[];
  defaultSelected?: string;
  onSelect: (label: string) => void;
};

export default function SelectOptionGroup({
  options,
  defaultSelected,
  onSelect,
}: SelectOptionGroupProps) {
  const [selected, setSelected] = useState(defaultSelected ?? null);

  const handlePress = (label: string) => {
    setSelected(label);
    onSelect(label);
  };

  return (
    <View style={styles.container}>
      {options.map((opt) => (
        <SelectOptionButton
          key={opt.label}
          label={opt.label}
          icon={opt.icon}
          selected={selected === opt.label}
          onPress={() => handlePress(opt.label)}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 10, 
  },
});
