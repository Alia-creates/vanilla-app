let query = "Los Angeles";
let key = "93efccd922aoa89t53f9abbece2045a0";
let units = "imperial";
function showUser(response) {
  alert(`The user name is ${response.data.name}`);
}

let url = "https://jsonplaceholder.typicode.com/users/1";
axios.get(url).then(showUser);
