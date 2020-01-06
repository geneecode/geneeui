import { addParameters, configure } from '@storybook/react';
import requireContext from 'require-context.macro';
import geneecodetheme from './geneecodetheme';
import '../src/styles/geneeui.scss';

addParameters({
  options: {
    theme: geneecodetheme,
    showSearchBox: true,
    sidebarAnimations: true
  },
});

const loader = () => {

  const allExports = [require('../src/GetStarted/GetStarted.stories.mdx')];
  const req = requireContext('../src/', true, /\.stories\.(tsx|mdx)$/);
  req.keys().forEach(fname => allExports.push(req(fname)));
  return allExports;

}

configure(loader, module);
