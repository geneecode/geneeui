import { addons } from '@storybook/addons';
import { create } from '@storybook/theming/create';

const theme = create({
  base: 'light',

  colorPrimary: '#222945',
  colorSecondary: '#22ad3e',

  // UI
  appBg: 'white',
  appContentBg: '#FFFFFF',
  appBorderColor: '#FFFFFF',
  appBorderRadius: 4,

  // Typography
  fontBase: '"Poppins", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: 'black',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: '#9D9D9D',
  barSelectedColor: '#22ad3e',
  barBg: 'white',

  brandTitle: 'GeneeCode',
  brandUrl: 'https://geneecode.com/geneeui',
});

addons.setConfig({
  panelPosition: 'bottom',
  theme,
});