import { useDpr } from "@/hooks/useDpr";
import { Unity, useUnityContext } from "react-unity-webgl";
import { CanvasLoading } from "../../atoms/CanvasLoading";
import { resourceData } from "./resourceData";

export const UnityCanvas: React.FC = () => {
  const { folderName, fileName } = resourceData.testCubeRigidbody1000;

  const { unityProvider, isLoaded, loadingProgression, requestFullscreen } =
    useUnityContext({
      loaderUrl: `/unity-build/${folderName}/Build/${fileName}.loader.js`,
      dataUrl: `/unity-build/${folderName}/Build/${fileName}.data`,
      frameworkUrl: `/unity-build/${folderName}/Build/${fileName}.framework.js`,
      codeUrl: `/unity-build/${folderName}/Build/${fileName}.wasm`,
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
