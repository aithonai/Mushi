import { useEffect, useState } from "react"
import "./Section.css"
import Card from "./Card"
import Loader from "./Loader"

function Section(props) {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch(`http://127.0.0.1:7000/products`)
      .then(res => res.json())
      .then(data => {
        data.forEach(product => {
          const newProduct = {
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            thumbnail: product.thumbnail,
            description: product.description,
            category: product.category,
            stock: product.stock,
          }

          setProducts(products => [...products, newProduct])
        })
      }) // eslint-disable-next-line
  }, [])

  return (
    <>
      {products.length <= 0 ? (
        <Loader />
      ) : (
        <section className="section grid-container">
          {products.map(product => (
            <Card
              key={product.id + Math.random()}
              thumbnail={product.thumbnail}
              image={product.image}
              name={product.name}
              description={product.description}
              stock={product.description}
              stars={product.stars}
            />
          ))}
        </section>
      )}
    </>
  )
}

export default Section
