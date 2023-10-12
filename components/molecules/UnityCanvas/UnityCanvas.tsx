import { useDpr } from "@/hooks/useDpr";
import { Unity, useUnityContext } from "react-unity-webgl";
import { CanvasLoading } from "../../atoms/CanvasLoading";
// import { resourceData } from "./resourceData";

export const UnityCanvas: React.FC = () => {
  // const { folderName, fileName } = resourceData.testCubeRigidbody100_After;

  const { unityProvider, isLoaded, loadingProgression, requestFullscreen } =
    useUnityContext({
      loaderUrl:
        "https://storage.googleapis.com/toruto-unity-webgl/tpc-sample/tpc-sample.loader.js",
      dataUrl:
        "https://storage.googleapis.com/toruto-unity-webgl/tpc-sample/tpc-sample.data.gz",
      frameworkUrl:
        "https://storage.googleapis.com/toruto-unity-webgl/tpc-sample/tpc-sample.framework.js.gz",
      codeUrl:
        "https://storage.googleapis.com/toruto-unity-webgl/tpc-sample/tpc-sample.wasm.gz",
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
