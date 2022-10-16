import {defineStore} from 'pinia'

export const useBlocksStore = defineStore('blocks', {
    state: () => {
        return {
            leftBlock: [],
            rightBlock: [],
            leftBottomBlock: [
                {
                    "id": 1,
                    "name": "Shoes 1"
                },
                {
                    "id": 2,
                    "name": "Shoes 2"
                },
                {
                    "id": 3,
                    "name": "Shoes 3"
                },
                {
                    "id": 4,
                    "name": "Shoes 4"
                },
                {
                    "id": 5,
                    "name": "T-shirt 1"
                },
                {
                    "id": 6,
                    "name": "T-shirt 2"
                },
                {
                    "id": 7,
                    "name": "T-shirt 3"
                },
                {
                    "id": 8,
                    "name": "T-shirt 4"
                }
            ],
            rightBottomBlock: [
                {
                    "id": 11,
                    "name": "Jacket 1"
                },
                {
                    "id": 12,
                    "name": "Jacket 2"
                },
                {
                    "id": 13,
                    "name": "Jacket 3"
                },
                {
                    "id": 14,
                    "name": "Jacket 4"
                },
                {
                    "id": 15,
                    "name": "Hoodie 1"
                },
                {
                    "id": 16,
                    "name": "Hoodie 2"
                },
                {
                    "id": 17,
                    "name": "Hoodie 3"
                },
                {
                    "id": 18,
                    "name": "Hoodie 4"
                }
            ],
        }
    },
    getters: {
        getLeftBottomBlock(): Object[] {
            return this.leftBottomBlock
        },
        getRightBottomBlock(): Object[] {
            return this.rightBottomBlock
        },
        getLeftBlock(): Object[] {
            return this.leftBlock
        },
        getRightBlock(): Object[] {
            return this.rightBlock
        }
    }
})