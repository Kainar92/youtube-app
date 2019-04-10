import axios from "axios";

const KEY = "AIzaSyCVlR0Ogxbh_bder7e403SBhDci8gxJDmc";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
