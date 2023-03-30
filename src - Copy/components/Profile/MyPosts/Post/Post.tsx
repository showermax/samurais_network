import React from "react";
import s from "./Post.module.css";

type PostProps = {
    title: string;
    likesCount: number;
}
const Post = (props: PostProps) => {
    return <div
        className={s.item}>
        <img
            src="data:image/jpeg;base64,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"/>
        {props.title}
        <div>
            <span>
                like {props.likesCount}
            </span>
        </div>
    </div>


};

export default Post;