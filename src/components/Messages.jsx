import { useState } from 'react';

const initialMessages = [
  {
    id: 1,
    from: { id: 2, username: 'user2', name: 'Jane Smith', avatar: 'mangal.png' },
    to: { id: 1, username: 'user1', name: 'John Doe' },
    content: "Hey, how's it going?",
    timestamp: '2025-05-05T08:00:00Z',
  },
];

const currentUser = {
  id: 1,
  username: 'user1',
  name: 'John Doe',
  profilePic: 'ankit.png',
  avatar: 'ankit.png',
};

function Messages() {
  const [messages, setMessages] = useState(initialMessages);
  const [newMessage, setNewMessage] = useState('');

  const handleMessageSubmit = (e) => {
    e.preventDefault();
    if (!newMessage.trim()) return;
    const newMessageObj = {
      id: messages.length + 1,
      from: currentUser,
      to: { id: 2, username: 'user2', name: 'Jane Smith', avatar: 'mangal_in_jungle.png' },
      content: newMessage,
      timestamp: new Date().toISOString(),
    };
    setMessages([...messages, newMessageObj]);
    setNewMessage('');
  };

  return (
    <div className="max-w-2xl mx-auto p-4 sm:p-6">
      <div className="bg-white p-3 sm:p-4 rounded-lg shadow">
        <h2 className="text-lg sm:text-xl font-bold mb-4">Messages</h2>
        <div className="mb-4 space-y-3">
          {messages.map(message => (
            <div
              key={message.id}
              className={`flex items-start space-x-2 ${
                message.from.id === currentUser.id ? 'justify-end' : 'justify-start'
              }`}
            >
              {message.from.id !== currentUser.id && (
                <img
                  src={message.from.avatar}
                  alt={`${message.from.name}'s avatar`}
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover"
                />
              )}
              <div
                className={`p-2 sm:p-3 rounded-lg max-w-[75%] ${
                  message.from.id === currentUser.id ? 'bg-indigo-100' : 'bg-gray-100'
                }`}
              >
                <p className="font-bold text-sm sm:text-base">{message.from.name}</p>
                <p className="text-sm sm:text-base">{message.content}</p>
                <p className="text-gray-500 text-xs sm:text-sm">{new Date(message.timestamp).toLocaleString()}</p>
              </div>
              {message.from.id === currentUser.id && (
                <img
                  src={currentUser.avatar}
                  alt="Your avatar"
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover"
                />
              )}
            </div>
          ))}
        </div>
        <div>
          <textarea
            className="w-full p-2 sm:p-3 border rounded-lg text-sm sm:text-base"
            placeholder="Type a message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            rows="3"
          ></textarea>
          <button
            onClick={handleMessageSubmit}
            className="mt-2 bg-indigo-600 text-white px-4 sm:px-6 py-2 rounded-lg hover:bg-indigo-700"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default Messages;