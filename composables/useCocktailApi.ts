import { CocktailCategoryResponse, CocktailDrinkResponse } from "types/types";


const fetchFromAPI = async <T>(url: string) => {
    const router = useRouter();

    const { data, pending, error, refresh } = await useFetch(url);
    if (error.value) {
        router.push({ path: "/error" });
    }
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