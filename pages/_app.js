import React from 'react';
import '../styles/globals.css';
import {Layout} from '../components';
import {Toaster} from 'react-hot-toast';
// import type { AppProps } from 'next/app'
import {StateContext} from '../context/StateContext';

export default function App({ Component, pageProps }) {
  return (
    <StateContext>
      <Layout>
        <Toaster/>
        <Component {...pageProps}/>
      </Layout>
    </StateContext>
  )
}
