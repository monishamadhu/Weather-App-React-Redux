import React from 'react';
import {Jumbotron } from 'reactstrap';

function Header(){
    return(
        <Jumbotron>
          <div className="container">
            <div className="row row-header">
              <div className="col-12">
                <h1>Weather Forecast App</h1>
              </div>
            </div>
          </div>
        </Jumbotron>
    );
}
export default Header;