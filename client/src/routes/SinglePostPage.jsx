import { Link } from "react-router-dom";
import Image from "../Components/Image";
import Comments from "../Components/Comments";

const SinglePostPage = () => {
  return (
    <div className='flex flex-col gap-8'>
      {/* detail */}
      <div className="flex gap-8">
        <div className="lg:w-3/5 flex flex-col gap-8">
          <h1 className="text-cl md:text-3xl cl:text-4xl exl:text-5xl font-semibold">
            Rollerskating Activity
          </h1>
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>Posted by</span>
            <Link className="text-blue-800">Ana Luca</Link>
            <span>2 days ago</span>
          </div>
          <p className="text-gray-500 font-medium">
                Activity: asdjfklasjdklfjajdfaklsdjfajsd<br />
                Time: saljdflkjdsflkjadf<br />
                Distance: jfklsadjlkfjaldksjflasjdflkjasd<br />
                Comments: akjfdlkjaskldjfdlkajsfdkjad<br />
          </p>
        </div>
        <div className="hidden lg:block w-2/5">
          <Image src="postimage.png" w="600" className="rounded-2xl"/>
        </div>
      </div>
      {/*Menu*/}
      <div className="px-4 h-max sticky top-8">
        <h1 className="mt-8 mb-4 text-sm font-medium">Author</h1>
        <div className=""></div>
        <Image src="default-image.jpg"
        className="w-12 h-12 rounded-full object-cover"
        w="48"
        h="48"
        />
        <Link className="text-sm text-blue-800">Ana Luca</Link>
        <p className="text-sm text-gray-500">blah blah blah</p>
        <div className="flex gap-2">
        </div>
      </div>
      <Comments/>
    </div>
  );
};

export default SinglePostPage