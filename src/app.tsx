import { Settings as LayoutSettings } from '@ant-design/pro-layout';
import type {
  AxiosResponse,
  RequestConfig,
  RunTimeLayoutConfig,
} from '@umijs/max';
import { message } from 'antd';

import defaultSettings from '../config/defaultSettings';
import RightComp from './components/RightComp';
import { prefix } from './config';

export const layout: RunTimeLayoutConfig = ({ initialState }) => {
  return {
    rightContentRender: () => <RightComp />,
    disableContentMargin: false,
    ...initialState?.settings,
  };
};

type InitStateType = {
  settings?: Partial<LayoutSettings>;
};
export async function getInitialState(): Promise<InitStateType> {
  return {
    settings: defaultSettings,
  };
}

export const request: RequestConfig = {
  requestInterceptors: [
    (url, options) => ({ url: `${prefix}${url}`, options }),
  ],
  responseInterceptors: [
    // 统一处理错误
    (response: AxiosResponse<any>) => {
      // console.log('app-31-->', response);
      if (response.data && response.data.code > 0) {
        message.error(response.data.msg);
      }
      return response;
    },
  ],
};
