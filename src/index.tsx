import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { GlobalStyle } from "./styles/GlobalStyle";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { Loader } from "./components/Loader/Loader";
import { persistor, store } from "./redux/store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <>
    {/* <React.StrictMode> */}
    <Provider store={store}>
      <PersistGate loading={<Loader />} persistor={persistor}>
        <BrowserRouter basename="/nanny-services">
          <App />
        </BrowserRouter>
        <GlobalStyle />
      </PersistGate>
    </Provider>

    {/* </React.StrictMode> */}
  </>
);

reportWebVitals();
