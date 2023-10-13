import { useDpr } from "@/hooks/useDpr";
import { Unity, useUnityContext } from "react-unity-webgl";
import { CanvasLoading } from "../../atoms/CanvasLoading";
import { resourceData } from "./resourceData";
import { useRef, useState } from "react";

export const UnityCanvas: React.FC = () => {
  const { folderName, fileName } = resourceData.changeResolution;

  const { unityProvider, isLoaded, loadingProgression, requestFullscreen } =
    useUnityContext({
      loaderUrl: `/unity-build/${folderName}/Build/${fileName}.loader.js`,
      dataUrl: `/unity-build/${folderName}/Build/${fileName}.data`,
      frameworkUrl: `/unity-build/${folderName}/Build/${fileName}.framework.js`,
      codeUrl: `/unity-build/${folderName}/Build/${fileName}.wasm`,
    });
  const { devicePixelRatio } = useDpr();

  const unityRef = useRef<HTMLCanvasElement>(null);

  return (
    <div className="relative w-full h-full">
      <CanvasLoading isLoaded={isLoaded} progress={loadingProgression} />
      <Unity
        unityProvider={unityProvider}
        className="unity-canvas w-full h-full"
        devicePixelRatio={devicePixelRatio}
        matchWebGLToCanvasSize={false}
        ref={unityRef}
      />
      <button
        className="absolute top-0 left-0"
        type="button"
        onClick={() => {
          const canvas = unityRef.current;
          if (canvas) {
            if (canvas.width == 240) {
              canvas.width = 2000;
              canvas.height = 2000;
            } else {
              canvas.width = 240;
              canvas.height = 200;
            }
          }
        }}
      >
        フルスクリーン
      </button>
    </div>
  );
};
