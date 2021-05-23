import React from 'react';
import { Card, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderCard({ data }) {
    return (
        
            <div>
                <Link to="/city">
                <h2>Weather Report</h2>
                <Card id="card">
                    <CardBody>
                        <h3>{data.name} : {data.weather[0].description}</h3>

                        <h3> Temperature : {data.main.temp} </h3>
                        <h3> Coord : long {data.coord.lon} ,  lat {data.coord.lat}</h3>
                    </CardBody>
                </Card>
                </Link>
            </div>
       
    );
}

export default RenderCard;