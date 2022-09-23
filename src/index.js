import React from "react";
import ReactDOM  from "react";

const App = () => {
    return (
        <div className="ui container comments">
            <div className="comment">
                <a href="/" className="avatar" >
                    <img alt="avatar" />
                </a>   
            </div>
        </div>
    );
} ;

ReactDOM.render(<App />, document.querySelector('#root'));

