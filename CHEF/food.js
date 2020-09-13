class Food {
  constructor(ingredient) {
    this.ingredient = ingredient;
    this.url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${this.ingredient}`;
  }
  async getData() {
    const fetchRecepie = await fetch(this.url);
    const recepieList = await fetchRecepie.json();
    return recepieList.meals;
  }
}

