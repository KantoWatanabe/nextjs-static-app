import useSWR from 'swr';
import type { SWRConfiguration } from 'swr'
import {TestJson} from '@/interfaces';
import { basePath } from '@/lib/util';

const BASE_URL = basePath();

// https://swr.vercel.app/ja/docs/api#options
let baseConfig: SWRConfiguration = {
  errorRetryCount: 3,
  revalidateOnFocus: false,
  revalidateOnReconnect: false,
  //revalidateIfStale: false,
};

const fetcher = async <T>(url: string): Promise<T> => {
  return fetch(url)
    .then((res) => res.json())
};

export function useTest(config: SWRConfiguration = baseConfig) {
  const swr = useSWR<TestJson>(`${BASE_URL}/json/test.json`, fetcher, config);
  return {
    ...swr,
    isLoading: !swr.error && !swr.data,
  }
}
