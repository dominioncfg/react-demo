import { usersApiClient } from "../api/apiClient"
import type { CreateUserInput, User } from "../types"


const getUsersAction  = async (): Promise<User[]> => {
    await new Promise(resolve=> setTimeout(resolve,2000));
    const users = await usersApiClient.get<User[]>('Users')
    return users.data;
} 

const createUserAction  = async (newUser: CreateUserInput): Promise<void> => {
    await new Promise(resolve=> setTimeout(resolve,2000));
    console.log({newUser})
    await usersApiClient.post('Users',newUser)
} 



export {getUsersAction, createUserAction}


