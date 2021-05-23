import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Label, Input, Jumbotron, Card, CardBody } from 'reactstrap';
import { Control, Form, FormGroup, actions } from 'react-redux-form';
import { Link } from 'react-router-dom';
import './App.css';
//import action
import { fetchWeather } from "./actions/fetchWeather";

import RenderCard from './Report';
import Header from './Header';

import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

function App() {
  //set city
  const [city, setCity] = useState("");

  const weatherSelector = useSelector(state => state.weatherInfo)
  //this causes dispatch
  const dispatch = useDispatch();

  //call to get our action
  const getWeatherInfoAction = (city) => dispatch(fetchWeather(city));

  const getWeatherInfo = (e) => {
    e.preventDefault();
    if (city === "") {
      console.log("no city to search for");
    } else {
      getWeatherInfoAction(city);
      console.log(weatherSelector.weatherInfo);
    }
  }
  const data = weatherSelector.weatherInfo;
  let details = "";
  if (data) {
    details =
    <Route path="/city" component={()=> <RenderCard data={data}/>}/>

  } else {
    details = <h3>You need to enter a city!!</h3>
  }

 

  return (
    <React.Fragment>
      <div>
        <Header />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-7">
            <form onSubmit={getWeatherInfo}>
              <div className="control">
                <Label htmlFor="cityname">Enter City Name</Label>
                <Input className="col-md-6" type="text" id="cityname" placeholder="City Name" name="cityname"
                  onChange={e => setCity(e.target.value)} />
              </div>
              <div className="col-md-6">
                <p></p>
                
                <Button color="info" type="submit" value="submit" >Search</Button>
                
              </div>
            </form>
           
            {details}
         
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default (withRouter)(App);

//onClick={()=>{this.handleClick()}}