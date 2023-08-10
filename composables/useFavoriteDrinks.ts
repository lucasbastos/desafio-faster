//save favorate drinks to local storage

import { ref } from 'vue';

const favoriteDrinks = ref<any[]>([]);
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
    
    const addFavoriteDrink = (drink: any) => {
        favoriteDrinks.value.push(drink);
        saveFavoriteDrinks();
    }

    const checkIfIsFavorite = (drink: any) => {
        return favoriteDrinks.value.some((d) => d.idDrink === drink.idDrink);
    }

    const removeFavoriteDrink = (drink: any) => {
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

