import React, {useState} from 'react'

const PostGrid = ({ posts }) => {
  const [selectedPost, setSelectedPost] = useState(null);

  const openModal = (post) => {
    setSelectedPost(post);
  };

  const closeModal = () => {
    setSelectedPost(null);
  };

    return (
      <div className="relative">
      {/* Posts Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {posts?.map((post) => (
          <PostCard key={post?._id} post={post} openModal={openModal} />
        ))}
      </div>

      {/* Modal */}
      {selectedPost && <PostModal post={selectedPost} closeModal={closeModal} />}
    </div>
    );
  };

  const PostCard = ({ post, openModal }) => {
    console.log(post)
    return (
      <div 
      onClick={() => openModal(post)}
      className="bg-white cursor-pointer shadow-md rounded-lg overflow-hidden">
        <img src={post?.url} alt={post?.caption} className="w-full h-52 object-cover" />
        <div className="p-4">
          <h3 className="text-xl font-medium">{post?.caption}</h3>
          <p className="text-gray-600">📍 {post?.location}</p>
          <p className="text-gray-500">💰 {post?.priceFrom} - {post?.priceUpto}</p>
        </div>
      </div>
    );
  };


  const PostModal = ({ post, closeModal }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-md z-50">
      <div className="bg-white shadow-2xl rounded-lg w-11/12 max-w-4xl flex flex-col lg:flex-row overflow-hidden animate-fadeIn">
        {/* Left Side: Image */}
        <div className="w-full lg:w-2/3 h-96 lg:h-auto">
          <img src={post?.url} alt={post?.caption} className="w-full h-full object-cover" />
        </div>

        {/* Right Side: Post Details */}
        <div className="w-full lg:w-1/3 p-6 flex flex-col justify-between">
          <button 
            className="absolute top-4 right-4 text-gray-700 hover:text-black text-2xl"
            onClick={closeModal}
          >
            ✖
          </button>
          
          <div>

          <h3 className="text-2xl font-bold text-gray-900">{post?.caption}</h3>
          <p className="text-gray-600 mt-2">📍 Location: <span className="font-medium">{post?.location}</span></p>
          <p className="text-gray-600 mt-2">🛠 Service: <span className="font-medium">{post?.service_type}</span></p>
          <p className="text-gray-600 mt-2">💰 Price Range: <span className="font-medium">{post?.priceFrom} - {post?.priceUpto}</span></p>
          <p className="text-gray-600 mt-2">📅 Uploaded On: <span className="font-medium">{new Date(post?.uploadedAt).toLocaleDateString()}</span></p>

          </div>
          
        </div>
      </div>
    </div>
  );
};
export default PostGrid
