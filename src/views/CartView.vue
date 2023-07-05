<script setup>

import Header2 from '../components/Header2.vue';
import Footer from '../components/Footer.vue';


</script>

<template>
    <Header2/>
    <!--------------------------------------- cart items details ------------------------------------>

    <div class="small-container cart-page">
        <table>
            <tr>
                <th>Product</th>
                <th>Quantity</th>
                <th>Subtotal</th>
            </tr>
            <tr>
                <td>
                    <div class="cart-info">
                        <img src="../assets/images/buy-1.jpg" alt="">
                        <div>
                            <p>Reds printed Tshirt</p>
                            <small>Price: $50.00</small>
                            <br>
                            <a href="">Remove</a>
                        </div>
                    </div>
                </td>
                <td> <input type="number" value="1"> </td>
                <td>$50.00</td>
            </tr><tr>
                <td>
                    <div class="cart-info">
                        <img src="../assets/images/buy-2.jpg" alt="">
                        <div>
                            <p>Reds printed Tshirt</p>
                            <small>Price: $75.00</small>
                            <br>
                            <a href="">Remove</a>
                        </div>
                    </div>
                </td>
                <td> <input type="number" value="1"> </td>
                <td>$75.00</td>
            </tr>
            <tr>
                <td>
                    <div class="cart-info">
                        <img src="../assets/images/buy-3.jpg" alt="">
                        <div>
                            <p>Reds printed Tshirt</p>
                            <small>Price: $50.00</small>
                            <br>
                            <a href="">Remove</a>
                        </div>
                    </div>
                </td>
                <td> <input type="number" value="1"> </td>
                <td>$50.00</td>
            </tr>
        </table>

        <div class="total-price">
            <table>
                <tr>
                    <td>Subtotal</td>
                    <td>$200.00</td>
                </tr>
                <tr>
                    <td>Tax</td>
                    <td>$35.00</td>
                </tr>
                <tr>
                    <td>Total</td>
                    <td>$230.00</td>
                </tr>
            </table>
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
</template>

<style scoped>

</style>
    