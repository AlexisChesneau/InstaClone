import React from "react";
import { useState } from "react";
import icons_card from "../data/icons_card.json";

function Post({ user }) {
  const [likeCount, setLikeCount] = useState(user.like);
  const [isLiked, setIsLiked] = useState(false);
  const toggleImage = () => {
    setLikeCount((likeCount) => (isLiked ? likeCount - 1 : likeCount + 1));
    setIsLiked(!isLiked);
  };
  return (
    <div className="flex flex-col">
      <div className="flex items-center h-14 justify-between p-3">
        <div className="flex items-center">
          <img
            className="h-8 w-8 rounded-full mr-[10px]"
            src={user.picture}
            alt=""
          />
          <h3 className="font-roboto-regular text-[14px]">{user.name}</h3>
          <img className="pl-1" src={user.certified} alt="" />
          <span className="px-1 text-[#A8A8A8]">&bull;</span>
          <p className="text-[#0095F6] font-roboto-medium text-[0.875rem]">
            Suivre
          </p>
        </div>
        <img src="./images/icons/more-option.svg" alt="more-option" />
      </div>
      <video width="375" height="468" controls autoPlay>
        <source src={user.post} type="video/mp4" />
      </video>
      <div className="mx-4">
        <div className="flex mt-2">
          <button className="mr-4" onClick={toggleImage}>
            <img
              src={
                isLiked
                  ? "./images/icons/red_heart.svg"
                  : "./images/icons/white_heart.svg"
              }
              alt=""
            />
          </button>
          {icons_card.map((icon_card, idx) => (
            <button
              key={idx}
              className={` ${
                idx === icons_card.length - 1 ? "ml-auto" : "mr-4"
              }`}
            >
              <img src={icon_card.src} alt={icon_card.alt} />
            </button>
          ))}
        </div>
        <span className="text-[0.875rem]">{likeCount} J'aime</span>
        <div className="flex">
          <h3 className="font-roboto-regular text-[0.875rem]">{user.name}</h3>
          <img className="p-1" src={user.certified} alt="" />
          <p className="text-[0.875rem]">{user.caption}</p>
        </div>
        <button className="text-[#A8A8A8] text-[0.875rem]">
          Afficher les 5 commentaires
        </button>
      </div>
    </div>
  );
}

export default Post;
