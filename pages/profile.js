import ProfileHead from '../components/ProfileHead'
import Memories from '../components/Memories'
import Header from '../components/Header'
import ProfilePosts from '../components/ProfilePosts'
function profile() {
  return (
    <div>
      <Header />

      <main className="mx-auto grid grid-cols-1 md:max-w-2xl md:grid-cols-2 xl:max-w-4xl xl:grid-cols-2">
        <div className="col-span-2 ">
          <ProfileHead />
          <Memories />
          <ProfilePosts />
        </div>
      </main>
    </div>
  )
}

export default profile
