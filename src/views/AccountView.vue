<script setup>

import Header2 from '../components/Header2.vue';
import Footer from '../components/Footer.vue';

</script>

<template>
    <Header2/>
    <!--------------------------------------- account page ------------------------------------>

    <div class="account-page">
        <div class="container">
            <div class="row">
                <div class="col-2">
                    <img src="../assets/images/image1.png" alt="" width="100%">
                </div>
                <div class="col-2">
                    <div class="form-container">
                        <div class="form-btn">
                            <span onclick="login()">Login</span>
                            <span onclick="register()">Register</span>
                            <hr id="Indicator">
                        </div>
                        <form action="" id="LoginForm">
                            <input type="text" placeholder="Username">
                            <input type="password" placeholder="Password">
                            <button type="submit" class="btn">Login</button>
                            <a href="">Forgot password</a>
                        </form>

                        <form action="" id="RegForm">
                            <input type="text" placeholder="Username">
                            <input type="email" placeholder="Email">
                            <input type="password" placeholder="Password">
                            <button type="submit" class="btn">Register</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!--------------------------------------- footer ------------------------------------>
    <Footer/>
    <!--------------------------------------- js for toogle menu ------------------------------------>
    <!-- <script>
        var MenuItems = document.getElementById("MenuItems");
        MenuItems.style.maxHeight =  "0px";
        function menutoggle(){
            if(MenuItems.style.maxHeight == "0px"){
                MenuItems.style.maxHeight =  "200px";
            }
            else{
                MenuItems.style.maxHeight =  "0px]";
            }
        }
    </script> -->
    <!--------------------------------------- js for toogle form ------------------------------------>
    <!-- <script>
        var LoginForm = document.getElementById("LoginForm")
        var RegForm = document.getElementById("RegForm")
        var Indicator = document.getElementById("Indicator")

        function register(){
            RegForm.style.transform = "translateX(0px)";
            LoginForm.style.transform = "translateX(0px)";
            Indicator.style.transform = "translateX(100px)"
        }
        function login(){
            RegForm.style.transform = "translateX(300px)";
            LoginForm.style.transform = "translateX(300px)";
            Indicator.style.transform = "translateX(0px)"
        }
    </script> -->
</template>

<style scoped>

</style>