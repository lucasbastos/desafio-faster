<script setup lang="ts">
import { CocktailResponse } from 'types/cocktail';


const { data: cocktail, pending, error, refresh } = await useFetch<CocktailResponse>(`https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`);
</script>

<template>
    <div>
        <h1>Categories</h1>
        <ul>
            <li v-for="drink in cocktail.drinks" :key="drink.strCategory">
                <nuxt-link :to="`/category/${drink.strCategory}`">{{ drink.strCategory }}</nuxt-link>
            </li>
        </ul>
    </div>
</template>