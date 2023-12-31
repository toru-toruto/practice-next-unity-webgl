import { useDpr } from "@/hooks/useDpr";
import { Unity, useUnityContext } from "react-unity-webgl";
import { CanvasLoading } from "../atoms/CanvasLoading";

export const UnityCanvas: React.FC = () => {
  const { unityProvider, isLoaded, loadingProgression, requestFullscreen } =
    useUnityContext({
      loaderUrl: "/unity-build/simple-cube/Build/build-simple-cube.loader.js",
      dataUrl: "/unity-build/simple-cube/Build/build-simple-cube.data",
      frameworkUrl:
        "/unity-build/simple-cube/Build/build-simple-cube.framework.js",
      codeUrl: "/unity-build/simple-cube/Build/build-simple-cube.wasm",
    });
  const { devicePixelRatio } = useDpr();

  return (
    <div className="relative w-full h-full">
      <CanvasLoading isLoaded={isLoaded} progress={loadingProgression} />
      <Unity
        unityProvider={unityProvider}
        className="w-full h-full"
        devicePixelRatio={devicePixelRatio}
      />
      <button
        className="absolute top-0 left-0"
        type="button"
        onClick={() => {
          requestFullscreen(true);
        }}
      >
        フルスクリーン
      </button>
    </div>
  );
};
