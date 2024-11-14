import React from "react";

const NewsItem = (props)=> {
    let { title, description, imageUrl, newsUrl, date, author, source  } = props;
    return (
      <div>
        <div className="card">
        <div className="container" style={{
          display: 'flex',
          position: 'absolute',
          justifyContent:'flex-end',
          right: '0'
          }} >
          <span className="badge rounded-pill bg-danger" >{source}</span>
          </div>
          <img src={imageUrl} className="card-img-top" alt="..." />
          
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text my-2">{description}</p>
            <a
              href={newsUrl}
              className="btn btn-primary btn-sm btn-dark"
              target="_blank"
              rel="noreferrer"
            >
              Read More
            </a>
            <p className="card-text">
              <small className="text-body-secondary">
                published by {author} on {new Date(date).toGMTString()}
              </small>
            </p>
          </div>
        </div>
      </div>
    );

}

export default NewsItem