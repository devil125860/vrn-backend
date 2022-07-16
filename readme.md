overview to install

>git clone https://github.com/prototypedev/backend-api.git

go to project root folder

>cd backend-api

install dependencies

>npm install

configure ssl
>npx greenlock init --config-dir greenlock.d --maintainer-email jon@example.com
>npx greenlock add --subject example.com --altnames example.com

refrence link for ssl configuration
[GitHub](https://git.rootprojects.org/root/greenlock-express.js.git)

configure .env file which contain following filelds

>nano .env

* DBURL=""
* JWT=xxxx
* LANDING=https://xyz.com
* LANDING_DOMAIN=xyz.com
* DOWNLOAD=https://xyz.com/apk/v1/v.apk
* APP_VER=1.0.0
* PRIVACY=https://xyz.com/privacy.html
* SERVER_DOMAIN=abc.com