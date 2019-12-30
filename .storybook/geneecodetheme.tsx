import { create } from '@storybook/theming/create';

export default create({
  base: 'light',

  colorPrimary: '#222945',
  colorSecondary: '#241358',

  // UI
  appBg: 'white',
  appContentBg: '#FFFFFF',
  appBorderColor: '#FFFFFF',
  appBorderRadius: 4,


  // Typography
  fontBase: '"Josefin Sans", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: 'black',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: '#9D9D9D',
  barSelectedColor: '#241358',
  barBg: 'white',


  brandTitle: 'GeneeCode',
  brandUrl: 'https://geneecode.com',
  brandImage: require('./GeneeCodeLogoHorizontal.png')
});