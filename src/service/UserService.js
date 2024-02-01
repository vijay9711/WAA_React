import { ApiHelper } from "./apiHelper";

const apiHelper = new ApiHelper();
const uri = process.env.REACT_APP_URL;


export class UserService {
  getAllUser = () => {
    const api = `${uri}/users`;
    return apiHelper.get(api);
  }
}

export default UserService;