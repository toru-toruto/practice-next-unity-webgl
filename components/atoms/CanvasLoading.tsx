type Props = {
  isLoaded: boolean;
  progress: number;
};

export const CanvasLoading: React.FC<Props> = ({ isLoaded, progress }) => {
  // We'll round the loading progression to a whole number to represent the
  // percentage of the Unity Application that has loaded.
  const loadingPercentage = Math.round(progress * 100);

  return (
    <>
      {isLoaded === false && (
        // We'll conditionally render the loading overlay if the Unity
        // Application is not loaded.
        <div className="absolute top-0 left-0 w-full h-full bg-black flex justify-center grid content-center">
          <p>Loading... ({loadingPercentage}%)</p>
        </div>
      )}
    </>
  );
};
