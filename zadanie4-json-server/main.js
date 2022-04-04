fetch("http://localhost:3003/cars", {
  method: "POST",
  headers: {
    "Content-type": "application/json",
  },
  body: JSON.stringify({
    name: "Polonez",
  }),
});

// console.log("hello world");
// const ul = document.querySelector("#list");
// ul.innerHTML = "";
// fetch("http://localhost:3003/cars")
//   .then((resp) => {
//     return resp.json();
//   })
//   .then((cars) => {
//     cars.forEach((car) => {
//       ul.innerHTML += `<li>${car.Name}</li>`;
//     });
//   })
//   .catch((err) => {
//     console.log(err);
//   });
