// lib/api.ts

const BASE_URL = "http://localhost:8000";

export async function getMyArticles(token: string) {
  const res = await fetch(`${BASE_URL}/articles/me`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) throw new Error("取得失敗");

  return res.json();
}
