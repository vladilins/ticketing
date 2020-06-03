import axios from "axios";

export default ({ req }) => {
  if (typeof window === "undefined") {
    // we are on the server
    // requests should be made http://ingress-nginx....
    // because it's called inside the kubernetes pod

    return axios.create({
      baseURL:
        "http://ingress-nginx-controller.ingress-nginx.svc.cluster.local",
      headers: req.headers,
    });
  } else {
    //we are on the browser
    return axios.create({
      baseURL: "/",
    });
  }
};
