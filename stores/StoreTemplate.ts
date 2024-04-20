import { defineStore } from 'pinia'

export const useTemplateStore = defineStore('storeTemplate', {


    // State represents the actual data stored in your Pinia store. 
    // It includes properties that hold the current state of your application. 
    // You access and update state directly from components via your getters and actions
    state: () => ({ 
        count: 0
    }),


    // Getters are used to access the state of your store
    // Getters are useful for transforming or filtering data before using it in your components. 
    // To call them from your component, do not use parentheses   
    getters: {
        getTotal(): number {
          return this.count;
        },
    },
  

    // Actions are used to update the state of your store.
    // They encapsulate logic for performing asynchronous operations, data mutations, or any other business logic that modifies the state.
    // To call them from your component, you can use parentheses to pass parameters if needed
    actions: {
        incrementBy(num: number): void {
            this.count += num;
        },
    },


}) 