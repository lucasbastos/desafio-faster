<script setup lang="ts">
import { ref, Ref, toRaw } from 'vue';
import useCocktailApi from '@/composables/useCocktailApi';
import useFavoriteDrinks from '@/composables/useFavoriteDrinks';
import CocktailCard from '@/components/CocktailCard.vue';
import { Drink } from "types/types";

const selectedDrink: Ref<Drink | {}> = ref({});
const selectedCategory: Ref<string> = ref('');
const selectedCategoryOption: Ref<string> = ref('');
const drinkList: Ref<Drink[]> = ref([]);
const searchInput: Ref<string> = ref('');

const { getCategories, getAllDrinks, getDrinksByCategory, getDrinkByName } = useCocktailApi();

const { data: categories } = await getCategories();
const { data: allDrinks } = await getAllDrinks();

const showModal: Ref<boolean> = ref(false);

const openModal = (drink: Drink) => {
    showModal.value = true;
    selectedDrink.value = drink;
}

const closeModal = () => {
    showModal.value = false;
}

const getByCategory = async () => {
    if (selectedCategoryOption.value === 'all') {
        const { data } = await getDrinkByName('');
        drinkList.value = toRaw(data.value as Drink[]);
    } else if (selectedCategoryOption.value === 'favorites') {
        drinkList.value.drinks = await useFavoriteDrinks().loadFavoriteDrinks();

    } else {
        const { data } = await getDrinksByCategory(selectedCategoryOption.value);
        selectedCategory.value = selectedCategoryOption.value;
        drinkList.value = toRaw(data.value as Drink[]);
    }
}

const fetchByName = async () => {
    const { data } = await getDrinkByName(searchInput.value);
    drinkList.value = toRaw(data.value as Drink[]);
}

fetchByName();


</script>

<template>
    <div class="bg-white w-3/4 h-14 m-auto my-4 rounded-lg flex flex-row justify-between items-center shadow-lg px-2">
        <select name="categories" id="categories" v-model="selectedCategoryOption" class="border-2 h-12 rounded-lg border-violet-100 px-4 py-2">
            <option value="">Selecione uma categoria</option>
            <option value="all">Todas</option>
            <option value="favorites">Favoritos</option>
            <option v-for="category in categories.drinks" :key="category.strCategory" :value="category.strCategory">{{ category.strCategory }}</option>
        </select>
        <button class="bg-white border-2 border-violet-100  px-4 py-2 rounded-lg h-12" @click="getByCategory()">
            Pesquisar
        </button>
    </div>
    <input type="text" class="border-2 h-12 rounded-lg border-violet-100 flex flex-row justify-between px-4 py-2 w-3/4 m-auto" placeholder="Pesquisar por nome" @keyup="fetchByName()" v-model="searchInput" />
    <div class="bg-white w-3/4 h-14 m-auto my-4 rounded-lg flex flex-row justify-between shadow-lg">
        <table class="bg-white w-full">
            <thead>
                <tr>
                    <th class="px-4 py-2">Nome da Bebida</th>
                    <th class="px-4 py-2">Categoria</th>
                </tr>
            </thead>
            <tbody v-if="drinkList.drinks">
                <tr v-for="drink in drinkList.drinks" :key="drink.strDrink">
                    <td class="border px-4 py-2 cursor-pointer" @click="openModal(drink)">
                        {{ drink.strDrink }}
                    </td>
                    <td v-if="drink.strCategory" class="border px-4 py-2">{{ drink.strCategory }}</td>
                    <td v-else class="border px-4 py-2">{{ selectedCategory }}</td>
                </tr>
            </tbody>
            <tbody v-else>
                <tr>
                    <td class="border px-4 py-2 flex flex-row justify-center w-[142%]" colspan="2">Nenhum resultado encontrado</td>
                </tr>
            </tbody>
        </table>
    </div>
    <CocktailCard :showModal="showModal" :closeModal="closeModal" :drink="selectedDrink" @close-modal="closeModal"/>
</template>