import {DataGrid} from "devextreme-react"
import {Column, DataGridTypes, FilterRow, SearchPanel} from "devextreme-react/cjs/data-grid"
import React from "react"
import {Link} from "react-router-dom"
const productsUrl = "https://fakestoreapi.com/products"
const viewProductDetail = (data:DataGridTypes.ColumnCellTemplateData) => <Link to={`/product/detail/${data?.data?.id}`} className="custom-view-css">View</Link>
const viewProductDetailById = (data:DataGridTypes.ColumnCellTemplateData) => <Link to={`/product/detail/${data?.data?.id}`} className="custom-view-css">{data?.data?.id}</Link>
const customizeImageProduct = (data:DataGridTypes.ColumnCellTemplateData) => <img src={data?.data?.image} alt="" width={100}/>
const customizePrice = (data:DataGridTypes.ColumnCellTemplateData) => <p>{"$" + data?.data?.price}</p>
export default function Products() {
 return (
  <React.Fragment>
    <h2 className={'content-block'}>Product list</h2>
    <DataGrid dataSource={productsUrl} className="custom-post-padding">
      <Column dataField="id" alignment="center" cellRender={viewProductDetailById}></Column>
      <Column dataField="image" alignment="center" cellRender={customizeImageProduct}/>
      <Column dataField="title" alignment="center"></Column>
      <Column dataField="description" alignment="center"></Column>
      <Column dataField="price" alignment="center" cellRender={customizePrice}></Column>
      <Column dataField="action" alignment="center" cellRender={viewProductDetail}></Column>
      <SearchPanel visible={true}/>
      <FilterRow visible={true}/>
    </DataGrid>
  </React.Fragment>
)}


