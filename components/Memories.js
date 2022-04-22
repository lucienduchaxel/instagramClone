import Memorie from './Memorie'

function Memories() {
  return (
    <div
      className="flex space-x-2 overflow-x-scroll 
     p-6 scrollbar-thin scrollbar-thumb-black md:mt-8"
    >
      <Memorie />
      <Memorie />
      <Memorie />
      <Memorie />
      <Memorie />
    </div>
  )
}

export default Memories
