import { Link } from "react-router-dom";

const DUMMY_EVENTS = [
  { id: "e1", text: "Event 1" },
  { id: "e2", text: "Event 2" },
  { id: "e3", text: "Event 3" },
  { id: "e4", text: "Event 4" },
  { id: "e5", text: "Event 5" },
  { id: "e6", text: "Event 6" },
];

const EventsPage = () => {
  return (
    <>
      <h1>Event Page</h1>
      <ul>
        {DUMMY_EVENTS.map((event) => (
          <li>
            <Link to={event.id}>{event.text}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default EventsPage;
