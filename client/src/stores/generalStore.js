import { readable, writable } from "svelte/store";

export const baseURL = readable("http://localhost:3000")
export const user = writable(
    localStorage.user ? JSON.parse(localStorage.getItem("user")) : { loggedIn: false });