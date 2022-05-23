import { MySection, Content, NoProductsMessage } from "./SectionStyles"
import { useEffect, useState } from "react"
import Card from "./Card/Card"
import Loader from "./Loader"

function Section(props) {
  const [products, setProducts] = useState()
  const productsIsArray = products instanceof Array

  useEffect(() => {
    fetch(`/products`)
      .then(response => response.json())
      .then(products => setProducts(products))
  }, [])

  return (
    <>
      { !productsIsArray && <Loader centered /> }
      {
        productsIsArray && products.length > 0
        && <MySection>
            <Content>
              {products.map(product => <Card key={product.id} {...product}/>)}
            </Content>
          </MySection> 
      }
      {
        productsIsArray && products.length < 1
        && <NoProductsMessage>We have nothing to show <br /> ._.</NoProductsMessage>
      }
    </>
  )
}

export default Section
