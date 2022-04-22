import {
    BookmarkIcon,
    ChatIcon,
    DotsHorizontalIcon,
    EmojiHappyIcon,
    HeartIcon,
    PaperAirplaneIcon,
} from "@heroicons/react/outline";
import { HeartIcon as HeartIconFilled } from "@heroicons/react/solid";
import {
    addDoc,
    collection,
    deleteDoc,
    doc,
    onSnapshot,
    orderBy,
    query,
    serverTimestamp,
    setDoc,
} from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import Moment from "react-moment";
import Link from "next/link";

function Post({ id, username, userImg, img, caption }) {
    const { data: session } = useSession();
    const [comment, setComment] = useState("");
    const [comments, setComments] = useState([]);
    const [likes, setLikes] = useState([]);
    const [hasLiked, setHasLiked] = useState(false);

    useEffect(() => onSnapshot(collection(db, "posts", id, "likes"), (snapshot) => setLikes(snapshot.docs)), [db, id]);

    const likePost = async () => {
        if (hasLiked) {
            await deleteDoc(doc(db, "posts", id, "likes", session.user.uid));
        } else {
            await setDoc(doc(db, "posts", id, "likes", session.user.uid), {
                username: session.user.username,
            });
        }
    };

    useEffect(() => {
        setHasLiked(likes.findIndex((like) => like.id === session?.user?.uid) !== -1);
    }, [likes]);

    useEffect(() => {
        onSnapshot(query(collection(db, "posts", id, "comments"), orderBy("timestamp", "desc")), (snapshot) =>
            setComments(snapshot.docs)
        );
    }, [db, id]);

    const sendComment = async (e) => {
        e.preventDefault();

        const commentToSend = comment;
        setComment("");

        await addDoc(collection(db, "posts", id, "comments"), {
            comment: commentToSend,
            username: session.user.username,
            uid: session.user.uid,
            userImage: session.user.image,
            timestamp: serverTimestamp(),
        });
    };

    return (
        <div className="rounded-sm border bg-white md:my-7">
            {/* Header */}
            <div className="flex items-center p-4">
                <img
                    src={userImg}
                    alt=""
                    className="mr-3 h-12 w-12 rounded-full border object-contain p-1"
                    objectFit="contain"
                />
                <Link href={"/profile/" + session.user.uid}>
                    <p className="flex-1 cursor-pointer text-xs font-bold">{username}</p>
                </Link>
                <DotsHorizontalIcon className="h-5" />
            </div>

            {/* Img */}

            <img src={img} alt="" className="w-full object-cover" />
            {/* Buttons */}
            <div className="flex justify-between px-4 pt-4">
                <div className="flex space-x-4">
                    {hasLiked ? (
                        <HeartIconFilled onClick={likePost} className="btnPost text-red-500" />
                    ) : (
                        <HeartIcon onClick={likePost} className="btnPost" />
                    )}

                    <ChatIcon className="btnPost" />
                    <PaperAirplaneIcon className="btnPost" />
                </div>

                <BookmarkIcon className="btnPost" />
            </div>

            {/* caption  */}

            <p className="truncate p-5">
                {likes.length > 0 && <p className="mb-1 font-bold">{likes.length} likes</p>}
                <span className="mr-1 font-bold">{username} </span>
                {caption}
            </p>

            {/* Comments */}

            {comments.length > 0 && (
                <div className="scrollbar-thin scrollbar-thumb-black ml-10 h-20 overflow-y-scroll">
                    {comments.map((comment) => (
                        <div key={comment.id} className="mb-3 flex items-center space-x-2">
                            <img src={comment.data().userImage} alt="" className="h-7 rounded-full" />
                            <p className="flex-1 text-sm">
                                <span className="font-bold">{comment.data().username}</span> {comment.data().comment}
                            </p>

                            <Moment fromNow className="pr-5 text-xs">
                                {comment.data().timestamp?.toDate()}
                            </Moment>
                        </div>
                    ))}
                </div>
            )}

            {/* input */}
            <form className="flex items-center p-4">
                <EmojiHappyIcon className="h-7" />
                <input
                    type="text"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Add a post..."
                    className="flex-1 border-none outline-none focus:ring-0"
                />
                <button
                    type="submit"
                    disabled={!comment.trim()}
                    onClick={sendComment}
                    className="font-semibold text-blue-400"
                >
                    Post
                </button>
            </form>
        </div>
    );
}
export default Post;
