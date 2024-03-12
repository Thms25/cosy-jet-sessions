const URL = process.env.URL;

export async function findUser(mail) {
  try {
    const res = await fetch(`${URL}/api/users/${mail}`);
    const data = await res.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
}
