import React, { useState, useContext } from 'react';
import css from './NewPost.module.css';
import FileLoader from './FileLoader.js';
import {
  useHistory
} from "react-router-dom";
import { StoreContext } from 'contexts/StoreContext';

function NewPost(props) {
  const [dragging, setDragging] = useState(false); // to show a dragging effect
  const [desc, setDesc] = useState('');
  const [photo, setPhoto] = useState(null);
  const [error, setError] = useState(''); // to show an error message
  const history = useHistory();
  let {
    addPost
  } = useContext(StoreContext);

  function handleFileDragEnter(e){
    setDragging(true);
  }
  function handleFileDragLeave(e){
    setDragging(false);
  }
  function handleFileDrop(e){
    if (e.dataTransfer.types.includes('Files')===false){
			return;
    }
    if (e.dataTransfer.files.length>=1){
      let file = e.dataTransfer.files[0];
      if (file.size>1000000){// larger than 1 MB
        return;
      }
      if (file.type.match(/image.*/)){
				let reader = new FileReader();			
				reader.onloadend = (e) => {
          setPhoto(e.target.result);
		
				};
				reader.readAsDataURL(file);
			}
    }
    setDragging(false);    
  }
  function handleDescChange(e){
		setDesc(e.target.desc)
  }
  function handleSubmit(e){
    e.preventDefault();
    if(photo===null){
      setError('You need to add a photo!');
      return;
    }
    setError('');

    addPost(photo, desc);
    history.push('/');
  }

  function handleCancel(){
    // TODO: Notify the parent about the cancellation
    history.goBack();
    //props.onCancel();
  }
  return (
    <div>
        
        <div className={css.photo}>
          {!photo?  <div className={css.message}>Drop your image</div>:
                    <img src={photo} alt="New Post"/>}
            <FileLoader
              onDragEnter={handleFileDragEnter}
              onDragLeave={handleFileDragLeave}
              onDrop={handleFileDrop}
            >
	            <div className={[css.dropArea, dragging?css.dragging:null].join(' ')}
              ></div>
	          </FileLoader>
          
        </div>
        
        <div className={css.desc} >
            <textarea placeholder="Add a description…" rows="2" value={desc} onChange={handleDescChange}/>
        </div>
        <div className={css.error}>
					{error}
        </div>
        <div className={css.actions}>
          <button onClick={handleCancel}>Cancel</button>
          <button onClick={handleSubmit}>Share</button>          
        </div>
    </div>
  );
}

export default NewPost;