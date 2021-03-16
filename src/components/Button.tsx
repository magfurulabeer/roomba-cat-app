import * as React from 'react';
import {useCallback, useState} from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import {View, Pressable, StyleSheet} from 'react-native';

interface ButtonProps {
  style?: StyleSheet | Object,
  size?: number,
  onPress?: () => void
}
const Button: React.FC<ButtonProps> = ({ style, size = 12, onPress, children}) => {
  const [isPressedDown, setPressedDown] = useState(false);

  const handlePressIn = useCallback(() => {
    setPressedDown(true);
  }, [setPressedDown]);

  const handlePressOut = useCallback(() => {
    setPressedDown(false);
  }, [setPressedDown]);

  const gradColors = isPressedDown ? ['#4da7db', '#5bc6ff'] : ['#5bc6ff', '#4da7db'];
  const buttonCommonStyle = {
    borderRadius: size,
  };
  const buttonFaceStyle = {
    borderRadius: size,
    padding: size,
  };

  return (
    <Pressable
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      onPress={onPress}
    >
      <View style={[styles.button, buttonCommonStyle]}>
          <LinearGradient
            colors={gradColors}
            style={[styles.buttonFace, buttonFaceStyle]}>
            {children}
          </LinearGradient>
        </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#55b9f3',
    borderRadius: 12,
    marginTop: 40
  },
  buttonFace: {
    borderRadius: 12,
    padding: 12,
  },
});

export default Button;