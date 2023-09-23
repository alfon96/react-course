import { json, redirect, useRouteLoaderData } from "react-router-dom";
import EventForm from "../components/EventForm";

const EditEventPage = () => {
  const data = useRouteLoaderData("event-detail");
  const event = data.event;
  return (
    <>
      <h1>Edit Event Page</h1>
      <EventForm event={event} method={"patch"}></EventForm>
    </>
  );
};

export default EditEventPage;
