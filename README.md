# News-Translator

## 專案發想

### 建立新聞閱讀網站，可依照自身英文程度重構該篇新聞，並給予中文翻譯。

#### 首頁，全覽各新聞並可依照新聞主題進行篩選。

<img src="https://github.com/Ben950128/News-Translator/blob/main/images/homepage.png?raw=true" alt="news" width="500px">

#### 可察看詳細新聞資訊及中文翻譯。

<img src="https://github.com/Ben950128/News-Translator/blob/main/images/news.png?raw=true" alt="news" width="500px">

#### 透過 Translator 可依使用者英文程度重構該篇新聞。

<img src="https://github.com/Ben950128/News-Translator/blob/main/images/translator.png?raw=true" alt="news" width="500px">

## 專案架設

### 環境建立

- AWS EC2 安裝 Docker。
- Docker Image 存取於 AWS ECR。
- 資料庫為 AWS RDS 的 PostgreSQL。
- 新聞照片存取於 AWS S3。
- Nginx 作為 Reverse Proxy。

### 資料來源

- 每日爬取 BBC News，並透過 OpenAI 進行翻譯，詳情請看[這裡](https://github.com/Ben950128/ChatGPT-Translate-BBC-News.git)，並將回傳資料存取於 RDS。

### 後端 API

- 以 Python Flask 建立後端 API，包含新聞資料串接及登入系統功能。
- .env 設定 :  
  SQLALCHEMY_DATABASE_URI="資料庫 URI"  
  JWT_SECRET_KEY="自定義"
- 單一筆新聞詳細資料串接 API : api/news/<news_id>
- 依主題串接新聞資料 API : /news/type/<news_type>
- 登入系統 API : /api/user

### 前端頁面

- 以 React 作為前端框架。
- 首頁為各新聞簡介。
- 點擊該新聞可察看新聞詳細內容及翻譯。
- 前端登入系統開發中。

## 部屬方式(Docker)

### Portainer 管理 Container

![image](https://github.com/Ben950128/News-Translator/blob/main/images/portainer.png?raw=true)

### 後端 API

- 本地先建立 image

```console
docker build -t news_translator_api .
```

- 為此 image 加上 tag

```console
docker tag news_translator_api:latest 693083281322.dkr.ecr.ap-northeast-1.amazonaws.com/news_translator_api:latest
```

- Push image 至 AWS ECR

```console
docker push 693083281322.dkr.ecr.ap-northeast-1.amazonaws.com/news_translator_api:latest
```

- 在 AWS EC2 上啟動 API service

```console
docker compose up -d
```

### 前端頁面

- 本地先建立 image

```console
docker build -t news_translator_frontend .
```

- 為此 image 加上 tag

```console
docker tag news_translator_frontend:latest 693083281322.dkr.ecr.ap-northeast-1.amazonaws.com/news_translator_frontend:latest
```

- Push image 至 AWS ECR

```console
docker push 693083281322.dkr.ecr.ap-northeast-1.amazonaws.com/news_translator_frontend:latest
```

- 在 AWS EC2 上啟動 FrontEnd service

```console
docker compose up -d
```
