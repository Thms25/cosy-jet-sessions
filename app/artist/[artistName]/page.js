"use client";

import YoutubeVideo from "../../../components/YoutubeVideo";
import { useEffect, useState } from "react";

async function getArtistVideos(id) {
  const res = await fetch(`../api/getArtistVideos?artistId=${id}`);
  // console.log(res);
  return res.json();
}
async function getArtist(id) {
  const res = await fetch(`../api/getArtist?artistId=${id}`);
  return res.json();
}
export default function Page({ params }) {
  const [artistVideos, setArtistVideos] = useState([]);
  const [artist, setArtist] = useState([]);

  useEffect(() => {
    async function fetchArtistVideos() {
      const vids = await getArtistVideos(params.artistId);
      setArtistVideos(vids);
    }
    async function fetchArtist() {
      const result = await getArtist(params.artistId);
      setArtist(result);
    }
    fetchArtistVideos();
    fetchArtist();
    console.log(artist, artistVideos);
  }, []);

  return (
    <div>
      <h1>{params.artistName}</h1>
      {artistVideos.map((video) => {
        return (
          <div key={video["id"]}>
            <YoutubeVideo
              videoId={video["videoId"]}
              iframeClassName="homeVid"
            />
          </div>
        );
      })}
    </div>
  );
}
