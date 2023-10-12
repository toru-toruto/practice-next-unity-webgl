type BuildType = "testCubeRigidbody1000" | "testCubeStatic1000" | "simpleCube";

type ResourceData = {
  [build in BuildType]: {
    folderName: string;
    fileName: string;
  };
};

export const resourceData: ResourceData = {
  testCubeRigidbody1000: {
    folderName: "test-cube-rigidbody-1000",
    fileName: "build-webgl",
  },
  testCubeStatic1000: {
    folderName: "test-cube-static-1000",
    fileName: "build-cube-static-1000",
  },
  simpleCube: {
    folderName: "simple-cube",
    fileName: "build-simple-cube",
  },
};
