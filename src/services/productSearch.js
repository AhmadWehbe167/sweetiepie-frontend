import axios from "axios";

export async function fetchByType(
  type,
  authToken,
  itemsNb,
  successCallback,
  failureCallback
) {
  await axios({
    method: "get",
    baseURL: process.env.REACT_APP_API_ENDPOINT,
    url: `/items?type=${type}`,
    headers: {
      "x-auth-token": authToken,
    },
  })
    //return first five from an array of res.data
    .then((res) => {
      itemsNb = itemsNb === "all" ? res.data.length : itemsNb;
      itemsNb = itemsNb < res.data.length ? itemsNb : res.data.length;
      successCallback(res.data.slice(0, itemsNb));
    })
    .catch((err) => failureCallback(err));
}
