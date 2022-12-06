import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default () => {
  const router = useRouter();
  const { selected } = router.query;
  const host = "https://4johoshozai.vercel.app";

  return (
    <div>
      <Head>
        <meta property="og:url" content={`${host}/for-ogp`} />
        <meta property="og:title" content="4johoshozai" />
        <meta property="og:description" content={`${selected} | 4johoshozai`} />
        <meta
          property="og:image"
          content={`${host}/api/image?selected=${selected}`}
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <img src={`${host}/api/image?selected=${selected}`} />
    </div>
  );
};
