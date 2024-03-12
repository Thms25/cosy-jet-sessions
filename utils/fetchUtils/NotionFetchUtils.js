const url = "http://localhost:3000/";

export async function getNotionDiscover() {
  try {
    const res = await fetch(`${url}api/notion/discover`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
}
