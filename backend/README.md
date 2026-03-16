# Backend (FastAPI + MySQL) 環境構築・起動手順

このバックエンドは **FastAPI + SQLAlchemy + MySQL** を **Docker** で構築しています。

## 🔹 必要条件

- Docker / Docker Compose がインストールされていること
- macOS / Windows / Linux いずれでも可

---

## 1️⃣ Docker コンテナ起動

ターミナルで backend ディレクトリに移動：

```bash
cd /Users/rie/MsEngineer/BC202602/work-room-b/backend
```

初回ビルド & 起動：

```
docker-compose up --build
```
