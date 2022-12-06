import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";
import words from "../../word.json";
import { Checkbox } from "../../components/checkbox";

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
    (
      <div
        style={{
          background: "#F0E9D2",
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
          padding: 40,
          color: "#181D31",
          width: "100%",
          height: 630,
        }}
      >
        {selectedItems.length === 1 ? (
          <div
            style={{
              fontSize: 60,
              display: "flex",
              textAlign: "center",
              alignItems: "center",
              justifyContent: "center",
              height: 500,
            }}
          >
            {selectedItems[0]}
          </div>
        ) : (
          <div
            style={{
              fontSize: 20,
              display: "flex",
              textAlign: "left",
              flexDirection: "column",
              flexWrap: "wrap",
              lineHeight: 1.2,
              height: 500,
            }}
          >
            {words.map((word) => (
              <div style={{ display: "flex", alignItems: "center", margin: 4 }}>
                <Checkbox checked={selectedItems.includes(word)} />
                <p style={{ marginLeft: 8 }}>{word}</p>
              </div>
            ))}
          </div>
        )}
        <p style={{ height: 40, color: "#181D31" }}>
          created by: https://4johoshozai.vercel.app
        </p>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
