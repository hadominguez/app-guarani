import myFetch from '../../utils/fetch';

export default async function ResponsableAcademica({ params }) {
    let {id} = params;
    let gets = await myFetch('responsable_academica/'+ id, 'GET');
    return (<table class="table">
        <thead class="thead-dark">
            <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            </tr>
        </thead>
        <tbody>
            {gets.map(get => (
            <tr>
            <th scope="row">{get.responsable_academica}</th>
            <td>{get.nombre}</td>
            </tr>
            ))}
        </tbody>
        </table>);
}
