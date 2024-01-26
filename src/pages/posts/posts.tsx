import {DataGrid} from "devextreme-react"
import {Column, DataGridTypes, FilterRow, SearchPanel} from "devextreme-react/cjs/data-grid"
import React from "react"
import {Link} from "react-router-dom"
const postsUrl = "https://jsonplaceholder.typicode.com/posts"
const viewPost = (data:DataGridTypes.ColumnCellTemplateData) => <Link to={`/post/detail/${data?.data?.id}`} className="custom-view-css">View</Link>
const viewPostById = (data:DataGridTypes.ColumnCellTemplateData) => <Link to={`/post/detail/${data?.data?.id}`} className="custom-viewPostId-css">{data?.data?.id}</Link>
export default function Posts() {
 return (
  <React.Fragment>
    <h2 className={'content-block'}>Post list</h2>
    <DataGrid dataSource={postsUrl} className="custom-post-padding">
      <Column dataField="id" alignment="center" cellRender={viewPostById}></Column>
      <Column dataField="title" alignment="center"></Column>
      <Column dataField="body" alignment="center"></Column>
      <Column dataField="action" alignment="center" cellRender={viewPost}></Column>
      <SearchPanel visible={true}/>
      <FilterRow visible={true}/>
    </DataGrid>
  </React.Fragment>
)}


