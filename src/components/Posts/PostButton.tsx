type Pbutton = {
  text: string
  onClick: () => void
}
function PostButton({ text, onClick }: Pbutton) {
  return (
    <div
      onClick={() => onClick()}
      className="hover:bg-gray-300 cursor-pointer w-full rounded-sm p-1 text-center"
    >
      <p>{text}</p>
    </div>
  )
}

export default PostButton
