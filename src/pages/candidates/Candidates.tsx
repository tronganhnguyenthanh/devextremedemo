import {Column, DataGrid, DataGridTypes} from "devextreme-react/data-grid"
import CustomStore from "devextreme/data/custom_store"
const customizeEmailRow = (data:DataGridTypes.ColumnCellTemplateData) => <a href={`mailto:${data?.data?.Email}`} className="custom-css">{data?.data?.Email}</a>
const customizePhoneRow = (data:DataGridTypes.ColumnCellTemplateData) => <a href={`tel:${data?.data?.phoneNumber}`} className="custom-css">{data?.data?.phoneNumber}</a>
const store = new CustomStore({
  key:"",
  async load(){
   let header = {
    "X-Parse-Application-Id": "PpK3SDzdouwf41zij4aWWg01cC4Dir1ihwhDgPwI",
    "X-Parse-REST-API-Key": "BoxlFY1i2LuosBo0jEMtht1AgqfKKoEjZMlH22GS",
    "Content-Type": "application/json"
   }
   try{
    const response = await fetch("https://parseapi.back4app.com/classes/Portfolio", {headers:header})
    const result = await response.json()
    return{
     data:result.results,
     objectId:result?.results?.objectId,
     Firstname:result?.results?.Firstname,
     Lastname:result?.results?.Lastname,
     Email:result?.results?.Email,
     phoneNumber:result?.results?.phoneNumber
    }
   }catch(error){
     throw new Error("Cannot load data")
   }
  }
})
const Candidates = () => {
  return (
   <div>
     <h2 className={"content-block"}>Candidate list</h2>
     <DataGrid dataSource={store}>
       <Column dataField="objectId" alignment="center"></Column>
       <Column dataField="Firstname" alignment="center"></Column>
       <Column dataField="Lastname" alignment="center"></Column>
       <Column dataField="Email" alignment="center" cellRender={customizeEmailRow}></Column>
       <Column dataField="phoneNumber" alignment="center" cellRender={customizePhoneRow}></Column>
     </DataGrid>
   </div>
  )
}

export default Candidates