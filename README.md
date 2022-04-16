# Heroku 上での環境変数実験

Rails で環境変数を参照する．Heroku 上にあっても

```
ENV['VAR']
```

でいいのかな？ということの確認の意味が強いです．

[実験のために実際に Heroku 上に deploy したもの](https://kaosf-env-var.herokuapp.com)

[設定ファイル内のパスワード等を環境変数で隠すための How to 色々 #Rails #passenger #nginx #heroku - Qiita](https://qiita.com/items/a19f65628bdc213fc8f5)

## 実行したコマンド

```
heroku config:set MY_VAR=abcd
heroku config:set MY_VAR2=efgh
```

## Deploying to Heroku (your account)

[![Deploy](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

### References about Heroku Button

* [Heroku | Introducing Heroku Button](https://blog.heroku.com/archives/2014/8/7/heroku-button)
* [gongo/pizza-figlet](https://github.com/gongo/pizza-figlet)

## Run on local

```
bundle
yarn
bin/rails db:migrate
```

Keep running the following 2 commands:

```
MY_VAR=abcd MY_VAR2=efgh bin/rails s
```

```
bin/webpack-dev-server
```

Access to [http://localhost:3000/](http://localhost:3000/).

## License

[![Public Domain](https://licensebuttons.net/p/mark/1.0/88x31.png)](https://creativecommons.org/publicdomain/mark/1.0/ "license")

This work is free of known copyright restrictions.
