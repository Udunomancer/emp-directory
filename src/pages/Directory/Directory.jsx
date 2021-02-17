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

    function sortUsers(event) {
        let value = event.target.value;
        let id = event.target.id;
        let sortingArray = displayState;
        
        sortingArray.sort(function(a, b) {
            let itemA;
            let itemB
            if(value === "up") {
                itemA = a.name.first;
                itemB = b.name.first;
            }
            if(value==="down") {
                itemA = b.name.first;
                itemB = a.name.first;
            }

            if(itemA < itemB) {
                return -1;
            }

            if(itemA > itemB) {
                return 1;
            }

            return 0;
        });

        setDisplayState([...sortingArray]);

        
        
        // let value = event.target.attributes.value.value;
        // let id = event.target.attributes.id.value;
        // console.log(value)
        // console.log(id);
        // if(value === "up") {
        //     console.log("Sort Up");

        // }
        // if(value === "down") {
        //     console.log("Sort Down");
        // }
    }

    return (
        <>
            <Navbar/>
            <Container >
                <UserTable sort={sortUsers} users={displayState} />
            </Container>
        </>
    )
}

export default Directory;