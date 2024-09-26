import { View } from 'react-native';
import { Svg } from 'react-native-svg';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

import { SpherePath } from './sphere-path';
import { PATHS_DRAW_COMMANDS } from './constants';

const pathCount = PATHS_DRAW_COMMANDS.length;

export function PulsatingSphere() {
  const { theme, styles } = useStyles(stylesheet);

  return (
    <View style={styles.container}>
      <Svg viewBox="0 0 440 440" fill={theme.colors.sphereBackground}>
        {PATHS_DRAW_COMMANDS.map((d, index) => {
          // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
          return <SpherePath key={index} d={d} index={index} pathCount={pathCount} />;
        })}
      </Svg>
    </View>
  );
}

const stylesheet = createStyleSheet((theme) => {
  return {
    container: {
      flex: 1,
      backgroundColor: theme.colors.sphereBackground,
    },
  };
});
