import { requestBackend } from "../utils/requests";
import * as authService from "./auth-service";

export function findMyself() {
  const headers = {
    Authorization: "Bearer " + authService.getAccessToken(),
  };

  console.log(headers);

  return requestBackend({ url: `/users/myself`, headers: headers });
}
