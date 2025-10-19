import { useCreateUser } from "./hooks/useUsers"

export const NewUserForm = () => {
    const creteUserMutation = useCreateUser();

    const onSubmit = (formData: FormData) =>
    {
        const fullName  = formData.get("fName")?.toString() ?? '';
        const age = Number.parseInt(formData.get("age")?.toString() ?? '0');
        creteUserMutation.mutate({fullName,age});
    }
    return (
        <form action={onSubmit}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '16px', alignItems: 'flex-end' }}>
                <div style={{ display: "flex", gap: "8px" }}>
                    <label>Full Name</label>
                    <input name="fName" type="text" placeholder="Full Name" />
                </div>
                <div style={{ display: "flex", gap: "8px" }}>
                    <label>Age</label>
                    <input name="age" type="number" placeholder="Age" />
                </div>
                <div style={{ maxWidth: '300px' }}>
                    <input type="submit" disabled={creteUserMutation.isPending} value="Create User" />
                </div>
            </div>
        </form>
    )
}