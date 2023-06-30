//import "../List/List.css";
export default function List({ activities, isGoodWeather, onDeleteActivity }) {
  return (
    <>
      <h2>
        {isGoodWeather
          ? "The weather is awesome! Go outside and:"
          : "Bad weather outside! Here's what you can do now:"}{" "}
      </h2>
      <ul className="activities_list">
        {activities.map((activity) => {
          return (
            <li className="activity_item" key={activity.id}>
              {activity.name}
              <button
                className="delete-btn"
                onClick={() => onDeleteActivity(activity.id)}
              >
                ❌
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
