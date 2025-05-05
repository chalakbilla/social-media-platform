function Post({ post, onLike }) {
  return (
    <div className="bg-white p-3 sm:p-4 rounded-lg shadow">
      <div className="flex items-center mb-2">
        <img
          src="ankit.png"
          alt={`${post.user.name}'s profile`}
          className="w-8 h-8 sm:w-10 sm:h-10 rounded-full mr-2 object-cover"
        />
        <div>
          <p className="font-bold text-sm sm:text-base">{post.user.name}</p>
          <p className="text-gray-500 text-xs sm:text-sm">{new Date(post.timestamp).toLocaleString()}</p>
        </div>
      </div>
      <p className="mb-4 text-sm sm:text-base">{post.content}</p>
      {post.image && (
        <img
          src={post.image}
          alt="Post content"
          className="w-full h-auto rounded-lg mb-4 max-h-96 object-cover"
        />
      )}
      <div className="flex items-center">
        <button
          onClick={() => onLike(post.id)}
          className="flex items-center text-indigo-600 hover:text-indigo-800 text-sm sm:text-base"
        >
          <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933c-.8.733-1.6 1.4-2.4 2z" />
          </svg>
          {post.likes}
        </button>
      </div>
    </div>
  );
}

export default Post;