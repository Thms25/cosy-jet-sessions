// Utils
import { getArtist } from "@/utils/fetchUtils/ArtistFetchUtils";

// Components
import VideoAccordeon from "@/components/Accordeons/VideoAccordeon";

export default async function Artist({ params }) {
  const artist = await getArtist(params.artistId);

  return (
    <div className="p-24 h-screen">
      {artist?.videos && (
        <div>
          <div>
            <h1 className="text-6xl m-8 tracking-wider">{artist.name}</h1>
          </div>
          <div className="">
            <VideoAccordeon videos={artist.videos} />
          </div>
        </div>
      )}
    </div>
  );
}
