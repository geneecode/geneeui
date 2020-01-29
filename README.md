![Build](https://img.shields.io/badge/build-passing-brightgreen)
![Test](https://img.shields.io/badge/test-passing-success)
![Coverage](https://img.shields.io/badge/coverage-94-green)
![NPM](https://img.shields.io/badge/npm-1.0.4-blue)
![Dependencies](https://img.shields.io/badge/dependencies-uptodate-yellow)
![Dev Dependencies](https://img.shields.io/badge/devDependencies-uptodate-yellow)
![Storybook](https://img.shields.io/badge/storybook-deployed-orange)
![Liscense](https://img.shields.io/github/license/geneecode/geneeui)
![Stars](https://img.shields.io/github/stars/geneecode/geneeui)
![Issues](https://img.shields.io/github/issues/geneecode/geneeui)
![Forks](https://img.shields.io/github/forks/geneecode/geneeui)



# GeneeUI
This is a React based implementation of Component Library. This project is actively being developed, so expect changes/additions. The basic usage is outlined below.

## Checkout Storybook at 
<a href="http://geneecode.com/geneeui" target="_blank" >Goto GeneeUI</a>

## Usage
First install the library
```sh
npm i @geneecode/geneeui 
```

To add the styling you need to add the provided css file. How to import this varies based on your build pipeline. As an example for a simple CRA app, you would do the following:

```ts
import '@geneecode/geneeui/dist/geneeui.min.css';
```

After this you can import and use the components. The recommended way is to include individual components from the lib folder to reduce bundle size and allow for tree-shaking. If your pipeline allows import `esnext` or `esm` modules then see the example after this.

```tsx
import React from 'react';
import Button from '@geneecode/geneeui/lib/Button';

const App: React.FC = () => {
  return (
    <div>
      <Button>Button</Button>
    </div>
  );
}

export default App;
```

We also provide `esm` and `esnext` builds in `lib/esm` and `lib/es` folders respectively. You may use these if your pipeline allows.

```ts
import Button from '@geneecode/geneeui/lib/esm/Button';
// or
import Button from '@geneecode/geneeui/lib/es/Button';
```

### Development
```sh
# Build
npm run build

# Test
npm run test
npm run test:watch

# Storybook
npm run storybook
```
