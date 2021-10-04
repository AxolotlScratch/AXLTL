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
    //console.log('rendered!');
    fetchArticles(state.newsCtgry);
  }, []); //second param tells use effect when to render, but passing in empty array as parameter we are making the use effect wait indefinitely (so no infinite loop). Runs twice, once when inital render and when component unmount

  const fetchArticles = newsCtgry => {
    const fetchUrl = `https://newsapi.org/v2/top-headlines?`
    + `country=us`
    + `&category=${newsCtgry}`
    + `&apiKey=${api_key}`
    + `&pageSize=50`;

    fetch(fetchUrl)
      .then(data => data.json())
      .then(data => {
        const articles = [];
        
        // get up to 50 articles in case url param pageSize throws a fit
        let upperbound = data.articles.length < 50 ? data.articles.length : 50;

        for(let i = 0; i < upperbound; i++){
          articles.push(data.articles[i]);
        }
        
        setState({...state, newsCtgry, articles}); //by naming the parameter of fetchArticles the same as state, we can use this shorthand (same with articles)
      })
      .catch(err => console.log(err.message));
  }

  const articles = state.articles.map((article, i) => <ArticleBox 
    key={`article${i}`}
    source={article.source.name}
    author={article.author}
    title={article.title}
    description={article.description}
    image={article.urlToImage}
    date={article.publishedAt}
    url = {article.url}
    content = {article.content}
    />
  );

  return(
    <div id='newsFeed'>
      <div id='catNav'>                  
        <span onClick={() => fetchArticles(generalCat)}>General</span> 
        {/* setState will run rerender, but not useEffect, so no infinte loop */}
        <span onClick={() => fetchArticles(scienceCat)}>Science</span>
        <span onClick={() => fetchArticles(techCat)}>Techology</span>
        <span onClick={() => fetchArticles(businessCat)}>Business</span>
        <span onClick={() => fetchArticles(sportsCat)}>Sports</span>
      </div>
      <div id='articles'>
        {articles}
      </div>
    </div>
  );

}

export default NewsfeedDisplay;
