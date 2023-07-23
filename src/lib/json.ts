import useSWR from 'swr';
import {TestJson} from '@/interfaces';
import { basePath } from '@/lib/util';

const BASE_URL = basePath();

const fetcher = async <T>(url: string): Promise<T> => {
  return fetch(url)
    .then((res) => res.json())
};

export function useTest() {
  const swr = useSWR<TestJson>(`${BASE_URL}/json/test.json`, fetcher);
  return {
    ...swr,
    isLoading: !swr.error && !swr.data,
  }
}
