import logo from "./logo.svg";
import "./App.css";
import Form from "./Components/Form/Form";
import { useEffect, useState } from "react";
import { uid } from "uid";
import List from "./Components/List/List";
import "./Components/List/List.css";
import Weather from "./Components/Weather/weather";

function App() {
  const [activities, setActivities] = useState([
    { id: "123", name: "Tanzen", isForGoodWeather: true },
  ]);
  const [weather, setWeather] = useState({});

  useEffect(() => {
    const URL = "https://example-apis.vercel.app/api/weather";
    async function fetchWeatherData() {
      try {
        const response = await fetch(URL);
        const weatherData = await response.json();
        console.log(weatherData);
        setWeather(weatherData);
      } catch (error) {
        console.log("There is an error: ", error);
      }
    }
    fetchWeatherData();
    const interval = setInterval(fetchWeatherData, 5000);

    return clearInterval(interval);
  });

  localStorage.setItem("activities", JSON.stringify(activities));
  //const localStorageActivities = JSON.parse(localStorage.getItem("activities"));

  function handleAddActivity(activityData) {
    setActivities([...activities, { ...activityData, id: uid() }]);
    console.log(activities);
  }

  const isGoodWeather = weather.isGoodWeather;

  const filteredActivities = activities.filter(
    (activity) => activity.isForGoodWeather === isGoodWeather
  );

  function handleDeleteActivity(id) {
    setActivities(activities.filter((activity) => activity.id !== id));
  }

  return (
    <div className="App">
      <Weather weather={weather} />
      <List
        activities={filteredActivities}
        onDeleteActivity={handleDeleteActivity}
        isGoodWeather={isGoodWeather}
      />
      <Form onAddActivity={handleAddActivity} />
    </div>
  );
}

export default App;
