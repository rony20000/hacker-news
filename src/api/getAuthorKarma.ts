import { endpoints } from '../endpoints';
import { PostType } from '../types/post';

export const getAuthorKarma = async (post: PostType) => {
    try {
        const response = await fetch(endpoints.user(post.by));
        if (response.ok === false) {
            throw new Error("Response Error:" + response.text);
        }
        const { karma, id } = await response.json();
        return {karma, id}
    } catch (err) {
        console.error(err);
    }
}