import {Column, DataGrid, DataGridTypes} from "devextreme-react/data-grid"
import {Link} from "react-router-dom"
const postUrlApi = "https://jsonplaceholder.typicode.com/posts"
const addHyperLinkToPostId = (data:DataGridTypes.ColumnCellTemplateData) => <Link to={"#"} className="custom-css">{data?.data?.id}</Link>
const addHyperLinkToPostTitle = (data:DataGridTypes.ColumnCellTemplateData) => <Link to={"#"} className="custom-css">{data?.data?.title}</Link>
const addHyperLinkToPostBody = (data:DataGridTypes.ColumnCellTemplateData) => <Link to={"#"} className="custom-css">{data?.data?.body}</Link>
const CustomizePosts = () => {
  return (
   <div>
     <h2 className={"content-block"}>Customize Post</h2>
     <DataGrid dataSource={postUrlApi}>
       <Column dataField="id" alignment="center" cellRender={addHyperLinkToPostId}></Column>
       <Column dataField="title" alignment="center" cellRender={addHyperLinkToPostTitle}></Column>
       <Column dataField="body" alignment="center" cellRender={addHyperLinkToPostBody}></Column>
     </DataGrid>
   </div>
  )
}

export default CustomizePosts