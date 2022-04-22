function Story({ img, username }) {
  return (
    <div className="pr-3">
      <img
        src={img}
        alt="image"
        className="h-14 w-14 transform cursor-pointer rounded-full border-2 border-red-500 
        object-contain p-[1.5px] transition duration-200 hover:scale-110"
      />
      <p className="w-14 truncate text-center text-xs">{username}</p>
    </div>
  )
}

export default Story
