import { Link } from "react-router-dom"
import Image from "./Image"

const PostListItem = () => {
  return (
    <div className='flex flec-col xl:flex-row gap-8'>
        {/*image*/}
        <div className="md:hidden xl:block xl:w-1/3">
            <Image src = "postimage.png" className="rounded-2xl object-cover" w="735"/>
        </div>
        {/*details*/}
        <div className="flex flex-col gap-4 xl:w-2/3">
            <Link to="/test" className="text-4xl font-semibold">
            Rollerskating Activity
            </Link>
            <div className="flex items-center gap-2 text-gray-400 text-sm">
                <span>Shared by</span>
                <Link className="text-blue-800">Ana Lucas</Link>
                <span>2 days ago</span>
            </div>
            <p>
                Activity: asdjfklasjdklfjajdfaklsdjfajsd<br />
                Time: saljdflkjdsflkjadf<br />
                Distance: jfklsadjlkfjaldksjflasjdflkjasd<br />
                Comments: akjfdlkjaskldjfdlkajsfdkjad<br />
            </p>
            <Link to="/test" className="underline text0blue-800 text-sm">Read More</Link>
        </div>
    </div>
    

  )
}

export default PostListItem