import Stories from './Stories'
import Posts from './Posts'
import MiniProfile from './MiniProfile'
import Suggestions from './Suggestions'

function Feed() {
  return (
    <div>
      <main className="mx-auto grid grid-cols-1 md:max-w-3xl md:grid-cols-2 xl:max-w-6xl xl:grid-cols-3">
        {/* Stories */}
        {/* Posts */}
        <section className="col-span-2">
          <Stories />
          <Posts />
        </section>
        <section className="hidden md:col-span-1 xl:inline-grid">
          <div className="fixed top-20">
            <MiniProfile />
            <Suggestions />
          </div>
        </section>
      </main>
    </div>
  )
}

export default Feed
