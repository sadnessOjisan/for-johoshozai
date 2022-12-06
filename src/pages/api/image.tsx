import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";
import words from "../../word.json";

export const config = {
  runtime: "experimental-edge",
};

export default function (req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const selectedQuery = searchParams.get("selected");
  const selectedItems = selectedQuery.split(",");
  if (selectedItems.length === 0) {
    throw new Error("please selected image");
  }
  return new ImageResponse(
    selectedItems.length === 1 ? (
      <div
        style={{
          fontSize: 40,
          background: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          textAlign: "center",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <p>{selectedItems[0]}</p>
      </div>
    ) : (
      <div
        style={{
          fontSize: 28,
          background: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          textAlign: "center",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        {words.map((word) => (
          <label>
            <input type="checkbox" checked={selectedItems.includes(word)} />
            {word}
          </label>
        ))}
      </div>
    ),
    {
      width: 1200,
      height: 600,
    }
  );
}
