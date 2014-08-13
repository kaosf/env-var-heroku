# Heroku 上での環境変数実験

Rails で環境変数を参照する．Heroku 上にあっても

```Ruby
ENV['VAR']
```

でいいのかな？ということの確認の意味が強いです．

[実験のために実際に Heroku 上に deploy したもの](http://kaosf-env-var.herokuapp.com)

[設定ファイル内のパスワード等を環境変数で隠すための How to 色々 #Rails #passenger #nginx #heroku - Qiita](http://qiita.com/items/a19f65628bdc213fc8f5)

## 実行したコマンド

```Shell
heroku config:set MY_VAR=abcd
heroku config:set MY_VAR2=efgh
```

## License

[![Public Domain](http://i.creativecommons.org/p/mark/1.0/88x31.png)](http://creativecommons.org/publicdomain/mark/1.0/ "license")

This work is free of known copyright restrictions.
