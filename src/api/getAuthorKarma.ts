import { endpoints } from '../endpoints';
import { StoryType, AuthorType } from '../types/story';

export const getAuthorKarma = async (story: StoryType) => {
    try {
        const response = await fetch(endpoints.user(story.by));
        if (response.ok === false) {
            throw new Error("Response Error:" + response.text);
        }
        const { karma, id }: AuthorType = await response.json();
        return {karma, id}
    } catch (err) {
        console.error(err);
    }
}