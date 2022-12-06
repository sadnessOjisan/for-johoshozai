// 1. import `NextUIProvider` component
import { NextUIProvider } from "@nextui-org/react";

function MyApp({ Component, pageProps }) {
  return (
    // 2. Use at the root of your app
    <NextUIProvider>
      <div style={{ width: 1024, margin: "auto" }}>
        <Component {...pageProps} />
      </div>
    </NextUIProvider>
  );
}

export default MyApp;
