import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom'
import Header from './Header'
import Quote from './Quote'

import axios from 'axios'

function Author({authorName}) {
    const [author, setAuthor] = useState(authorName);
    const [data,setData] = useState([])

    useEffect(() => {
        let url = "https://quote-garden.herokuapp.com/api/v3/quotes";
        axios.get(url, {
            params: {
                author,
            }
        })
            .then(response => {
                // console.log("Response", response);
                setData(response.data.data)
                // console.log('Data', data)
            })
            .catch((error) => console.log(error))
    }, [])
    return (
      <div className="container">
        <Link to="/" id="link">
          <Header />
        {  data.length >= 1 ?
          <div className="card">
            <h3>{author}</h3>
            {data.map((quote) => {
              return (
                <>
                  <Quote quote={quote} />
                  <br />
                </>
              );
            })}
          </div>
          :<h3>Loading...</h3>
}
        </Link>
      </div>
    );
}

export default Author
