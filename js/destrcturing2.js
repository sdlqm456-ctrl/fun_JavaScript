// destrcturing2.js

fetch("js/data2.json")
  .then((resp) => resp.json())
  .then((data) => {
    data.forEach(({ id, first_name, salary }) => {
      console.log(id, first_name, salary);
    });
  })
  .catch((err) => console.log(err));
