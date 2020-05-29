<template>
    <v-app>
        <app-header/>
        <v-content>
            <router-view/>
        </v-content>
        <app-footer/>
    </v-app>
</template>

<script>
    import AppHeader from "./components/AppHeader";
    import AppFooter from "./components/AppFooter";

    export default {
        name: 'App',
        components: {
            AppHeader,
            AppFooter
        },
        data: () => ({
            //
        }),
    };
</script>
