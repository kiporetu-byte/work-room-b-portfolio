import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full border-b p-4 bg-white">
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">
          <Link href="/">お気に入り記事共有アプリ</Link>
        </h1>

        <nav className="flex gap-4">
          <Link href="/login">ログイン</Link>
        </nav>
      </div>
    </header>
  );
}