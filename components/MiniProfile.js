import { useSession, signOut } from 'next-auth/react'

function MiniProfile() {
  const { data: session } = useSession()
  return (
    <div className="mt-14 ml-10 flex items-center justify-between">
      <img
        className=" h-16 w-16 rounded-full border p-[2px]"
        src={session?.user?.image}
        alt=""
      />
      <div className="mx-4 flex-1">
        <h2 className="font-bold">{session?.user.username}</h2>
        <h3 className="text-sm text-gray-500">Welcome to Instagram</h3>
      </div>

      <button onClick={signOut} className="text-sm font-semibold text-blue-500">
        Sign out
      </button>
    </div>
  )
}

export default MiniProfile
