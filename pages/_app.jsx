import Head from 'next/head';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Todo List</title>
        <script src='https://cdn.tailwindcss.com' />
      </Head>
      <div className='flex flex-row m-4 justify-center'>
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
