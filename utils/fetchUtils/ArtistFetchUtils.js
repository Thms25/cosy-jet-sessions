const URL = process.env.URL;

export async function getArtists() {
  try {
    const res = await fetch(`${URL}/api/artist`, {
      method: "GET",
    });
    const data = res.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
}
export async function getArtist(id) {
  try {
    const res = await fetch(`${URL}/api/artist/${id}`, {
      method: "GET",
    });
    const data = await res.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
}
