import React, { useContext } from 'react'
import { NovelContext } from '../context/NovelContext'

const Novel = ({ novel }) => {

  const { removeNovel } = useContext(NovelContext);

  const bg = novel.category === 'light novel' ? '#EE6E73' : '#2BBBAD'

  const style = {
    cursor: 'pointer',
    backgroundColor: bg
  }

  return (
    <div
      className="card col s6"
      onDoubleClick={() => removeNovel(novel.id)}
      style={style}
    >
      <h3 className="center">{novel.title}</h3>
      <p className="center">Author: {novel.author}</p>
      <p className="center">Category: {novel.category}</p>
    </div>
  )
}

export default Novel