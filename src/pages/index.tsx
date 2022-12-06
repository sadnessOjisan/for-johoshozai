import { FormEvent, useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import words from "../word.json";

export default () => {
  const defaultValues: string[] = [];
  const [image, setImage] = useState<string | undefined>();
  const [mode, setMode] = useState<"single" | "multi">("single");
  const [host, setHost] = useState("");

  useEffect(() => {
    setHost(window.location.href);
  }, []);

  const { register, handleSubmit, reset } = useForm({
    defaultValues,
  });

  return (
    <div>
      <h1>ミュートされた情報商材屋を救いたい</h1>
      <button
        onClick={() => {
          setMode(mode === "single" ? "multi" : "single");
          reset();
        }}
      >
        {mode === "single" ? "multi" : "single"}
      </button>
      <div>
        <form
          onSubmit={handleSubmit((data) => {
            const selectedItems = data.filter((d) => !!d);
            if (selectedItems.length === 0) {
              alert("入力してください");
            }
            const url = `api/image?selected=${selectedItems.join(",")}`;
            setImage(url);
          })}
        >
          {words.map((w, idx) => {
            return mode === "single" ? (
              <label key={w}>
                <input
                  name="word"
                  type="radio"
                  value={w}
                  {...register(`${idx}`)}
                />
                {w}
              </label>
            ) : (
              <label key={w}>
                <input
                  name="word"
                  type="checkbox"
                  value={w}
                  {...register(`${idx}`)}
                />
                {w}
              </label>
            );
          })}
          <button type="submit">submit</button>
        </form>
        <h2>生成された画像</h2>
        <p>
          画像url: {host}
          {image}
        </p>
        <img src={image} />
      </div>
    </div>
  );
};
