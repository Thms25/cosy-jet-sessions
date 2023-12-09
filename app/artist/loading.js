import Image from "next/image";

const Loading = () => {
  return (
    <div className="grid items-center p-48">
      <div className="animate-pulse grid place-items-center  w-1/2 m-auto rounded-lg">
        <Image
          priority
          className="m-auto animate-pulse opacity-50 w-full h-full"
          src="/images/cjs-banner.png"
          alt="cjs-banner"
          objectPosition="contain"
          width={1710}
          height={751}
          objectFit="contain"
        />
      </div>
    </div>
  );
};

export default Loading;
