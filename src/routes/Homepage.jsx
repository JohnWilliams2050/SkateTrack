import { Link } from "react-router-dom";
import PostList from "../Components/PostList";

const Homepage = () => {
  return (
    <div className='mt-4 flex flex-col gap-6'>
      {/* BREADCRUMS */}
      <div className='flex gap-4'>
        <Link to="/">Home</Link>
        <span>*</span>
        <span className="text-blue-800"> User Activities</span>
      </div>
      {/* INTRODUCTION */}
      <div className="flex items-center justify-between">
        {/*titles*/}
        <div className="">
          <h1 className="text-gray-800 text-2xl md:text-5xl lg:text-6xl font-bold">Activities</h1>
        </div>
      </div>
      {/*animated button*/}
      <Link to="write" className="hidde md:block relative">
        <button className="absolute py-2 px-4 rounded-3xl bg-blue-800 text-white">Share your Activity</button>
      </Link>
      {/* POST LIST */}
      <div className="">
        <h1 className="my-8 text-2xl text-gray-600">Activities</h1>
        <PostList/>
      </div>
    </div>
  );
};

export default Homepage