import Head from 'next/head';
import { DataProvider } from '../components/DataProvider';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Todo List</title>
      </Head>
      <DataProvider>
        <div className="m-4 flex flex-row justify-center">
          <Component {...pageProps} />
        </div>
      </DataProvider>
    </>
  );
}

export default MyApp;
