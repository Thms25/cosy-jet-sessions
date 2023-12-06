const Loading = () => {
  return (
    <div className="h-screen p-24 grid grid-cols-3 gap-3">
      {Array(12).map((box, index) => (
        <div
          className="bg-cjsBrown text-cjsWhite p-8 animate-pulse text-center border-2 border-cjsBrown"
          key={index}
        >
          <h1 className="text-xl">Loading...</h1>
          <h3 className="text-md">Please wait just a sec...</h3>
        </div>
      ))}
    </div>
  );
};

export default Loading;
