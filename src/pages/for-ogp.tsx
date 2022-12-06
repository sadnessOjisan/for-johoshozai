import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default () => {
  const router = useRouter();
  const query = router.query["selected"];
  const host = "https://4johoshozai.vercel.app";

  return (
    <div>
      <Head>
        <meta property="og:title" content="4johoshozai" />
        <meta property="og:description" content={`${query} | 4johoshozai`} />
        <meta
          property="og:image"
          content={`${host}/api/image?selected=${query}`}
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <img src={`${host}/api/image?selected=${query}`} />
    </div>
  );
};
