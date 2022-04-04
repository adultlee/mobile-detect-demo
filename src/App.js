import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from "react-device-detect";
import React from "react";
import { useHistory } from "react-router-dom";

function App() {
  const history = useHistory();
  if (isBrowser) {
    console.log("ji");
  }
  function handleClick() {
    window.location.href = "https://editor.trymake.co/?device=mobile";
  }

  return (
    <>
      <BrowserView>
        <h1>This is rendered only in browser</h1>
        <button type="button" onClick={handleClick}>
          Go home
        </button>
      </BrowserView>
      <MobileView>
        <h1>This is rendered only on mobile</h1>
        <button type="button" onClick={handleClick}>
          Go home
        </button>
      </MobileView>
    </>
  );
}

export default App;
