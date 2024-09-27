import { View } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

import { PulsatingSphere } from '@/core/pulsating-sphere';

export default function Sphere() {
  const { styles } = useStyles(stylesheet);

  return (
    <View style={styles.container}>
      <PulsatingSphere />
    </View>
  );
}

const stylesheet = createStyleSheet((theme) => {
  return {
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
  };
});
