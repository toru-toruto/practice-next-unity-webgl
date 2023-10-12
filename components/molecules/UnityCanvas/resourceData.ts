type BuildType =
  | "testCubeRigidbody1000"
  | "testCubeRigidbody1000_After"
  | "testCubeRigidbody1000_Other"
  | "testCubeStatic1000"
  | "testCubeStatic1000_OtherPlace"
  | "testCubeRigidbody100_After"
  | "testSampleThirdPerson"
  | "testSampleThirdPerson_Joystick"
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
  testCubeRigidbody1000_Other: {
    folderName: "build-cube-rigidbody-1000-other",
    fileName: "build-cube-rigidbody-1000-other",
  },
  testCubeStatic1000: {
    folderName: "test-cube-static-1000",
    fileName: "build-cube-static-1000",
  },
  testCubeStatic1000_OtherPlace: {
    folderName: "build-cube-static-1000-otherplace",
    fileName: "build-cube-static-1000-otherplace",
  },
  testCubeRigidbody100_After: {
    folderName: "build-cube-rigidbody-100-after",
    fileName: "build-cube-rigidbody-100-after",
  },
  testSampleThirdPerson: {
    folderName: "build-sample-third-person",
    fileName: "build-sample-third-person",
  },
  testSampleThirdPerson_Joystick: {
    folderName: "build-sample-third-person-joystick",
    fileName: "build-sample-third-person-joystick",
  },
  simpleCube: {
    folderName: "simple-cube",
    fileName: "build-simple-cube",
  },
};
