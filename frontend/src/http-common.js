import axios from "axios";

export default axios.create({
    // in development mode have bottom uncommented
    // baseURL: "http://localhost:8080/api",
    // in deployment mode have top commeneted and bottom uncommented
    baseURL: "https://uejh3ddh8a.execute-api.us-east-1.amazonaws.com/dev/{proxy+}",
    headers: {
        "Content-type": "application/json"
    }
});