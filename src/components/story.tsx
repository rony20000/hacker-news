import React, { useEffect, useState } from 'react';

import { getAuthorKarma } from '../api/getAuthorKarma';
import { StoryType, AuthorType } from '../types/story';

import "./story.style.scss";

const Story = ({story}: {story: StoryType}) => {
    const [authorkarma, setAuthorkarma] = useState<number | undefined>(0)
    const [authorId, setAuthorId] = useState<string | undefined>("")

    useEffect(() => {
        const getKarma = async () => {
           const author: AuthorType | undefined = await getAuthorKarma(story)
           setAuthorId(author?.id)
           setAuthorkarma(author?.karma)
        }
        getKarma();
    }, [story]);

    return (
        <div className="col">
            <div className="post">
                <div className="header">
                    <p className="author">{authorId}</p>
                    <div className="img"></div>
                </div>
                <div className="body">
                    <h2 className="title">{story.title}</h2>
                    <p className="score">Score: {story.score}</p>
                    <p className="karma">Author's karma: {authorkarma}</p>
                    <p className="time">Timestamp: {new Date(story.time*1000).toLocaleDateString()}</p>
                    {
                        story.url ? <a href={story.url} className="url">checkout the full story</a> : <p className="url">The author didn't attach a link to the full story</p>
                    } 
                </div>
            </div>
        </div>
  );
}

export default Story