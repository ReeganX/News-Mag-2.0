import React from 'react'

const Card = ({ data }) => {

  return (
    <div className='cardContainer'>
      {data.map((curItem, index) => {
        
        // Skip if no image available
        if (!curItem.image_url) {
          return null;
        }

        return (
          <div className='card' key={index}>
            <img src={curItem.image_url} alt="news" />

            <div className='content'>

              <a 
                className='title' 
                onClick={() => window.open(curItem.link)} 
                style={{ cursor: "pointer" }}
              >
                {curItem.title}
              </a>

              <p>{curItem.description}</p>

              <button onClick={() => window.open(curItem.link)}>
                Read More
              </button>
            </div>
          </div>
        );
      })}
    </div>
  )
}

export default Card
