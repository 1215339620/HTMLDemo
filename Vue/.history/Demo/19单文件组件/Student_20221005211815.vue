<template>
    <div class="demo">
        <h2>学生姓名：{{name}}</h2>
        <h2>家庭地址：{{address}}</h2>
        <button @click="showName">点我显示学生名</button>
    </div>
</template>

<script>
    export default {
        name:'Student',
        data() {
            return {
                name:'麦',
                address:'新乡'
            }
        }
    }
</script>

<style>
    .demo{
        background-color: orange;
    }
</style>