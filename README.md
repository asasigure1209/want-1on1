# want-1on1

## 開発セットアップ
### コンテナのビルド

```
$ docker-compose build
```

### 起動

```
$ docker-compose up -d
```

### mockのWebApi起動

↑起動中に別ターミナルで以下のコマンド実行
```
$ docker-compose exec frontend ash
$ npm run json-server
```