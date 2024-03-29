import React from "react";

function Home() {
  return (
    <div>
        <div className="add-to-cart">
            <img src="https://i.pngimg.me/thumb/f/720/comvecteezy496007.jpg" />
        </div>
      <h1>Home Component</h1>
      <div className="cart-wrapper">
        <div className="img-wrapper item">
          <img src="https://www.smartprix.com/bytes/wp-content/uploads/2022/11/FiERK3lVEAEGyCO-photoutils.com_.jpeg" />
        </div>
        <div className="text-wrapper item">
            <span>
                I-Phone 
            </span>
            <span>
                Price: $1000.00
            </span>
        </div>
        <div className="btn-wrapper item">
            <button>
                Add To Cart
            </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
