class Administrator {
  constructor(id, firstName, lastName, username, password, email) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.username = username;
    this.password = password; // Note: In a real-world scenario, the password should be hashed
    this.email = email;
  }
}

module.exports = Administrator;