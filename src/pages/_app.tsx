import '../styles/globals.css'
import { useRouter } from "next/router";
import type { AppProps } from 'next/app'
import { useEffect } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  useEffect(() => {router.push("/start")}, [])
  return <Component {...pageProps} />
}

export default MyApp
