// Javascript for Current Date
var currentDate = new Date();
let cDay = currentDate.getUTCDate();
let cMonth = currentDate.getUTCMonth() + 1;
let cYear = currentDate.getUTCFullYear();

let date = cMonth + "/" + cDay + "/" + cYear;
let time = currentDate.getUTCHours() + ":" + currentDate.getUTCMinutes() + ":" + currentDate.getUTCSeconds() + ":" + currentDate.getUTCMilliseconds();
let timeStamp = date + " " + time;


console.log(date);
console.log(time);

const toTimeStamp = (strDate) => { 
    const dt = Date.parse(strDate); 
    return dt;
   } 

//Country of Origin Javasript
function authCode() {

    var cName = document.getElementById('inputCodeName').value;
    document.getElementById('codeName').innerHTML = "Code Name: " + cName;

    var qCode = parseInt(document.getElementById('inputQuantity').value);
    document.getElementById('quantityCode').innerHTML = "Quantity: " + qCode;

    // JS for Smart Code Generation
    var code = document.getElementById('countOfOrigin').value; 
    switch(code) {
        case 'Afghanistan':
            document.getElementById('smartCode').innerHTML = "Smart Code: " + toTimeStamp(timeStamp) + '004';
            console.log(toTimeStamp(timeStamp) + '004');
        break;

        case 'Albania':
            document.getElementById('smartCode').innerHTML = "Smart Code: " + toTimeStamp(timeStamp) + '008';
            console.log(toTimeStamp(timeStamp) + '008');
        break;

        case 'Algeria':
            document.getElementById('smartCode').innerHTML = "Smart Code: " + toTimeStamp(timeStamp) + '012';
            console.log(toTimeStamp(timeStamp) + '012');
        break;

        case 'American Samoa':
            document.getElementById('smartCode').innerHTML = "Smart Code: " + toTimeStamp(timeStamp) + '016';
            console.log(toTimeStamp(timeStamp) + '016');
        break;

        case 'Andorra':
            document.getElementById('smartCode').innerHTML = "Smart Code: " + toTimeStamp(timeStamp) + '020';
            console.log(toTimeStamp(timeStamp) + '020');
        break;

        case 'Angola':
            document.getElementById('smartCode').innerHTML = "Smart Code: " + toTimeStamp(timeStamp) + '024';
            console.log(toTimeStamp(timeStamp) + '024');
        break;

        case 'Anguilla':
            document.getElementById('smartCode').innerHTML = "Smart Code: " + toTimeStamp(timeStamp) + '660';
            console.log(toTimeStamp(timeStamp) + '660');
        break;

        case 'Antartica':
            document.getElementById('smartCode').innerHTML = "Smart Code: " + toTimeStamp(timeStamp) + '010';
            console.log(toTimeStamp(timeStamp) + '010');
        break;

        case 'Antigua and Barbuda':
            document.getElementById('smartCode').innerHTML = "Smart Code: " + toTimeStamp(timeStamp) + '028';
            console.log(toTimeStamp(timeStamp) + '028');
        break;

        case 'Argentina':
            document.getElementById('smartCode').innerHTML = "Smart Code: " + toTimeStamp(timeStamp) + '032';
            console.log(toTimeStamp(timeStamp) + '032');
        break;

        case 'Armenia':
            document.getElementById('smartCode').innerHTML = "Smart Code: " + toTimeStamp(timeStamp) + '051';
            console.log(toTimeStamp(timeStamp) + '051');
        break;

        case 'Aruba':
            document.getElementById('smartCode').innerHTML = "Smart Code: " + toTimeStamp(timeStamp) + '533';
            console.log(toTimeStamp(timeStamp) + '533');
        break;

        case 'Australia':
            document.getElementById('smartCode').innerHTML = "Smart Code: " + toTimeStamp(timeStamp) + '036';
            console.log(toTimeStamp(timeStamp) + '036');
        break;

        case 'Austria':
            document.getElementById('smartCode').innerHTML = "Smart Code: " + toTimeStamp(timeStamp) + '040';
            console.log(toTimeStamp(timeStamp) + '040');
        break;

        case 'Azerbaijan':
            document.getElementById('smartCode').innerHTML = "Smart Code: " + toTimeStamp(timeStamp) + '031';
            console.log(toTimeStamp(timeStamp) + '031');
        break;

        case 'Bahamas':
            document.getElementById('smartCode').innerHTML = "Smart Code: " + toTimeStamp(timeStamp) + '044';
            console.log(toTimeStamp(timeStamp) + '044');
        break;

        case 'Bahrain':
            document.getElementById('smartCode').innerHTML = "Smart Code: " + toTimeStamp(timeStamp) + '048';
            console.log(toTimeStamp(timeStamp) + '048');
        break;

        case 'Bangladesh':
            document.getElementById('smartCode').innerHTML = "Smart Code: " + toTimeStamp(timeStamp) + '050';
            console.log(toTimeStamp(timeStamp) + '050');
        break;

        case 'Barbados':
            document.getElementById('smartCode').innerHTML = "Smart Code: " + toTimeStamp(timeStamp) + '052';
            console.log(toTimeStamp(timeStamp) + '052');
        break;

        case 'Belarus':
            document.getElementById('smartCode').innerHTML = "Smart Code: " + toTimeStamp(timeStamp) + '112';
            console.log(toTimeStamp(timeStamp) + '112');
        break;

        case 'Belgium':
            document.getElementById('smartCode').innerHTML = "Smart Code: " + toTimeStamp(timeStamp) + '056';
            console.log(toTimeStamp(timeStamp) + '056');
        break;

        case 'Belize':
            document.getElementById('smartCode').innerHTML = "Smart Code: " + toTimeStamp(timeStamp) + '084';
            console.log(toTimeStamp(timeStamp) + '084');
        break;

        case 'Benin':
            document.getElementById('smartCode').innerHTML = "Smart Code: " + toTimeStamp(timeStamp) + '204';
            console.log(toTimeStamp(timeStamp) + '204');
        break;

        case 'Bermuda':
            document.getElementById('smartCode').innerHTML = "Smart Code: " + toTimeStamp(timeStamp) + '060';
            console.log(toTimeStamp(timeStamp) + '060');
        break;

        case 'Bhutan':
            document.getElementById('smartCode').innerHTML = "Smart Code: " + toTimeStamp(timeStamp) + '064';
            console.log(toTimeStamp(timeStamp) + '064');
        break;

        case 'Bolivia':
            document.getElementById('smartCode').innerHTML = "Smart Code: " + toTimeStamp(timeStamp) + '068';
            console.log(toTimeStamp(timeStamp) + '068');
        break;

        case 'Bonaire, Sint Eustatius and Saba':
            document.getElementById('smartCode').innerHTML = "Smart Code: " + toTimeStamp(timeStamp) + '535';
            console.log(toTimeStamp(timeStamp) + '535');
        break;

        case 'Bosnia and Herzegovina':
            document.getElementById('smartCode').innerHTML = "Smart Code: " + toTimeStamp(timeStamp) + '070';
            console.log(toTimeStamp(timeStamp) + '070');
        break;

        case 'Botswana':
            document.getElementById('smartCode').innerHTML = "Smart Code: " + toTimeStamp(timeStamp) + '072';
            console.log(toTimeStamp(timeStamp) + '072');
        break;

        case 'Bouvet Island':
            document.getElementById('smartCode').innerHTML = "Smart Code: " + toTimeStamp(timeStamp) + '074';
            console.log(toTimeStamp(timeStamp) + '074');
        break;

        case 'Brazil':
            document.getElementById('smartCode').innerHTML = "Smart Code: " + toTimeStamp(timeStamp) + '076';
            console.log(toTimeStamp(timeStamp) + '076');
        break;

        case 'British Indian Ocean Territory':
            document.getElementById('smartCode').innerHTML = "Smart Code: " + toTimeStamp(timeStamp) + '086';
            console.log(toTimeStamp(timeStamp) + '086');
        break;

        case 'Brunei Darussalam':
            document.getElementById('smartCode').innerHTML = "Smart Code: " + toTimeStamp(timeStamp) + '096';
            console.log(toTimeStamp(timeStamp) + '096');
        break;

        case 'Bulgaria':
            document.getElementById('smartCode').innerHTML = "Smart Code: " + toTimeStamp(timeStamp) + '100';
            console.log(toTimeStamp(timeStamp) + '100');
        break;

        case 'Burkina Faso':
            document.getElementById('smartCode').innerHTML = "Smart Code: " + toTimeStamp(timeStamp) + '854';
            console.log(toTimeStamp(timeStamp) + '854');
        break;

        case 'Barundi':
            document.getElementById('smartCode').innerHTML = "Smart Code: " + toTimeStamp(timeStamp) + '108';
            console.log(toTimeStamp(timeStamp) + '108');
        break;

        case 'Cabo Verde':
            document.getElementById('smartCode').innerHTML = "Smart Code: " + toTimeStamp(timeStamp) + '132';
            console.log(toTimeStamp(timeStamp) + '132');
        break;

        case 'Cambodia':
            document.getElementById('smartCode').innerHTML = "Smart Code: " + toTimeStamp(timeStamp) + '116';
            console.log(toTimeStamp(timeStamp) + '116');
        break;

        case 'Cameroon':
            document.getElementById('smartCode').innerHTML = "Smart Code: " + toTimeStamp(timeStamp) + '120';
            console.log(toTimeStamp(timeStamp) + '120');
        break;

        case 'Canada':
            document.getElementById('smartCode').innerHTML = "Smart Code: " + toTimeStamp(timeStamp) + '124';
            console.log(toTimeStamp(timeStamp) + '124');
        break;

        case 'Cayman Islands':
            document.getElementById('smartCode').innerHTML = "Smart Code: " + toTimeStamp(timeStamp) + '136';
            console.log(toTimeStamp(timeStamp) + '136');
        break;

        case 'Central African Republic':
            document.getElementById('smartCode').innerHTML = "Smart Code: " + toTimeStamp(timeStamp) + '140';
            console.log(toTimeStamp(timeStamp) + '140');
        break;

        case 'Chad':
            document.getElementById('smartCode').innerHTML = "Smart Code: " + toTimeStamp(timeStamp) + '148';
            console.log(toTimeStamp(timeStamp) + '148');
        break;

        case 'Chile':
            document.getElementById('smartCode').innerHTML = "Smart Code: " + toTimeStamp(timeStamp) + '152';
            console.log(toTimeStamp(timeStamp) + '152');
        break;

        case 'China':
            document.getElementById('smartCode').innerHTML = "Smart Code: " + toTimeStamp(timeStamp) + '156';
            console.log(toTimeStamp(timeStamp) + '156');
        break;

        case 'Christmas Island':
            document.getElementById('smartCode').innerHTML = "Smart Code: " + toTimeStamp(timeStamp) + '162';
            console.log(toTimeStamp(timeStamp) + '162');
        break;

        case 'Cocos':
            document.getElementById('smartCode').innerHTML = "Smart Code: " + toTimeStamp(timeStamp) + '166';
            console.log(toTimeStamp(timeStamp) + '166');
        break;

        case 'Colombia':
            document.getElementById('smartCode').innerHTML = "Smart Code: " + toTimeStamp(timeStamp) + '170';
            console.log(toTimeStamp(timeStamp) + '170');
        break;

        case 'Comoros':
            document.getElementById('smartCode').innerHTML = "Smart Code: " + toTimeStamp(timeStamp) + '174';
            console.log(toTimeStamp(timeStamp) + '174');
        break;

        case 'Congo':
            document.getElementById('smartCode').innerHTML = "Smart Code: " + toTimeStamp(timeStamp) + '178';
            console.log(toTimeStamp(timeStamp) + '178');
        break;

        case 'Cook Islands':
            document.getElementById('smartCode').innerHTML = "Smart Code: " + toTimeStamp(timeStamp) + '184';
            console.log(toTimeStamp(timeStamp) + '184');
        break;

        case 'Costa Rica':
            document.getElementById('smartCode').innerHTML = "Smart Code: " + toTimeStamp(timeStamp) + '188';
            console.log(toTimeStamp(timeStamp) + '188');
        break;

        case 'Croatia':
            document.getElementById('smartCode').innerHTML = "Smart Code: " + toTimeStamp(timeStamp) + '191';
            console.log(toTimeStamp(timeStamp) + '191');
        break;

        case 'Cuba':
            document.getElementById('smartCode').innerHTML = "Smart Code: " + toTimeStamp(timeStamp) + '192';
            console.log(toTimeStamp(timeStamp) + '192');
        break;

        case 'Curaçao':
            document.getElementById('smartCode').innerHTML = "Smart Code: " + toTimeStamp(timeStamp) + '531';
            console.log(toTimeStamp(timeStamp) + '531');
        break;

        case 'Cyprus':
            document.getElementById('smartCode').innerHTML = "Smart Code: " + toTimeStamp(timeStamp) + '196';
            console.log(toTimeStamp(timeStamp) + '196');
        break;

        case 'Czechia':
            document.getElementById('smartCode').innerHTML = "Smart Code: " + toTimeStamp(timeStamp) + '203';
            console.log(toTimeStamp(timeStamp) + '203');
        break;

        case "Côte d'Ivoire":
            document.getElementById('smartCode').innerHTML = "Smart Code: " + toTimeStamp(timeStamp) + '384';
            console.log(toTimeStamp(timeStamp) + '384');
        break;

        case "Denmark":
            document.getElementById('smartCode').innerHTML = "Smart Code: " + toTimeStamp(timeStamp) + '208';
            console.log(toTimeStamp(timeStamp) + '208');
        break;

        case "Djibouti":
            document.getElementById('smartCode').innerHTML = "Smart Code: " + toTimeStamp(timeStamp) + '262';
            console.log(toTimeStamp(timeStamp) + '262');
        break;

        case "Dominica":
            document.getElementById('smartCode').innerHTML = "Smart Code: " + toTimeStamp(timeStamp) + '212';
            console.log(toTimeStamp(timeStamp) + '212');
        break;

        case "Dominican Republic":
            document.getElementById('smartCode').innerHTML = "Smart Code: " + toTimeStamp(timeStamp) + '214';
            console.log(toTimeStamp(timeStamp) + '214');
        break;

        case "Ecuador":
            document.getElementById('smartCode').innerHTML = "Smart Code: " + toTimeStamp(timeStamp) + '218';
            console.log(toTimeStamp(timeStamp) + '218');
        break;

        case "Egypt":
            document.getElementById('smartCode').innerHTML = "Smart Code: " + toTimeStamp(timeStamp) + '818';
            console.log(toTimeStamp(timeStamp) + '818');
        break;

        case "El Salvador":
            document.getElementById('smartCode').innerHTML = "Smart Code: " + toTimeStamp(timeStamp) + '222';
            console.log(toTimeStamp(timeStamp) + '222');
        break;

        case "Eritrea":
            document.getElementById('smartCode').innerHTML = "Smart Code: " + toTimeStamp(timeStamp) + '232';
            console.log(toTimeStamp(timeStamp) + '232');
        break;

        case "Estonia":
            document.getElementById('smartCode').innerHTML = "Smart Code: " + toTimeStamp(timeStamp) + '233';
            console.log(toTimeStamp(timeStamp) + '233');
        break;

        case "Eswatini":
            document.getElementById('smartCode').innerHTML = "Smart Code: " + toTimeStamp(timeStamp) + '748';
            console.log(toTimeStamp(timeStamp) + '748');
        break;

        case "Ethiopia":
            document.getElementById('smartCode').innerHTML = "Smart Code: " + toTimeStamp(timeStamp) + '231';
            console.log(toTimeStamp(timeStamp) + '231');
        break;

        case "Falkland Islands":
            document.getElementById('smartCode').innerHTML = "Smart Code: " + toTimeStamp(timeStamp) + '238';
            console.log(toTimeStamp(timeStamp) + '238');
        break;

        case "Faroe Islands":
            document.getElementById('smartCode').innerHTML = "Smart Code: " + toTimeStamp(timeStamp) + '234';
            console.log(toTimeStamp(timeStamp) + '234');
        break;

        case "Fiji":
            document.getElementById('smartCode').innerHTML = "Smart Code: " + toTimeStamp(timeStamp) + '242';
            console.log(toTimeStamp(timeStamp) + '242');
        break;

        case "Finland":
            document.getElementById('smartCode').innerHTML = "Smart Code: " + toTimeStamp(timeStamp) + '246';
            console.log(toTimeStamp(timeStamp) + '246');
        break;

        case "France":
            document.getElementById('smartCode').innerHTML = "Smart Code: " + toTimeStamp(timeStamp) + '250';
            console.log(toTimeStamp(timeStamp) + '250');
        break;

        case "French Guiana":
            document.getElementById('smartCode').innerHTML = "Smart Code: " + toTimeStamp(timeStamp) + '254';
            console.log(toTimeStamp(timeStamp) + '254');
        break;

        case "French Polynesia":
            document.getElementById('smartCode').innerHTML = "Smart Code: " + toTimeStamp(timeStamp) + '258';
            console.log(toTimeStamp(timeStamp) + '258');
        break;

        case "French Southern Territories":
            document.getElementById('smartCode').innerHTML = "Smart Code: " + toTimeStamp(timeStamp) + '260';
            console.log(toTimeStamp(timeStamp) + '260');
        break;

        case "Gabon":
            document.getElementById('smartCode').innerHTML = "Smart Code: " + toTimeStamp(timeStamp) + '260';
            console.log(toTimeStamp(timeStamp) + '266');
        break;

        case "Gabon":
            document.getElementById('smartCode').innerHTML = "Smart Code: " + toTimeStamp(timeStamp) + '260';
            console.log(toTimeStamp(timeStamp) + '266');
        break;

        case "Gambia":
            document.getElementById('smartCode').innerHTML = "Smart Code: " + toTimeStamp(timeStamp) + '270';
            console.log(toTimeStamp(timeStamp) + '270');
        break;

        case "Georgia":
            document.getElementById('smartCode').innerHTML = "Smart Code: " + toTimeStamp(timeStamp) + '268';
            console.log(toTimeStamp(timeStamp) + '228');
        break;

        case "Germany":
            document.getElementById('smartCode').innerHTML = "Smart Code: " + toTimeStamp(timeStamp) + '276';
            console.log(toTimeStamp(timeStamp) + '276');
        break;

        case "Ghana":
            document.getElementById('smartCode').innerHTML = "Smart Code: " + toTimeStamp(timeStamp) + '288';
            console.log(toTimeStamp(timeStamp) + '288');
        break;

        case "Gribaltar":
            document.getElementById('smartCode').innerHTML = "Smart Code: " + toTimeStamp(timeStamp) + '292';
            console.log(toTimeStamp(timeStamp) + '292');
        break;

        case "Greece":
            document.getElementById('smartCode').innerHTML = "Smart Code: " + toTimeStamp(timeStamp) + '300';
            console.log(toTimeStamp(timeStamp) + '300');
        break;

        case "Greenland":
            document.getElementById('smartCode').innerHTML = "Smart Code: " + toTimeStamp(timeStamp) + '304';
            console.log(toTimeStamp(timeStamp) + '304');
        break;

        case "Grenada":
            document.getElementById('smartCode').innerHTML = "Smart Code: " + toTimeStamp(timeStamp) + '308';
            console.log(toTimeStamp(timeStamp) + '308');
        break;

        case "Guadeloupe":
            document.getElementById('smartCode').innerHTML = "Smart Code: " + toTimeStamp(timeStamp) + '312';
            console.log(toTimeStamp(timeStamp) + '312');
        break;

        case "Guam":
            document.getElementById('smartCode').innerHTML = "Smart Code: " + toTimeStamp(timeStamp) + '316';
            console.log(toTimeStamp(timeStamp) + '316');
        break;

        case "Guatemala":
            document.getElementById('smartCode').innerHTML = "Smart Code: " + toTimeStamp(timeStamp) + '320';
            console.log(toTimeStamp(timeStamp) + '320');
        break;

        case "Guernsey":
            document.getElementById('smartCode').innerHTML = "Smart Code: " + toTimeStamp(timeStamp) + '831';
            console.log(toTimeStamp(timeStamp) + '831');
        break;

        case "Guinea":
            document.getElementById('smartCode').innerHTML = "Smart Code: " + toTimeStamp(timeStamp) + '234';
            console.log(toTimeStamp(timeStamp) + '234');
        break;

        case "Guinea-Bissau":
            document.getElementById('smartCode').innerHTML = "Smart Code: " + toTimeStamp(timeStamp) + '624';
            console.log(toTimeStamp(timeStamp) + '624');
        break;

        case "Guyana":
            document.getElementById('smartCode').innerHTML = "Smart Code: " + toTimeStamp(timeStamp) + '328';
            console.log(toTimeStamp(timeStamp) + '328');
        break;

        case "Haiti":
            document.getElementById('smartCode').innerHTML = "Smart Code: " + toTimeStamp(timeStamp) + '332';
            console.log(toTimeStamp(timeStamp) + '328');
        break;

        case "Heard Island and McDonald Islands":
            document.getElementById('smartCode').innerHTML = "Smart Code: " + toTimeStamp(timeStamp) + '334';
            console.log(toTimeStamp(timeStamp) + '328');
        break;

        case "Holy See":
            document.getElementById('smartCode').innerHTML = "Smart Code: " + toTimeStamp(timeStamp) + '334';
            console.log(toTimeStamp(timeStamp) + '336');
        break;

        case "Philippines":
            document.getElementById('smartCode').innerHTML = "Smart Code: " + toTimeStamp(timeStamp) + '608';
            console.log(toTimeStamp(timeStamp) + '608');
        break;

        default:
            alert('no record found');
            console.log('No record found');

    }

    document.getElementById('smart-code-row').style.display = 'block';
}

console.log('test');






