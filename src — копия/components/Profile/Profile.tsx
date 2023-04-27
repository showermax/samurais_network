import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {ProfilePageType} from "../redux/State";

type ProfileProps = {
    profilepage: ProfilePageType
    addPost: (s: string) => void

}

const Profile = (props: ProfileProps) => {

    return <div>
        <ProfileInfo />
        <MyPosts posts={props.profilepage.posts} updateText={props.profilepage.updateText} addPost={props.addPost}/>
    </div>

};

export default Profile;