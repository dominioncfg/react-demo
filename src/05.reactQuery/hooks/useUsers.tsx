import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createUserAction, getUsersAction } from "../actions/userActions";

const useGetUsers = () => {
    const getUsers = useQuery({ queryKey: ['getallUsers'], queryFn: getUsersAction });
    return getUsers
};


const useCreateUser = () => {
    const queryClient = useQueryClient();
    const createUser = useMutation(
        {
            mutationFn: createUserAction,
            onSuccess: () =>{
                queryClient.invalidateQueries({ queryKey: ['getallUsers'] })
            }
        });


    return createUser
};

export { useGetUsers, useCreateUser }