import { Button, Checkbox, Loading, Radio, Text } from "@nextui-org/react";
import Head from "next/head";
import { FormEvent, useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import words from "../word.json";

export default () => {
  const [path, setPath] = useState<string | undefined>();
  const [image, setImage] = useState<string | undefined>();
  const [mode, setMode] = useState<"single" | "multi">("single");
  const [host, setHost] = useState("https://4johoshozai.vercel.app");

  useEffect(() => {
    setHost(window.location.href);
  }, []);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setImage(`${host}api/image?selected=${path}`);
  };

  return (
    <div>
      <Head>
        <meta property="og:title" content="4johoshozai" />
        <meta
          property="og:description"
          content={`画像ツイートでミュートワードを突破するためのツール | 4johoshozai`}
        />
        <meta
          property="og:image"
          content={`${host}/api/image?selected=ミュートされた情報商材屋を救う`}
        />
      </Head>
      <h1>ミュートされた情報商材屋を救いたい</h1>
      <h2>SNSを伸ばす魔法の言葉</h2>
      <Text>
        これは魔法のフレーズ集の言葉をミュートしている人たちにもツイートを届けるためのツールです。画像に文字を埋め込めばミュートを突破できます。また生成した画像URLをツイートに貼ると、Twitterカードとしても機能します。
      </Text>
      <Button
        onClick={() => {
          setMode(mode === "single" ? "multi" : "single");
        }}
      >
        {mode === "single" ? "複数選択モードへ" : "単数選択モードへ"}
      </Button>

      <div>
        <form
          onSubmit={handleSubmit}
          style={{ marginTop: 40, marginBottom: 40 }}
        >
          {mode === "single" ? (
            <Radio.Group name="radio" onChange={(v) => setPath(v)}>
              {words.map((word) => (
                <Radio value={word} name="radio" key={word}>
                  {word}
                </Radio>
              ))}
            </Radio.Group>
          ) : (
            <Checkbox.Group
              label="SNSを伸ばす魔法の言葉"
              name="cb"
              onChange={(v) => setPath(v.join(","))}
            >
              {words.map((word) => (
                <Checkbox value={word} name="cb" key={word}>
                  {word}
                </Checkbox>
              ))}
            </Checkbox.Group>
          )}
          <Button type="submit">画像生成</Button>
        </form>
        <h2>生成された画像</h2>
        {path ? (
          <div>
            <p>
              画像url:
              <a
                href={`${host}for-ogp?selected=${path}`}
              >{`${host}for-ogp?selected=${path}`}</a>
            </p>
            <img src={image} />
          </div>
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
};
