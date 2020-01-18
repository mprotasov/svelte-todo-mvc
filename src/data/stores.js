import { writable } from 'svelte/store'

export const tasks = writable([])

export function *IdGenerator() {
    let i = 0
    while (true) {
        yield ++i
    }
}