import React from 'react';
import './App.css';
import Layout from './components/layout';
import { ReactQueryProvider } from './providers/ReactQueryProvider';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

function App() {
  return (
    <ReactQueryProvider>
      <Layout />
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </ReactQueryProvider>
  );
}

export default App;
