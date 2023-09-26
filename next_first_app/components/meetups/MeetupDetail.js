import { useRouter } from "next/router";
import classes from "./MeetupDetail.module.css";

const MeetupDetail = (props) => {
  const router = useRouter();

  const id = router.query.meetupId;
  return (
    <section className={classes.detail}>
      <h1>{props.meetup.title}</h1>
      <img src={props.meetup.image} alt={props.title} />
      <address>{props.meetup.address}</address>
      <p>{props.meetup.description}</p>
    </section>
  );
};

export default MeetupDetail;
