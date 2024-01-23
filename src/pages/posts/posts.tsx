import {DataGrid} from "devextreme-react"
import {Column, FilterRow, SearchPanel} from "devextreme-react/cjs/data-grid"
import React from "react"
const postsUrl = "https://jsonplaceholder.typicode.com/posts"
export default function Posts() {
 return (
  <React.Fragment>
    <h2 className={'content-block'}>Post list</h2>
    <DataGrid dataSource={postsUrl} className="custom-post-padding">
      <Column dataField="id" alignment="center"></Column>
      <Column dataField="title" alignment="center"></Column>
      <Column dataField="body" alignment="center"></Column>
      <SearchPanel visible={true}/>
      <FilterRow visible={true}/>
    </DataGrid>
  </React.Fragment>
)}


