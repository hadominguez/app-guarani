export default function Table(data) {
    let keys = Object.keys(data[0]);
    return (<table class="table">
        <thead class="thead-dark">
            {getTableHead(data)}
        </thead>
        <tbody>
            {getTableBody(data)}
        </tbody>
        </table>);
}

function getTableHead(datas) {
    return (<tr>
        {datas.map(key => (
            <th scope="row">{key}</th>
        ))}
    </tr>);
}

function getTableBody(datas) {
    return datas.map(data => (
        <tr>
            {getTableRows(data)}
        </tr>
    ));
}

function getTableRows(datas) {
    let values = Object.values(datas);
    return values.map(value => (
        <td>{value}</td>
    ));
}