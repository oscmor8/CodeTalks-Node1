const getTodos = () => {
  // creates a function called getTodos
  const request = new XMLHttpRequest();

  request.addEventListener("readystatechange", () => {
    if (request.readyState === 4 && request.status === 200) {
      // In the event listener request, a conditional is placed. If the readyState of the request is 4 (which means the operation is complete) and the status is 200 (which means the request was successful)
      console.log(request.responseText); // it logs the responseText property of the request object to the console, which contains the response data.
    } else if (request.readyState === 4) {
      // However, if the readyState is 4 but not 200 it logs "could not fetch the data"
      console.log("could not fetch the data");
    }
  });

  request.open("GET", "https://jsonplaceholder.typicode.com/todos/"); // the open method is used to set up a GET request. This grabs the JSON information from the url
  request.send(); // the send method is used to send the information the server, and the server responds with the proper data based on the request.
};

getTodos(); // the function is then called to run
getTodos();

// This piece of code is used to get data from a json placeholder/file using an http get request
