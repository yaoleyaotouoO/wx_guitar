import Taro from "@tarojs/taro";
import { HttpStatusType } from "../enums";
import Config from "./config";

export class Api {
  baseOptions(params, method = 'GET') {
    let { url, data } = params;

    let contentType = 'application/x-www-form-urlencoded';
    contentType = params.contentType || contentType;
    const option = {
      isShowLoading: false,
      loadingText: '正在加载',
      url: `${Config.LOCAL.HTTP_URL}/guitar/${url}`,
      data: data,
      method: method,
      header: { 'content-type': contentType, 'token': '' },
      success(res) {
        if (res.statusCode === HttpStatusType.NOT_FOUND) {
          throw new Error('请求资源不存在');
        } else if (res.statusCode === HttpStatusType.BAD_GATEWAY) {
          throw new Error('服务端出现了问题');
        } else if (res.statusCode === HttpStatusType.FORBIDDEN) {
          throw new Error('没有权限访问');
        } else if (res.statusCode === HttpStatusType.SUCCESS) {
          return res.data;
        }
      },
      error(e) {
        throw new Error(e);
      }
    } as Taro.request.Param<any>;

    return Taro.request(option);
  }

  get(url: string, data?: any) {
    let option = { url, data: data || '' };

    return this.baseOptions(option);
  }

  post(url: string, data?: any, contentType?: string) {
    let params = { url, data, contentType };

    return this.baseOptions(params, 'POST');
  }
}

export const Q = <T>(axiosPromise: Promise<Taro.request.Promised<any>>, clearLoading?: () => void): Promise<T> => {
  return new Promise<T>((resolve, reject) => {
    axiosPromise
      .then(response => resolve(response.data))
      .catch(error => {
        console.warn(`Q function error: `, error);
        if (clearLoading) {
          clearLoading();
        }
        reject(`${error}`);
      });
  });
};

export default new Api();