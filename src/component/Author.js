import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom'
import Header from './Header'
import Quote from './Quote'

import axios from 'axios'
import HashLoader from 'react-spinners/HashLoader';

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
                setData(response.data.data)
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
          :<HashLoader />
}
        </Link>
      </div>
    );
}

export default Author
