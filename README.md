# React frond end template

This is skeleton for react front end project. It is based on [Ant Design Pro](https://pro.ant.design) and [UmiJS](https://umijs.org/).

## Requirements

- Node.js 18+
- pnpm 6.0+ (recommended for package management)
- Ant design pro 5.0+
- UmiJS 4.0+

## Getting Started

### Install `node_modules`:

```bash
pnpm install
```

### Start for development

When you in development mode, normally Casdoor is default to run under http protocol. Please remember to change your `severUrl`config under `config/casdoor.ts`file to correct one

```typescript
const sdkConfig = {
  serverUrl: 'https://sso.dev.com:8000',
  ...
};
```

Start with mock API server for development without backend

```bash
pnpm start
```

Start development with backend server

1. change the /config/proxy.ts to point to the backend server

```
   dev: {
     '/api/': {
       target: 'https://preview.pro.ant.design',
       changeOrigin: true,
     },
  },
```

2. start the development server

```bash
pnpm start:dev
```

### Build project

```bash
pnpm build
```

### Check code style

```bash
pnpm run lint
```

You can also use script to auto fix some lint error:

```bash
pnpm run lint:fix
```

### Test code

```bash
pnpm test
```

### build docker image

```bash
pnpm run build:docker
```
