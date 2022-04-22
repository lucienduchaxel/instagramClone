import ProfilePost from './ProfilePost'

function ProfilePosts() {
  return (
    <div className=" grid grid-cols-3 overflow-y-scroll">
      <ProfilePost className="col-span-1" />
      <ProfilePost className="col-span-1" />
      <ProfilePost className="col-span-1" />
      <ProfilePost className="col-span-1" />
      <ProfilePost className="col-span-1" />
      <ProfilePost className="col-span-1" />
      <ProfilePost className="col-span-1" />
      <ProfilePost className="col-span-1" />
    </div>
  )
}

export default ProfilePosts
