import { endpoints } from '../endpoints';
import { PostType } from '../types/post';

export const getTopStories = async () => {

    try {

      const response = await fetch(endpoints.topStories);
      if (response.ok === false) {
        throw new Error("Response Error:" + response.text);
         // I would create some pop uo to show to the user
      }
      
      const json = await response.json();
      
      const promises = json
        .slice(0, 10)
        .map((id: number) =>
          fetch(endpoints.storyPoints(id))
          .then(
            response => response.json()
          )
        )
        
      const result: PostType[] | undefined = await Promise.all(promises);

      result.sort((a, b) => {
        const keyA = a.score
        const keyB = b.score
        if (keyA < keyB) return 1;
        if (keyA > keyB) return -1;
        return 0;
      });

      return result

    } catch (err) {
      console.error(err);
      // I would create some pop uo to show to the user
    }
  }