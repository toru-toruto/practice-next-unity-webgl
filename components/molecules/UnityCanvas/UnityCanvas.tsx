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

  const handleReso = (rate: number) => {
    const canvas = unityRef.current;
    if (canvas) {
      const val = 1000 * rate;
      canvas.height = val;
      canvas.width = (val * innerWidth) / innerHeight;
    }
  };

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
      <div className="absolute top-3 left-3 grid gap-4">
        <div>
          <button type="button" onClick={() => handleReso(0.01)}>
            0.01
          </button>
        </div>
        <div>
          <button type="button" onClick={() => handleReso(0.1)}>
            0.1
          </button>
        </div>
        <div>
          <button type="button" onClick={() => handleReso(0.2)}>
            0.2
          </button>
        </div>
        <div>
          <button type="button" onClick={() => handleReso(0.3)}>
            0.3
          </button>
        </div>
        <div>
          <button type="button" onClick={() => handleReso(0.5)}>
            0.5
          </button>
        </div>
        <div>
          <button type="button" onClick={() => handleReso(0.7)}>
            0.8
          </button>
        </div>
        <div>
          <button type="button" onClick={() => handleReso(1.0)}>
            1.0
          </button>
        </div>
        <div>
          <button type="button" onClick={() => handleReso(2.0)}>
            2.0
          </button>
        </div>
        <div>
          <button type="button" onClick={() => handleReso(4.0)}>
            4.0
          </button>
        </div>
      </div>
    </div>
  );
};
