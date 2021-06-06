import React, { FC } from 'react';
import { AppProps } from 'next/app';
import 'reset-css';

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <div>
      <p>app container</p>
      <Component {...pageProps} />;
    </div>
  );
};

export default App;
