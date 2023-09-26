import { useRouter } from "next/router";

const MeetupPage = () => {
  const router = useRouter();
  const id = router.query.meetupId;
  return <h1>Meetup Page with id: {id}</h1>;
};

export default MeetupPage;
