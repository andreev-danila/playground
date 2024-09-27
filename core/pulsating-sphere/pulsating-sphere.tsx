import { Svg } from 'react-native-svg';
import { useStyles } from 'react-native-unistyles';

import { SpherePath } from './sphere-path';
import { PATHS_DRAW_COMMANDS } from './constants';

const pathCount = PATHS_DRAW_COMMANDS.length;

export function PulsatingSphere() {
  const { theme } = useStyles();

  return (
    <Svg viewBox="0 0 440 440" fill={theme.colors.background}>
      {PATHS_DRAW_COMMANDS.map((d, index) => {
        return <SpherePath key={index} d={d} index={index} pathCount={pathCount} />;
      })}
    </Svg>
  );
}
