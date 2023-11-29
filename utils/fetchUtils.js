export async function getRecentVideos() {
  try {
    const res = await fetch("api/getRecentVideos");
    const data = await res.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
}
