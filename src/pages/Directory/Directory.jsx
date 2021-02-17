import React, {useState, useEffect} from "react";
import Navbar from "../../components/Navbar/Navbar";
import Container from "../../components/Container/Container";
import UserTable from "../../components/UserTable/UserTable";
import UsersAPI from "../../utils/UsersAPI/UsersAPI";

function Directory() {
    
    const [usersState, setUsersState] = useState([{
        id: 1,
        name: {
            first: "First",
            last: "Last",
            title: "Title"
        },
        location: {
            street: {
                name: "Street",
                number: "123"
            },
            city: "City",
            state: "State",
            zipcode: "Zipcode"
        },
        email: "Email",
        phone: "(123)-456-7890",
        picture: "#"
    }]);
    const [displayState, setDisplayState] = useState([{
        id: 1,
        name: {
            first: "First",
            last: "Last",
            title: "Title"
        },
        location: {
            street: {
                name: "Street",
                number: "123"
            },
            city: "City",
            state: "State",
            zipcode: "Zipcode"
        },
        email: "Email",
        phone: "(123)-456-7890",
        picture: "#"
    }]);

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
            <Container >
                <UserTable users={displayState} />
            </Container>
        </>
    )
}

export default Directory;