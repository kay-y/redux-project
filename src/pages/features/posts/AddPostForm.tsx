import { useState } from "react"
import React from 'react'
import {useDispatch} from  "react-redux"
import {nanoid} from "@reduxjs/toolkit"
import { postAdded } from "./postSlice"

const AddPostForm = () => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const dispatch = useDispatch();


    const onTitleChanged = (e: any) => setTitle(e.target.value)
    const onContentChanged = (e: any) => setContent(e.target.value)


    const onSavePostClicked =()=> {
        if (title && content) {
            dispatch(
                postAdded({
                    id: nanoid(),
                    title,
                    content
                })
            )
            setTitle('')
            setContent('')
        }
    }
  return (
    <section className=" items-center  w-[300px] h-auto mx-auto py-10 text-white">
        <h2 className="font-extrabold font-serif text-2xl">Add new Post</h2>
        <form className=" flex-col flex">
            <label htmlFor="postTitle" className="">Post Title</label>
            <input type="text" id="postTitle" onChange={onTitleChanged} value={title} name="postTitle" className="text-slate-700" />
            <label htmlFor="postContent">Content:</label>
            <textarea id="postContent" name="postContent" value={content} onChange={onContentChanged} className="text-slate-700 " />
            <button type="button" onClick={onSavePostClicked} className="border border-slate-600 rounded-lg mt-4 w-[100px] p-2 text-center items-center mx-auto hover:bg-gradient-to-r from-slate-700 to-slate-800 transition-ease-in-out duration-300 delay-150 hover:-translate-x-1 hover:scale-130">Save Post</button>
        </form>
    </section>
  )
}

export default AddPostForm;