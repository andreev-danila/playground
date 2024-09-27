import { createStyleSheet, useStyles } from 'react-native-unistyles';

import { FancySlider } from '@/core/fancy-slider';
import { View } from 'react-native';

export default function Slider() {
  const { styles } = useStyles(stylesheet);

  return (
    <View style={styles.container}>
      <FancySlider />
    </View>
  );
}

const stylesheet = createStyleSheet((theme) => ({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: theme.colors.background,
  },
}));
