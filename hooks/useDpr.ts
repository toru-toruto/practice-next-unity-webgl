import { useState, useEffect } from "react";

export const useDpr = () => {
  // We'll use a state to store the device pixel ratio.
  const [devicePixelRatio, setDevicePixelRatio] = useState(1);

  useEffect(() => {
    // A function which will update the device pixel ratio of the Unity
    // Application to match the device pixel ratio of the browser.
    const updateDevicePixelRatio = function () {
      setDevicePixelRatio(window.devicePixelRatio);
    };
    // A media matcher which watches for changes in the device pixel ratio.
    const mediaMatcher = window.matchMedia(
      `screen and (resolution: ${devicePixelRatio}dppx)`
    );
    // Adding an event listener to the media matcher which will update the
    // device pixel ratio of the Unity Application when the device pixel
    // ratio changes.
    mediaMatcher.addEventListener("change", updateDevicePixelRatio);
    return function () {
      // Removing the event listener when the component unmounts.
      mediaMatcher.removeEventListener("change", updateDevicePixelRatio);
    };
  }, [devicePixelRatio]);

  return { devicePixelRatio };
};
