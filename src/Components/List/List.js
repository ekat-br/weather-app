//import "../List/List.css";
export default function List({ activities, isGoodWeather }) {
  return (
    <>
      <h2>
        {isGoodWeather
          ? "The weather is awesome! Go outside and:"
          : "Bad weather outside! Here's what you can do now:"}
      </h2>
      <ul className="activities_list">
        {activities.map((activity) => {
          return (
            <li className="activity_item" key={activity.id}>
              {activity.name}
            </li>
          );
        })}
      </ul>
    </>
  );
}
