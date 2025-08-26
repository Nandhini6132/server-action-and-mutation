
import { fetchUserAction } from '@/actions'
import AddNewUser from '@/components/add-new-user'
import SingleuserCard from '@/components/single-user-card'
import React from 'react'

const UserManagement = async() => {

  const getListOfUsers=await fetchUserAction()
  console.log(getListOfUsers)

  return (
    <div className='p-20'>
       <div className='flex justify-between'>
       <h1>UserManagement</h1>
        <AddNewUser/>
       </div>
       <div className='flex flex-wrap gap-5 mt-5'>
        {getListOfUsers?.data?.map((user,index)=>{
          return <SingleuserCard user={user} index={index}/>
        })}
       </div>
    </div>
  )
}

export default UserManagement