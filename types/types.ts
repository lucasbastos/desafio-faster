export interface CocktailCategoryResponse {
  drinks: Category[];
}

export interface CocktailDrinkResponse {
  drinks: Drink[];
}

export interface Category {
  strCategory: string;
}

export interface Drink {
  idDrink?: string;
  strDrink: string;
  strCategory: string;
}