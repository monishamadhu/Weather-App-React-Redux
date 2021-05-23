const key = "4342876c1365fb2402e4dce0d90eb536";
export function fetchWeather(city){
    return function(dispatch){
        fetch(`http://api.openweathermap.org/data/2.5/weather?q= ${city},us&&appid=${key}`)
        .then(response => response.json())
        .then(data => {
            //dispatch the action
            dispatch({type:"FETCH_WEATHER",
            payload: data});
        }).catch(err => {
            console.log(err);
        })
    }


}