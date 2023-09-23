import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import EventDetailPage, {
  loader as eventDetailLoader,
} from "./pages/EventDetailPage";
import EditEventPage from "./pages/EditEventPage";
import RootLayout from "./pages/Root";
import EventsRoot from "./pages/EventsRoot";
import EventsPage, { loader as eventsLoader } from "./pages/Events";
import ErrorPage from "./pages/Error";
import NewEventPage from "./pages/NewEventPage";
import { action as deleteEvent } from "./components/EventItem";
import { action as manipulateEventAction } from "./components/EventForm";
import NewsletterPage, { action as newsletterAction } from "./pages/Newsletter";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "events",
        element: <EventsRoot />,
        children: [
          {
            index: true,
            element: <EventsPage />,
            loader: eventsLoader,
          },
          {
            path: ":id",
            loader: eventDetailLoader,
            id: "event-detail",
            children: [
              {
                index: true,
                element: <EventDetailPage />,
                action: deleteEvent,
              },
              {
                path: ":edit",
                element: <EditEventPage />,
                action: manipulateEventAction,
              },
            ],
          },
          {
            path: "new",
            element: <NewEventPage />,
            action: manipulateEventAction,
          },
        ],
      },
      {
        path: "newsletter",
        element: <NewsletterPage />,
        action: newsletterAction,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
