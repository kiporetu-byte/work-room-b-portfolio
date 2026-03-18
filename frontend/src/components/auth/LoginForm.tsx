"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("① submit開始");
    setErrorMessage("");

    if (!email || !password) {
      console.log("② 未入力でreturn");
      setErrorMessage("メールアドレスとパスワードを入力してください。");
      return;
    }

    try {
      console.log("③ fetch前", { email, password });

      const response = await fetch("http://localhost:8000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      console.log("④ response受け取り", response.status, response.ok);

      const data = await response.json();
      console.log("⑤ json受け取り", data);

      if (!response.ok) {
        console.log("⑥ response.ok が false");
        setErrorMessage(data.detail || "メールアドレスとパスワードが違います");
        return;
      }

      console.log("⑦ success分岐に入った");
      localStorage.setItem("token", data.token);
      console.log("⑧ token保存後", localStorage.getItem("token"));

      router.push("/mypage");
      console.log("⑨ push後");
    } catch (error) {
      console.error("⑩ catchに入った", error);
      setErrorMessage("通信エラーが発生しました");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-xl p-6 space-y-4">
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1">
          メールアドレス
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border rounded-lg px-3 py-2"
          placeholder="example@email.com"
        />
      </div>

      <div>
        <label htmlFor="password" className="block text-sm font-medium mb-1">
          パスワード
        </label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border rounded-lg px-3 py-2"
          placeholder="パスワードを入力"
        />
      </div>

      {errorMessage && <p className="text-sm text-red-500">{errorMessage}</p>}

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:opacity-90"
      >
        ログイン
      </button>
    </form>
  );
}