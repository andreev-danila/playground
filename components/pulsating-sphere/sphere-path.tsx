import { useEffect } from 'react';
import Animated, {
  Easing,
  interpolate,
  interpolateColor,
  useAnimatedProps,
  useSharedValue,
  withDelay,
  withRepeat,
  withSequence,
  withTiming,
} from 'react-native-reanimated';
import { Path, type PathProps } from 'react-native-svg';

type SpherePathProps = {
  d: string;
  index: number;
  pathCount: number;
};

const AnimatedPath = Animated.createAnimatedComponent(Path);

const inputRange = [0, 1];

const animationConfig = {
  duration: 500,
  easing: Easing.bezier(0.25, 0.1, 0.25, 1),
};

export function SpherePath({ d, index, pathCount }: SpherePathProps) {
  const transition = useSharedValue(0);

  useEffect(() => {
    const delay = (pathCount - index - 1) * (animationConfig.duration * 0.1);

    transition.value = withDelay(
      delay,
      withRepeat(
        withSequence(withTiming(1, animationConfig), withTiming(0, animationConfig)),
        -1,
        true,
      ),
    );
  }, [index, pathCount]);

  const animatedProps = useAnimatedProps<PathProps>(() => {
    const stroke = interpolateColor(transition.value, inputRange, [
      'rgba(80,80,80,0.35)',
      '#3754ED',
    ]);

    const translate = interpolate(transition.value, inputRange, [0, -10]);

    return {
      stroke,
      transform: [{ translateX: translate }, { translateY: translate }],
    };
  });

  return <AnimatedPath d={d} animatedProps={animatedProps} />;
}
