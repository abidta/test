type Pbutton = {
  text: string
  onClick: () => void
 liked?:boolean
}
function PostButton({ text, liked, onClick }: Pbutton) {
  return (
    <div
      onClick={() => onClick()}
      className={`${
        liked ? 'bg-blue-600 ' : 'hover:bg-gray-300'
      }  cursor-pointer w-full rounded-sm p-1 text-center`}
    >
      <p>{text}</p>
    </div>
  )
}

export default PostButton
