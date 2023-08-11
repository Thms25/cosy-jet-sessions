"use client";

import YoutubeVideo from "../../../components/YoutubeVideo";
import { useEffect, useState } from "react";

async function getArtist(id) {
  const res = await fetch(`../api/getArtist?artistId=${id}`);
  return res.json();
}

export default function Page({ params }) {
  const [artist, setArtist] = useState([]);

  useEffect(() => {
    async function fetchArtist() {
      const result = await getArtist(params.artistId);
      setArtist(result);
    }
    fetchArtist();
  }, [params.artistId]);

  return (
    <div>
      {artist.videos ? (
        <div>
          <div>
            <h1>{artist.name}</h1>
          </div>
          {artist.videos.map((video) => (
            <div key={video.id}>
              <h2>{video.title}</h2>
              <YoutubeVideo videoId={video.videoId} iframeClassName="" />
            </div>
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
