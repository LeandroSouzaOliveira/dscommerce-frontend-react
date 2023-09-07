import { AxiosRequestConfig } from "axios";
import { requestBackend } from "../utils/requests";

export function findMyself() {
  const config: AxiosRequestConfig = {
    url: "/users/myself",
    withCredentials: true,
  };

  return requestBackend(config);
}
