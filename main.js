function ChatInput({chatMessages, setChatMessages}) {
            
    const [inputText, setInputText] = React.useState('');
    const [isLoading, setIsLoading] = React.useState(false);

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
                id: crypto.randomUUID()
            }
        ];

        setChatMessages([
            ...newChatMessages,
            {
                message: 'Loading...',
                sender: 'robot',
                id: crypto.randomUUID()
            }
        ])

        setInputText('');

        const response = await Chatbot.getResponseAsync(inputText);
        setChatMessages([
            ...newChatMessages,
            {
                message: response,
                sender: 'robot',
                id: crypto.randomUUID()
            }
        ]);

        setIsLoading(false);
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
            </div> 
        );
};

function ChatMessage({message, sender}) {
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
                <img src="images/robotIcon.jpg" className="chat-message-profile"/>
            )}
            <div className="chat-message-text">
                {message}
            </div>
            {sender === 'user' && (
                <img src="images/userIcon.jpg" className="chat-message-profile"/>
            )}
        </div>
    );
}


function ChatMessages({chatMessages}) {

    const chatMessagesRef = React.useRef(null);

    React.useEffect(() => {
        const containerElem = chatMessagesRef.current;

        if (containerElem) {
            containerElem.scrollTop = containerElem.scrollHeight;
        }
    },[chatMessages]);

    return(
        <div className="chat-messages-container" ref={chatMessagesRef}>
            {chatMessages.map((chatMessage) => {
                    return (
                        <ChatMessage
                        message={chatMessage.message}
                        sender={chatMessage.sender}
                        key={chatMessage.id}
                        ></ChatMessage>
                    );
            })}
        </div>
    );
    
}

function App() {

    const [chatMessages, setChatMessages] = React.useState([{
        message: 'hello Chatbot',
        sender: 'user',
        id: '1'
    }, {
        message: 'Hello! How can I help you?',
        sender: 'robot',
        id: '2'
    }, {
        message: 'Can you get me todays date?',
        sender: 'user',
        id: '3'
    }, {
        message: 'Today is September 27',
        sender: 'robot',
        id: '4'
    }]);
    // const [chatMessages, setChatMessages] = array;
    // const chatMessages = array[0];
    // const setChatMessages = array[1];

    return (
        <div className="app-container">
            <ChatMessages
                chatMessages={chatMessages}
            ></ChatMessages>
            <ChatInput
                chatMessages={chatMessages}
                setChatMessages={setChatMessages}
            ></ChatInput> 
        </div>
    );
}

const container = document.querySelector('.js-container');
const root = ReactDOM.createRoot(container); // sets up react 
root.render(<App></App>);