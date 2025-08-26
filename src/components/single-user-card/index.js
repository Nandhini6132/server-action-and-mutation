'use client'

import React, { useContext } from 'react'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { deleteUserAction } from '@/actions'
import { User } from 'lucide-react'
import { UserContext } from '@/context'

const SingleuserCard = ({ user, index }) => {
  const { setOpenPopup, setAddNewuserFormData, setCurrentEditedId } = useContext(UserContext)
  console.log(user, index)

  const handleDeleteUser = async (id) => {
    const result = await deleteUserAction(id, '/user-management')
    console.log(result)
  }

  const handleEditUser = async (user) => {
    setOpenPopup(true)
    setAddNewuserFormData({
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      address: user.address,
      
    })
    setCurrentEditedId(user?._id)
    console.log(user)
  }
  return (
    <Card className="w-[350px]" key={index}>
      <CardHeader>
        <CardTitle>{user.firstName} {user.lastName}</CardTitle>
        <CardDescription>{user.email}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{user.address}</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button onClick={() => handleEditUser(user)}>Edit</Button>
        <Button onClick={() => handleDeleteUser(user?._id)}>Delete</Button>
      </CardFooter>
    </Card>
  )
}

export default SingleuserCard