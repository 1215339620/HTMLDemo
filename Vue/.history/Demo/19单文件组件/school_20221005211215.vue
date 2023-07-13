<template>
    <div class="demo">
        <h2>学校名称：{{schoolName}}</h2>
        <h2>学校地址：{{address}}</h2>
        <button @click="showName">点我显示校名</button>
    </div>
</template>

<script>
    const school =Vue.extend({
        data() {
            return {
                school:'河南科技学院',
                address:''
            }
        },
    })
</script>

<style scoped>

</style>