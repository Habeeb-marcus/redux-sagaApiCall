import axios from "axios";

export function requestGetuser() {
  return axios
    .request({
      method: "get",
      url: "https://my-json-server.typicode.com/Habeeb-marcus/demo/user"
    })
    .then((res) => res.data);
}
