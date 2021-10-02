import React from 'react';

function ArticleBox (props) {
  return (
    <div id='artclBox'>
      {/* if no url for image, do not render on screen */}
      {props.image && <img src={props.image}/>} 
      <input type='button' id='favButton' value='Fav'/>
      {/* https://codepen.io/Guades/pen/bewZgO */}
      <h3>{props.title}</h3>
      <h4>{props.author}</h4>
      <h5>{new Date(props.date).toLocaleDateString()}</h5> 
      <p>{props.description}</p>
    </div>
  )
}

export default ArticleBox;