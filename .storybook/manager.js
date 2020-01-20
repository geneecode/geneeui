import { addons } from '@storybook/addons';
import { create } from '@storybook/theming/create';

const genee = create({
  base: 'light',

  colorPrimary: '#222945',
  colorSecondary: '#727272',

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
  barSelectedColor: '#727272',
  barBg: 'white',

  brandTitle: 'GeneeCode',
  brandUrl: 'https://geneecode.com/geneeui',
});

addons.setConfig({
  theme: genee
});