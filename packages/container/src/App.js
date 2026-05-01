import React from "react";
import ReactDOM from "react-dom";
import { StylesProvider } from "@material-ui/core/styles";
import { BrowserRouter } from "react-router-dom";
import { createGenerateClassName } from "@material-ui/core/styles";

import MarketingApp from "./components/MarketingApp";
import Header from "./components/Header";

const styleClassGenerator = new createClassNameGenerator({
  productionPrefix: 'co',
});

export default () => {
  return <>
    <BrowserRouter>
      <StylesProvider generateClassName={styleClassGenerator}>
        <div>
          <Header />
          <MarketingApp />
        </div>
      </StylesProvider>
    </BrowserRouter>
  </>;
};