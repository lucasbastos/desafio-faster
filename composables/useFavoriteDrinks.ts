//save favorate drinks to local storage

import { ref } from 'vue';
import { Drink } from "types/types";

const favoriteDrinks = ref<Drink[]>([]);
const favoriteDrinksStorageKey = 'favoriteDrinks';

export default () => {
    const loadFavoriteDrinks = () => {
        const drinks = localStorage.getItem(favoriteDrinksStorageKey);
        if (drinks) {
            favoriteDrinks.value = JSON.parse(drinks);
        }
        return favoriteDrinks.value
    }
    
    const saveFavoriteDrinks = () => {
        localStorage.setItem(favoriteDrinksStorageKey, JSON.stringify(favoriteDrinks.value));
    }
    
    const addFavoriteDrink = (drink: Drink) => {
        favoriteDrinks.value.push(drink);
        saveFavoriteDrinks();
    }

    const checkIfIsFavorite = (drink: Drink) => {
        return favoriteDrinks.value.some((d) => d.idDrink === drink.idDrink);
    }

    const removeFavoriteDrink = (drink: Drink) => {
        const index = favoriteDrinks.value.findIndex((d) => d.idDrink === drink.idDrink);
        if (index > -1) {
            favoriteDrinks.value.splice(index, 1);
            saveFavoriteDrinks();
        }
    }

    return {
        saveFavoriteDrinks,
        loadFavoriteDrinks,
        addFavoriteDrink,
        checkIfIsFavorite,
        removeFavoriteDrink

    }
};

