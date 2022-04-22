import Image from 'next/image'
import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  MenuIcon,
  PaperAirplaneIcon,
  HeartIcon,
} from '@heroicons/react/outline'
import { HomeIcon } from '@heroicons/react/solid'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useRecoilState } from 'recoil'
import { modalState } from '../atoms/modalAtom'

function Header() {
  const { data: session } = useSession()
  const router = useRouter()
  const [open, setOpen] = useRecoilState(modalState)

  console.log(session)

  return (
    <div className="sticky top-0 z-30 border-b bg-white shadow-sm">
      <div className="  mx-5 flex max-w-6xl justify-between lg:mx-auto">
        {/* Left */}
        <div className="relative  hidden w-24 cursor-pointer sm:inline-grid">
          <Image
            src="https://links.papareact.com/ocw"
            layout="fill"
            objectFit="contain"
          />
        </div>

        <div className="relative m-2 h-10 w-10 flex-shrink-0  cursor-pointer sm:hidden">
          <Image
            src="https://links.papareact.com/jjm"
            layout="fill"
            objectFit="contain"
            onClick={() => router.push('/')}
          />
        </div>
        {/* Center */}
        <div className=" hidden  max-w-xs sm:inline-grid  ">
          <div className="relative mt-1 rounded-md p-3">
            <div className="pointer-events-none absolute inset-y-0 flex items-center pl-3">
              <SearchIcon className=" h-5 w-5 text-gray-500" />
            </div>
            <input
              placeholder="search"
              type="text"
              className="block w-full rounded-md border-gray-300 bg-gray-50 pl-10 focus:border-black focus:ring-black sm:text-sm"
            />
          </div>
        </div>

        {/* Right */}

        <div className="flex items-center justify-end space-x-3">
          <HomeIcon className="navBtn" onClick={() => router.push('/')} />

          <UserGroupIcon className="navBtn" />
          <PlusCircleIcon
            onClick={() => setOpen(true)}
            className="h-6 cursor-pointer transition-all duration-150 ease-out hover:scale-125"
          />

          <div className="relative h-6 cursor-pointer transition-all duration-150 ease-out hover:scale-125">
            <HeartIcon className="h-6 cursor-pointer transition-all duration-150 ease-out hover:scale-125 " />
            <div className="absolute -top-0 -right-0 flex h-2 w-2 items-center justify-center rounded-full bg-red-500 text-xs text-white"></div>
          </div>

          <div className="relative h-6 cursor-pointer transition-all duration-150 ease-out hover:scale-125">
            <PaperAirplaneIcon className="h-6 rotate-45 cursor-pointer transition-all duration-150 ease-out hover:scale-125 " />
            <div className="absolute -top-1 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
              3
            </div>
          </div>

          <img
            onClick={() => router.push('/profile')}
            src={session?.user?.image}
            alt=""
            className="hidden h-10 w-10 cursor-pointer rounded-full md:inline-grid"
            objectFit="contain"
          />
        </div>
      </div>
    </div>
  )
}

export default Header
