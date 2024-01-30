import { ApiHelper } from './apiHelper'

const apiHelper = new ApiHelper();
const url = process.env.REACT_APP_URL;

export class PostService{
    getAllUsers = () => {
        const api = `${url}/users`;
        return apiHelper.get(api);
    }
}
export default PostService;