import React from "react";
import { useRef, useEffect } from "react";

import { mount } from "auth/AuthApp";
import { use } from "react";
import { useHistory } from "react-router-dom";

export default () => {
  const ref = useRef(null);
  const history = useHistory();

  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      initialPath: history.location.pathname,
      onNavigate: ({ pathname: path }) => {
        if (history.location.pathname !== path) {
          history.push(path);
        }
      },
    });
    
    if (history) {
      history.listen(onParentNavigate);
    }
    
  }, []);

  return <div ref={ref}></div>;
};