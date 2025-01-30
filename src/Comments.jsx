import React from "react";
import { ThumbsUp, ThumbsDown, Reply } from "lucide-react";

const comments = [
  {
    id: 14,
    user: "boothead",
    time: "73.2 min",
    text: "No. I keep restarting right as i hit gasses and realize i built my entire world wrong.",
    votes: 17,
    avatar: "/path/to/avatar1.png",
    replies: [
      {
        id: 29,
        user: "blamie",
        time: "12.8 min",
        text: "I used to restart every time a new update came out, starting at 2.\n\nSince 1.0 I've pretty much decided that unless I log in and the main factory is now completely concealed by terrain...",
        votes: 4,
        avatar: "/path/to/avatar2.png",
        replies: [
          {
            id: 35,
            user: "bigstratos",
            time: "8.5 min",
            text: "All my plutonium waste was outside the world's edge after the newer updates, it was hell bringing them back.",
            votes: 0,
            avatar: "/path/to/avatar3.png",
            replies: []
          }
        ]
      }
    ]
  }
];

const Comment = ({ comment }) => {
  return (
    <div className="mb-2 p-2 bg-black text-white rounded-lg">
      <div className="flex items-start">
        <img src={comment.avatar} alt={comment.user} className="w-10 h-10 rounded-full" />
        <div className="w-full ml-2">
          <p className="text-sm text-gray-400">#{comment.id} - <strong>{comment.user}</strong> ({comment.time})</p>
          <p className="mt-1">{comment.text}</p>
          <div className="flex items-center gap-2 mt-1">
            <button className="flex items-center gap-1 text-gray-400 hover:text-white">
              <ThumbsUp size={16} /> {comment.votes}
            </button>
            <button className="flex items-center gap-1 text-gray-400 hover:text-white">
              <ThumbsDown size={16} />
            </button>
            <button className="flex items-center gap-1 text-gray-400 hover:text-white">
              <Reply size={16} /> Reply
            </button>
          </div>
        </div>
      </div>
      {comment.replies.length > 0 && (
        <div className="ml-2 border-l border-gray-700 mt-2 pl-2">
          {comment.replies.map(reply => (
            <Comment key={reply.id} comment={reply} />
          ))}
        </div>
      )}
    </div>
  );
};

export const CommentSection = () => {
  return (
    <div className="mx-auto">
      {comments.map(comment => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </div>
  );
};

export default CommentSection;
