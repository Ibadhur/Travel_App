import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Box } from "@mui/material";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
