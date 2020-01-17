// creating a fucntion that returns promise!

const urlPromise = url => {
    return new Promise((res, rej) => {
        // set a timer
        setTimeout(() => {
            // created an object, pretening its a request
            const pages = {
                "/users": [
                    {
                        id: 1,
                        name: "Xianwei",
                        hobbie: "blasketball",
                    },
                    {
                        id: 2,
                        name: "Alex",
                        hobbie: "pool",
                    },
                    {
                        id: 3,
                        name: "Xiao",
                        hobbie: "pingpong",
                    },
                ],
                "/about": "THIS IS A WEB PAGE, WELCOME TO MY ABOUT PAGE!",
            };
            // stored the data from the object property
            const data = pages[url];
            // check to see if the data is found
            data ? res({ status: 200, data }) : rej({ status: 404 });
        }, 1000);
    });
};

// calling the function with a arguments
urlPromise("/users")
    .then(res => {
        console.log("Status Code:", res.status);
        console.log("Data:", res.data);
    })
    .catch(res => {
        console.log("Status Code:", res.status);
        console.log("PLEASE TRY AGAIN!! :D");
    });

// testing
urlPromise("/user")
    .then(res => {
        console.log("Status Code:", res.status);
        console.log("Data:", res.data);
    })
    .catch(res => {
        console.log("Status Code:", res.status);
        console.log("PLEASE TRY AGAIN!! :D");
    });
