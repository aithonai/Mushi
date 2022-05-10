import "./Section.scss"
import { useEffect, useState } from "react"
import Card from "./Card"
import Loader from "./Loader"

function Section(props) {
  const [products, setProducts] = useState()
  const renderCondition = products instanceof Array

  useEffect(() => {
    fetch(`/products`)
      .then(response => response.json())
      .then(products => setProducts(products))
  }, [])

  return (
    <>
      { !renderCondition && <Loader centered /> }
      {
        renderCondition && products.length > 0
        && <section className="section">
            <section className="grid-container">
              {products.map(product => <Card key={product.id} {...product}/>)}
            </section>
          </section> 
      }
      {
        renderCondition && products.length < 1
        && <p style={{textAlign: "center"}}>We have nothing to show <br /> ._.</p>
      }
    </>
  )
}

export default Section
