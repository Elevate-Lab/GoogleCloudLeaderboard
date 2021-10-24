function search() {
    let filter = document.getElementById('myInput').value.toUpperCase();
    let tableRecord = document.getElementById('tableRecord');
    let tr = tableRecord.getElementsByTagName('tr');

    for (var i = 0; i < tr.length; i++) {
        let td = tr[i].getElementsByTagName('td')[0];
        if (td) {
            let textvalue = td.textContent || td.innerHTML;
            if (textvalue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none"
            }
        }
    }
}

// function data() {
//     var CLIENT_ID = '284074827110-gdhl11p4hselob7iak81bcavpvlo2at4.apps.googleusercontent.com';
//     var API_KEY = 'AIzaSyBXkO6uUgJ-KrBKtaFqJPCyXppd1tnQIO4';
//     var DISCOVERY_DOCS = ["https://sheets.googleapis.com/$discovery/rest?version=v4"];
//     var SCOPES = "https://www.googleapis.com/auth/spreadsheets.readonly";

//     function handleClientLoad() {
//         gapi.load('client:auth2', initClient);
//     }

//     // window.onload = handleClientLoad()

//     function initClient() {
//         gapi.client.init({
//             apiKey: API_KEY,
//             clientId: CLIENT_ID,
//             discoveryDocs: DISCOVERY_DOCS,
//             scope: SCOPES
//         }).then(function () {
//             listMajors();
//         }, function (error) {
//             appendPre(JSON.stringify(error, null, 2));
//         });
//     }


//     function listMajors() {
//         gapi.client.sheets.spreadsheets.values.get({
//             spreadsheetId: '1iL_PuC7DFMbMshF5Lk4oin7t2csdYBK7cptHTM52GAE',
//             range: 'Indian Institute of Information Technology Allahabad - Prayagraj [23 Oct]',
//         }).then(function (response) {

//             console.log(response)
//         }, function (response) {
//             appendPre('Error: ' + response.result.error.message);
//         });
//     }

// }

