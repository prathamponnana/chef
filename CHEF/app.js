document.querySelector("form").addEventListener("submit", function (e) {
  const inpItem = document.querySelector(".inpItem").value;
  
  const food = new Food(inpItem);
  const ui = new UI();

  food.getData()
  .then(recepieList => {
    if(recepieList === null) ui.showErr('Please try a different ingredient...');
    else ui.showRes(recepieList);
  })
  .catch(err => ui.showErr('Please check your internet connection...'));

  e.preventDefault();
});
