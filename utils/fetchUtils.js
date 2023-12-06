export async function getRecentVideos() {
  try {
    const res = await fetch("api/getRecentVideos");
    const data = await res.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
}

export async function getArtist(id) {
  try {
    const res = await fetch(`${process.env.URL}/api/getArtist?artistId=${id}`);
    const data = await res.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
}
