'use client';
import myFetch from '../utils/fetch';
import exportToCSV from '../utils/exportToCSV';
import React, {useState, useEffect} from 'react';

export default function ResponsableAcademica() {
    let [data, setData] = useState({});
    const [rows, setRows] = useState('');
    const [responsableAcademica, setResponsableAcademica] = useState(0);

    async function handleClick() {
        let routeApi = 'responsable_academica/';
        if(responsableAcademica >= 1){
            routeApi += responsableAcademica;
        }
        data = await myFetch(routeApi, 'GET');
        await setData(data);
        setRows( data.map(get => (
            <tr>
            <th scope="row">{get.responsable_academica}</th>
            <td>{get.nombre}</td>
            </tr>
            )));
    }

    async function handleExport() {
        await exportToCSV(data, 'ResponsableAcademica');
    }

    return (
        <div>
            <input value={responsableAcademica} name="responsableAcademica" onChange={e => setResponsableAcademica(e.target.value)} />
            <button onClick={handleClick}>Buscar</button>
            <button onClick={handleExport}>Export</button>
            <table class="table">
                <thead class="thead-dark">
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nombre</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        </div>
    );
}
