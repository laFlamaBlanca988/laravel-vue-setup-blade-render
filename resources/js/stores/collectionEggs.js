// stores/counter.js
import { defineStore } from 'pinia'
import axiosClient from 'axios.js';

export const useCollectionEggsStore = defineStore('collectionEggs', {
  state: () => {
    return { 
        count: 0 
    }
  },
  actions: {
        getAllEggs() {
            axiosClient.get('/api/eggs').then(res => {
                console.log(res);
                this.count = 10;
            })
            .catch(error => {
                console.log(error);
            }) 
        }
    
  },
})