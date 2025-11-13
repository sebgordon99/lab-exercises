import { useState, useEffect } from "react";
export function ActivityFinder() {
  // Fetches a random activity
  const [participants, setParticipants] = useState(1);
  const [activity, setActivity] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true)
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
  if (isLoading === false) {
    return (
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
          {activity}
        </div>
      </div>
    );
  } else {
    return <div className="ActivityFinder componentBox">
        <h3>Activity Finder</h3>
        <label>
          Choose number of participants:
          <select
            value={participants}
            onChange={(e) => setParticipants(e.target.value)}
            // onChange={(e) => setisLoading(false)}
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
        </label>
        <div>loading please wait</div>
        </div>
  }
}
