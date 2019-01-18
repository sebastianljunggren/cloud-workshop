const API_URL = process.env.REACT_APP_API_URL || "";

const safeFetch = async (url, obj) => {
  const fullUrl = `${API_URL}${url}`;
  console.log("full url", fullUrl);

  try {
    let resp = await fetch(fullUrl, {
      ...obj
    });

    if (!resp.status.toString().startsWith("2")) {
      throw resp;
    } else {
      return resp;
    }
  } catch (error) {
    throw error;
  }
};

const get = url => {
  return safeFetch(url, { method: "GET" });
};

const post = async (url, body) => {
  return safeFetch(url, {
    method: "POST",
    mode: "cors",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body)
  });
};

const put = async (url, body) => {
  return safeFetch(url, {
    method: "PUT",
    mode: "cors",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body)
  });
};

export { get, post, put };
