import React from "react";
import { useRef, useEffect } from "react";

import { mount } from "marketing/MarketingApp";
import { use } from "react";

export default () => {
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current);
  }, []);

  return <div ref={ref}></div>;
};