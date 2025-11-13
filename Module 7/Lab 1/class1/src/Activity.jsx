import { useState, useEffect } from "react";

const activityTypes = [
  "education",
  "recreational",
  "social",
  "diy",
  "charity",
  "cooking",
  "relaxation",
  "music",
  "busywork",
];

export function ActivityFinder() {
  // Fetches a random activity
  const [participants, setParticipants] = useState(1);
  const [activity, setActivity] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://bored.api.lewagon.com/api/activity?" +
        "participants=" +
        participants
    )
      .then((response) => response.json())
      .then((json) => {
        setIsLoading(false);
        setActivity(json.activity);
      });
  }, [participants]);

  return (
    <>
      <div className="ActivityFinder componentBox">
        <h3>Activity Finder</h3>
        <label>
          Choose number of participants:
          <select
            value={participants}
            onChange={(e) => setParticipants(e.target.value)}
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
        </label>
        <div>
          <strong>Suggested Activity: </strong>
          {isLoading ? "...loading" : activity}
        </div>
      </div>
      <div className="Typefinder componentBox">
        <h3>Activity Finder by Type</h3>
        <label>
          Choose type:
          <select
            value={activityTypes}
            onChange={(e) => setParticipants(e.target.value)}
          >
            {/* <option>[{activityTypes}]</option> */}
            {activityTypes.map((type) => (
              <option key={type}>{type}</option>
            ))}
          </select>
        </label>
        <div>
          <strong>Suggested Activity: </strong>
          {isLoading ? "...loading" : activity}
        </div>
      </div>
    </>
  );
}
