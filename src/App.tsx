import React, { useEffect, useState } from 'react';

import Post from './components/post';
import { PostType } from './types/post';
import { getTopStories } from './api/getTopStories';

import './App.scss';

function App() {

  const [posts, setPosts] = useState<PostType[] | undefined>([]);

  useEffect(() => {
    const getStories = async () => {
      const topStories = await getTopStories();
      setPosts(topStories)
    }
    getStories()
    
  }, []);

  return (
    <div className="container">
      <div className="row">
          {
              posts?.map((post: PostType) => {
                return <Post key={post.id} post={post} />
              })   
            }
      </div>
    </div>
  );
}

export default App;
