export type LoginRequest = {
  email: string;
  password: string;
};

export type LoginResponse = {
  access_token: string;
  token_type: string;
};

export const loginApi = async ({
  email,
  password,
}: LoginRequest): Promise<LoginResponse> => {
  const response = await fetch("http://localhost:8000/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });

  const data = await response.json();
  //console.log("login response status:", response.status);
  //console.log("login response data:", data);

  if (!response.ok) {
    throw new Error(data.detail || "ログインに失敗しました");
  }

  return data;
};