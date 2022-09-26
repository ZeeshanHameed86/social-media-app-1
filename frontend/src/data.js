import {
  FaEnvelope,
  FaCompass,
  FaHome,
  FaBell,
  FaRegBookmark,
  FaPalette,
  FaEllipsisH,
  FaRegCommentDots,
} from "react-icons/fa";
import { BiLineChartDown } from "react-icons/bi";
import {
  AiFillSetting,
  AiOutlineHeart,
  AiOutlineShareAlt,
} from "react-icons/ai";
import profile1 from "./assets/profile-2.jpg";
import profile2 from "./assets/profile-3.jpg";
import profile3 from "./assets/profile-4.jpg";
import profile4 from "./assets/profile-5.jpg";
import profile5 from "./assets/profile-6.jpg";
import profile6 from "./assets/profile-7.jpg";
import profile7 from "./assets/profile-8.jpg";
import profile8 from "./assets/profile-9.jpg";
import profile9 from "./assets/profile-10.jpg";
import profile10 from "./assets/profile-11.jpg";
import profile11 from "./assets/profile-12.jpg";
import profile12 from "./assets/profile-13.jpg";
import profile13 from "./assets/profile-14.jpg";
import profile14 from "./assets/profile-15.jpg";
import profile15 from "./assets/profile-16.jpg";
import profile16 from "./assets/profile-17.jpg";
import profile17 from "./assets/profile-18.jpg";

export const leftBar = [
  {
    icon: <FaHome className="icon" />,
    classActive: "active",
    title: "Home",
  },
  {
    icon: <FaCompass className="icon" />,
    title: "Explore",
  },
  {
    id: "notifications",
    class: "notification-count",
    icon: <FaBell className="icon" />,
    title: "Notifications",
  },
  {
    id: "messages-notifications",
    class: "notification-count",
    icon: <FaEnvelope className="icon" />,
    title: "Messages",
  },
  {
    icon: <FaRegBookmark className="icon" />,
    title: "Bookmarks",
  },
  {
    icon: <BiLineChartDown className="icon" />,
    title: "Analytics",
  },
  {
    icon: <FaPalette className="icon" />,
    title: "Theme",
  },
  {
    icon: <AiFillSetting className="icon" />,
    title: "Settings",
  },
];

export const notifications = [
  {
    name: "Keke Benjamin",
    comment: "accepted your friend request",
    profilePic: profile1,
    time: "2 DAYS AGO",
  },
  {
    name: "John Doe",
    comment: "commented on your post",
    profilePic: profile2,
    time: "1 HOUR AGO",
  },
  {
    name: "Mary Oppong ",
    comment: "and 283 others liked your post",
    profilePic: profile3,
    time: "4 MINUTES AGO",
  },
  {
    name: "Doris Y.Lartey",
    comment: "commented on a post you are tagged in",
    profilePic: profile4,
    time: "2 DAYS AGO",
  },
  {
    name: "Donald Trump",
    comment: "commented on a post you are tagged in",
    profilePic: profile5,
    time: "1 HOUR AGO",
  },
  {
    name: "John Doe",
    comment: "commented on your post",
    profilePic: profile6,
    time: "1 HOUR AGO",
  },
];

export const stories = [
  {
    image: profile7,
    name: "Your Story",
  },
  {
    image: profile8,
    name: "Lilla James",
  },
  {
    image: profile9,
    name: "Winnie Hale",
  },
  {
    image: profile10,
    name: "Daniel Bale",
  },
  {
    image: profile11,
    name: "Jane Doe",
  },
  {
    image: profile12,
    name: "Tina White",
  },
];

export const feeds = [
  {
    image: profile13,
    name: "Lana Rose",
    time: "Dubai, 15 MINUTES AGO",
    icon: <FaEllipsisH />,
    postPic: profile14,
    actionBtn1: <AiOutlineHeart className="icon" />,
    actionBtn2: <FaRegCommentDots className="icon" />,
    actionBtn3: <AiOutlineShareAlt className="icon" />,
    bookmarkIcon: <FaRegBookmark />,
    likedBy1: profile4,
    likedBy2: profile5,
    likedBy3: profile6,
    likedByName: "Ernest Achiever",
    LikedByOthers: "2,323 others",
    hashTag: "#lifestyle",
    ViewComments: "View all 277 comments",
  },
  {
    image: profile14,
    name: "Benjamin Dwayne",
    time: "Miami, 2 HOURS AGO",
    icon: <FaEllipsisH />,
    postPic: profile15,
    actionBtn1: <AiOutlineHeart className="icon" />,
    actionBtn2: <FaRegCommentDots className="icon" />,
    actionBtn3: <AiOutlineShareAlt className="icon" />,
    bookmarkIcon: <FaRegBookmark />,
    likedBy1: profile4,
    likedBy2: profile5,
    likedBy3: profile6,
    likedByName: "Ernest Achiever",
    LikedByOthers: "2,323 others",
    hashTag: "#lifestyle",
    ViewComments: "View all 3,473 comments",
  },
  {
    image: profile15,
    name: "Benjamin Dwayne",
    time: "Giana, 2 MINUTE AGO",
    icon: <FaEllipsisH />,
    postPic: profile16,
    actionBtn1: <AiOutlineHeart className="icon" />,
    actionBtn2: <FaRegCommentDots className="icon" />,
    actionBtn3: <AiOutlineShareAlt className="icon" />,
    bookmarkIcon: <FaRegBookmark />,
    likedBy1: profile4,
    likedBy2: profile5,
    likedBy3: profile6,
    likedByName: "Ernest Achiever",
    LikedByOthers: "2,323 others",
    hashTag: "#lifestyle",
    ViewComments: "View all 3,473 comments",
  },
  {
    image: profile16,
    name: "Benjamin Dwayne",
    time: "Miami, 2 HOURS AGO",
    icon: <FaEllipsisH />,
    postPic: profile17,
    actionBtn1: <AiOutlineHeart className="icon" />,
    actionBtn2: <FaRegCommentDots className="icon" />,
    actionBtn3: <AiOutlineShareAlt className="icon" />,
    bookmarkIcon: <FaRegBookmark />,
    likedBy1: profile4,
    likedBy2: profile5,
    likedBy3: profile6,
    likedByName: "Ernest Achiever",
    LikedByOthers: "2,323 others",
    hashTag: "#lifestyle",
    ViewComments: "View all 3,473 comments",
  },
];

export const messages = [
  {
    image: profile14,
    name: "Edem Quist",
    class: "text-muted",
    message: "Just woke up bruh",
  },
  {
    image: profile15,
    name: "Daniella Jackson",
    class: "text-bold",
    active: true,
    message: "2 new messages",
  },
  {
    image: profile16,
    name: "Juliet Makarey",
    class: "text-muted",
    message: "lol u right",
  },
  {
    image: profile17,
    name: "Jane Doe",
    class: "text-bold",
    active: true,
    message: "ok",
  },
];

export const friendRequests = [
  {
    image: profile10,
    name: "Haijia Bintu",
    status: "8 mutual friends",
  },
  {
    image: profile11,
    name: "Jackline Mensah",
    status: "2 mutual friends",
  },
  {
    image: profile12,
    name: "Jennifer Lawrence",
    status: "19 mutual friends",
  },
];
