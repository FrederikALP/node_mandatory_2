<script>
    import { Link, Router, Route } from "svelte-navigator";
    import { onMount } from 'svelte';
    import { baseURL, user } from "../../stores/generalStore.js";

    let shops;

    async function fetchShop() {
        const response = await fetch($baseURL + '/api/shop');
        const shopArray = await response.json();
        shops = shopArray;
        console.log(shops);
    };

    onMount(async () => {
        fetchShop()
    });
</script>

<div class="fullpage">
    <div class="header">
        <h1>Kea Shop</h1>
    </div>
        <div class="shopcontent">
            {#if shops} 
                {#each shops as shop}
                    {#if shop.category === shop.category}
                        <div class="shopitem">
                            Category {shop.category}
                            <div class="itemandprice">
                                Name: {shop.itemname} | Price: {shop.Price}
                            </div>
                        </div>
                    {/if}
                {/each}
            {/if}
        </div>
    </div>
        
        
<style>
    h1 {
        color: white;
    }

    h2 {

    }

    h3 {
        color: white;
        margin: 0px;
    }

    h4 {
        color: grey;
    }

    .fullpage {
        width: 50%;
        margin: auto;
        text-align: left
    }

    .header {
        border: solid black 1px;
        border-collapse: collapse;
        margin-top: 40px;
        border-radius: 0.25em;
        background-color: grey;
    }
</style>