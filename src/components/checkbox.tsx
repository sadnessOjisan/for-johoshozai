import { ComponentType } from "react";

interface Props {
  checked: boolean;
}

export const Checkbox: ComponentType<Props> = ({ checked }) => {
  return (
    <div
      style={{
        width: 32,
        height: 32,
        border: checked ? "solid 4px #678983" : "solid 4px rgba(0, 0, 0, 0.15)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {checked && (
        <div style={{ width: 20, height: 20, background: "#678983" }}></div>
      )}
    </div>
  );
};
