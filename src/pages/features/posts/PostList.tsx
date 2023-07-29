import {  useSelector } from "react-redux";
import { selectAllPosts } from "./postSlice";


const PostList = () => {
    const posts = useSelector(selectAllPosts)

    const renderedPosts = posts.map((post: any) => (
        <article key={post.id} className="border w-[300px] h-full mx-auto my-3 text-white  transition ease-in-out delay-150 bg-black hover:-translate-y-1 hover:scale-110 hover:bg-gradient-to-br from-black to-[#111111] duration-300 cursor-pointer hover:shadow-md hover:shadow-black p-5 ">
            <h2 className="text text-lg font-bold">{post.title}</h2>
            <p>{post.content.substring(0, 100)}</p>
        </article>
    ))
  return (
    <section  className=" text-center  ">
        <h2 className="text-2xl font-sans font-extrabold">Posts</h2>
        <div className="flex justify-center flex-col ">
        {renderedPosts}
      </div>
    </section>
  )
}

export default PostList