declare type EnvType = 'prod' | 'test' | 'dev' | false;

declare namespace API {
  type BasicObj = {
    name: string;
    value: number;
    children: BasicObj[] | null;
  };

  // 配置接口返回数据
  type ResultData<T> = {
    data: T;
    message: string;
    code: number;
  };

  // 定义基础类型
  type BeenObj = {
    id: number | string;
    name: string;
  };

  type OptType = {
    label: string;
    value: string | number;
  };

  type ListQueryParamsType = {
    page: number;
    page_size: number;
  };
}
