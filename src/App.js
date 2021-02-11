import React,{useState,useEffect} from 'react';
import './App.css';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Author from './Author'

function App() {
  const [state, setState] = useState(false)
  const [data,setData] = useState([])
  const [author,setAuthor] = useState("")
  useEffect(() => {
    let url ="https://quote-garden.herokuapp.com/api/v3/quotes";
    axios.get(url,{
      params: {
        limit:1,
        author,
        genere:" ",
        page: 70918-Math.floor(Math.random()*10),
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
        <header>
          <div className="heading" onClick={updateState}>
            <p>random</p>
            <span id="autorenew" class="material-icons">autorenew</span>
          </div>
        </header>
        <main>
          <div className="card">
            {  data.length >= 1 &&
              data.map((quotes) => 
              {
                console.log('TestingData', quotes.quoteText);
                return<>
                <div className="quote" key={quotes.id}>
                <p>{quotes.quoteText}</p>
              </div>
              
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
            <Author />
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
