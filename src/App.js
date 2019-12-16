import React, { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState("");
  const [err, setErrors] = useState(false);
  const [input, setInput] = useState({});
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  const postData = () => {
    fetch("https://jsonplaceholder.typicode.com/users", {
      headers: { "Content-Type": "application/json; charset=utf-8" },
      method: "POST",
      body: JSON.stringify({
        username: "lalala new user",
        email: "elonmusk@gmail.com"
      })
    });
  };
  const deleteData = () => {
    fetch("https://jsonplaceholder.typicode.com/users/1", {
      method: "DELETE"
    });
  };

  // function remove(id){
  // fetch(apiUrl + "/" + id, {
  //   method: 'DELETE'
  // }).then(() => {
  //    console.log('removed');
  // }).catch(err => {
  //   console.error(err)
  // });

  const updateData = () => {
    fetch("https://jsonplaceholder.typicode.com/users/3", {
      headers: { "Content-Type": "application/json; charset=utf-8" },
      method: "PUT",
      body: JSON.stringify({
        username: "Elon Musk",
        email: "elonmusk@gmail.com"
      })
    });
  };

  // function update(id, data){
  // fetch(apiUrl + "/" + id, {
  //   method: 'PATCH',
  //   body: JSON.stringify({
  //    data
  //   })
  // }).then((response) => {
  //   response.json().then((response) => {
  //     console.log(response);
  //   })
  // }).catch(err => {
  //   console.error(err)
  // })

  console.log("DATA", data);
  return (
    <div className="App">
      <button
        onClick={() => {
          postData();
        }}
      >
        create user
      </button>

      <button
        onClick={() => {
          deleteData();
        }}
      >
        delete user
      </button>

      <button
        onClick={() => {
          updateData();
        }}
      >
        update user
      </button>
    </div>
  );
}

export default App;
