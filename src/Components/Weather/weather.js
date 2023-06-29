export default function Weather({ weather }) {
  return (
    <div className="weather_section">
      <span className="weather_emoji">{weather.condition}</span>
      <span className="weather_temp">{weather.temperature}°C</span>
    </div>
  );
}
