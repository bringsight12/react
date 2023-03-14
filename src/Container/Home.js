import React from "react";
import { CardComponent } from "../views/CardComponent";
    
const Home = () => {
    return(
        <div className="w-full">
           <div className="bg-slate-500 text-slate-300 hover:bg-slate- text-2xl align-text-center">
           <h1>
            Menu Ayam Bakar Variasi
           </h1>
           </div>
           <div className="flex w-full flex-wrap">
           <CardComponent
            title = "Ayam Bakar sambal Trasi"
            // Harga = "20000"
            desc = "ayam bakar yang di sediakan dengan lalapan yang sudah di potong-potong "
            img = "https://www.masakapahariini.com/wp-content/uploads/2019/12/shutterstock_583077343-500x300.jpg"
           />
           <CardComponent
            // harga = "15000"
            title = "Ayam Bakar sambal Kacang"
            desc = "ayam yang menggunakan bumbu kacang,kecap,dan sambal yang di gabungkan menjadi satu"
            img = "https://img.kurio.network/tTwS4ND6LeHjaxfVZCNax9DeZWM=/1200x1200/filters:quality(80)/https://kurio-img.kurioapps.com/20/11/15/8a268b5c-94d1-40b4-98e6-5ec5f6218e98.jpeg"

           />
           <CardComponent
            // time = "4.30"
            title = "Ayam santa kara "
            desc = "Ayam santan kara yang di masak dengan satan dan menggunakan air sekucupnya agar rasa yang di sajikan bisa menyatu"
            img = "https://img-global.cpcdn.com/recipes/6f1af6cc313625a6/680x482cq70/ayam-bumbu-kacang-foto-resep-utama.jpg"
           />
           <CardComponent
            // time = "10.39"
            title = "Ayam Rendang"
            desc = "Ayam bakar yang dimasak dengan waktu cukup 1,5jam dan di hidangkan dengan nasi hangat agar lebih sedap"
            img = "https://cdn0-production-images-kly.akamaized.net/430DW44VwFSShz9CfnO5NmVi_wM=/1200x675/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/2473937/original/044015000_1543294391-resep-sederhana-redang-ayam-lezat-dan-hemat.jpg"
            />
           </div>
          </div>
    )
}
export default Home;