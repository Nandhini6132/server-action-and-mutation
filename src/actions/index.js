'use server'


import connectToDB from "@/database"
import User from "@/models/user"
import { revalidatePath } from "next/cache"



//add new user action
export async function addNewUserAction(formData, pathToReValidate) {
    await connectToDB()
    console.log(formData, 'data')
    try {

        const newlyCreatedUser = await User.create(formData)

        if (newlyCreatedUser) {
            revalidatePath(pathToReValidate)
            return {
                success: true,
                message: 'user created successfully'
            }
        } else {
            return {
                success: false,
                message: 'something went wrong'
            }
        }

    } catch (error) {
        console.log(error.message)
        return {
            success: false,
            message: error
        }
    }
}


//fetch user action
export async function fetchUserAction() {
    await connectToDB()
    try {
        const listOfusers = await User.find({})
        if (listOfusers) {
            return {
                success: true,
                data: JSON.parse(JSON.stringify(listOfusers))
            }
        }
    } catch (error) {
        return {
            success: false,
            message: error
        }
    }
}


//delete user action
export async function deleteUserAction(currentuserId, pathToReValidate) {
    await connectToDB()
    try {
        const deletedUser = await User.findByIdAndDelete(currentuserId)
        if (deletedUser) {
            revalidatePath(pathToReValidate)
            return {
                success: true,
                message: 'user deleted successfully'
            }
        }
    } catch (error) {
        return {
            success: false,
            message: error
        }
    } X
}


//Edit user action
export async function editUserAction(currentuserId,formData, pathToReValidate) {
    await connectToDB()
    try {
        const {firstName, lastName, email, address}= formData
        const editedUser = await User.findByIdAndUpdate({
            _id:currentuserId
        }, {firstName, lastName, email, address}, {new:true})
        if (editedUser) {
            revalidatePath(pathToReValidate)
            return {
                success: true,
                message: 'user edited successfully'
            }
        }
    } catch (error) {
        return {
            success: false,
            message: error
        }
    }
}