import { useRef, useState } from 'react'
import { Outlet } from 'react-router-dom'

function CenterContainer() {
  const [offset, setOffset] = useState(1)
  const listInnerRef = useRef<HTMLDivElement>(null)
  const pageLimit = 10

  const handleScroll = () => {
    const { scrollTop, scrollHeight, clientHeight } =
      listInnerRef.current as HTMLDivElement

    // console.log(scrollHeight, scrollTop, clientHeight)

    if (scrollTop + clientHeight + 5 >= scrollHeight) {
      setOffset(offset + 1)
    }
  }

  return (
    <div
      onScroll={handleScroll}
      className="basis-5/12 overflow-y-scroll h-screen scroll-hide"
      ref={listInnerRef}
    >
      <Outlet context={{ offset, pageLimit }} />
    </div>
  )
}

export default CenterContainer
