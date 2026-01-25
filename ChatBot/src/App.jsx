import { useEffect, useState } from 'react';
import { ChatInput } from './components/ChatInput';
import ChatMessages from './components/ChatMessages';
import './App.css';
import { chatbot } from 'supersimpledev';

function App() {

  const [chatMessages, setChatMessages] = useState(JSON.parse(localStorage.getItem('messages')) || []);
  // const [chatMessages, setChatMessages] = array;
  // const chatMessages = array[0];
  // const setChatMessages = array[1];

  useEffect(() => {
    localStorage.setItem('messages', JSON.stringify(chatMessages));
  }, [chatMessages]);

  useEffect(() => {
    chatbot.addResponses({
      'goodbye': 'Goodbye. Have a Great Day!',
      'give me a unique id': function() {
        return `Sure! Here's a unique ID: ${crypto.randomUUID()}`;
      }
    });
  }, []);  

  return (
      <div className="app-container">
          {chatMessages.length === 0 && (
              <p className="welcome-message">
                  Welcome to the Chatbot Project! Send a message using the textbox below.
              </p>
          )}
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

export default App
