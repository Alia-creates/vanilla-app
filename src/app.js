function showUser(response) {
  alert(`The user name is ${response.data.name}`);
}

let url = "https://jsonplaceholder.typicode.com/users/1";
axios.get(url).then(showUser);
