<template>
    <div>
        <div>slider</div>
        <hr>
        <div>
            <ul>
                <!-- todo -->
                film-nav
                <router-view name='FilmNav'></router-view>
            </ul>
        </div>
        <hr>
        <!-- film 二级路由页面 -->
        <div><router-view></router-view></div>
    </div>
</template>
