import { request } from '@umijs/max';

export async function getParamsOpts() {
  return request<API.ResultData<string>>('/sample/getParam', {
    method: 'GET',
  });
}
