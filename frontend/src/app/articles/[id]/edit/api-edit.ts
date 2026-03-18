const BASE_URL = "http://localhost:8000";

export async function updatePost(
  id: number,
  url: string,
  memo: string,
  token: string,
) {
  const res = await fetch(`${BASE_URL}/posts/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      url,
      memo,
    }),
  });

  if (!res.ok) {
    throw new Error("更新に失敗しました");
  }

  return res.json();
}
