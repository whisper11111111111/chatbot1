import React, { useState, useRef, useEffect } from 'react';
import ChatMessage from './components/ChatMessage';
import ChatInput from './components/ChatInput';
import Header from './components/Header';
import './App.css';

function App() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async (text) => {
    if (!text.trim()) return;
    
    // Add user message to chat
    const userMessage = { role: 'user', content: text };
    setMessages([...messages, userMessage]);
    setLoading(true);
    
    try {
      // Call API
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: text }),
      });
      
      const data = await response.json();
      
      // Add AI response to chat
      const aiMessage = { role: 'assistant', content: data.message };
      setMessages(prevMessages => [...prevMessages, aiMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
      // Add error message
      const errorMessage = { 
        role: 'assistant', 
        content: '抱歉，发生了错误，请稍后再试。' 
      };
      setMessages(prevMessages => [...prevMessages, errorMessage]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-apple-gray-light">
      {/* 主内容区 */}
      <Header />
      <div className="flex-1 overflow-auto p-4 md:p-6 pb-20">
        <div className="max-w-3xl mx-auto">
          {messages.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center text-apple-dark">
              <h2 className="text-2xl font-bold mb-2">欢迎使用 NBTCA</h2>
              <p className="mb-4">我是您的AI助手，有什么可以帮您的吗？</p>
            </div>
          ) : (
            messages.map((message, index) => (
              <ChatMessage key={index} message={message} />
            ))
          )}
          {loading && (
            <div className="flex items-center text-apple-gray-dark mt-4">
              <div className="animate-pulse">AI正在思考...</div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>
      <div className="fixed bottom-0 left-0 right-0 bg-apple-light border-t border-gray-200">
        <div className="max-w-3xl mx-auto p-4">
          <ChatInput onSendMessage={sendMessage} disabled={loading} />
        </div>
      </div>
    </div>
  );
}

export default App;