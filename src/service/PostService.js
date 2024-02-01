import { ApiHelper } from './apiHelper'

const apiHelper = new ApiHelper();
const url = process.env.REACT_APP_URL;

export class PostService{
    getAllPost = () => {
        const api = `${url}/posts`;
        return apiHelper.get(api);
    }
    addPost = (data) => {
        const api = `${url}/posts`;
        return apiHelper.post(api, data);
    }
    updatePost = (data) => {
        const api = `${url}/posts/${data.id}`;
        return apiHelper.put(api, data);
    }
    deletePost = (id) =>{
        const api = `${url}/posts/${id}`;
        return apiHelper.delete(api);
    }
}
export default PostService;