import React, { useState, useEffect } from 'react';
import ArticleBox from './ArticleBox'


function NewsfeedDisplay(props) {
  
  const api_key = '3dda2fc023ec4e069e345cf63b66fb01';
  const generalCat = 'general';
  const scienceCat = 'science';
  const techCat = 'technology';
  const businessCat = 'business';
  const sportsCat = 'sports';
  
  const [ state, setState ] = useState({
    newsCtgry: 'general',
    articles: []
  });
  
  // fetch all articles at initial render

  useEffect( () => {
    console.log('rendered!');

    const fetchUrl = `https://newsapi.org/v2/top-headlines?`
    + `country=us`
    + `&category=${state.newsCtgry}`
    + `&apiKey=${api_key}`;

    fetch(fetchUrl)
      .then(data => data.json())
      .then(data => {
        // console.log(data);
        let upperbound = data.articles.length < 50 ? data.articles.length : 50;

        for(let i = 0; i < upperbound; i++){
          articles.push(data.articles[i]);
          // const url = article.url;
          // const content = article.content;
        }
        
        setState({...state, articles});
      })
      .catch(err => console.log(err.message));
  }, []); //second param tells useeffect when to render, but passing in empty array as parameter we are making the useeffect wait indefinitely (so no infinite loop)

  console.log(state);

  const articles = state.articles.map(article => <ArticleBox 
    source={article.source.name}
    author={article.author}
    title={article.title}
    description={article.description}
    image={article.urlToImage}
    date={article.publishedAt}
    />
  );

  return(
    <div id='newsFeed'>
      <div id='catNav'>                  
        <span onClick={() => setState({ ...state, newsCtgry: generalCat })}>General</span> 
        {/* setState will run rerender, but not useEffect, so no infinte loop */}
        <span onClick={() => setState({ ...state, newsCtgry: scienceCat })}>Science</span>
        <span onClick={() => setState({ ...state, newsCtgry: techCat })}>Techology</span>
        <span onClick={() => setState({ ...state, newsCtgry: businessCat })}>Business</span>
        <span onClick={() => setState({ ...state, newsCtgry: sportsCat })}>Sports</span>
      </div>
      <div id='articles'>
        {articles}
      </div>
    </div>
  );

}

export default NewsfeedDisplay;
