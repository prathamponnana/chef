class Food {
  constructor(value) {
    this.value = value;
    this.url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${this.value}`;
  }
  async getData() {
      const getRecepie = await fetch(this.url);
      const getRecepie1 = await getRecepie.json();
      return getRecepie1.meals;
    }
}
