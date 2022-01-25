# @idea monorepo

> This monorepo contains web and mobile applications, developed with React and React Native, respectively.

Here are the packages that are applications into this monorepo:

###### `@idea/web-app` - Web application

## Getting start

#### Clone and Install

After the repository was cloned, run:

```sh
$ yarn && yarn lerna bootstrap

# if you are using a macOS, run this command to install all pods dependencies
$ yarn lerna run install:ios --stream
```

#### @idea/web-app

```sh
# watch
$ cd packages/web
$ yarn start
# accept dots-env arguments
# localhost:3000

# build
$ cd packages/web
$ yarn build
# accept dots-env arguments
# artifacts path: packages/web/build/

# docker
$ cd packages/web
$ yarn serve:docker
# or
$ cd packages/web
$ docker-compose up -d --build
# localhost:3010

```

---

### Environments

All applications of this monorepo use the [dots-env](https://www.npmjs.com/package/dots-env) to manage .env files.
