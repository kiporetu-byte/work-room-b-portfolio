# 最低限の FastAPI サーバー確認用ファイル
from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def root():
    return {"message": "FastAPI is running"}