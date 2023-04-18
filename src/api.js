import axios from 'axios';
// On importe express
// const express = require('express');

let cacheDatas = [];

// const app = express();
// // Intercepte toutes les request qui ont une content du type json et nous mets à disposition cet objet dans req.body
// app.use(express.json());

// Gestion CORS
// app.use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader(
//         'Access-Control-Allow-Headers',
//         'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'
//     );
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
//     next();
// });

export default function GetDataAPI(sheetName, callback) {
    const spreadsheetId = '1yJgC1DiS34Fzb37mFVPyd0mDWhJWNDKoNmSHDP-8gCg';

    axios
        .get(
            'https://docs.google.com/spreadsheets/d/' +
                spreadsheetId +
                '/gviz/tq?tqx=out:json&sheet=' +
                sheetName
        )
        .then(
            (response) => {
                if (response.status !== 200) return;
                response.setHeader('Access-Control-Allow-Origin', '*');
                response.setHeader(
                    'Access-Control-Allow-Headers',
                    'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'
                );

                let dataString = JSON.parse(
                    response.data
                        .split('"rows":')[1]
                        .split('}});')[0]
                        .replace(',"parsedNumHeaders":0', '')
                );
                let data = {};

                // Columns sorting filter
                dataString.array.forEach((element, index) => {
                    if (index === 0) {
                        return;
                    }
                    element.c.array.forEach((el, i) => {
                        if (i === 0) {
                            return;
                        }
                        if (!el) return;

                        if (data[dataString[0].c[i].v] === undefined) {
                            data[dataString[0].c[i].v] = {};
                        }
                        data[dataString[0].c[i].v][element.c[0].v] = el ? el.v : '';
                    });
                });

                //Then cache datas
                cacheDatas[sheetName] = data;

                callback(data);
            },
            (response) => {
                console.error('Data Spreadsheet Error :', response);
            }
        );
}
