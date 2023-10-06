import axios from "axios";
import toast from "react-hot-toast";


setTimeout(() => {
  // Dismiss the toast
  toast('Welcome ! \n click on Home to move between Sections ',
  {
    icon: '👏',
    style: {
      borderRadius: '10px',
      background: '#333',
      color: '#fff',
      width:'700px',
      height:'100px'
    },
  }
);
}, 2000);

const axiosInstance = axios.create({});
axiosInstance.interceptors.request.use(
  (config) => {
    console.log("Done");
    return config;
  },
  (error) => {
    console.log("error");
  }
);
axiosInstance.interceptors.response.use(
  (response) => {
    toast.success("Operation success");
    return response;
  },
  (error) => {
    toast.error(error.message);
  }
);

export default axiosInstance;