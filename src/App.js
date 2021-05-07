import "./App.scss";
import cream1Src from "./assets/cream1.png";
import cream2Src from "./assets/cream2.png";
import cream3Src from "./assets/cream3.png";

function App() {
  return (
    <div className="App">
      <header>
        <h1>LOGO</h1>
        <nav>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
      <div className="products-basket-container">
        <main className="product-list">
          <article className="product">
            <img className="photo" src={cream1Src} alt="" />
            <h3 className="product__title">The product's name</h3>
            <p className="product__price">895,-</p>
            <div className="btn-container">
              <button>-</button>
              <input />
              <button>+</button>
            </div>
          </article>
          <article className="product">
            <img className="photo" src={cream2Src} alt="" />
            <h3 className="product__title">The product's name</h3>
            <p className="product__price">895,-</p>
            <div className="btn-container">
              <button>-</button>
              <input />
              <button>+</button>
            </div>
          </article>
          <article className="product">
            <img className="photo" src={cream3Src} alt="" />
            <h3 className="product__title">The product's name</h3>
            <p className="product__price">895,-</p>
            <div className="btn-container">
              <button>-</button>
              <input />
              <button>+</button>
            </div>
          </article>
          <article className="product">
            <img className="photo" src={cream3Src} alt="" />
            <h3 className="product__title">The product's name</h3>
            <p className="product__price">895,-</p>
            <div className="btn-container">
              <button>-</button>
              <input />
              <button>+</button>
            </div>
          </article>
          <article className="product">
            <img className="photo" src={cream1Src} alt="" />
            <h3 className="product__title">The product's name</h3>
            <p className="product__price">895,-</p>
            <div className="btn-container">
              <button>-</button>
              <input />
              <button>+</button>
            </div>
          </article>
          <article className="product">
            <img className="photo" src={cream2Src} alt="" />
            <h3 className="product__title">The product's name</h3>
            <p className="product__price">895,-</p>
            <div className="btn-container">
              <button>-</button>
              <input />
              <button>+</button>
            </div>
          </article>
        </main>
        <aside className="sidebar">
          <h4>ORDER SUMMARY</h4>
          <div className="basket">
            <h5> You have 2 item(s) in the basket.</h5>
            <div className="basket__items">
              <div className="item">
                <span>Item 1</span>
                <span className="price"></span>
              </div>
              <div className="item"> Item 2</div>
              <div className="item"> Item 3</div>
            </div>
          </div>
          <div className="checkout-form">
            <label htmlFor="name">
              <div>Name</div>
              <input type="text" id="name" />
            </label>
            <label htmlFor="card">
              <div>Credit Card</div>
              <input type="text" id="card" />
            </label>
            <label htmlFor="expiring">
              <div>Month/Year</div>
              <input type="text" id="expiring" />
            </label>
            <button>Submit</button>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default App;
