import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import Weather from "./components/Weather";
import GlobalStyles from "./layout/GlobalStyles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MinMax } from "./components/MinMax";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Weather />} />
          <Route path="/temperatura" element={<MinMax />} />
        </Routes>

        <GlobalStyles />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
