import React, {useEffect} from "react";
import Navbar from "../../components/Navbar/Navbar";
import UsersAPI from "../../utils/UsersAPI/UsersAPI";

function Directory() {
    
    useEffect(() => {
        UsersAPI.getRandomUsers(5)
          .then(res => console.log(res));
    }, []);

    return (
        <>
            <Navbar/>

        </>
    )
}

export default Directory;