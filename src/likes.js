import React, { useState } from "react"

function Likes() {
  let likes = "likes"
  const [count, setCount] = useState(0)

  function updateCount(e) {
    e.preventDefault()
    setCount(count + 1)
  }
  if (count === 1) {
    likes = "like"
  }

  return (
    <button className="likesButton" onClick={updateCount}>
      {count} {likes}
    </button>
  )
}

export default Likes
