<script>
	import { Link, Router, Route } from "svelte-navigator";
	import { baseURL, user } from "./stores/generalStore.js";
	import { SvelteToast } from '@zerodevx/svelte-toast';
	const options = {  }; //Toast options

	//Pageimport
	import Frontpage from "./pages/Frontpage/Frontpage.svelte";
	import Profile from "./pages/Profile/Profile.svelte";
	import PrivateRoute from "./components/PrivateRoute.svelte";
	import RegisterUser from "./pages/Login/RegisterUser.svelte";
	import Login from "./pages/Login/Login.svelte";
	import Shop from "./pages/Shop/Shop.svelte";

	async function handleLogout() {
		const response = await fetch($baseURL + '/auth/logout');
		const result = await response.json();
		console.log(result);
        
        if (result.loggedIn === false) {
            user.set(result.loggedIn = false);
			localStorage.clear();
			console.log(localStorage.getItem("user"));
        }
	}

</script>

<main>
	<SvelteToast options = {options}/>
	<Router>
		<div class="navdiv">
			<nav>
				<Link to="/"><button class="navbutton">Home</button></Link>
				{#if (!$user.loggedIn)}
					<Link to="/login"><button class="navbutton">Login</button></Link>
					<Link to="/register"><button class="navbutton">Register</button></Link>
					<Link to="/shop"><button class="navbutton">Shop</button></Link>
				{/if}
				{#if ($user.loggedIn)}
					<Link to="/profile/{$user.currentUser._id}"><button class="navbutton">Profile {$user.currentUser.username}</button></Link>
					<button class="navbutton" on:click="{handleLogout}">Logout</button>
				{/if}
			</nav>
		</div>

		<Route path="/" component={Frontpage} />
		{#if (!$user.loggedIn)}
		<PrivateRoute path="/profile/:id" let:location>
			<Login/>
		</PrivateRoute>
		{:else}
			<Route path="/profile/:id" component={Profile}/>
		{/if}
		<Route path="/shop" component={Shop}/>
		<Route path="/login" component={Login} />
		<Route path="/register" component={RegisterUser} />
	</Router>
</main>
<footer>
	{new Date().getFullYear()} Copyright bla bla
	About
	Contact
</footer>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	.navdiv {

	}

	.navlogo {
		width: 46px;
		height: 46px;
		overflow: hidden;
	}

	.navbutton {
		height: 46px;
		overflow: hidden;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>