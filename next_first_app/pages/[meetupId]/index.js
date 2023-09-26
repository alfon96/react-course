import { useRouter } from "next/router";
import MeetupDetail from "../../components/meetups/MeetupDetail";

const meetup = {
  id: "m1",
  title: "A first meetup",
  image:
    "https://th.bing.com/th/id/R.dc34bb669782d98d6a8a7aa5abbef929?rik=mZiFVzRj70dGWw&pid=ImgRaw&r=0&sres=1&sresct=1",
  address: "",
  description: "Here it is the city center",
};

const MeetupPage = (props) => {
  const router = useRouter();
  return (
    <>
      <MeetupDetail meetup={props.meetup}></MeetupDetail>
    </>
  );
};

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
}
export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;
  console.log(meetupId);

  return {
    props: {
      meetup,
    },
  };
}
export default MeetupPage;
