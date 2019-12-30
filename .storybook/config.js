import { withKnobs } from '@storybook/addon-knobs';
import { addDecorator, addParameters, configure } from '@storybook/react';
import requireContext from 'require-context.macro';
import '../src/styles/geneeui.scss';
import geneecodetheme from './geneecodetheme';

addParameters({
  options: {
    theme: geneecodetheme,
    showSearchBox: true,
    sidebarAnimations: true
  },
});

addDecorator(withKnobs);

const loader = () => {

  const allExports = [require('../src/GetStarted/GetStarted.stories.mdx')];
  const req = requireContext('../src/', true, /\.stories\.(tsx|mdx)$/);
  req.keys().forEach(fname => allExports.push(req(fname)));
  return allExports;

}

configure(loader, module);
