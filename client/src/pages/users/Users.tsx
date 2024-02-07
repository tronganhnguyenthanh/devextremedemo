import {Column, DataGrid, DataGridTypes, FilterRow, SearchPanel} from "devextreme-react/data-grid"
import {Link} from "react-router-dom"
const userUrlApi = "https://jsonplaceholder.typicode.com/users"
const addHyperLinkToUserId = (data:DataGridTypes.ColumnCellTemplateData) => <Link to={`/users/detail/${data?.data?.id}`} className="custom-view-css">{data?.data?.id}</Link>
const addHyperLinkToUsername = (data:DataGridTypes.ColumnCellTemplateData) => <Link to={"#"} className="custom-css">{data?.data?.name}</Link>
const addHyperLinkToUserEmail = (data:DataGridTypes.ColumnCellTemplateData) => <a href={`mailto:${data?.data?.email}`} className="custom-css">{data?.data?.email}</a>
const addHyperLinkToPhoneNumber = (data:DataGridTypes.ColumnCellTemplateData) => <a href={`tel:${data?.data?.phone}`} className="custom-css">{data?.data?.phone}</a>
const viewUserDetail = (data:DataGridTypes.ColumnCellTemplateData) => <Link to={`/users/detail/${data?.data?.id}`} className="custom-view-css">View</Link>
const Users = () => {
  return (
   <div>
     <h2 className={"content-block"}>User List</h2>
     <DataGrid dataSource={userUrlApi} className="custom-post-padding">
       <Column dataField="id" alignment="center" cellRender={addHyperLinkToUserId}></Column>
       <Column dataField="name" alignment="center" cellRender={addHyperLinkToUsername}></Column>
       <Column dataField="email" alignment="center" cellRender={addHyperLinkToUserEmail}></Column>
       <Column dataField="address.street" alignment="center"></Column>
       <Column dataField="phone" alignment="center" cellRender={addHyperLinkToPhoneNumber}></Column>
       <Column dataField="action" alignment="center" cellRender={viewUserDetail}></Column>
       <SearchPanel visible={true}/>
       <FilterRow visible={true}/>
     </DataGrid>
   </div>
  )
}

export default Users