const LoadingDots = () => {
  return (<>

    <div className="flex justify-center items-center space-x-1">
      <div className="w-3 h-3 bg-green-500 rounded-full animate-bounce-custom "></div>
      <div className="w-3 h-3 bg-green-600 rounded-full animate-bounce-custom delay-200"></div>
      <div className="w-3 h-3 bg-green-500 rounded-full animate-bounce-custom delay-400"></div>
    </div>

  </>
  );
};

export default LoadingDots
