function Logo({small}:{small?:boolean}) {
  return (
    <div className={`flex ${small?'h-14':'h-24'} justify-center items-center p-2`}>
      <img className={small?`h-7`:`h-14`} src="/sphere-icon.svg" alt="" />
      <div className="flex flex-col ml-2">
        <h1 className={`${small&&'text-[0.65rem] '}text-black text-center font-bold rounded`}>ചെറിയ</h1>
        <h1 className={`${small?'text-lg leading-4':'text-4xl'}   font-bold`}>ലോകം</h1>
      </div>
    </div>
  )
}

export default Logo
