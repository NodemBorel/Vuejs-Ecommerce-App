<script setup lang="ts">

import Header2 from '../components/Header2.vue';
import Footer from '../components/Footer.vue';

</script>

<template>
    <Header2/>
    <!--------------------------------------- single products details ------------------------------------>
   <div class="small-container single-product">
        <div class="row">
            <div class="col-2">
                <img src="../assets/images/gallery-1.jpg" alt="" width="100%" id="productImg">

                <div class="small-img-row">
                    <div class="small-img-col">
                        <img src="../assets/images/gallery-1.jpg" alt="" width="100%" class="small-img">
                    </div>
                    <div class="small-img-col">
                        <img src="../assets/images/gallery-2.jpg" alt="" width="100%" class="small-img">
                    </div>
                    <div class="small-img-col">
                        <img src="../assets/images/gallery-3.jpg" alt="" width="100%" class="small-img">
                    </div>
                    <div class="small-img-col">
                        <img src="../assets/images/gallery-4.jpg" alt="" width="100%" class="small-img">
                    </div>
                </div>

            </div>
            <div class="col-2">
                <p>Home / T-Shirt</p>
                <h1>Red Printed T-Shirt by HRX</h1>
                <h4>$50.00</h4>
                <select name="" id="">
                    <option value="">Select Size</option>
                    <option value="">XXL</option>
                    <option value="">XL</option>
                    <option value="">Large</option>
                    <option value="">Medium</option>
                    <option value="">Small</option>
                </select>
                <input type="number" value="1">
                <a href="" class="btn">Add To card</a>

                <h3>Product Details <i class="fa fa-ident"></i></h3>
                <br>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio commodi veritatis saepe veniam ullam animi facere, itaque incidunt vitae dolor nobis. Unde inventore aperiam iusto? Aliquid ad ipsam odio dicta!</p>
                
            </div>
        </div>
    </div>    

   <!------------------------------------ title -----------------------------------------> 
    <div class="small-container">
        <div class="row row-2">
            <h2>Related Products</h2>
            <p>View More</p>
        </div>
    </div>



    <!--------------------------------------- products ------------------------------------>
    <div class="small-container">

        <div class="row">
            <div class="col-4">
                <img src="../assets/images/product-9.jpg" alt="">
                <h4>Red Printed Tshirt</h4>
                <div class="rating">
                    <i class="fa fa-star-half-alt"></i>
                    <i class="fa fa-star-half-stroke"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                </div>
                <p>$50.00</p>
            </div>
            <div class="col-4">
                <img src="../assets/images/product-10.jpg" alt="">
                <h4>Red Printed Tshirt</h4>
                <div class="rating">
                    <i class="fa fa-star-half-alt"></i>
                    <i class="fa fa-star-half-stroke"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                </div>
                <p>$50.00</p>
            </div>
            <div class="col-4">
                <img src="../assets/images/product-11.jpg" alt="">
                <h4>Red Printed Tshirt</h4>
                <div class="rating">
                    <i class="fa fa-star-half-alt"></i>
                    <i class="fa fa-star-half-stroke"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                </div>
                <p>$50.00</p>
            </div>
            <div class="col-4">
                <img src="../assets/images/product-12.jpg" alt="">
                <h4>Red Printed Tshirt</h4>
                <div class="rating">
                    <i class="fa fa-star-half-alt"></i>
                    <i class="fa fa-star-half-stroke"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                </div>
                <p>$50.00</p>
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
    <!----------------------------------- js for product gallery ----------------------->
    <!-- <script>
        var productImg = document.getElementById("productImg")
        var SmallImg = document.getElementsByClassName("small-img")

        SmallImg[0].onclick = function(){
            productImg.src = SmallImg[0].src;
        }
        SmallImg[1].onclick = function(){
            productImg.src = SmallImg[1].src;
        }
        SmallImg[2].onclick = function(){
            productImg.src = SmallImg[2].src;
        }
        SmallImg[3].onclick = function(){
            productImg.src = SmallImg[3].src;
        }

    </script> -->
</template>

<style scoped>

</style>