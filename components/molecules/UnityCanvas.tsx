import { useDpr } from "@/hooks/useDpr";
import { Unity, useUnityContext } from "react-unity-webgl";
import { CanvasLoading } from "../atoms/CanvasLoading";

export const UnityCanvas: React.FC = () => {
  const { unityProvider, isLoaded, loadingProgression, requestFullscreen } =
    useUnityContext({
      loaderUrl: "/unity-build/Build/build-webgl.loader.js",
      dataUrl: "/unity-build/Build/build-webgl.data.gz",
      frameworkUrl: "/unity-build/Build/build-webgl.framework.js.gz",
      codeUrl: "/unity-build/Build/build-webgl.wasm.gz",
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
