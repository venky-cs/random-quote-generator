import React,{useState,useEffect} from 'react';
import './App.css';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './component/Header'
import Author from './component/Author'
import Quote from './component/Quote'

function App() {
  const [state, setState] = useState(false)
  const [data,setData] = useState([])
  const [author,setAuthor] = useState("")
  useEffect(() => {
    let url ="https://quote-garden.herokuapp.com/api/v3/quotes";
    let random = Math.floor(Math.random(2) * 100) * Math.floor(Math.random(7) * 100)
    console.log(random,"max",random +7000 ,"----","min",random-7000)
    axios.get(url,{
      params: {
        limit:1,
        author: " ",
        genere:" ",
        page: random > 70918 ? 
        random-70000 : random+7000,
      }
    })
    .then(response => {
      console.log("Response",response);
      setData(response.data.data)
      console.log('Data',data)
    })
    .catch((error) => console.log(error))
  }, [,state])
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>

      <div className="container">
          <Header updateState={updateState}/>

        <main>
          <div className="card">
            {  data.length >= 1 &&
              data.map((quotes) => 
              {
                console.log('TestingData', quotes.quoteText);
                return<>
                <Quote quote={quotes}/>
              
              <Link to="/author">

                <div className="details" onClick={() =>{
                  setAuthor(quotes.quoteAuthor)
                }}>
                  <h3>{quotes.quoteAuthor}</h3>
                  <p>{quotes.quoteGenre}</p>
                </div>
              </Link>
              </>
            })}
          </div>
        </main>
        <footer>
          <p>venky-cs @ DevChallenges.io</p>
        </footer>
      </div>
            </Route>

     
          <Route path="/author" exact>
            <Author authorName={author}/>
          </Route>
        </Switch>
      </Router>
    </div>
  );

  function updateState(){
    setState((prevState) => !prevState)
  }
}

export default App;
