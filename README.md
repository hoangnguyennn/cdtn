# THIS PROJECT IS DEPRECATED

This project is deprecated. It has been split into two small projects to facilitate CI implementation.

Two projects include:

- Server: [https://github.com/hoangnguyennn/mushroom.shop-server](https://github.com/hoangnguyennn/mushroom.shop-server)
- Client: [https://github.com/hoangnguyennn/mushroom.shop-client](https://github.com/hoangnguyennn/mushroom.shop-client)

# Mushrom shop

An online shop used to sell mushrooms

## Requirements

- Install [node](https://github.com/nodejs/node)
- Install [yarn](https://github.com/yarnpkg/yarn) (for CLI - optional, can use `npm` instead)
- Install [lerna](https://github.com/lerna/lerna)

## How to use

### Install all dependencies

```bash
yarn && lerna bootstrap
```

### Development

Start server

```bash
# Server run on port 5000
yarn be-dev
```

Start shop

```bash
# Shop run on port 8000
yarn fe-dev
```

Start admin

```bash
# Admin run on port 3000
yarn dashboard-start
```

Open [http://localhost:8000/](http://localhost:8000/) to view shop.

### Build production

```
yarn build
```
