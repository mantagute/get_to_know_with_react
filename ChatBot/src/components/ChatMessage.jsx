import RobotProfileImage from '../assets/robotIcon.jpg';
import UserProfileImage from '../assets/userIcon.jpg';
import dayjs from 'dayjs';
import './ChatMessage.css';

export function ChatMessage({message, sender, time}) {
    //const message = props.message;
    //const sender = props.sender;
    //const {message, sender} = props

    /*
    if (sender === 'robot') {
        return (
            <div>
                <img src="images/robotIcon.jpg" width="50" height="50"/>
                {message}
            </div>
        )
    }
    */  

    return (
        <div className={sender === 'user' ? 'chat-message-user' : 'chat-message-robot'}>
            {sender === 'robot' && (
                <img src={RobotProfileImage} className="chat-message-profile"/>
            )}
            <div className="chat-message-text">
                {message}
            {time && (
                <div className="chat-message-time">
                    {dayjs(time).format('h:mma')}
                </div>
            )}
            </div>
            {sender === 'user' && (
                <img src={UserProfileImage} className="chat-message-profile"/>
            )}
        </div>
    );
}