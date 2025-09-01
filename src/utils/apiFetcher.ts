import type { APIResponse } from '@/models/models';

type ApiFetcher = {
  <Response>(url: string): Promise<APIResponse<Response>>;
  <Payload, Response>(url: string, data: Payload): Promise<APIResponse<Response>>;
};

export const apiFetcher: ApiFetcher = async <Payload, Response>(url: string, data?: Payload) => {
  const response = await fetch(
    url,
    data
      ? {
          method: 'post',
          body: JSON.stringify(data)
        }
      : undefined
  );
  return (await response.json()) as Response;
};
