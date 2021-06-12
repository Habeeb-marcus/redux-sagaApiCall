import { call, put } from "redux-saga/effects";
import setUser from "../../Ducks/user";
import { requestGetuser } from "../requests/user";

export function* handlerGetUser(action) {
  try {
    const data = yield call(requestGetuser);
    // console.log("setUser", data);
    // const action = setUser(type:set_User, user(data));
    // console.log(action, "called SetUser");
    const action = {
      type: "SET_USER",
      user: data
    };
    yield put(action);
  } catch (error) {
    console.log(error);
  }
}
