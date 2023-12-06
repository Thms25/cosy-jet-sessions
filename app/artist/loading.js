const Loading = () => {
  return (
    <div className="grid items-center p-48">
      <div className="animate-pulse grid place-items-center bg-cjsBrown bg-opacity-50 w-1/2 m-auto p-24 text-cjsWhite rounded-lg">
        <h1 className="p-6">... Loading ...</h1>
        <h2 className="p-2">Fetching Artist's data</h2>
        <p>Please wait just a few seconds</p>
        <p>:)</p>
      </div>
    </div>
  );
};

export default Loading;
