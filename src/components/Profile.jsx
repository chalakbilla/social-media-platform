const currentUser = {
  id: 1,
  username: 'user1',
  name: 'John Doe',
  profilePic: 'ankit.png',
  coverPic: 'mangal_in_jungle.png',
};

function Profile() {
  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6">
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <img
          src={currentUser.coverPic}
          alt="Cover"
          className="w-full h-40 sm:h-56 object-cover"
        />
        <div className="relative p-4 sm:p-6">
          <img
            src={currentUser.profilePic}
            alt="Profile"
            className="w-20 h-20 sm:w-24 sm:h-24 rounded-full mx-auto -mt-16 sm:-mt-20 border-4 border-white object-cover"
          />
          <h2 className="text-xl sm:text-2xl font-bold text-center mt-2">{currentUser.name}</h2>
          <p className="text-gray-600 text-sm sm:text-base text-center">@{currentUser.username}</p>
          <div className="mt-4">
            <p className="text-center text-sm sm:text-base">Bio: Just a social media enthusiast!</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;