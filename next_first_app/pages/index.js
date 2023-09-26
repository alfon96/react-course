import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A first meetup",
    image:
      "https://th.bing.com/th/id/R.dc34bb669782d98d6a8a7aa5abbef929?rik=mZiFVzRj70dGWw&pid=ImgRaw&r=0&sres=1&sresct=1",
    address: "",
    description: "Here it is the city center",
  },
  {
    id: "m2",
    title: "A second meetup",
    image:
      "https://th.bing.com/th/id/R.61d4f35f0f5876814081c3ba099946ad?rik=PWK5OvZF4POSRw&riu=http%3a%2f%2fblog.hihostels.com%2fwp-content%2fuploads%2f2015%2f04%2fCity_of_Arts_and_Sciences_Valancia_pgwiro-1024x683.jpg&ehk=OBLwkMsv6YAyHkRvoaKiiJtgHpSVCWhgRNUyJT9Jx4Y%3d&risl=&pid=ImgRaw&r=0",
    address: "",
    description: "Here it is the city center",
  },
];

const HomePage = (props) => {
  return <MeetupList meetups={props.meetups} />;
};

export async function getStaticProps() {
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    revalidate: 10,
  };
}

// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;

//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }

export default HomePage;
