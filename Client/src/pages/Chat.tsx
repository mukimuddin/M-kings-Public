import React from 'react';
import { useAuth } from '../hooks/useAuth';

interface Message {
  id: string;
  sender: string;
  content: string;
  timestamp: string;
}

interface Room {
  id: string;
  name: string;
  lastMessage?: string;
}

const Chat: React.FC = () => {
  const { user } = useAuth();
  const [messages, setMessages] = React.useState<Message[]>([]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Chat</h1>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Messages</h2>
        <div className="space-y-4">
          {messages.map((message: Message) => (
            <div key={message.id} className="flex items-start space-x-3">
              <div className="flex-1 bg-gray-50 dark:bg-gray-700 rounded-lg p-3">
                <p className="font-semibold text-sm text-gray-900 dark:text-white">{message.sender}</p>
                <p className="text-gray-600 dark:text-gray-300">{message.content}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{message.timestamp}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Chat; 