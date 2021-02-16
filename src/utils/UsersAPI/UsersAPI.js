import axios from "axios";

export default {
    getRandomUser: function(id) {
        const user = {
            id: id || 1
        };

        return axios.get("https://randomuser.me/api/").then((res) => {
            let result = res.data.results[0];

            user.name = result.name;
            user.location = {
                street: result.location.street,
                city: result.location.city,
                state: result.location.state,
                zipcode: result.location.postcode,
            };
            user.email = result.email;
            user.phone = {
                default: result.phone,
                cell: result.cell
            }
            user.picture = result.picture.thumbnail;

            return user;
        })        
    }
};