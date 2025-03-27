import React from "react";
import { Dialog } from "@headlessui/react";
import { FaHeart, FaRegHeart, FaComment, FaShare, FaBookmark, FaRegBookmark } from "react-icons/fa";
import { formatDistanceToNow } from "date-fns";

const PostModal = ({ isOpen, setIsOpen, post }) => {
  if (!post) return null;

  const timeAgo = formatDistanceToNow(new Date(post.uploadedAt), { addSuffix: true });

  return (
    <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <Dialog.Panel className="bg-white rounded-lg overflow-hidden shadow-xl max-w-lg w-full">
        {/* Post Image */}
        <div className="relative">
          <img src={post?.url} alt={post?.caption} className="w-full h-80 object-cover" />
        </div>

        {/* Post Details */}
        <div className="p-4">
          {/* Header: Service Type & Location */}
          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-600">{post.service_type} - {post.location}</p>
            <p className="text-xs text-gray-400">{timeAgo}</p>
          </div>

          {/* Caption */}
          <h3 className="text-lg font-semibold mt-2">{post.caption}</h3>

          {/* Price */}
          <p className="text-gray-700 mt-1">💰 ₹{post.priceFrom} - ₹{post.priceUpto}</p>
{/* 
          Like, Comment, Share, Save
          <div className="flex justify-between items-center mt-4 text-gray-600">
            <div className="flex gap-4 text-2xl">
              <button className="hover:text-red-500"><FaRegHeart /></button>
              <button className="hover:text-blue-500"><FaComment /></button>
              <button className="hover:text-green-500"><FaShare /></button>
            </div>
            <button className="text-2xl hover:text-yellow-500"><FaRegBookmark /></button>
          </div> */}

          {/* Close Button */}
          <button 
            className="mt-4 w-full bg-gray-800 text-white py-2 rounded-md"
            onClick={() => setIsOpen(false)}
          >
            Close
          </button>
        </div>
      </Dialog.Panel>
    </Dialog>
  );
};

export default PostModal;
