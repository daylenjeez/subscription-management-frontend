export type Response<T = void> = Promise<{
  data: T
  status: number
  ok: boolean,
  message?: string
}>


interface HttpClient {
  get<T>(url: string): Response<T>;
  post<T, D>(url: string, data: D): Response<T>;
  put<T, D>(url: string, data: D): Response<T>;
  delete(url: string): Response;
}

export function createHttpClient(baseURL: string): HttpClient {
  const headers = new Headers({
    'Content-Type': 'application/json',
  });


  return {
    async get<T>(url: string): Response<T> {
      const response = await fetch(`${baseURL}${url}`, { headers });
      return response.json();
    },

    async post<T, D>(url: string, data: D): Response<T> {
      const response = await fetch(`${baseURL}${url}`, {
        method: 'POST',
        headers,
        body: JSON.stringify(data),
      });
      return response.json();
    },

    async put<T, D>(url: string, data: D): Response<T> {
      const response = await fetch(`${baseURL}${url}`, {
        method: 'PUT',
        headers,
        body: JSON.stringify(data),
      });
      return response.json();
    },

    async delete(url: string): Response {
      const response = await fetch(`${baseURL}${url}`, {
        method: 'DELETE',
        headers,
      });
      return response.json();
    },
  };
}
