import React, { useContext, useState } from 'react'
import { NovelContext } from '../context/NovelContext';

const NovelForm = () => {

  const {addNovel} = useContext(NovelContext);

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('light novel');

  const handleSubmit = e => {
    e.preventDefault();
    addNovel(title, author, category);
    setTitle('');
    setAuthor('');
    setCategory('light novel');
  }

  return (
    <form className="row" onSubmit={handleSubmit}>
      <h1 className="center">Add a novel</h1>
      <div className="input-field col s6">
        <input type="text" value={title} onChange={e => setTitle(e.target.value)} required/>
        <label>Title</label>
      </div>
      <div className="input-field col s6">
        <input type="text" value={author} onChange={e => setAuthor(e.target.value)} required/>
        <label>Author</label>
      </div>
      <div className="input-field col s6">
        <select className="browser-default" name="category" value={category} onChange={e => setCategory(e.target.value)}>
          <option value="light novel">Light novel</option>
          <option value="manga">Manga</option>
        </select>
      </div>
      <input style={{cursor: 'pointer'}} className="btn waves-effect" type="submit" value="Add novel"/>
    </form>
  )
}

export default NovelForm;