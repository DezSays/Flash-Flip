import React from 'react'

const FlipOrFlounder = () => {
  const t1 = async() => {
    const t2 = await fetch(`https://github.com/DezSays/Custom_API/blob/main/data.json`)
    console.log(t2)
  }
  t1()
  return (
    <div >FlipOrFlounder
      <button>xxx</button>
    </div>
  )
}

export default FlipOrFlounder