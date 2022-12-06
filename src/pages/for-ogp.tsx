import { GetServerSideProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
interface Props {
  query: string;
}

export default (props: Props) => {
  const selected = props.query;
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

export const getServerSideProps: GetServerSideProps<Props> = async (ctx) => {
  const query = ctx.query["selected"];
  return {
    props: {
      query: String(query),
    },
  };
};
