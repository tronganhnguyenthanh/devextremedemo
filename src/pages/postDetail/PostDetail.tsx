import React, { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import DetailPost from "../../types/PostDetail"
import { Button, LoadIndicator } from "devextreme-react"
const PostDetail = () => {
  const { id } = useParams()
  const [isLoading, setIsLoading] = useState(true)
  const [postDetail, setPostDetail] = useState<DetailPost>({} as DetailPost)
  const navigate = useNavigate()
  const goBack = () => {
    navigate("/posts")
  }
  useEffect(() => {
    getPostDetail(id)
  }, [id])
  const getPostDetail = async (id: any) => {
    let fetchPostDetail = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    let getPostDetail = await fetchPostDetail?.json()
    setPostDetail(getPostDetail)
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
          <h2 className={'content-block'}>Post detail</h2>
          <div className={'content-block'}>
            <div className={'dx-card responsive-paddings'}>
              <span className="post-id-detail">Id:<span className="number">{postDetail?.id}</span></span>
              <br />
              <span className="post-id-detail">Title:<span className="number">{postDetail?.title}</span></span>
              <br />
              <span className="post-id-detail">Title:<span className="number">{postDetail?.body}</span></span>
              <br />
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

export default PostDetail