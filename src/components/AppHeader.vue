<template>
    <div>

        <v-navigation-drawer
                class="hidden-md-and-up"
                absolute
                temporary
                v-model="drawer"
        >
            <v-list shaped>
                <v-list-item-group>
                    <v-list-item
                            v-for="(item, i) in menuItems"
                            :key="`listitem_${i}`"
                    >
                        <v-list-item-icon>
                            <v-icon v-html="item.icon"/>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title v-text="item.title"/>
                        </v-list-item-content>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>


        <v-toolbar app dark dense short class="primary">
            <v-app-bar-nav-icon
                    class="hidden-md-and-up"
                    @click.stop="drawer = !drawer"/>
            <router-link
                    tag="span"
                    class="white--text"
                    to="/"
                    style="cursor: pointer"
            >
                <v-toolbat-title v-text="'Start English'"/>
            </router-link>
            <v-spacer/>
            <v-toolbar-items class="hidden-sm-and-down">
                <v-btn
                        v-for="(item, i) in menuItems"
                        :key="`menuitem_${i}`"
                        :to="item.route"
                        text>
                    <v-icon left v-html="item.icon"></v-icon>
                    {{ item.title }}
                </v-btn>
            </v-toolbar-items>
        </v-toolbar>
    </div>
</template>

<script>
    export default {
        name: "AppHeader",
        data() {
            return {
                drawer: false,
            }
        },
        computed: {
            menuItems() {
                return [
                    {
                        icon: 'visibility',
                        title: 'Читать',
                        route: '/books'
                    },
                    {
                        icon: 'extension',
                        title: 'Учить слова',
                        route: '/words'
                    },
                    {
                        icon: 'account_circle',
                        title: 'Мой кабинет',
                        route: '/profile'
                    },
                    {
                        icon: 'exit_to_app',
                        title: 'Выйти',
                        route: '/logout'
                    },
                    {
                        icon: 'input',
                        title: 'Войти',
                        route: '/signin'
                    },
                    {
                        icon: 'lock_open',
                        title: 'Зарегистрироваться',
                        route: '/signup'
                    },
                ]
            }
        }
    }
</script>

<style scoped>

</style>