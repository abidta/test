function PostContainer({ child }: { child: JSX.Element | string }) {
  return (
    <div className="border border-slate-200 bg-white m-4 mx-5 p-4 rounded-lg shadow-md">
      <div className="flex flex-col">{child}</div>
    </div>
  )
}

export default PostContainer
