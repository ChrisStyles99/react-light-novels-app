import React, { useContext, useState } from 'react'
import { NovelContext } from '../context/NovelContext';
import Novel from './Novel';

const SearchNovel = () => {

  const {novelTerm, searchNovel} = useContext(NovelContext);

  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    searchNovel(searchTerm);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Search</h1>
        <div className="input-field">
          <input type="text" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
          <label>Search...</label>
        </div>
      </form>
      {novelTerm.map(novel => {
        return (
          <Novel novel={novel} key={novel.id}/>
        )
      })}
    </div>
  )
}

export default SearchNovel;