import {rerenderEntireTree} from '../../render';


export type StateType = {
    profilePage: ProfilePageType
    messagesPage: MessagesPageType
}

export type ProfilePageType = {
    posts: PostType[]
    updateText: string
}
export type MessagesPageType ={
    dialogsData: DialogDataType[]
    messagesData: MessageDataType[]
}

type DialogDataType ={
    id: number
    name: string
}

type MessageDataType ={
    id: number
    message: string
}

type PostType = {
    id: number
    message: string
    likesCount: number
}

let state: StateType = {
    profilePage: {
        posts: [
            {id: 1, message: 'my first post', likesCount: 12},
            {id: 2, message: 'how are you ?', likesCount: 11},
            {id: 3, message: 'put likes', likesCount: 17}
        ],
        updateText: '',
    },
    messagesPage: {
        dialogsData: [
            {id: 1, name: 'Yulia'},
            {id: 2, name: 'semen'},
            {id: 3, name: 'Tereza'},
            {id: 4, name: 'Lola'},
            {id: 5, name: 'Evgenia'},
            {id: 6, name: 'Sonja'}
        ],
        messagesData: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How is your it-Kamasutra?'},
            {id: 3, message: 'Yo'},
            {id: 4, message: 'Yo'},
            {id: 5, message: 'Yo'},
        ]
    }
}

export let addPost = (postMessage: any) => {
    let newPost = {
        id: 5,
        message: postMessage,
        likesCount: 0
    };

    state.profilePage.posts.unshift(newPost)
    rerenderEntireTree(state);
}




export default state;


type FriendType ={
    name:string
    age: number
    statusBestFriend: boolean
    crazyStatus: boolean
}

type SpecsType = {
    dviglo: string
    haveTurbo:boolean
}

type CarsType = {
    honda: Array<string | number | SpecsType>

}
type FriendsCarsType= {
    friends: FriendType[]
    cars: CarsType
}

type AddressType ={
    city: string
    street: string
    house:number
    appartment:number
}
type KidType = {
    age: number
    likes: string
    hobbies: Array<string>
    address: AddressType
    need: Array<string | FriendsCarsType>
}
type KidsType ={
    Piter: KidType
}
type PersonType ={
    heir: string
    arms: number
    legs: number
    kids: KidsType[]
}
type WholeSvetaType ={
    Sveta: PersonType[]
}

const newStudents: WholeSvetaType = {
    Sveta: [
        {
            heir: 'long',
            arms: 2,
            legs: 2,
            kids: [
                {
                    Piter: {
                        age: 22,
                        likes: 'dogs',
                        hobbies: [
                            'futball',
                            'tenis',
                            'PC games',
                        ],
                        address: {
                            city: 'Minsk',
                            street: 'Nemiga',
                            house: 65,
                            appartment: 11,
                        },
                        need: [
                            'studie',
                            'money',
                            'car',
                            {
                                friends: [
                                    {name: 'Vasia', age: 17, statusBestFriend: true, crazyStatus: false},
                                    {name: 'Katya', age: 19, statusBestFriend: false, crazyStatus: true},
                                    {name: 'Ivan', age: 22, statusBestFriend: false, crazyStatus: true},
                                    {name: 'Max', age: 21, statusBestFriend: true, crazyStatus: false},
                                ],
                                cars: {
                                    honda: ['old', 1991, {dviglo: 'v6', haveTurbo: true}]
                                },
                            },

                        ]
                    },

                }
            ]

        }
    ]
}