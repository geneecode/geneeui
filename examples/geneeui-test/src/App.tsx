import React, { useCallback, useState } from 'react';
import { withLayout } from './components/Layout';

export interface AppProps {

}

export const App: React.FC<AppProps> = () => {

  return (
    <h1>Hello</h1>
  );
}

export default withLayout(App);
