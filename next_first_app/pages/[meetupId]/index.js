import { useRouter } from "next/router";
import MeetupDetail from "../../components/meetups/MeetupDetail";
import { getDB } from "../api/new-meetup";
import { ObjectId } from "mongodb";
const MeetupPage = (props) => {
  const router = useRouter();
  return (
    <>
      <MeetupDetail meetup={props.meetup}></MeetupDetail>
    </>
  );
};

export async function getStaticPaths() {
  const { db, client } = await getDB();
  const meetupsCollection = db.collection("meetups");
  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();
  client.close();
  return {
    fallback: "blocking",
    paths: meetups.map((meetup) => ({
      params: {
        meetupId: meetup._id.toString(),
      },
    })),
  };
}
export async function getStaticProps(context) {
  const meetupId = new ObjectId(context.params.meetupId);
  console.log(meetupId);

  const { db, client } = await getDB();
  const meetupsCollection = db.collection("meetups");
  const selectedMeetup = await meetupsCollection.findOne({ _id: meetupId });
  client.close();
  return {
    props: {
      meetup: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        address: selectedMeetup.address,
        description: selectedMeetup.description,
        image: selectedMeetup.image,
      },
    },
  };
}
export default MeetupPage;
