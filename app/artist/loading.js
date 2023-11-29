const Loading = () => {
  return (
    <div className="animate-pulse grid place-items-center bg-cjsBrown h-1/2 w-1/2 m-auto p-24 text-cjsWhite rounded-sm">
      <h1 className="">... Loading ...</h1>
      <h2>Fetching Artist's data</h2>
      <p>Please wait just a few seconds</p>
      <p>:)</p>
    </div>
  );
};

export default Loading;
