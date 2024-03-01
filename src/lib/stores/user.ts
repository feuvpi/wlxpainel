// -- store and maintain user data in runtime memory
import { writable } from "svelte/store";

export const user = writable({
    email: "",
    name: "",
})