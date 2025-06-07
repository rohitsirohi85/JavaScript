// This function acts like a mini-constructor that sets a username
function SetUsername(username) {
    // 'this' refers to the object on which SetUsername is being called
    this.username = username;

    // Simulating that this function might do complex DB operations
    console.log("called SetUsername");
}

// This is the main constructor function to create a user
function createUser(username, email, password) {
    // We are calling SetUsername and forcing its 'this' to point to
    // the current object being created by createUser (i.e., 'this')
    //
    // This line is like borrowing the constructor logic of SetUsername
    // so that the current object also gets a 'username' property
    SetUsername.call(this, username);

    // These two lines assign additional properties to the new object
    this.email = email;
    this.password = password;
}

// Using 'new' to create an instance of createUser
// This will:
// 1. Create an empty object
// 2. Set 'this' inside createUser to that n
