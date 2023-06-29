//import "../List/List.css";
export default function List({ activities }) {
  return (
    <ul className="activities_list">
      {activities.map((activity) => {
        return (
          <li className="activity_item" key={activity.id}>
            {activity.name}
          </li>
        );
      })}
    </ul>
  );
}
