import { GestureDetector } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

import type { WithIsAnyLabelIntersected, WithLayout, WithTranslationX } from './types';
import { DIVIDER_SIZE } from './constants';
import { useSliderGesture } from './hooks';

type Props = WithLayout & WithTranslationX & WithIsAnyLabelIntersected;

const hitSlop = {
  top: 50,
  bottom: 50,
  left: 50,
  right: 50,
};

export function Divider({ layout, translationX, isAnyLabelIntersected }: Props) {
  const { styles } = useStyles(stylesheet);
  const { gesture, dividerStyle } = useSliderGesture({
    layout,
    translationX,
    isAnyLabelIntersected,
  });

  return (
    <GestureDetector gesture={gesture}>
      <Animated.View hitSlop={hitSlop} style={[styles.divider, dividerStyle]} />
    </GestureDetector>
  );
}

const stylesheet = createStyleSheet((theme) => ({
  divider: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    width: DIVIDER_SIZE.width,
    height: DIVIDER_SIZE.height,
    borderRadius: 12,
    backgroundColor: theme.colors.sliderDivider,
  },
}));
