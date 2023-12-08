const URL = process.env.URL;

export async function getRecentVideos() {
  try {
    const res = await fetch("/api/video", {
      method: "GET",
    });
    const data = await res.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
}
