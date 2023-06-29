import logo from "./logo.svg";
import "./App.css";
import Form from "./Components/Form/Form";
import { useState } from "react";
import { uid } from "uid";
import List from "./Components/List/List";
import "./Components/List/List.css";

function App() {
  const [activities, setActivities] = useState([{ id: "abc", name: "test" }]);

  localStorage.setItem("activities", JSON.stringify(activities));
  const localStorageActivities = JSON.parse(localStorage.getItem("activities"));

  function handleAddActivity(activityData) {
    setActivities([...activities, { ...activityData, id: uid() }]);
    console.log(activities);
  }

  return (
    <div className="App">
      <List activities={activities} />
      <Form onAddActivity={handleAddActivity} />
    </div>
  );
}

export default App;
