import {api} from '../axiosConfig';
import Publication from '../entities/Publication';

export const postService = {
    listPosts: async () => {
        const response = await api.get('/posts/');
        return response;
    },
    savePost: async (data: Publication) => {
        const response = await api.post('/posts/', data);
        return response.status;
    }
}