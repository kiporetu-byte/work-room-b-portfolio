const BASE_URL = "http://localhost:8000";
export async function getPost(id: number, token: string) {
  const res = await fetch(`http://localhost:8000/posts/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  console.log("status:", res.status);

  if (!res.ok) {
    const text = await res.text();
    console.error(text);
    throw new Error("投稿取得失敗");
  }

  return res.json();
}

// 投稿詳細取得
// export async function getPost(id: number, token: string) {
//   const res = await fetch(`${BASE_URL}/post/${id}`, {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });

//   if (!res.ok) {
//     throw new Error("投稿取得失敗");
//   }

//   return res.json();
// }

// 投稿更新
export async function updatePost(
  id: number,
  url: string,
  memo: string,
  token: string,
) {
  const res = await fetch(`${BASE_URL}/post/${id}`, {
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
    throw new Error("更新失敗");
  }

  return res.json();
}
