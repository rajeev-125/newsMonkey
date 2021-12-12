import React, { Component } from 'react';
 import NewsItem from './NewsItem';

export default class News extends Component {   

 constructor(){
     console.log("constructor called");
     super();
     this.state = {
         articles : []
     };
 }

  async componentDidMount(){
      console.log("cdm");
      let url = "https://newsapi.org/v2/everything?domains=wsj.com&apiKey=8e234adad42e47ed9973168aaf079863";
      let data = await fetch(url);
      let parseddata = await data.json();
      console.log(parseddata);
       this.setState ({articles : parseddata.articles});   
  }


    render() {
        return (
            <div className = "container my-3">
                <h2>Top Headlines</h2>
                <div className='row'>
                    {
                        this.state.articles.map((element)=>{
                            return <div className='col-md-4' key={element.url}>
                                <NewsItem title = {element.title}
                                imgUrl={element.imgUrl}
                                description = {element.description}
                                newsUrl={element.newsUrl} />
                       </div> })
                    }

                </div>
                    
                          

                    
                </div>
                
            
        )
    }
}


