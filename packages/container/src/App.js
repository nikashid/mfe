import React from "react";
import ReactDOM from "react-dom";
import { StylesProvider, createGenerateClassName } from "@material-ui/core/styles";
import { BrowserRouter } from "react-router-dom";

import MarketingApp from "./components/MarketingApp";
import Header from "./components/Header";

const styleClassGenerator = createGenerateClassName({
  productionPrefix: 'co',
});

export default () => {
  return <>
    <StylesProvider generateClassName={styleClassGenerator}>
      <BrowserRouter>
          <div>
            <Header />
            <MarketingApp />
          </div>
      </BrowserRouter>
    </StylesProvider>
  </>;
};