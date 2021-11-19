import React, { useState } from "react";
import { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import DashboardLayout from "../components/layout/dashboard/DashboardLayout";

import "../styles/global.css";
import "../styles/variables.css";

function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());

  const router = useRouter();
  const path = router.asPath.split("/");

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Head>
          <title>StackCord</title>
        </Head>

        {path[1] !== "" ? (
          <DashboardLayout>
            <Component {...pageProps} />
          </DashboardLayout>
        ) : (
          <Component {...pageProps} />
        )}
      </Hydrate>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
