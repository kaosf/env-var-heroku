# env-var-heroku

This repository has been archived.

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
