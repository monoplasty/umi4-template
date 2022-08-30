const urlMaps = {
  prod: 'http://192.168.4.25:8000/api',
  test: 'http://192.168.4.77:8500/api',
  dev: 'http://192.168.4.241:8501/api',
};

const { REACT_APP_ENV } = process.env;

export const prefix = urlMaps[(REACT_APP_ENV as EnvType) || 'dev'];
