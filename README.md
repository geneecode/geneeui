<p align="center">
  <a href="https://geneecode.com/">
    <img src="./public/assets/gclogo.png" alt="GeneeUI" width="700" />
  </a>
</p>

### This is a product of GeneeCode.com
### This is a work in progress, actively being built and monitored. Stay Tuned.

# GeneeUI
This is a React based implementation of Component Library. This project is actively being developed, so expect changes/additions. The basic usage is outlined below.

## Checkout Storybook at 
<a href="http://geneecode.com/geneeui" target="_blank" >Click me to Open Storybook</a>

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
