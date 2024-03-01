/* eslint-disable jsx-a11y/anchor-is-valid */

import "./App.css";
import Card from "./Card";
// import Caroual from "./Caroual";
import Navbar from "./Navbar";
// import Footer from "./Footer";

function App() {
  return (
    <>
      <Navbar />
      {/* <Caroual /> */}
      <div className="mt-2 container">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <Card
            cardTitle="iphone"
            cardDescription="An apple mobile which is nothing like apple should be more best quliity in range of qulity "
            cardImage="https://cdn.dummyjson.com/product-images/1/1.jpg"
            cardPrice="596"
            cardMrp="590"
            cardDiscount="12%"
            cardDelevery=" wed , 31 jan"
            cardFastestDelevery=" mon 29 jan"
          />
          <Card
            cardTitle="iPhone X"
            cardDescription="SIM-Free, Model A19211 6.5-inch
      Super Retina HD display with OLED technology A12 Bionic chip with ..."
            cardImage="https://cdn.dummyjson.com/product-images/1/3.jpg"
            cardPrice="899"
            cardMrp="999"
            cardDiscount=" 17.94"
            cardDelevery=" Mon , 17
      feb"
            cardFastestDelevery=" sat , 23 feb"
          />
          <Card
            cardTitle="Samsung Universe 9"
            cardDescription="Samsung's new variant which goes beyond Galaxy to the Universe & good product qulity on this range"
            cardImage="https://cdn.dummyjson.com/product-images/3/1.jpg"
            cardPrice="1249"
            cardMrp="1499"
            cardDiscount="15.46"
            cardDelevery=" tue 23 , jan"
            cardFastestDelevery=" mon , 34 jan"
          />
          <Card
            cardTitle="Microsoft Surface Laptop 4"
            cardDescription="Style and speed. Stand out on HD video calls backed by Studio Mics. Capture ideas on the vibrant touchscreen."
            cardImage="https://cdn.dummyjson.com/product-images/8/thumbnail.jpg"
            cardPrice="1499"
            cardMrp="1999"
            cardDiscount="10.23"
            cardDelevery=" Mon , 12 jan"
            cardFastestDelevery=" Tue , 23 jan"
          />
          <Card
            cardTitle="Huawei P30"
            cardDescription="Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK."
            cardImage="https://cdn.dummyjson.com/product-images/5/2.jpg"
            cardPrice="499"
            cardMrp="599"
            cardDiscount="23.4%"
            cardDelevery=" feb ,31 jan "
            cardFastestDelevery=" tue , 3 mar"
          />
          <Card
            cardTitle="Samsung Galaxy Book"
            cardDescription="Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched"
            cardImage="https://cdn.dummyjson.com/product-images/7/2.jpg"
            cardPrice="1499"
            cardMrp="1999"
            cardDiscount="13.8%"
            cardDelevery="Mon , 14 feb"
            cardFastestDelevery="sat , 20 feb "
          />
          <Card
            cardTitle="MacBook Pro"
            cardDescription="MacBook Pro 2021 with mini-LED display may launch between September, November"
            cardImage="https://cdn.dummyjson.com/product-images/6/3.png"
            cardPrice="1789"
            cardMrp="2499"
            cardDiscount="16.56%"
            cardDelevery="Mon , 16 feb"
            cardFastestDelevery=" thu , 20 feb"
          />
          <Card
            cardTitle="Infinix INBOOK"
            cardDescription="Infinix Inbook X1 Ci3 10th 8GB 256GB 14 Win10 Grey – 1 Year Warranty"
            cardImage="https://cdn.dummyjson.com/product-images/9/1.jpg"
            cardPrice="299"
            cardMrp="399"
            cardDiscount="12.4%"
            cardDelevery=" Mon , 23 feb"
            cardFastestDelevery=" Mon , 28 feb"
          />
          <Card
            cardTitle="HP Pavilion 15-DK1056WM"
            cardDescription="HP Pavilion 15-DK1056WM Gaming Laptop 10th Gen Core i5, 8GB, 256GB SSD, GTX 1650 4GB, Windows 10"
            cardImage="https://cdn.dummyjson.com/product-images/10/1.jpg"
            cardPrice="268"
            cardMrp="399"
            cardDiscount="17.8%"
            cardDelevery=" Mon , 23 feb"
            cardFastestDelevery="  Mon , 12 feb"
          />
          <Card
            cardTitle="perfume Oil"
            cardDescription="Mega Discount, Impression of Acqua Di Gio by GiorgioArmani concentrated attar perfume Oil"
            cardImage="https://cdn.dummyjson.com/product-images/11/1.jpg"
            cardPrice="59"
            cardMrp="99"
            cardDiscount="23%"
            cardDelevery=" Mon , 23 feb"
            cardFastestDelevery=" tue , 29 feb"
          />
          <Card
            cardTitle="Brown Perfume"
            cardDescription="Royal_Mirage Sport Brown Perfume for Men & Women - 120ml"
            cardImage="https://cdn.dummyjson.com/product-images/12/2.jpg"
            cardPrice="69"
            cardMrp="99"
            cardDiscount=" Mon , 14 jan"
            cardDelevery=" tue , 20 jan"
            cardFastestDelevery=""
          />
          <Card
            cardTitle="Fog Scent Xpressio Perfume"
            cardDescription="Product details of Best Fog Scent Xpressio Perfume 100ml For Men cool long lasting perfumes for Men"
            cardImage="https://cdn.dummyjson.com/product-images/13/3.jpg"
            cardPrice="45"
            cardMrp="99"
            cardDiscount="12%"
            cardDelevery=" Mon , 14 jan"
            cardFastestDelevery="tue , 20 jan"
          />
          <Card
            cardTitle="Non-Alcoholic Concentrated Perfume Oil"
            cardDescription="Original Al Munakh® by Mahal Al Musk | Our Impression of Climate | 6ml Non-Alcoholic Concentrated Perfume Oil"
            cardImage=" https://cdn.dummyjson.com/product-images/14/2.jpg"
            cardPrice="120"
            cardMrp="199"
            cardDiscount="20%"
            cardDelevery="  Mon , 23 feb"
            cardFastestDelevery="  Mon , 12 feb"
          />
          <Card
            cardTitle="Tree Oil 30ml"
            cardDescription="Tea tree oil contains a number of compounds, including terpinen-4-ol, that have been shown to kill certain bacteria,"
            cardImage="https://cdn.dummyjson.com/product-images/17/3.jpg"
            cardPrice="499"
            cardMrp="999"
            cardDiscount="23%"
            cardDelevery=" Mon , 12 feb"
            cardFastestDelevery=" Mon , 23 feb"
          />
          <Card
            cardTitle="Freckle Treatment Cream- 15gm"
            cardDescription="Fair & Clear is Pakistan's only pure Freckle cream which helpsfade Freckles, Darkspots and pigments. Mercury level is 0%, so there are no side effects"
            cardImage="https://cdn.dummyjson.com/product-images/19/2.jpg"
            cardPrice="49"
            cardMrp="89"
            cardDiscount="34"
            cardDelevery=" Mon , 28 feb"
            cardFastestDelevery="Mon , 23 feb"
          />
          <Card
            cardTitle="Elbow Macaroni - 400 gm"
            cardDescription="Product details of Bake Parlor Big Elbow Macaroni - 400 gm"
            cardImage="https://cdn.dummyjson.com/product-images/22/thumbnail.jpg"
            cardPrice="200"
            cardMrp="499"
            cardDiscount="43"
            cardDelevery=" Mon , 28 feb"
            cardFastestDelevery="Mon , 23 feb"
          />
          <Card
            cardTitle="cereals muesli fruit nuts"
            cardDescription="original fauji cereal muesli 250gm box pack original fauji cereals muesli fruit nuts flakes breakfast cereal break fast faujicereals cerels cerel foji fouji"
            cardImage="https://cdn.dummyjson.com/product-images/24/1.jpg"
            cardPrice="288"
            cardMrp="499"
            cardDiscount="23"
            cardDelevery=" Mon , 28 feb"
            cardFastestDelevery="Mon , 23 feb"
          />
          <Card
            cardTitle="Gulab Powder 50 Gram"
            cardDescription="Dry Rose Flower Powder Gulab Powder 50 Gram • Treats Wounds"
            cardImage="https://cdn.dummyjson.com/product-images/25/2.jpg"
            cardPrice="79"
            cardMrp="89"
            cardDiscount="34"
            cardDelevery=" Mon , 28 feb"
            cardFastestDelevery="Mon , 23 feb"
          />
        </div>
      </div>

      {/* <Footer /> */}

      {/* this is the footer section  */}
    </>
  );
}

export default App;
