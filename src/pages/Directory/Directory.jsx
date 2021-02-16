import React, {useState, useEffect} from "react";
import Navbar from "../../components/Navbar/Navbar";
import Container from "../../components/Container/Container";
import UserTable from "../../components/UserTable/UserTable";
import UsersAPI from "../../utils/UsersAPI/UsersAPI";

function Directory() {
    
    const [usersState, setUsersState] = useState({});
    const [displayState, setDisplayState] = useState(usersState);

    useEffect(() => {
        UsersAPI.getRandomUsers(25)
          .then(res => {
              setUsersState(res);
              console.log("Users State:");
              console.log(usersState);
            });
    }, []);

    useEffect(() => {
        setDisplayState(usersState);
    },[usersState]);

    return (
        <>
            <Navbar/>
            <Container>
                <UserTable />
            </Container>
        </>
    )
}

export default Directory;