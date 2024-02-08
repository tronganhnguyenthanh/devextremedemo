import React, {useEffect, useState} from "react"
import {Link, useNavigate, useParams} from "react-router-dom"
import {Button, LoadIndicator} from "devextreme-react"
import DetailProduct from "../../types/ProductDetail"
const ProductDetail = () => {
  const {id} = useParams()
  const [isLoading, setIsLoading] = useState(true)
  const [productDetail, setProductDetail] = useState<DetailProduct>({} as DetailProduct)
  const navigate = useNavigate()
  const goBack = () => {
   navigate("/product")
  }
  useEffect(() => {
   getProductDetail(id)
  },[id])
  const getProductDetail = async (id: any) => {
    let fetchProductDetail = await fetch(`https://fakestoreapi.com/products/${id}`)
    let getProductDetail = await fetchProductDetail?.json()
    setProductDetail(getProductDetail)
    if(isLoading){
     setIsLoading(!isLoading)
    }
  }

  const directionMap = () => {
   navigate("https://www.google.com/maps")
  }
   
  return (
    <React.Fragment>
      {
       isLoading ?
       <div className="isLoading">
         <LoadIndicator id="large-indicator" width={60} height={60} visible={isLoading}/>
       </div>
        :
        <>
          <h2 className={'content-block'}>Product detail</h2>
          <div className={'content-block'}>
            <div className={'dx-card responsive-paddings'}>
              <img src={productDetail?.image} alt="" width={"30%"}/>
              <div>
                <span className="post-id-detail">Title:<span className="number">{productDetail?.title}</span></span>
                <br/>
                <span className="post-id-detail">Description:<span className="number">{productDetail?.description}</span></span>
                <br/>
                <span className="post-id-detail">Price:<span className="number">{"$" + productDetail?.price}</span></span>
                <br/>
              </div>
              <div className="column-add-to-cart">
                <Button type="default" onClick={goBack} className="btn-go-back">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-bar-left mt-2" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M12.5 15a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5M10 8a.5.5 0 0 1-.5.5H3.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L3.707 7.5H9.5a.5.5 0 0 1 .5.5" />
                   </svg>
                </Button>
              </div>
              <Link className="link-add-to-cart" to={"tel:0961847448"}>Contact shop</Link>
              <Link className="btn-direction" to="https://www.google.com/maps">Direction</Link>
            </div>
          </div>
        </>
      }
    </React.Fragment>
  )
}

export default ProductDetail