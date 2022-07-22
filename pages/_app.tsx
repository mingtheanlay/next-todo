import Head from 'next/head';
import '../styles/globals.css';
import { DataProvider } from '../components/DataProvider';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Todo List</title>
        <script src='https://cdn.tailwindcss.com' />
      </Head>
      <DataProvider>
        <div className='flex flex-row m-4 justify-center'>
          <Component {...pageProps} />
        </div>
      </DataProvider>
    </>
  );
}

export default MyApp;
