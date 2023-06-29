# Dokumentation der Schritte bis zur fertigen Weather App

## Aufgabenblöcke

- Project Setup
- Add Activity Form
- List Component
- Filtering List
- Fetch API
- Delete an API
- Bonus: Fetch on Interval

### Project Setup

- lokal neuen Ordner erstellen
- React Quickstart mit [create-react-app](https://create-react-app.dev/docs/getting-started/)
- Github Repo erstellen und mit lokalem Repo verknüpfen ("push an existing repo from command line")
- Code öffnen und starten!
- Unnötigen Code entfernen

### Add Activity Form

- Form Componente schreiben

  - in src ein Components Ordner erstellen & form.js hinzufügen
  - Form Komponente erstellen und in App.js importieren
  - die benötigten Elemente in der Form Komponente returnen: heading, zwei input-Felder und ein Submitbutton
    - damit Label und Input auf selber Höhe sind, wird das Input-Element in das Label gepackt
  - Form erhält ein prop "onAddActivity"

- Submit Event

  - die übermittelten Daten sollen als ein Objekt mit den keys name, isForGoodWeather und den entsprechenden Werten dargestellt werden
  - dafür brauchen wir eine handleSubmit Funktion, die das Submit unseres Formulars behandelt
  - event.preventDefault() - wir stellen dadurch sicher, dass das Formular die Seite nicht neu lädt und wir dadurch die benötigten Daten extrahieren können
  - wenn wir name und isForGoodWeather extrahieren wollen, müssen wir diese Werte als name-Attribut in den Inputs festhalten
  - über event.target.elements können die Werte extrahiert werden
  - die extrahierten Werte werden im Objekt data gespeichert
  - onAddActivity aufrufen und das Objekt mit den extrahierten Werten übergeben
  - nicht zu vergessen: `<form onSubmit={handleSubmit}>`-> Die handleSubmit-Funktion solle aufgerufen werden, sobald das Formular abgesendet wird

- Reset Form, Focus Input Field

  - nachdem auf Submit geklickt wurde, sollen die eingetragenen Werte in der Form gelöscht werden, dafür benötigt man die Reset-Funktion: event.target.reset()
  - damit nach dem Reset der Fokus auf das erste Inputfeld gesetzt wird, habe ich folgende Lösung genutzt:
    `<input autoFocus id="activity-name" type="text" name="name"></input>` (aber es sorgt eigentlich dafür, dass der Fokus immer gesetzt ist )

- States und Funktionen in App.js

  - in der App.js benötigen wir nun ein State für activities: const [activities, setActivities] = useState([]); -> wichtig: useState importieren
  - wir brauchen eine Funktion (handleActivity), die ein neues Aktivitätsobjekt als Parameter annimmt und anschließend zum Activities State hinzufügt: setActivities([...activities, {activityData}]);
  - Jedes Aktivitätsobjekt soll eine eindeutige ID erhalten, hierfür können wir uid nutzen (Bibliothek, mit der wir IDs generieren können): setActivities([...activities, {id: uid(), ...activityData}]);
  - Wichtig: uid muss importiert werden. Über Terminal Befehl eingeben: npm install uid; danach in App.js: import { uid } from "uid";

- handleAddActivity Übergabe
  - die Funktion muss der Form Komponente übergeben werden: `<Form onAddActivity={handleAddActivity} />`

### List Component

- Wir benötigen eine List Komponente, die eine Liste an Aktivitäten anzeigt

  - wir deklarieren eine Funktion und importieren diese in App.js
  - die List Komponente bekommt die Activities übergeben -> {activities}
  - mit der map-Funktion wird eine neue Liste erstellt, basierend auf den Elementen im activities-Array; für jedes Listenelement wird eine Callback-Function aufgerufen
  `{activities.map((activity) => {
  return (
    <li className="activity_item" key={activity.id}>
      {activity.name}
    </li>
  );`
  - Das key-Element wird verwendet, um die einzelnen Elemente in der Liste zu identifizieren und effizient zu rendern -> activity.id wird als eindeutiger Schlüssel verwendet

- Wir wollen die Aktivitäten im localStorage speichern
  - Die Webstorage API unterstützt nur Strings, Numbers und Booleans. Um komplexere Daten zu speichern, müssen wir sie zuerst serialisieren. Das geht mit der Methode JSON.stringify():
    `localStorage.setItem("activities", JSON.stringify(activities));`
  - Um die Daten abzurufen, müssen wir die Methode JSON.parse() nutzen - diese wandelt ein JSON-String in ein JavaScript-Objekt um

### Filtering List

- In der App wollen wir Aktivitäten in Abhängigkeit vom aktuellen Wetter anzeigen, daher muss die Liste gefiltert werden
- Variable `const isGoodWeather=true` einfügen.
- Die Aktivitäten sollen gefiltert werden: Die Variable isGoodWeather soll mit dem Schlüssel isForGoodWeather übereinstimmen
- Das activities-Array wird mit einer Filtermethode nach den Aktivitäten gefiltert
  `const filteredActivities = activities.filter((activity) => activity.isForGoodWeather === isGoodWeather);`
- Statt aller Aktivitäten sollen nun nur die gefilterten Aktivitäten an die List Komponente übergeben werden. Ebenso soll die Variable isGoodWeather übergeben werden:
  `<List activities={filteredActivities} isGoodWeather={isGoodWeather} />`
- Die Listkomponente soll eine Überschrift beinhalten, die von isGoodWeather abhängt
  - isGoodWeather wird als Prop in der List Komponente übergeben
  - Text in Abhängigkeit vom Wert:
    `<h2>{isGoodWeather ? "The weather is awesome! Go outside and:" : "Bad weather outside! Here's what you can do now:"} </h2>`
