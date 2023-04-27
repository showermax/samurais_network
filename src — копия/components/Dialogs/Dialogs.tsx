import React from 'react';
import s from './Dialogs.module.css'
import {Route, Routes, useNavigate} from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {MessagesPageType} from "../redux/State";


type DialogsPropsType = {
    messagesPage: MessagesPageType
}


export const Dialogs = (props: DialogsPropsType) => {

    const {dialogsData, messagesData} = props.messagesPage

    const navigate = useNavigate();
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {
                    dialogsData.map((dialog) => {
                        return (
                           <DialogItem name={dialog.name} id={dialog.id}/>
                        // <div onClick={()=>navigate(dialog.name)}></div>
                        )
                    })
                }


            </div>

                <div className={s.messages}>
                    <Routes>
                    {
                        messagesData.map((message) => {
                            return (
                                <Route path={'/semen'} element={<Message message={message.message} id={message.id}/>}/>
                            )
                        })
                    }
                    </Routes>
                </div>

        </div>
    )
}

export default Dialogs;