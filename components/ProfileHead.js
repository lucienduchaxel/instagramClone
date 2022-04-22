import { useSession } from 'next-auth/react'
function ProfileHead() {
  const { data: session } = useSession()
  return (
    <div>
      {/* Profile */}

      <div className="mt-10 mb-14 ml-20 flex">
        <div className=" relative flex min-w-fit">
          <img
            src={session?.user.image}
            alt=""
            className="h-[150px] w-[150px] cursor-pointer rounded-full border-4 border-red-500 
              object-contain p-[4px]"
          />
        </div>
        <div className=" ml-20 mt-5 box-border ">
          <div className="flex">
            <p className=" text-3xl ">Veronikaaaa</p>
            <button className=" ml-10 items-center  rounded-md border bg-sky-500 px-6 text-center text-white ">
              Follow
            </button>
          </div>
          <div className="mt-5 flex">
            <p className="mr-5">
              <span className=" font-bold">29</span> Posts
            </p>
            <p className="mr-5">
              <span className="font-bold">764</span> Followers
            </p>
            <p className="mr-5">
              <span className=" font-bold">34</span> Following
            </p>
          </div>

          <div className="mt-5 flex">
            <p className="text-sm font-bold">Veronika</p>
          </div>

          <div className="mt-3 flex">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam,
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileHead
