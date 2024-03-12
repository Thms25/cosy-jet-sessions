import { subscribe, likeVideo } from "@/utils/apiUtils/YoutubeActions";

export async function SubscribeBtn({ token }) {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const handleClick = async () => {
    const res = await subscribe(token);
    console.log(res);
    if (res.ok) {
      setIsSubscribed(true);
    }
  };
  return (
    <button
      className="px-4 py-2 bg-cjsBrown text-cjsWhite text-md rounded shadow-sm"
      onClick={() => handleClick()}
    >
      {isSubscribed ? "Subscribed" : "Subscribe"}
    </button>
  );
}

export async function LikeBtn({ token, videoId }) {
  const [isLiked, setIsLiked] = useState(false);
  const handleClick = async () => {
    const res = await likeVideo(videoId, token);
    console.log(res);
    if (res.ok) {
      setIsLiked(true);
    }
  };

  return (
    <button
      className="px-4 py-2 bg-cjsBrown text-cjsWhite text-md rounded shadow-sm"
      onClick={() => {
        handleClick();
      }}
    >
      {isLiked ? "Liked" : "Like"}
    </button>
  );
}
