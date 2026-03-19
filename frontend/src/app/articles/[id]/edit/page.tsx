"use client";

import { useParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Button from "@/components/common/Button";
import { getPost, updatePost } from "./api-edit";

export default function EditPage() {
  const params = useParams();
  const id = Number(params.id);

  const router = useRouter();

  const [memo, setMemo] = useState("");
  const [url, setUrl] = useState("");

  // ユーザー認証確認
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) return;

    getPost(id, token).then((data) => {
      setUrl(data.url);
      setMemo(data.memo);
    });
  }, [id]);

  // 更新処理
  const handleUpdate = async () => {
    const token = localStorage.getItem("token");

    if (!token) return;

    try {
      await updatePost(id, url, memo, token);
      router.push("/mypage");
    } catch (error) {
      console.error(error);
      alert("更新に失敗しました");
    }
  };

  return (
    <main className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">記事編集</h1>

      <div className="space-y-4">
        <input
          type="text"
          className="w-full border p-2 rounded"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />

        <textarea
          className="w-full border p-2 rounded"
          value={memo}
          onChange={(e) => setMemo(e.target.value)}
        />

        <Button onClick={handleUpdate}>更新する</Button>
      </div>
    </main>
  );
}
