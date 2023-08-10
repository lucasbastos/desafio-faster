<script setup lang="ts">
import useFavoriteDrinks from '@/composables/useFavoriteDrinks';
const props = defineProps({
    drink: {
        type: Object,
        required: true
    },
    showModal: {
        type: Boolean,
        required: true
    }
});



const saveFavorite = () => {
    useFavoriteDrinks().addFavoriteDrink(props.drink);
}

const checkIfIsFavorite = () => {
    return useFavoriteDrinks().checkIfIsFavorite(props.drink);
}

const removeFavorite = () => {
    useFavoriteDrinks().removeFavoriteDrink(props.drink);
}

useFavoriteDrinks().loadFavoriteDrinks();

</script>

<template>
    <div v-if="showModal" class="fixed bg-[rgba(0,0,0,0.07)] flex flex-col justify-center items-center inset-0; w-screen h-screen top-0">
        <div class="bg-white max-w-sm rounded overflow-hidden shadow-lg">
            <img class="w-full" :src="drink.strDrinkThumb" alt="drink">
            <img v-if="checkIfIsFavorite()" src="../assets/img/favorite.png" alt="" class="w-1/8 m-auto relative left-[45%] cursor-pointer" @click="removeFavorite()">
            <img v-else src="../assets/img/not-favorite.png" alt="" class="w-1/8 m-auto relative left-[45%] cursor-pointer" @click="saveFavorite()">
                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">{{ drink.strDrink }}</div>
                    <p class="text-gray-700 text-base">{{ drink.strInstructions }}</p>
                </div>
                <div class="px-6 pt-4 pb-2">
                    <button class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2" @click="$emit('closeModal')">Fechar</button>
                </div>
        </div>
    </div>   
</template>