import React, {ChangeEvent, useRef} from 'react';
import s from './MyPosts.module.css';
import {PostType} from "../../../../src - Copy/components/redux/State";

type MyPostsProps = {
    posts: PostType[]
    updateText: string
    addPost: (s: string) => void
}

const MyPosts = (props: MyPostsProps) => {

    let newTextElement=useRef<HTMLTextAreaElement>(null);                // надо получить текущее значение в textarea



    let postsElements=props.posts.map(el=><li>{el.message}{el.likesCount}</li>);              // надо отрисовать посты





    const addPostHandler = () => {
      props.addPost(newTextElement.current!.value)                      // добавляем новый пост
    }
    console.log(newTextElement.current!)
    return <div className={s.postsBlock}>
        <h3>My Posts</h3>
        <div>
            <div>
                <textarea ref={newTextElement}></textarea>
            </div>
            <div>
                <button onClick={addPostHandler}>Add post</button>
            </div>
        </div>
        <div className={s.posts}>
            {postsElements}
        </div>
    </div>

};

export default MyPosts;