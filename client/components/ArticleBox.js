import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


function ArticleBox (props) {

  const [ show, setShow ] = useState(false);
  
  return (
    <div> 
      <div id='artclBox' onClick={() => {console.log('dsad'); setShow(true)} }>
        {/* if no url for image, do not render on screen */}
        {props.image && <img src={props.image}/>} 
        <input type='button' id='favButton' value='Fav'/>
        {/* https://codepen.io/Guades/pen/bewZgO */}
        <h3>{props.title}</h3>
        <h4>{props.author}</h4>
        <h5>{new Date(props.date).toLocaleDateString()}</h5> 
        <p>{props.description}</p>
      </div>

      <Modal show={show} onHide={() => setShow(false) }>
          <Modal.Title>
            {props.title}
            {props.author}
            {new Date(props.date).toLocaleDateString()}
          </Modal.Title>
          <Modal.Body>
            {props.image && <img src={props.image}/>} 
            {props.content}
            <a href={props.url} target="_top">Click here to see more</a>
          </Modal.Body>
      </Modal>
    </div>
  )
}

export default ArticleBox;