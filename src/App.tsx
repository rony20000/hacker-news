import React, { useEffect, useState } from 'react';

import Story from './components/story';
import { StoryType } from './types/story';
import { getRandomStories } from './api/getTopStories';

import './App.scss';

function App() {

  const [stories, setStories] = useState<StoryType[] | undefined>([]);

  useEffect(() => {
    const getStories = async () => {
      const topStories = await getRandomStories();
      setStories(topStories)
    }
    getStories()
    
  }, []);

  return (
    <div className="container">
      <div className="row">
          {
              stories?.map((story: StoryType) => {
                return <Story key={story.id} story={story} />
              })   
            }
      </div>
    </div>
  );
}

export default App;
