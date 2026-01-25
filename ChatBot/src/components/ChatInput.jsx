import { useState } from 'react';
import { Chatbot} from 'supersimpledev';
import dayjs  from 'dayjs';
import LoadingSpinnerGif from '../assets/loading-spinner.gif';
import './ChatInput.css';

export function ChatInput({chatMessages, setChatMessages}) {
                
    const [inputText, setInputText] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    function saveInputText(event) {
        setInputText(event.target.value);
    }

    function checkKeyPressed(event) {
        if (event.key === 'Enter') {
            sendMessage();
        }
        else if (event.key === 'Escape') {
            setInputText('');
        }
    }

    async function sendMessage() {

        if (isLoading || inputText === ""){
            return;
        }

        setIsLoading(true);

        const newChatMessages = [
            ...chatMessages,
            {
                message: inputText,
                sender: 'user',
                id: crypto.randomUUID(),
                time: dayjs().valueOf()
            }
        ];

        setChatMessages([
            ...newChatMessages,
            {
                message: <img src={LoadingSpinnerGif} className="loading-spinner"/>,
                sender: 'robot',
                id: crypto.randomUUID(),
            }
        ])

        setInputText('');

        const response = await Chatbot.getResponseAsync(inputText);
        setChatMessages([
            ...newChatMessages,
            {
                message: response,
                sender: 'robot',
                id: crypto.randomUUID(),
                time: dayjs().valueOf()
            }
        ]);

        setIsLoading(false);
    }  

    function removeMessages() {
        setChatMessages([]);
    }

    return (    
            <div className="chat-input-container"> 
                <input 
                    className="chat-input"
                    type="text" 
                    placeholder="Send a message to Chatbot" 
                    size="30"
                    onChange={saveInputText}
                    value={inputText}
                    onKeyDown={checkKeyPressed}
                />
                <button
                    className="send-button"
                    onClick={sendMessage}
                >Send</button>
                <button
                    className="clear-button"
                    onClick={removeMessages}
                >Clear</button>
            </div> 
        );
};