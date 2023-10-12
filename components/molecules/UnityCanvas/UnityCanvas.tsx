import { useDpr } from "@/hooks/useDpr";
import { Unity, useUnityContext } from "react-unity-webgl";
import { CanvasLoading } from "../../atoms/CanvasLoading";
// import { resourceData } from "./resourceData";

export const UnityCanvas: React.FC = () => {
  // const { folderName, fileName } = resourceData.testCubeRigidbody100_After;

  const { unityProvider, isLoaded, loadingProgression, requestFullscreen } =
    useUnityContext({
      loaderUrl:
        "https://storage.googleapis.com/toruto-unity-webgl/cube-100/cube-100.loader.js",
      dataUrl:
        "https://storage.googleapis.com/toruto-unity-webgl/cube-100/cube-100.data.gz",
      frameworkUrl:
        "https://storage.googleapis.com/toruto-unity-webgl/cube-100/cube-100.framework.js.gz",
      codeUrl:
        "https://storage.googleapis.com/toruto-unity-webgl/cube-100/cube-100.wasm.gz",
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
