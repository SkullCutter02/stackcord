import React, { useState } from "react";
import { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { SkeletonTheme } from "react-loading-skeleton";

import DashboardLayout from "../components/layout/dashboard/DashboardLayout";
import { HallProvider } from "../context/HallContext";

import "../styles/global.css";
import "../styles/variables.css";
import "react-loading-skeleton/dist/skeleton.css";

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

        <SkeletonTheme baseColor={"#393939"} highlightColor={"#636363"}>
          {path[1] !== "" ? (
            <HallProvider>
              <DashboardLayout>
                <Component {...pageProps} />
              </DashboardLayout>
            </HallProvider>
          ) : (
            <Component {...pageProps} />
          )}
        </SkeletonTheme>
      </Hydrate>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
