import myFetch from '../../utils/fetch';

export default async function CertificadoOtorgado({ params }) {
    let {id} = params;
    let gets = await myFetch('certificado_otorgado/'+ id, 'GET');
    return (<table class="table">
        <thead class="thead-dark">
            <tr>
            <th scope="col">Nro. Documento</th>
            <th scope="col">Apellido</th>
            <th scope="col">Nombre</th>
            <th scope="col">Nro. Solicitud</th>
            <th scope="col">Certificado</th>
            <th scope="col">Fecha de Egreso</th>
            <th scope="col">Promedio</th>
            <th scope="col">Promedio Sin Aplazo</th>
            <th scope="col">Cod. Plan</th>
            <th scope="col">Pĺan</th>
            <th scope="col">Versión del Plan</th>
            </tr>
        </thead>
        <tbody>
            {gets.map(get => (
            <tr>
            <td>{get.nro_documento}</td>
            <td>{get.apellido}</td>
            <td>{get.nombres}</td>
            <td>{get.nro_solicitud}</td>
            <td>{get.certificado_nombre}</td>
            <td>{get.fecha_egreso}</td>
            <td>{get.promedio}</td>
            <td>{get.promedio_sin_aplazos}</td>
            <td>{get.plan_codigo}</td>
            <td>{get.plan_nombre}</td>
            <td>{get.version_nombre}</td>
            </tr>
            ))}
        </tbody>
        </table>);
}
