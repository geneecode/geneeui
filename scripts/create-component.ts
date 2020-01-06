import { pascalCase, paramCase } from 'change-case';
import fs from 'fs';
import { resolve } from 'path';

const SRC_DIR = resolve(__dirname, '..', 'src');
const LIB_INDEX_FILEPATH = resolve(SRC_DIR, 'index.ts');
const LIB_SCSS_FILEPATH = resolve(SRC_DIR, 'styles', 'geneeui.scss');
const { mkdir, writeFile, readFile } = fs.promises;

function componentTemplate(name: string) {
  return `import React, { FC, ReactNode } from 'react';

export interface ${name}Props {
  children?: ReactNode;
  onClick?: () => void;
}

const ${name}: FC<${name}Props> = function ({ children, onClick }) {
  return (
    <div onClick={onClick}>
      {children}
    </div>
  );
};

export default ${name};
`;
}

function storiesTemplate(name: string) {
  return `import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import React from 'react';
import ${name} from './${name}';

export default {
  title: '${name}',
  excludeStories: ['actions']
};

export const actions = {
  onClick: action('onClick')
};

export const simple = () => <${name} {...actions}>{text('text', 'I am a ${name}')}</${name}>;
`;
}

function storiesWithDocTemplate(name: string) {
  return `import { Meta, Preview, Story, Props } from '@storybook/addon-docs/blocks';
import { action } from '@storybook/addon-actions';
import ${name} from './${name}';

<Meta title='${name} ' component={${name}} />

# ${name}
With MDX we can define a story for ${name} right in the middle of our
markdown documentation.


## Default 
<Preview>
  <Story name='Simple'>
    {
      ()=>{
    return(
      <${name}  onClick={action('onClick')}>${name}</${name}>
        )
      }
    }
  </Story>
</Preview>


## Props
<Props of={${name}} />

`;
}

function testTemplate(name: string) {
  return `import React from 'react';
import ReactDOM from 'react-dom';
import ${name} from './${name}';

//FIXME: This is just a sample test
it('renders', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <${name}>test</${name}>,
    div
  );

  const comp = div.querySelector('div');
  expect(comp).toBeDefined();

  ReactDOM.unmountComponentAtNode(div);
});
`;
}

function indexTemplate(name: string) {
  return `export * from './${name}';
export { default } from './${name}';
`;
}

async function libIndexFileContent(name: string) {
  const indexFileContent = await readFile(LIB_INDEX_FILEPATH, 'utf-8');
  return `${indexFileContent.trim()}
export { ${name}Props, default as ${name} } from './${name}';
`;
}

async function libScssFileContent(folder: string, name: string) {
  const scssFileContent = await readFile(LIB_SCSS_FILEPATH, 'utf-8');
  return `${scssFileContent.trim()}
@import '../${folder}/${name}';
`;
}

async function run() {
  const componentNameArg = process.argv[2] as string;

  if (!componentNameArg) {
    console.error('Component name not provided');
    process.exit(1);
  }

  const componentName = pascalCase(componentNameArg);
  const componentDir = resolve(SRC_DIR, componentName);
  await mkdir(componentDir);

  const componentFilePath = resolve(componentDir, `${componentName}.tsx`);
  await writeFile(componentFilePath, componentTemplate(componentName));

  // const storiesFilePath = resolve(componentDir, `${componentName}.stories.tsx`);
  // await writeFile(storiesFilePath, storiesTemplate(componentName));

  const storiesWithDocFilePath = resolve(componentDir, `${componentName}.stories.mdx`);
  await writeFile(storiesWithDocFilePath, storiesWithDocTemplate(componentName));

  const testFilePath = resolve(componentDir, `${componentName}.test.tsx`);
  await writeFile(testFilePath, testTemplate(componentName));

  const scssFilePath = resolve(componentDir, `_${paramCase(componentName)}.scss`);
  await writeFile(scssFilePath, '');

  const indexFilePath = resolve(componentDir, `index.ts`);
  await writeFile(indexFilePath, indexTemplate(componentName));

  await writeFile(LIB_INDEX_FILEPATH, await libIndexFileContent(componentName));
  await writeFile(LIB_SCSS_FILEPATH, await libScssFileContent(componentName, paramCase(componentName)));

  console.log('Created:');
  console.log(`  ${componentDir}`);
  console.log(`    ${componentFilePath}`);
  // console.log(`    ${storiesFilePath}`);
  console.log(`    ${storiesWithDocFilePath}`);
  console.log(`    ${testFilePath}`);
  console.log(`    ${scssFilePath}`);
  console.log(`    ${indexFilePath}`);
  console.log('\nUpdated:');
  console.log(`  ${LIB_INDEX_FILEPATH}`);
  console.log(`  ${LIB_SCSS_FILEPATH}`);
}

run();
