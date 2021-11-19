import React, { useEffect } from "react";
import { useRouter } from "next/router";

import HomePageContainer from "../components/ui/home/HomePageContainer";
import { axios } from "../lib/axios";

const HomePage: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    axios
      .get("auth/me")
      .then(({ data }) => {
        if (data) {
          router.push("/dashboard").then();
        }
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <HomePageContainer />
    </>
  );
};

export default HomePage;
