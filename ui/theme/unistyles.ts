import { Theme } from './theme';

// if you defined themes
type AppThemes = typeof Theme;

// override library types
declare module 'react-native-unistyles' {
  export interface UnistylesThemes extends AppThemes {}
}

import { UnistylesRegistry } from 'react-native-unistyles';

UnistylesRegistry.addThemes(Theme).addConfig({ adaptiveThemes: true });
