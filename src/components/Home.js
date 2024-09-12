import React from "react";
import ProductCard from "./ProductCard";

const Home = () => {
  const products = [
    {
      id: 1,
      name: "Apple iPhone 13",
      price: 814.99,
      image:
        "https://openshop.uz/uploads/products/photos/202201/X0dvZB7kUDESXAbPJ10YxeQ7LqiF0QA3WAsKzgPH.jpg",
    },
    {
      id: 2,
      name: "Samsung Galaxy S21",
      price: 599.99,
      image:
        "https://openshop.uz/uploads/products/photos/202107/t3XQNa4fPcxiPR4ajfg0XnRqP3hIYPsrnV5fW8O4.jpg",
    },
    {
      id: 3,
      name: "Echo Dot",
      price: 129.99,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2zx9-9b5r0Z1-asYyfWQoJg5Q2N_7f66XEg&s",
    },
    {
      id: 4,
      name: "Apple Watch Series 3",
      price: 139.99,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTmKpT_OefUBA0h5rbHcV9TU5xdugOKZNB8g&s",
    },
    {
      id: 5,
      name: "Samsung Odyssey 32-Inch Monitor",
      price: 199.99,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeytWcebqX69KybPvHZsJ3i-iq9uxN92nKJg&s",
    },
    {
      id: 6,
      name: "Apple iPad Pro",
      price: 599.99,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-cUmUiDP7Qu1IFTjLr7UFbR4ULa6MJn8WDA&s",
    },
    {
      id: 7,
      name: "Sony WH-1000XM4 Headphones",
      price: 348.99,
      image:
        "https://www.sony.ca/image/5d02da5df552836db894cead8a68f5f3?fmt=pjpeg&wid=330&bgcolor=FFFFFF&bgc=FFFFFF",
    },
    {
      id: 8,
      name: "Google Pixel 6",
      price: 649.99,
      image:
        "https://m-cdn.phonearena.com/images/review/5269-wide-two_1200/Google-Pixel-6-review-best-features.jpg",
    },
    {
      id: 9,
      name: "Bose SoundLink Speaker",
      price: 129.99,
      image:
        "https://m.media-amazon.com/images/I/71Z+4wxfoBL._AC_UF894,1000_QL80_.jpg",
    },
    {
      id: 10,
      name: "Nikon D3500 Camera",
      price: 499.99,
      image:
        "https://cdn.mos.cms.futurecdn.net/hTT8QtVvKwpnGdQssYHpnk-1200-80.jpg",
    },
  ];

  return (
    <div className="home">
      <header className="header">
        <h1>We ship over 45 million products around the world</h1>
      </header>
      <div className="product-list">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
