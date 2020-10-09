import React, {createContext, useEffect, useState} from 'react';

export const NovelContext = createContext();

const NovelContextProvider = (props) => {

  const [novels, setNovels] = useState([]);
  const [novelTerm, setNovelTerm] = useState([]);

  useEffect(() => {
    getNovels();
    console.log('useEffect ran');
  }, []);

  const getNovels = async() => {
    const res = await fetch('http://localhost:3001/novels');
    const data = await res.json();
    setNovels(data);
  }

  const addNovel = async(title, author, category) => {
    const data = {
      title,
      author,
      category
    };
    await fetch('http://localhost:3001/novels', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    setNovels([...novels, data]);
  };

  const removeNovel = async(id) => {
    await fetch(`http://localhost:3001/novels/${id}`, {
      method: 'DELETE'
    });
    setNovels(novels.filter(novel => novel.id !== id));
  };

  const searchNovel = async(term) => {
    const res = await fetch(`http://localhost:3001/novels?title_like=${term}`);
    const data = await res.json();
    setNovelTerm(data);
  };

  return (
    <NovelContext.Provider value={{novels, novelTerm,addNovel, removeNovel, searchNovel}}>
      {props.children}
    </NovelContext.Provider>
  )
};

export default NovelContextProvider