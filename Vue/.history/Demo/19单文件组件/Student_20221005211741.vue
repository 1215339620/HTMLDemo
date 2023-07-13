<template>
    <div class="demo">
        <h2>学生姓名：{{name}}</h2>
        <h2>家庭地址：{{address}}</h2>
        <button @click="showName">点我显示学生名</button>
    </div>
</template>

<script>
    export default {
        name:'School',
        data() {
            return {
                :'河南科技学院',
                address:'新乡'
            }
        },
        methods: {
            showName(){
                alert(this.schoolName)
            }
        },
    }
</script>

<style>
    .demo{
        background-color: orange;
    }
</style>