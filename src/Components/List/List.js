//import "../List/List.css";
export default function List({ activities, isGoodWeather, onDeleteActivity }) {
  return (
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
  );
}
