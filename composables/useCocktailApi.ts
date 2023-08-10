interface CocktailCategoryResponse {
    drinks: Category[];
}

interface CocktailDrinkResponse {
    drinks: Drink[];
}

interface Category {
    strCategory: string;
}

interface Drink {
    strDrink: string;
    strCategory: string;
}

const fetchFromAPI = async <T>(url: string) => {
    const { data, pending, error, refresh } = await useFetch(url);
    return {
        data,
        error,
        pending,
        refresh
    };
};

export default () => {
    const config = useRuntimeConfig();
    const API_BASE = config.public.API_BASE;
    const getCategories = async () => {
        return fetchFromAPI<CocktailCategoryResponse>(`${API_BASE}/list.php?c=list`);
    };
    const getAllDrinks = async () => {
        return fetchFromAPI<CocktailDrinkResponse>(`${API_BASE}/search.php?s=`);
    };

    const getDrinksByCategory = async (category: string) => {
        return fetchFromAPI<CocktailDrinkResponse>(`${API_BASE}/filter.php?c=${encodeURIComponent(category)}`);
    };

    const getDrinkById = async (id: string) => {
        return fetchFromAPI<CocktailDrinkResponse>(`${API_BASE}/lookup.php?i=${encodeURIComponent(id)}`);
    };

    const getDrinkByName = async (name: string) => {
        return fetchFromAPI<CocktailDrinkResponse>(`${API_BASE}/search.php?s=${encodeURIComponent(name)}`);
    };

    return {
        getCategories,
        getAllDrinks,
        getDrinksByCategory,
        getDrinkById,
        getDrinkByName
    };
}