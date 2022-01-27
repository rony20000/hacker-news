import React, { useEffect, useState } from 'react';

import { getAuthorKarma } from '../api/getAuthorKarma';
import { PostType } from '../types/post';

import "./post.style.scss";

const Post = ({post}: {post: PostType}) => {
    const [authorkarma, setAuthorkarma] = useState("")
    const [authorId, setAuthorId] = useState("")

    useEffect(() => {
        const getKarma = async () => {
           const {karma, id}: any = await getAuthorKarma(post)
           setAuthorId(id)
           setAuthorkarma(karma)
        }
        getKarma();
    }, [post]);

    return (
        <div className="col">
            <div className="post">
                <div className="header">
                    <p className="author">{authorId}</p>
                    <div className="img"></div>
                </div>
                <div className="body">
                    <h2 className="title">{post.title}</h2>
                    <p className="score">Score: {post.score}</p>
                    <p className="karma">Author's karma: {authorkarma}</p>
                    <p className="time">Timestamp: {post.time}</p>
                    <a href={post.url} className="url">checkout the full story</a>
                </div>
            </div>
        </div>
  );
}

export default Post