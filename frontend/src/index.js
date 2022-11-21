import React from "react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./modules/store";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

import { modalTheme } from "./theme/components/modal";
import { avatarTheme } from "./theme/components/avatar";

const theme = extendTheme({
  components: {
    Modal: modalTheme,
    Avatar: avatarTheme,
  },
  styles: {
    global: {
      h1: {
        fontSize: "26px",
        fontWeight: "bold",
      },
      h2: {
        fontSize: "19.5px",
        fontWeight: "bold",
      },
      h3: {
        fontSize: "15px",
      },
      h4: {
        fontSize: "13px",
      },
      h5: {
        fontSize: "11px",
      },
      h6: {
        fontSize: "10px",
      },
    },
  },
});

let persistor = persistStore(store);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <PersistGate loading={<div>로딩중!!</div>} persistor={persistor}>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </PersistGate>
  </Provider>
  // </React.StrictMode>
);
