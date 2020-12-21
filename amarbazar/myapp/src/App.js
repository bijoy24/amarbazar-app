
import './App.css';
import Card from './components/Card'
import data from './data'

function App() {
  return (
    <div className="container">
              <header class="header">
            <div class="logo"><a href="index.html">AamarBazar</a></div>
            <div class="headerright">
                <a href="cart.html">Cart</a>
                <a href="Signup.html">Signup</a>
            </div>
        </header>
        <main>
            <div class="maincontent">
              {
                data.products.map(product=>(
                  <Card 
                  key={product._id}
                  product ={product}
                  ></Card>
                ))
              }
            </div>
        </main>
        <footer>
            <h3>all are reserved</h3>
        </footer>
    </div>
  )
}

export default App;
