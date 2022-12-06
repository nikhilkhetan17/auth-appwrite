import { account } from "../services/config";
import { useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Home = () => {
  const navigate = useNavigate();

  const [userDetails, setUserDetails] = useState();

  useEffect(() => {
    const getData = account.get();
    getData.then(
      (response) => {
        setUserDetails(response);
        // console.log(userDetails);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);

  const LogOut = async () => {
    await account.deleteSession("current").then(
      (response) => {
        console.log(response);
        navigate("/login");
      },
      (error) => {
        console.log(error);
      }
    );
  };

  if (userDetails) {
    return (
      <>
        <div className="min-h-min max-w-7xl mx-auto shadow-md flex justify-between  py-3 px-3 mt-2 rounded-md">
          <div>
            <p className="text-xl">Name: {userDetails.name}</p>
            <p className="text-xl ">Email: {userDetails.email}</p>
          </div>
          <div>
            <button
              className="bg-red-400 text-white p-1 rounded-md text-xl"
              onClick={LogOut}
            >
              Logout
            </button>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <p className="mt-4">
        Please Login To see Profile{" "}
        <Link to="/login">
          <span className="bg-blue-300 p-2 cursor-pointer text-white rounded-md">
            Login
          </span>
        </Link>
      </p>
    );
  }
};

export default Home;
