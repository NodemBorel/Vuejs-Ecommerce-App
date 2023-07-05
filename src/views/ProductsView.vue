<script setup>

import Header2 from '../components/Header2.vue';
import Footer from '../components/Footer.vue';

</script>

<template>
    <Header2/>
    <!--------------------------------------- products ------------------------------------>
    <div class="small-container">

    <div class="row row-2">
    <h2>All Products</h2>
    <select>
        <option>Default Sorting</option>
        <option>Sort by price</option>
        <option>Sort by popularity</option>
        <option>Sort by rating</option>
        <option>Sort by sale</option>
    </select>
    </div>

    <div class="row">
    <div class="col-4">
        <a href="product-details.html"><img src="../assets/images/product-2.jpg" alt=""></a>
        <a href="product-details.html"><h4>Red Printed Tshirt</h4></a>
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
        <img src="../assets/images/product-1.jpg" alt="">
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
        <img src="../assets/images/product-3.jpg" alt="">
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
        <img src="../assets/images/product-4.jpg" alt="">
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
    <div class="row">  
    <div class="col-4">
        <img src="../assets/images/product-5.jpg" alt="">
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
        <img src="../assets/images/product-6.jpg" alt="">
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
        <img src="../assets/images/product-7.jpg" alt="">
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
        <img src="../assets/images/product-8.jpg" alt="">
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
    <div class="page-btn">
    <span>1</span>
    <span>2</span>
    <span>3</span>
    <span>4</span>
    <span>&#8594;</span>
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