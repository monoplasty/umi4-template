import { defineConfig } from '@umijs/max';

import proxy from './proxy';
import routes from './routes';

const { REACT_APP_ENV } = process.env;

export default defineConfig({
  antd: {
    // babel-plugin-import
    import: true,
  },
  model: {},
  initialState: {},
  layout: {},
  locale: {
    antd: true,
    default: 'zh-CN',
  },
  define: {
    'process.env': {
      REACT_APP_ENV: REACT_APP_ENV || false,
    },
  },
  routes,
  proxy,
  npmClient: 'pnpm',
});
