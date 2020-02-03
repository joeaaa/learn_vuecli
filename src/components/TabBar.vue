<template>
    <nav>
        <!-- 声明式导航 -->
        <ul>
            <router-link to="/film" tag="li" active-class="my-active-class">film</router-link>
            <router-link to="/cinema" tag="li" active-class="my-active-class">cinema</router-link>
            <router-link to="/center" tag="li" active-class="my-active-class">center</router-link>
        </ul>
    </nav>
</template>

<style lang="scss" scoped>
    .my-active-class {
        color: red
    }
</style>
