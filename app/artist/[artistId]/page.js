import styles from "/styles/artistPage.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShare } from "@fortawesome/free-solid-svg-icons";

// Utils
import { getArtist } from "@/utils/fetchUtils";
import ArtistAccordeon from "@/components/Accordeons/ArtistAccordeon";
import VideoAccordeon from "@/components/Accordeons/VideoAccordeon";

export default async function Page({ params }) {
  const artist = await getArtist(params.artistId);
  console.log(artist.videos);

  return (
    <div className="p-24">
      {artist?.videos && (
        <div>
          <div>
            <h1 className="text-6xl m-8 tracking-wider">{artist.name}</h1>
          </div>
          <div className="">
            <VideoAccordeon videos={artist.videos} />
            {/* <ArtistAccordeon videos={artist.videos} /> */}
          </div>
        </div>
      )}
    </div>
  );
}
