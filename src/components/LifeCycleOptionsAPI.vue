<template>
<div> 
<h3> Life Cycle Hooks Demo - Options API </h3>
   Count Value : {{count}}
</div>
<div> 
    <button @click.prevent="count++"> Click Me </button>
</div>
</template>

<script>

export default{
    data(){
        return{
            count : 0
        }
    },
    beforeCreate(){
        console.log('Before create called');
    },
    created(){
        console.log('Created');
    },
 beforeMount(){
    console.log('Before Mounted');
 }   ,
 mounted(){
    console.log('Mounted');
 },
    beforeUpdate(){
       console.log('Before updated')
    },
    updated(){
        console.log('updated')
    },
    beforeUnmount(){
        console.log('Before Unmount')
    },
    unmounted(){
        console.log('unmounted')
    }
    
 }



</script>