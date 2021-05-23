import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Label, Input, Jumbotron, Card, CardBody } from 'reactstrap';
import { Control, Form, FormGroup, actions } from 'react-redux-form';
import './App.css';

//import action
import { fetchWeather } from "./actions/fetchWeather";

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
      <div>
        <h2>Weather Report</h2>
        <Card id="card">
          <CardBody>
            <h3>{data.name} : {data.weather[0].description}</h3>
            <h3> Temperature : {data.main.temp} </h3>
            <h3> Coord : long {data.coord.lon} ,  lat {data.coord.lat}</h3>
          </CardBody>
        </Card>
      </div>
  } else {
    details = <h3>You need to enter a city!!</h3>
  }
  return (
    <React.Fragment>
      <div className="App">
        <Jumbotron>
          <div className="container">
            <div className="row row-header">
              <div className="col">
                <h1>Weather Forecast App</h1>
              </div>
            </div>
          </div>
        </Jumbotron>
      </div>
      <main>
        <div className="container">
          <div className="row">
            <div className="col">
              <form onSubmit={getWeatherInfo}>
                <div className="control">
                  <Label htmlFor="cityname">City Name</Label>
                  <Input className= "col-md-6" type="text" id="cityname" placeholder="City Name" name="cityname"
                    onChange={e => setCity(e.target.value)}
                  />
                </div>
                
                <div className="col-md-6">
                  <p></p>
                  <Button color="info" type="submit" value="submit" >Submit Query</Button>
                </div>
               
              </form>

            </div>
          </div>

        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              {details}
            </div>
          </div>

        </div>
      </main>
    </React.Fragment>
  );
}

export default App;
