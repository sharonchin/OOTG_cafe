import {
  FilteredCafe,
  CafeLoginResponse,
  CafeResponse,
  Product,
  ProductResponse,
} from "./types";

const SERVER_ENDPOINT = process.env.SERVER_ENDPOINT || "http://localhost:3000";

async function handleResponse<T>(response: Response): Promise<T> {
  const contentType = response.headers.get("Content-Type") || "";
  const isJson = contentType.includes("application/json");
  const data = isJson ? await response.json() : await response.text();

  if (!response.ok) {
    if (isJson && data.errors !== null) {
      throw new Error(JSON.stringify(data.errors));
    }

    throw new Error(data.message || response.statusText);
  }

  return data as T;
}

export async function apiRegisterCafe(
  credentials: string
): Promise<FilteredCafe> {
  const response = await fetch(`${SERVER_ENDPOINT}/api/auth/cafe/register`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: credentials,
  });

  return handleResponse<CafeResponse>(response).then((data) => data.data.cafe);
}

export async function apiLoginCafe(credentials: string): Promise<string> {
  const response = await fetch(`${SERVER_ENDPOINT}/api/auth/cafe/login`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: credentials,
  });

  return handleResponse<CafeLoginResponse>(response).then((data) => data.token);
}

export async function apiLogoutCafe(): Promise<void> {
  const response = await fetch(`${SERVER_ENDPOINT}/api/auth/cafe/logout`, {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return handleResponse<void>(response);
}

export async function apiGetAuthCafe(token?: string): Promise<FilteredCafe> {
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };

  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }
  const response = await fetch(`${SERVER_ENDPOINT}/api/cafes/me`, {
    method: "GET",
    credentials: "include",
    headers,
  });

  return handleResponse<CafeResponse>(response).then((data) => data.data.cafe);
}

export async function apiGetAllProduct(): Promise<Product[]> {
  const response = await fetch(`${SERVER_ENDPOINT}/api/product`, {
    method: "GET",
  });

  return response.json();
}

export async function apiCreateProduct(credentials: string): Promise<Product> {
  const response = await fetch(`${SERVER_ENDPOINT}/api/product`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: credentials,
  });

  return handleResponse<ProductResponse>(response).then(
    (data) => data.data.product
  );
}
