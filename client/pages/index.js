import axios from "axios";

const LandingPage = ({ currentUser }) => {
  console.log(currentUser);
  return <h1>Landing Page</h1>;
};

// Get data during initial load
LandingPage.getInitialProps = async ({ req }) => {
  if (typeof window === "undefined") {
    // we are on the server
    // requests should be made http://ingress-nginx....
    // because it's called inside the kubernetes pod
    const { data } = await axios.get(
      "http://ingress-nginx-controller.ingress-nginx.svc.cluster.local/api/users/currentuser",
      {
        headers: req.headers,
      }
    );
    return data;
  } else {
    //we are on the browser
    const { data } = await axios.get("/api/users/currentuser");
    return data;
  }
};

export default LandingPage;
