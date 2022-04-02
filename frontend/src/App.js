import './index.css';
import FullNav from "./FullNav.js";
import React, { Component } from 'react';

export default class App extends Component{
  render() {
    return (
      <div className="App">
        <FullNav />
          <div id="wel">
            &thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;Welcome to Egg's website (made with React). This is my first website with React and I've never tried any JS frameworks. I want to learn React, Angular, and possibly Vue, Svelte. I also want to start using databases because they are very interesting. I think this will eventually lead me to be able to do both frontend and backend, and fullstack if I want to.
          </div>
      </div>
    );
  } 
}