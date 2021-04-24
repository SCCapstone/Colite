//get the baseURL from customApi.js axios that is created using export default axios.create()configuration.

import axios from "axios";

export default axios.create({
    baseURL: "http://colitetechrestapi.us-east-1.elasticbeanstalk.com/api",
    headers: {
        "Content-type": "application/json"
    }
});
