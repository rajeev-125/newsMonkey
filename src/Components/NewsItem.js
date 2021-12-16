import React, { Component } from 'react'

export default class NewsItem extends Component {
  

    render() {
        let {title,description,imgUrl,newsUrl} = this.props;
        return (
            <div className="my-3">
                 this is a news item Component
                 <div className="card" style={{width: "18rem"}}>
                
  <img src={imgUrl} className="card-img-top"  alt="...." />
  <div className="card-body">
   
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <a href={newsUrl}  className="btn btn-primary">Read more items</a>
  </div>
</div>

            </div>
        )
    }
}
