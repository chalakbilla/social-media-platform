import { useState } from 'react';
import Post from './Post';

const initialPosts = [
  {
    id: 1,
    user: { id: 1, username: 'user1', name: 'John Doe' },
    content: 'Hello, world! This is my first post.',
    image: 'mangal3.png',
    likes: 10,
    timestamp: '2025-05-05T10:00:00Z',
  },
  {
    id: 2,
    user: { id: 2, username: 'user2', name: 'Jane Smith' },
    content: 'Loving this new social platform!',
    image: 'child.png',
    likes: 15,
    timestamp: '2025-05-05T09:30:00Z',
  },
];

const currentUser = {
  id: 1,
  username: 'user1',
  name: 'John Doe',
  profilePic: 'ankit.png',
};

function Home() {
  const [posts, setPosts] = useState(initialPosts);
  const [newPost, setNewPost] = useState('');
  const [previewImage, setPreviewImage] = useState(null);

  const handlePostSubmit = (e) => {
    e.preventDefault();
    if (!newPost.trim()) return;
    const newPostObj = {
      id: posts.length + 1,
      user: currentUser,
      content: newPost,
      image: previewImage || null,
      likes: 0,
      timestamp: new Date().toISOString(),
    };
    setPosts([newPostObj, ...posts]);
    setNewPost('');
    setPreviewImage(null);
  };

  const handleLike = (postId) => {
    setPosts(posts.map(post =>
      post.id === postId ? { ...post, likes: post.likes + 1 } : post
    ));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className="py-6 sm:py-8 max-w-3xl mx-auto">
      <div className="mb-6 bg-white p-4 sm:p-6 rounded-lg shadow">
        <textarea
          className="w-full p-3 border border-black rounded-lg text-sm sm:text-base"
          placeholder="What's on your mind?"
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
          rows="4"
        ></textarea>
        {previewImage && (
          <img
            src={previewImage}
            alt="Post preview"
            className="mt-2 w-full h-auto rounded-lg max-h-64 object-cover"
          />
        )}
        <div className="flex justify-between items-center mt-2">
          <label className="cursor-pointer">
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageChange}
            />
            <span className="text-indigo-600 hover:text-indigo-800 text-sm sm:text-base">
              Add Image
            </span>
          </label>
          <button
            onClick={handlePostSubmit}
            className="bg-indigo-600 text-white px-4 sm:px-6 py-2 rounded-lg hover:bg-indigo-700"
          >
            Post
          </button>
        </div>
      </div>
      <div className="space-y-4">
        {posts.map(post => (
          <Post key={post.id} post={post} onLike={handleLike} />
        ))}
      </div>
    </div>
  );
}

export default Home;