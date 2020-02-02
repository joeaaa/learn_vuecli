<template>
    <aside>
        sidebar
        <ul>
            <li>111</li>
            <li>222</li>
            <li>333</li>
        </ul>
    </aside>
</template>

// 使用scoped属性，此样式只影响当前组件
<style lang="scss" scoped>
    ul {
        li {
            background-color: green
        }
    }
</style>
