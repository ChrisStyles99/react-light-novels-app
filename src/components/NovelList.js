import React, { useContext } from 'react'
import { NovelContext } from '../context/NovelContext';
import Novel from './Novel';

const NovelList = () => {

  const {novels} = useContext(NovelContext);

  return (
    <div>
      <span>Light novel: <div className="ln-square"></div></span>
      <span>Manga: <div className="manga-square"></div></span>
      {novels.map(novel => {
        return(
          <Novel novel={novel} key={novel.id} />
        );
      })}
    </div>
  )
}

export default NovelList;
