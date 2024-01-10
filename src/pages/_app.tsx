import dynamic from "next/dynamic";
import type { AppProps } from "next/app";
import { IntercomProvider } from "@/utils/intercomProvider";
import "@/styles/globals.scss";
import "../variables.css";

const Layout = dynamic(() => import("@/components/Layout/Layout"));

export default function App({ Component, pageProps }: AppProps) {
  return (
    <IntercomProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </IntercomProvider>
  );
}
