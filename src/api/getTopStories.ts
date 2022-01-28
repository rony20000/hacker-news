import { endpoints } from '../endpoints';
import { StoryType } from '../types/story';
import { randomize } from '../utils/randomize';

export const getRandomStories = async () => {

    try {

      const response = await fetch(endpoints.topStories);
      if (response.ok === false) {
        throw new Error("Response Error:" + response.text);
         // I would create some pop uo to show to the user
      }
      const jsonStories = await response.json();

      const randomStories = randomize(jsonStories, 10)
      
      const randomStoriesPromises = randomStories
        .map((id: number) =>
          fetch(endpoints.storyPoints(id))
          .then(
            response => response.json()
          )
        )
        
      const result: StoryType[] | undefined = await Promise.all(randomStoriesPromises);

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