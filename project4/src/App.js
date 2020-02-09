import React, { Component } from 'react';
import PostList from "./component/postlist";

class App extends Component
{
  render()
  {
    return(
      <div className="container">
        <div className="row">
          <h1>Hello</h1>
          <PostList/>
          
        </div>
      </div>
    )
  }
}

export default App;
