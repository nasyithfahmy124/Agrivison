const BASE_URL =
  "http://127.0.0.1:8000/agrivision/chatbot/";

async function request(
  url,
  options = {}
) {
  try {
    const response =
      await fetch(url, {
        headers: {
          "Content-Type":
            "application/json",
          ...options.headers,
        },
        ...options,
      });

    const contentType =
      response.headers.get(
        "content-type"
      );

    let data;

    if (
      contentType?.includes(
        "application/json"
      )
    ) {
      data =
        await response.json();
    } else {
      data =
        await response.text();
    }

    if (!response.ok) {
      throw new Error(
        data?.error ||
          data?.message ||
          `Request failed (${response.status})`
      );
    }

    return data;
  } catch (error) {
    console.error(
      "[AgroVision API]",
      error
    );

    throw error;
  }
}

export const chatbotApi = {
  async sendMessage(
    pertanyaan
  ) {
    const data =
      await request(BASE_URL, {
        method: "POST",
        body: JSON.stringify({
          pertanyaan,
        }),
      });

    if (
      typeof data ===
      "string"
    ) {
      return data
        .replaceAll(
          "\\n",
          "\n"
        )
        .trim();
    }

    return (
      data.answer ||
      data.response ||
      data.message ||
      ""
    );
  },

  async getHistory() {
    return await request(
      BASE_URL
    );
  },

  async getDetail(id) {
    return await request(
      `${BASE_URL}${id}/`
    );
  },

  async deleteChat(id) {
    await request(
      `${BASE_URL}${id}/`,
      {
        method: "DELETE",
      }
    );

    return true;
  },

  async clearAll() {
    const history =
      await this.getHistory();

    await Promise.all(
      history.map((chat) =>
        this.deleteChat(
          chat.id
        )
      )
    );

    return true;
  },
};