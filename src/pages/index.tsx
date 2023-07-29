import Image from 'next/image'
import { Inter } from 'next/font/google'
import { store } from './store'
import { Provider } from 'react-redux'
import PostList from './features/posts/PostList'
import AddPostForm from './features/posts/AddPostForm'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Provider store={store}>
      <main className=''>
                    <AddPostForm /> 
      <PostList />

      </main>
    </Provider>
  )
}
