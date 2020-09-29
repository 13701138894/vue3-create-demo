<template>
    <div>
        <create @handlePlan="handlePlan"></create>
    </div>
</template>

<script>
import create from "./create";
export default {
    components:{
        create
    },
    setup(){
        const handlePlan = (plan)=>{
            console.log(plan)
            console.log(process.env)
            // process.env.NODE_ENV = 'production'
            console.log(process.env)
            console.log(process.env.VUE_APP_URL)
        }

        return {
            handlePlan
        }
    }
}
</script>