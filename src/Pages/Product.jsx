import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom'
import BreadCrum from '../Component/BreadCrum'
import ProductDisplay from '../Component/ProductDisplay'
import DescriptionBox from '../Component/DescriptionBox'
import RelatedProduct from '../Component/RelatedProduct'

function Product() {
  const { all_product } = useContext(ShopContext)

  const { productId } = useParams()
  const product = all_product.find((e) => e.id === Number(productId))

  // console.log("prodect id is :",productId)
  return (
    <div className=''>
      <BreadCrum product={product} />
      <ProductDisplay product={product} />
      <DescriptionBox />
      <RelatedProduct />
    </div>
  )
}

export default Product