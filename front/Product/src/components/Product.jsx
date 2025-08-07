import React, { Component } from "react";
import "../style/custom.css";

class Product extends Component {
  render() {
    const products = [
      {
        id: 1,
        title: "Men's T-Shirt",
        price: "₹499",
        image: "https://image.hm.com/assets/hm/e4/89/e48924ece823f919263814643ee0aa14e5557bee.jpg?imwidth=768",
        link: "#",
      },
      {
        id: 2,
        title: "Women's Kurta",
        price: "₹899",
        image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSz-RSdLBBFnNDMG-MxzpEDGD3FKOnwm84L2cTRroHLbjz48fzihCJzLfmuF2F9L3KQYrj5jH8jmFE8fE7RBooTt1645PCHPcTVTFEG3yY",
        link: "#",
      },
      {
        id: 3,
        title: "Kids Shoes",
        price: "₹699",
        image: "https://www.crazytoes.in/cdn/shop/files/WhatsApp_Image_2025-01-01_at_12.34.27_PM.jpg?v=1737046383",
        link: "#",
      },
      {
        id: 4,
        title: "Home Decor",
        price: "₹1,299",
        image: "https://www.orangetree.in/cdn/shop/articles/Gallery-2BarcelonaSofaCollectionBuyOnline_8306e2b9-f906-4114-ae24-62a85597a139_1_1100x.jpg?v=1722849683",
        link: "#",
      },
       {
        id: 4,
        title: "Home Decor",
        price: "₹1,299",
        image: "https://www.orangetree.in/cdn/shop/articles/Gallery-2BarcelonaSofaCollectionBuyOnline_8306e2b9-f906-4114-ae24-62a85597a139_1_1100x.jpg?v=1722849683",
        link: "#",
      },
       {
        id: 4,
        title: "Home Decor",
        price: "₹1,299",
        image: "https://www.orangetree.in/cdn/shop/articles/Gallery-2BarcelonaSofaCollectionBuyOnline_8306e2b9-f906-4114-ae24-62a85597a139_1_1100x.jpg?v=1722849683",
        link: "#",
      },
       {
        id: 4,
        title: "Home Decor",
        price: "₹1,299",
        image: "https://www.orangetree.in/cdn/shop/articles/Gallery-2BarcelonaSofaCollectionBuyOnline_8306e2b9-f906-4114-ae24-62a85597a139_1_1100x.jpg?v=1722849683",
        link: "#",
      },
       {
        id: 4,
        title: "Home Decor",
        price: "₹1,299",
        image: "https://www.orangetree.in/cdn/shop/articles/Gallery-2BarcelonaSofaCollectionBuyOnline_8306e2b9-f906-4114-ae24-62a85597a139_1_1100x.jpg?v=1722849683",
        link: "#",
      },
    ];

    return (
      <div className="container my-4">
        <div className="row">
          {products.map((product) => (
            <div className="col-md-3 mb-4" key={product.id}>
              <div className="card h-100 shadow-sm">
                <img
                  src={product.image}
                  className="card-img-top"
                  alt={product.title}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text text-success fw-bold">
                    {product.price}
                  </p>
                  <a
                    href={product.link}
                    className="btn btn-primary mt-auto"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Shop Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Product;
