import React, { Component } from 'react';
 import NewsItem from './NewsItem';

export default class News extends Component {   

 constructor(){
     console.log("constructor called");
     super();
     this.state = {
         articles : [],
         page : 1 ,
     };
 }

  async componentDidMount(){
      console.log("cdm");
      let url = "https://newsapi.org/v2/everything?domains=wsj.com&apiKey=8e234adad42e47ed9973168aaf079863&page=1";
      let data = await fetch(url);
      let parseddata = await data.json();
      console.log(parseddata);
       this.setState ({articles : parseddata.articles});   
  }

  handleprevClick = async () =>{
    let url = `https://newsapi.org/v2/everything?domains=wsj.com&apiKey=8e234adad42e47ed9973168aaf079863&page=${this.state.page - 1}`;
    let data = await fetch(url);
    let parseddata = await data.json();
    console.log(parseddata);
    
      this.setState({
          page : this.state.page-1,
          articles : parseddata.articles
      })
  }

  handlenextClick = async () =>{
    let url = `https://newsapi.org/v2/everything?domains=wsj.com&apiKey=8e234adad42e47ed9973168aaf079863&page=${this.state.page + 1}`;
    let data = await fetch(url);
    let parseddata = await data.json();
    console.log(parseddata);
    
      this.setState({
          page : this.state.page+1,
          articles : parseddata.articles
      })
  }


    render() {
        return (
            <div className = "container my-3">
                <h2>Top Headlines</h2>
                <div className='row'>
                    {
                        this.state.articles.map((element)=>{
                            return <div className='col-md-4' key={element.url}>
                                <NewsItem title = {element.title.slice(0,45)}
                                imgUrl= {element.urlToImage}
                                description = {element.description.slice(0,70)}
                                newsUrl={element.url} />
                       </div> })
                    }

<div class="d-flex justify-content-between">...</div>

                </div>

              <div className='container d-flex justify-content-between'>
              <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handleprevClick}>Prev</button>
                <button type="button" className="btn btn-dark" onClick={this.handlenextClick}>Next</button>
              </div>
                    
                          

                    
                </div>
                
            
        )
    }
}


