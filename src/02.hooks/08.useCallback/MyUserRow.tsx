export type UserRowProps = {
    name: string;
    onSelected: (name: string) => void;
}


export const UserRow = (
    {
        name,
        onSelected
    }: UserRowProps) => {

    console.log(`Rendering User Row for ${name}`)
    return (
        <tr>
            <td>{name}</td>
            <td>
                <button onClick={() => onSelected(name)}>Select</button>
            </td>
        </tr>
    )

}
