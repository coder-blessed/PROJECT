function CalculateAge() {
    let dob = document.getElementById("dob").value 
    let dobDate= new Date(dob);
    let today = new Date();
    console.log(dobDate)

    let age = today.getFullYear() - dobDate.getFullYear();
    let month= today.getMonth() - dobDate.getMonth();
    let day = today.getDate() - today.getDate();

    if(day < 0){
        month--
        today.setMonth(today.getMonth()-1)
    }

    if(month < 0){
        age--
        month+=12

    }

    if(today.getMonth() < dobDate.getMonth() || (today.getMonth() === dobDate.getMonth() && today.getDate() < dobDate.getDate())){
        age--
    }

    document.getElementById("result").innerHTML = `you are ${age} years, ${month}month 
    , and  ${day}day Old`;
}


btnr.addEventListener("click", () => {
    window.relo
    innterText.value="your result will show here"
    inputetag.value=""
})





// asynchronous Syntax:   
// javascript is single threaded , meaning only one operation, can happen at a Time , blocking operations 
// like networks requests , can freeze the UI, AND MAKE THE APPLICATION UNRESPONSIVE.
// asynchronous PROGRAMMING ALLOWS THE OPERATION TO RUN IN THE BACKGROUND , FREEING UP 
// THE MAIN THREAD. 

// 2. Callbacks
// Definition: A callback is a function passed into another function as an argument, 
// which is then invoked inside the outer function to complete some kind of routine or action.

// function fetchData(callback) {
//     setTimeout(() => {
//       callback('Data fetched');
//     }, 2000);
//   }
  
//   function displayData(data) {
//     console.log(data);
//   }
  
//   fetchData(displayData);



//   Promises
// Definition: A promise represents the eventual completion (or failure) 
// of an asynchronous operation and its resulting value.




function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true; // Simulate success/failure
      if (success) {
        resolve('Data fetched');
      } else {
        reject('Error fetching data');
      }
    }, 2000);
  });
}

fetchData()
  .then(data => {
    console.log(data); // "Data fetched"
  })
  .catch(error => {
    console.error(error);
  });



//   Async/Await
//   Definition: async and await provide a way to write asynchronous code that looks synchronous.
  


  async function fetchData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const success = true;
        if (success) {
          resolve('Data fetched');
        } else {
          reject('Error fetching data');
        }
      }, 2000);
    });
  }
  
  async function displayData() {
    try {
      const data = await fetchData();
      console.log(data); // "Data fetched"
    } catch (error) {
      console.error(error);
    }
  }
  
  displayData();




  async function fetchData() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error('Error fetching data: ' + error.message);
    }
  }
  
  async function displayData() {
    try {
      const data = await fetchData();
      console.log(data); // Data from the API
    } catch (error) {
      console.error(error);
    }
  }
  
  displayData();
  





 



// WHAT IS JSONPlaceholder API
// ChatGPT
// JSONPlaceholder is a free online REST API that you can use for
//  testing and prototyping. It's an easy way to get mock data for 
//  your applications. The API provides a set of typical RESTful 
//  endpoints to perform CRUD (Create, Read, Update, Delete) operations.

// Features of JSONPlaceholder:
// Resource Types:

// Posts: Represents blog posts.
// Comments: Represents comments on blog posts.
// Albums: Represents photo albums.
// Photos: Represents photos in albums.
// Todos: Represents to-do items.
// Users: Represents user profiles.
// Endpoints:

// /posts
// /comments
// /albums
// /photos
// /todos
// /users
Operations:

// GET: Fetch data (e.g., get all posts or a specific post).
// POST: Create new data (e.g., add a new post).
// PUT: Update existing data.
// PATCH: Partially update existing data.
// DELETE: Remove data.


// Example Usage:



// Fetch all posts:


fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(data => console.log(data));


// Fetch a single post:


fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => response.json())
  .then(data => console.log(data));



// Create a new post:


fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then(response => response.json())
  .then(data => console.log(data));



// Update a post:

fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'PUT',
  body: JSON.stringify({
    id: 1,
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    // 'Content-type: 'application/json; charset=UTF-8',
  },
})
  .then(response => response.json())
  .then(data => console.log(data));




// Delete a post:


fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'DELETE',
})
  .then(response => response.json())
  .then(data => console.log(data));


// JSONPlaceholder is a useful tool for 
// developers who need to quickly set up a working backend for testing and 
// prototyping purposes without having to worry about setting up a real server or database.
  
  
