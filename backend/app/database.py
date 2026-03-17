from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

# 形式: mysql+pymysql://ユーザー名:パスワード@ホスト名:ポート/DB名
SQLALCHEMY_DATABASE_URL = "mysql+pymysql://user:password@db:3306/articles_db"

# MySQLとの接続エンジンを作成
engine = create_engine(SQLALCHEMY_DATABASE_URL)

# データベースとやり取りするための「セッション」の設定
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# あとで「テーブルの形」を定義するために使うベースクラス
Base = declarative_base()

# DB接続を自動で閉じたり開いたりする便利な関数
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()