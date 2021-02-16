import axios from "axios";

export default {
  getRandomUsers: function (numOfUsers) {
    const users = [];

    return axios
      .get("https://randomuser.me/api/?results=25&nat=us")
      .then((res) => {
          let results = res.data.results;

          for (let i = 0; i < results.length; i++) {
              let user = {
                  id: i + 1,
                  name: results[i].name,
                  location: {
                      street: results[i].location.street,
                      city: results[i].location.city,
                      state: results[i].location.state,
                      zipcode: results[i].location.postcode
                  },
                  email: results[i].email,
                  phone: {
                      default: results[i].phone,
                      cell: results[i].cell
                  },
                  picture: results[i].picture.thumbnail
              }
              users.push(user);
          }

          return users;
        // let result = res.data.results;

        // for (let i = 0; i < result.length; i++) {}
        // user.name = result.name;
        // user.location = {
        //   street: result.location.street,
        //   city: result.location.city,
        //   state: result.location.state,
        //   zipcode: result.location.postcode,
        // };
        // user.email = result.email;
        // user.phone = {
        //   default: result.phone,
        //   cell: result.cell,
        // };
        // user.picture = result.picture.thumbnail;

        // return users;
        // return res;
      });
  },
};
