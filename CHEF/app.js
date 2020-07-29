const ui = new UI();

document.querySelector("form").addEventListener("submit", function (e) {
  const inpItem = document.querySelector(".item").value;
  
  const food = new Food(inpItem);

  food.getData()
  .then(data => {
    if(data === null) ui.showErr('Please try a different ingredient...');
    else ui.showRes(data);
  })
  .catch(err => ui.showErr('Please check your internet connection...'));

  e.preventDefault();
});