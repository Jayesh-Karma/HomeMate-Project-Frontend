import React, {useState} from 'react'

const PostGrid = ({ posts }) => {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {posts?.map((post) => (
          <PostCard key={post?._id} post={post} />
        ))}
      </div>
    );
  };

  const PostCard = ({ post }) => {
    return (
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <img src={post?.url} alt={post?.caption} className="w-full h-52 object-cover" />
        <div className="p-4">
          <h3 className="text-xl font-medium">{post?.caption}</h3>
          <p className="text-gray-600">📍 {post?.location}</p>
          <p className="text-gray-500">💰 {post?.priceFrom} - {post?.priceUpto}</p>
        </div>
      </div>
    );
  };

export default PostGrid
