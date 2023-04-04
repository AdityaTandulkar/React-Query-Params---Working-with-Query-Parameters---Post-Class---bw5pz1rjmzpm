import React from 'react'
import '../styles/App.css';

const App = () => {
  //Write your code here
  const query = new URLSearchParams(window.location.search);
  return(
    <div>
      Employee {query.get("id") named {"name"} works as {query.designation}}
    </div>
  )
}

export default App;
