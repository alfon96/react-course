import { Link, json, redirect, useSubmit } from "react-router-dom";
import classes from "./EventItem.module.css";

function EventItem({ event }) {
  const submit = useSubmit();
  function startDeleteHandler() {
    const proceed = window.confirm("Are you sure?");
    if (proceed) {
      submit(null, { method: "delete" });
    }
  }

  return (
    <article className={classes.event}>
      <img src={event.image} alt={event.title} />
      <h1>{event.title}</h1>
      <time>{event.date}</time>
      <p>{event.description}</p>
      <menu className={classes.actions}>
        <Link to="edit">Edit</Link>
        <button onClick={startDeleteHandler}>Delete</button>
      </menu>
    </article>
  );
}

export default EventItem;
export async function action({ request, params }) {
  const response = await fetch("http://localhost:8080/events/" + params.id, {
    method: request.method,
  });

  if (!response.ok) {
    throw json({ message: "Could not delete the event", status: "500" });
  }
  return redirect("/events");
}
