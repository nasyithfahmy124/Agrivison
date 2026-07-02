const BASE_URL = "http://127.0.0.1:8000";

export const authApi = {
  async register(data) {
    const response = await fetch(
      `${BASE_URL}/agrivision/register/`,
      {
        method: "POST",
        headers: {
          "Content-Type":
            "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    const result =
      await response.json();

    if (!response.ok) {
      throw result;
    }

    return result;
  },

  async login(username, password) {
    const response = await fetch(
        `${BASE_URL}/agrivision/login/`,
        {
        method: "POST",
        headers: {
            "Content-Type":
            "application/json",
        },
        body: JSON.stringify({
            username,
            password,
        }),
        }
    );

    const result =
        await response.json();

    if (!response.ok) {
        throw result;
    }

    localStorage.setItem(
        "access",
        result.access
    );

    localStorage.setItem(
        "refresh",
        result.refresh
    );

    return result;
    },

  logout() {
    localStorage.removeItem(
      "access"
    );

    localStorage.removeItem(
      "refresh"
    );
  },
};