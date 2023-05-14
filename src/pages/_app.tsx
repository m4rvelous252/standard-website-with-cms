import { PrismicPreview } from "@prismicio/next";
import { type AppType } from "next/dist/shared/lib/utils";
import { repositoryName } from "prismicio";

import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <PrismicPreview repositoryName={repositoryName}>
      <Component {...pageProps} />
    </PrismicPreview>
  )
};

export default MyApp;
