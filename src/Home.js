import React from "react";
import "./Home.css";
import Product from "./Product";

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/71QLga8v-QL._SX3000_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id="145647"
            title="boAt Rockerz 450 Bluetooth On Ear Headphones with Mic, Upto 15 Hours Playback, 40MM Drivers, Padded Ear Cushions, Integrated Controls and Dual Modes(Aqua Blue)"
            price="1,149"
            image="https://images-eu.ssl-images-amazon.com/images/I/31x-Xz8TkbL._AC_SR400,600_.jpg"
            rating={4}
          />
          <Product
            id="275458"
            title="Mi Corded & Cordless Waterproof Beard Trimmer with Fast Charging - 40 Length Settings, Black"
            price="1,199"
            image="https://images-eu.ssl-images-amazon.com/images/I/31y4E9w0r6L._AC_SR400,600_.jpg"
            rating={4}
          />
          <Product
            id="328746"
            title="Noise ColorFit Pulse Spo2 Smart Watch with 10 days battery life, 60+ Watch Faces, 1.4 Full Touch HD Display Smartwatch, 24*7 Heart Rate Monitor Smart Band, Sleep Monitoring Smart Watches for Men and Women & IP68 Waterproof (Jet Black)"
            price="1,599"
            image="https://images-eu.ssl-images-amazon.com/images/I/41XH-IpxCQL._AC_SR400,600_.jpg"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="445685"
            title="Redmi A1 (Black, 2GB RAM, 32GB Storage) | Helio A22 | 5000 mAh Battery | 8MP AI Dual Cam | Leather Texture Design | Android 12"
            price="6,299"
            image="https://m.media-amazon.com/images/I/41CB1rnC5tL._AC_UF226,226_FMjpg_.jpg"
            rating={4}
          />
          <Product
            id="564854"
            title="OnePlus Nord 2T 5G (Gray Shadow, 12GB Storage, 256GB Storage)"
            price="33,999"
            image="https://m.media-amazon.com/images/I/41qLZhKF5ZL._AC_UF226,226_FMjpg_.jpg"
            rating={4}
          />
          <Product
            id="664856"
            title="Apple iPhone 13 Pro (128GB) - Sierra Blue"
            price="1,06,900"
            image="https://m.media-amazon.com/images/I/311QJu8o9pL._AC_UF226,226_FMjpg_.jpg"
            rating={4}
          />
          <Product
            id="764856"
            title="Redmi Note 11T 5G (Aquamarine Blue, 6GB RAM, 128GB ROM)| Dimensity 810 5G | 33W Pro Fast Charging | Charger Included | Additional Exchange Offers| Get 2 Months of YouTube Premium Free!"
            price="15,999"
            image="https://m.media-amazon.com/images/I/417k0DCw0GL._AC_UF226,226_FMjpg_.jpg"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="856423"
            title="Lenovo IdeaPad Gaming 3 Intel Core i5 11th Gen 15.6' (39.62cm) FHD IPS Gaming Laptop (8GB/512GB SSD/4GB NVIDIA GTX 1650/120Hz/Win 11/Backlit/3months Game Pass/Shadow Black/2.25Kg), 82K10198IN"
            price="50,990"
            image="https://m.media-amazon.com/images/I/71--IQUHVwL._SX522_.jpg"
            rating={4}
          />
          <Product
            id="945348"
            title="Acer Nitro 5 Gaming Laptop/ 12th Gen Intel Core i5-12500H Processor 12 core/ 15.6'(39.6cms) FHD 144Hz Display (8GB/512GB SSD/RTX 3050 Graphics/Windows 11 Home/RGB), AN515-58 + Xbox Game Pass Ultimate"
            price="74,990"
            image="https://m.media-amazon.com/images/I/91U5Ler19jL._AC_UL480_FMwebp_QL65_.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
