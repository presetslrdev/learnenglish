<template>
    <v-container
            class="fill-height"
            fluid
    >
        <v-row
                align="center"
                justify="center"
        >
            <v-col
                    cols="12"
                    sm="8"
                    md="4"
            >
                <v-card class="elevation-12">
                    <v-toolbar
                            color="primary"
                            dark
                            flat
                    >
                        <v-toolbar-title>Регистрация</v-toolbar-title>
                    </v-toolbar>
                    <v-card-text>
                        <v-form>
                            <v-alert
                                    v-show="error"
                                    type="warning"
                                    v-text="error"
                            >
                            </v-alert>
                            <v-text-field
                                    label="Login"
                                    name="login"
                                    prepend-icon="mdi-account"
                                    type="text"
                                    v-model="email"
                                    required
                            ></v-text-field>

                            <v-text-field
                                    id="password"
                                    label="Password"
                                    name="password"
                                    prepend-icon="mdi-lock"
                                    type="password"
                                    v-model="password"
                                    required
                            ></v-text-field>
                        </v-form>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                                color="primary"
                                @click.prevent="signup"
                                :disabled="processing"
                        >Зарегистрироваться
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        name: "Signup",
        data() {
            return {
                email: null,
                password: null,
            }
        },
        computed: {
            error() {
                return this.$store.getters.getError
            },
            processing() {
                return this.$store.getters.getProcessing
            },
            isUserAuth(){
                return this.$store.getters.isUserAuth
            }
        },
        watch:{
            isUserAuth(val){
                if(val === true)
                    this.$router.push('/')
            }
        },
        methods: {
            signup() {
                this.$store.dispatch('SIGNUP', {email: this.email, password: this.password})
            }
        }
    }
</script>

<style scoped>

</style>