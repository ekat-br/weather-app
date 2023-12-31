export default function Form({ onAddActivity }) {
  function handleSubmit(event) {
    event.preventDefault();

    const name = event.target.elements.name.value;
    const isForGoodWeather = event.target.elements.isForGoodWeather.checked;

    const activityData = {
      name,
      isForGoodWeather,
    };

    onAddActivity(activityData);

    event.target.reset();
  }

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <h2 className="heading-activity">Add new Activity</h2>
        <label htmlFor="activity-name">
          Activity:
          <input
            autoFocus
            id="activity-name"
            type="text"
            name="name"
            className="input-activity"
          ></input>
        </label>
        <label htmlFor="weather-check">
          Good-weather activity:
          <input
            id="weather-check"
            type="checkbox"
            name="isForGoodWeather"
          ></input>
        </label>
        <button className="submit-btn" type="submit">
          Submit
        </button>
      </form>
    </>
  );
}
