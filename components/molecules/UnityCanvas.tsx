import { useDpr } from "@/hooks/useDpr";
import { Unity, useUnityContext } from "react-unity-webgl";
import { CanvasLoading } from "../atoms/CanvasLoading";
import { useForm } from "react-hook-form";
import { useState } from "react";

export const UnityCanvas: React.FC = () => {
  const { unityProvider, isLoaded, loadingProgression, requestFullscreen } =
    useUnityContext({
      loaderUrl: "/unity-build/Build/build-webgl.loader.js",
      dataUrl: "/unity-build/Build/build-webgl.data",
      frameworkUrl: "/unity-build/Build/build-webgl.framework.js",
      codeUrl: "/unity-build/Build/build-webgl.wasm",
      // loaderUrl: "/unity-build/simple-cube/Build/build-simple-cube.loader.js",
      // dataUrl: "/unity-build/simple-cube/Build/build-simple-cube.data",
      // frameworkUrl:
      //   "/unity-build/simple-cube/Build/build-simple-cube.framework.js",
      // codeUrl: "/unity-build/simple-cube/Build/build-simple-cube.wasm",
    });
  // const { devicePixelRatio } = useDpr();
  const [dpr, setDpr] = useState<number>(1.0);

  return (
    <div className="relative w-full h-full">
      <CanvasLoading isLoaded={isLoaded} progress={loadingProgression} />
      <Unity
        unityProvider={unityProvider}
        className="w-full h-full"
        // devicePixelRatio={devicePixelRatio}
        devicePixelRatio={0.2}
      />
      <div className="absolute top-0 left-0 z-100">
        <button
          className=""
          type="button"
          onClick={() => {
            requestFullscreen(true);
          }}
        >
          フルスクリーン
        </button>
        <div>
          <div>
            <input
              type="radio"
              name="dpr"
              id="0"
              value={0.2}
              onChange={(v) => setDpr(parseFloat(v.currentTarget.value))}
            />
            <label>0.2</label>
          </div>
          <div>
            <input
              type="radio"
              name="dpr"
              id="1"
              value={0.4}
              onChange={(v) => setDpr(parseFloat(v.currentTarget.value))}
            />
            <label>0.4</label>
          </div>
          <div>
            <input
              type="radio"
              name="dpr"
              id="2"
              value={0.6}
              onChange={(v) => setDpr(parseFloat(v.currentTarget.value))}
            />
            <label>0.6</label>
          </div>
          <div>
            <input
              type="radio"
              name="dpr"
              id="3"
              value={0.8}
              onChange={(v) => setDpr(parseFloat(v.currentTarget.value))}
            />
            <label>0.8</label>
          </div>
          <div>
            <input
              type="radio"
              name="dpr"
              id="3"
              value={1.0}
              onChange={(v) => setDpr(parseFloat(v.currentTarget.value))}
              checked
            />
            <label>1.0</label>
          </div>
        </div>
      </div>
    </div>
  );
};
