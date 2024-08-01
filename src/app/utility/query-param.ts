import { QueryParams } from '../models/common.interface';

export const queryParamsToUrl = (params?: QueryParams) => {
  if (!params) return '';
  const keys = Object.keys(params);
  const stringParam = keys
    .map((key, i) => {
      const symbol = i === 0 ? '?' : '&';
      return `${symbol}${key}=${params[key]}`;
    })
    .join('');
  return stringParam;
};
