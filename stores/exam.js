import { definestore } from "pinia";

export const useExamStore = definestore('exmaStore' {
    state: () => ({
        result: 0,
        examFinished: false
    })
    ,
    actions: {
        submitResult(result){
            this.result = result
            console.log('this is this.result value :' , result)
        }
    }
})