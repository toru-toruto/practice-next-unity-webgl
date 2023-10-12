type BuildType =
  | "testCubeRigidbody1000"
  | "testCubeRigidbody1000_After"
  | "testCubeStatic1000"
  | "testCubeStatic1000_OtherPlace"
  | "simpleCube";

type ResourceData = {
  [build in BuildType]: {
    folderName: string;
    fileName: string;
  };
};

export const resourceData: ResourceData = {
  testCubeRigidbody1000: {
    folderName: "build-cube-rigidbody-1000",
    fileName: "build-cube-rigidbody-1000",
  },
  testCubeRigidbody1000_After: {
    folderName: "build-cube-rigidbody-1000-after",
    fileName: "build-cube-rigidbody-1000-after",
  },
  testCubeStatic1000: {
    folderName: "test-cube-static-1000",
    fileName: "build-cube-static-1000",
  },
  testCubeStatic1000_OtherPlace: {
    folderName: "build-cube-static-1000-otherplace",
    fileName: "build-cube-static-1000-otherplace",
  },
  simpleCube: {
    folderName: "simple-cube",
    fileName: "build-simple-cube",
  },
};
