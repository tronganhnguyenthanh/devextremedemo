import React, {useEffect, useState} from "react"
import {useNavigate, useParams} from "react-router-dom"
import DetailUser from "../../types/UserDetail"
import {Button, LoadIndicator} from "devextreme-react"
const UserDetail = () => {
  const {id} = useParams()
  const [isLoading, setIsLoading] = useState(true)
  const [userDetail, setUserDetail] = useState<DetailUser>({} as DetailUser)
  const navigate = useNavigate()
  const goBack = () => {
   navigate("/users")
  }
  useEffect(() => {
   getUserDetail(id)
  },[id])
  const getUserDetail = async(id:any) => {
    let fetchUserDetail = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    let getUserDetail = await fetchUserDetail?.json()
    console.log("user detail", getUserDetail)
    setUserDetail(getUserDetail)
    if(isLoading){
      setIsLoading(!isLoading)
    }
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
        <h2 className={'content-block'}>User Detail</h2>
        <div className={'content-block'}>
          <div className={'dx-card responsive-paddings'}>
            <span className="post-id-detail">Id:<span className="number">{userDetail?.id}</span></span>
            <br />
            <span className="post-id-detail">Name:<span className="number">{userDetail?.name}</span></span>
            <br />
            <span className="post-id-detail">Email:<span className="number">{userDetail?.email}</span></span>
            <br />
            <span className="post-id-detail">Address:<span className="number">{userDetail?.address?.suite}, {userDetail?.address?.street}, {userDetail?.address?.city}</span></span>
            <br/>
            <Button type="default" onClick={goBack}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-bar-left mt-2" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M12.5 15a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5M10 8a.5.5 0 0 1-.5.5H3.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L3.707 7.5H9.5a.5.5 0 0 1 .5.5" />
              </svg>
            </Button>
          </div>
        </div>
      </>
    }
   </React.Fragment>
  )
}

export default UserDetail