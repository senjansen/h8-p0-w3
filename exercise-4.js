var input = ['0001', 'Roman Alamsyah ', 'Bandar Lampung', '21/05/1989', 'Membaca'];

function dataHandling2(data) {
    data.splice(1, 1, 'Roman Alamsyah Elsharawy');
    data.splice(2, 1, 'Provinsi Bandar Lampung');
    data.splice(4, 1);
    data.splice(4, 0, 'Pria', 'SMA Internasional Metro');
    return data;
}

dataHandling2(input);

var dateIntoArray = input[3].split('/');
var nameInArray = input[1].split(' ');
var nameSlice = nameInArray.slice(0, 2);
var month = dateIntoArray[1];
var dateJoin = dateIntoArray.join('-');
var descending = dateIntoArray.sort(function(a,b) {return b-a});

switch (month) {
    case '01': 
        month = 'Januari';
        break;
    case '02': 
        month = 'Februari';
        break;
    case '03': 
        month = 'Maret';
        break;
    case '04': 
        month = 'April';
        break;
    case '05': 
        month = 'Mei';
        break;
    case '06': 
        month = 'Juni';
        break;
    case '07': 
        month = 'Juli';
        break;
    case '08': 
        month = 'Agustus';
        break;
    case '09': 
        month = 'September';
        break;
    case '10': 
        month = 'Oktober';
        break;
    case '11': 
        month = 'November';
        break;
    case '12': 
        month = 'Desember';
        break;
    default:
        month = 'Bulan antara 1 - 12';
        break;
}

console.log(dataHandling2(input));
console.log(month);
console.log(descending);
console.log(dateJoin);
console.log(nameInArray);
console.log(nameSlice.join(' '));

/**
 * keluaran yang diharapkan (pada console)
 *
 * ['0001', 'Roman Alamsyah Elsharawy', 'Provinsi Bandar Lampung', '21/05/1989', 'Pria', 'SMA Internasional Metro']
 * Mei
 * ['1989', '21', '05']
 * 21-05-1989
 * Roman Alamsyah
 */