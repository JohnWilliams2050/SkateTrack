import { Link, useParams } from "react-router-dom";
import Image from "../Components/Image";
import Comments from "../Components/Comments";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import {format} from "timeago.js";

const fetchPost  = async (slug) => {
    const res = await axios.get(`${import.meta.env.VITE_API_URL}/posts/${slug}`);
    return res.data;
};

const SinglePostPage = () => {
  const {slug} = useParams();

  const {isPending,error,data} = useQuery({
      queryKey: ["post", slug],
      queryFn: () => fetchPost(slug),
  });

  if (isPending) return "Loading...";
  if (error) return "Something went wrong..." + error.message;
  if (!data) return "Post not found!";
  return (
    <div className='flex flex-col gap-8'>
      {/* detail */}
      <div className="flex gap-8">
        <div className="lg:w-3/5 flex flex-col gap-8">
          <h1 className="text-cl md:text-3xl cl:text-4xl exl:text-5xl font-semibold">
            {data.title}
          </h1>
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>Posted by</span>
            <Link className="text-blue-800">{data.user.username}</Link>
            <span>{format(data.createdAt)}</span>
          </div>
          <p className="text-gray-500 font-medium">
            {data.desc}
          </p>
        </div>
        {data.img && (<div className="hidden lg:block w-2/5">
          <Image src={data.img} w="600" className="rounded-2xl"/>
        </div>)}
      </div>
      {/*Menu*/}
      <div className="px-4 h-max sticky top-8">
        <h1 className="mt-8 mb-4 text-sm font-medium">Author</h1>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-8">
            {data.user.img &&(<Image src={data.user.img}
            className="w-12 h-12 rounded-full object-cover"
            w="48"
            h="48"
            />)}
            <Link className="text-sm text-blue-800">{data.user.username}</Link>
          </div>
        </div>
        <p className="text-sm text-gray-500">blah blah blah</p>
        <div className="flex gap-2">
        </div>
      </div>
      <Comments postId={data._id}/>
    </div>
  );
};

export default SinglePostPage