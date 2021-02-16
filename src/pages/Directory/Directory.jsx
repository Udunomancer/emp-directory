import React, {useState, useEffect} from "react";
import Navbar from "../../components/Navbar/Navbar";
import UsersAPI from "../../utils/UsersAPI/UsersAPI";

function Directory() {
    
    const [usersState, setUsersState] = useState({});
    

    useEffect(() => {
        UsersAPI.getRandomUsers(25)
          .then(res => {
              setUsersState(res);
              console.log("Users State:");
              console.log(usersState);
            });
    }, []);

    return (
        <>
            <Navbar/>
        </>
    )
}

export default Directory;