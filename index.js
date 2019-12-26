
window.onload = () => {
    let places = staticLoadPlaces();
    renderPlaces(places);
};

function renderPlaces(places) {
    let scene = document.querySelector('a-scene');

    places.forEach((place) => {
        let latitude = place.lat;
        let longitude = place.lng;

       // add place icon
       const model = document.createElement('a-image');
       model.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude};`);
       model.setAttribute('src', 'castle.png');

       model.setAttribute('scale', '500, 500');

       const text = document.createElement('a-text');
       text.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude};`);
       text.setAttribute('value', place.name);
       text.setAttribute('rotation', '-90 0 0');

       text.setAttribute('scale', '500, 500');

        scene.appendChild(model);
    });
}

function staticLoadPlaces() {
    var places = [
        {
            "ccomune": "ALTRO",
            "cprovincia": "ALTRO",
            "cregione": "ALTRO",
            "cnome": "StICHCI NICCHI",
            "canno_inserimento": "2015",
            "cdata_e_ora_inserimento": "2015-08-14T22:04:28Z",
            "cidentificatore_in_openstreetmap": "1456303190",
            "clongitudine": "13.016880",
            "clatitudine": "43.844870"
        },
        {
            "ccomune": "ALTRO",
            "cprovincia": "ALTRO",
            "cregione": "ALTRO",
            "cnome": "Batteria dello Chaberton",
            "canno_inserimento": "2015",
            "cdata_e_ora_inserimento": "2015-08-14T22:04:28Z",
            "cidentificatore_in_openstreetmap": "1456303190",
            "clongitudine": "6.7526662",
            "clatitudine": "44.9647566"
        }
        ,
        {
            "ccomune": "ALTRO",
            "cprovincia": "ALTRO",
            "cregione": "ALTRO",
            "cnome": "Fortezza Castelmur",
            "canno_inserimento": "2015",
            "cdata_e_ora_inserimento": "2015-10-19T10:36:51Z",
            "cidentificatore_in_openstreetmap": "1827502401",
            "clongitudine": "9.5614389",
            "clatitudine": "46.3397422"
        }
        ,
        {
            "ccomune": "Albiano d'Ivrea",
            "cprovincia": "TORINO",
            "cregione": "Piemonte",
            "cnome": "Castello vescovile di Albiano",
            "canno_inserimento": "2012",
            "cdata_e_ora_inserimento": "2012-07-21T11:16:01Z",
            "cidentificatore_in_openstreetmap": "1709324947",
            "clongitudine": "7.9507432",
            "clatitudine": "45.4352992999999"
        }
        ,
        {
            "ccomune": "Avigliana",
            "cprovincia": "TORINO",
            "cregione": "Piemonte",
            "cnome": "Castello di Avigliana",
            "canno_inserimento": "2015",
            "cdata_e_ora_inserimento": "2015-03-08T19:32:38Z",
            "cidentificatore_in_openstreetmap": "2710539599",
            "clongitudine": "7.3935822",
            "clatitudine": "45.0808559999999"
        }
        ,
        {
            "ccomune": "Azeglio",
            "cprovincia": "TORINO",
            "cregione": "Piemonte",
            "cnome": "Castello d?Harcourt",
            "canno_inserimento": "2012",
            "cdata_e_ora_inserimento": "2012-07-08T11:12:57Z",
            "cidentificatore_in_openstreetmap": "1817504781",
            "clongitudine": "7.9938367",
            "clatitudine": "45.4250224999999"
        }
        ,
        {
            "ccomune": "Bardonecchia",
            "cprovincia": "TORINO",
            "cregione": "Piemonte",
            "cnome": "Tur d'Amun",
            "canno_inserimento": "2014",
            "cdata_e_ora_inserimento": "2014-11-24T18:38:26Z",
            "cidentificatore_in_openstreetmap": "2142604808",
            "clongitudine": "6.6972847",
            "clatitudine": "45.0835841999999"
        }
        ,
        {
            "ccomune": "Borgaro Torinese",
            "cprovincia": "TORINO",
            "cregione": "Piemonte",
            "cnome": "Castello di Santa Cristina",
            "canno_inserimento": "2015",
            "cdata_e_ora_inserimento": "2015-03-26T10:16:56Z",
            "cidentificatore_in_openstreetmap": "1908194329",
            "clongitudine": "7.6843332",
            "clatitudine": "45.1424504"
        }
        ,
        {
            "ccomune": "Bricherasio",
            "cprovincia": "TORINO",
            "cregione": "Piemonte",
            "cnome": "Castelvecchio",
            "canno_inserimento": "2015",
            "cdata_e_ora_inserimento": "2015-06-28T20:26:05Z",
            "cidentificatore_in_openstreetmap": "3623913518",
            "clongitudine": "7.2749437",
            "clatitudine": "44.8309095999999"
        }
        ,
        {
            "ccomune": "Candiolo",
            "cprovincia": "TORINO",
            "cregione": "Piemonte",
            "cnome": "Castello di Parpaglia",
            "canno_inserimento": "2014",
            "cdata_e_ora_inserimento": "2014-09-19T13:46:38Z",
            "cidentificatore_in_openstreetmap": "3073510041",
            "clongitudine": "7.5727538",
            "clatitudine": "44.9773373"
        }
        ,
        {
            "ccomune": "Carema",
            "cprovincia": "TORINO",
            "cregione": "Piemonte",
            "cnome": "Casa Forte \"\"Gran Masun\"\"",
            "canno_inserimento": "2015",
            "cdata_e_ora_inserimento": "2015-11-05T14:35:14Z",
            "cidentificatore_in_openstreetmap": "1632928496",
            "clongitudine": "7.8132148",
            "clatitudine": "45.5828315999999"
        }
        ,
        {
            "ccomune": "Carema",
            "cprovincia": "TORINO",
            "cregione": "Piemonte",
            "cnome": "Casa Forte \"\"Palazzotto Ugoneti\"\"",
            "canno_inserimento": "2015",
            "cdata_e_ora_inserimento": "2015-10-29T17:05:37Z",
            "cidentificatore_in_openstreetmap": "1634400531",
            "clongitudine": "7.8131351",
            "clatitudine": "45.583776"
        }
        ,
        {
            "ccomune": "Chieri",
            "cprovincia": "TORINO",
            "cregione": "Piemonte",
            "cnome": "Castello dei Mosi",
            "canno_inserimento": "2014",
            "cdata_e_ora_inserimento": "2014-06-24T09:35:58Z",
            "cidentificatore_in_openstreetmap": "2930729058",
            "clongitudine": "7.797308",
            "clatitudine": "44.9670374"
        }
        ,
        {
            "ccomune": "Lessolo",
            "cprovincia": "TORINO",
            "cregione": "Piemonte",
            "cnome": "Castello Cagnis",
            "canno_inserimento": "2014",
            "cdata_e_ora_inserimento": "2014-06-23T00:46:31Z",
            "cidentificatore_in_openstreetmap": "2012886203",
            "clongitudine": "7.8119935",
            "clatitudine": "45.4803994999999"
        }
        ,
        {
            "ccomune": "Loranze'",
            "cprovincia": "TORINO",
            "cregione": "Piemonte",
            "cnome": "Castello Rosso",
            "canno_inserimento": "2014",
            "cdata_e_ora_inserimento": "2014-06-20T20:35:59Z",
            "cidentificatore_in_openstreetmap": "2925194738",
            "clongitudine": "7.7969473",
            "clatitudine": "45.4356687"
        }
        ,
        {
            "ccomune": "Mazze'",
            "cprovincia": "TORINO",
            "cregione": "Piemonte",
            "cnome": "Castello di Mazz�",
            "canno_inserimento": "2013",
            "cdata_e_ora_inserimento": "2013-07-02T15:23:59Z",
            "cidentificatore_in_openstreetmap": "2370787684",
            "clongitudine": "7.9392423",
            "clatitudine": "45.3052244"
        }
        ,
        {
            "ccomune": "Mompantero",
            "cprovincia": "TORINO",
            "cregione": "Piemonte",
            "cnome": "Forte Pampal�",
            "canno_inserimento": "2014",
            "cdata_e_ora_inserimento": "2014-07-17T09:56:43Z",
            "cidentificatore_in_openstreetmap": "2967322166",
            "clongitudine": "7.0342972",
            "clatitudine": "45.1660255"
        }
        ,
        {
            "ccomune": "Ozegna",
            "cprovincia": "TORINO",
            "cregione": "Piemonte",
            "cnome": "Castello di Ozegna",
            "canno_inserimento": "2009",
            "cdata_e_ora_inserimento": "2009-09-25T17:11:00Z",
            "cidentificatore_in_openstreetmap": "507324507",
            "clongitudine": "7.7412946",
            "clatitudine": "45.3501753999999"
        }
        ,
        {
            "ccomune": "Pavone Canavese",
            "cprovincia": "TORINO",
            "cregione": "Piemonte",
            "cnome": "Castello di Pavone Canavese",
            "canno_inserimento": "2014",
            "cdata_e_ora_inserimento": "2014-06-04T11:15:25Z",
            "cidentificatore_in_openstreetmap": "1882552443",
            "clongitudine": "7.8556686",
            "clatitudine": "45.435848"
        }
        ,
        {
            "ccomune": "Quagliuzzo",
            "cprovincia": "TORINO",
            "cregione": "Piemonte",
            "cnome": "Ex Castellazzo",
            "canno_inserimento": "2014",
            "cdata_e_ora_inserimento": "2014-06-24T21:51:55Z",
            "cidentificatore_in_openstreetmap": "2931926856",
            "clongitudine": "7.7780649",
            "clatitudine": "45.4315981"
        }
        ,
        {
            "ccomune": "Rivalta di Torino",
            "cprovincia": "TORINO",
            "cregione": "Piemonte",
            "cnome": "",
            "canno_inserimento": "2015",
            "cdata_e_ora_inserimento": "2015-02-19T10:31:58Z",
            "cidentificatore_in_openstreetmap": "3359228011",
            "clongitudine": "7.5218589",
            "clatitudine": "45.0318973999999"
        }
        ,
        {
            "ccomune": "Rivarolo Canavese",
            "cprovincia": "TORINO",
            "cregione": "Piemonte",
            "cnome": "Castellazzo",
            "canno_inserimento": "2012",
            "cdata_e_ora_inserimento": "2012-10-13T08:28:44Z",
            "cidentificatore_in_openstreetmap": "1962278569",
            "clongitudine": "7.7279197",
            "clatitudine": "45.3324969999999"
        }
        ,
        {
            "ccomune": "San Giorgio Canavese",
            "cprovincia": "TORINO",
            "cregione": "Piemonte",
            "cnome": "Castello di San Giorgio",
            "canno_inserimento": "2014",
            "cdata_e_ora_inserimento": "2014-07-14T07:41:09Z",
            "cidentificatore_in_openstreetmap": "2942678014",
            "clongitudine": "7.7958368",
            "clatitudine": "45.3376616999999"
        }
        ,
        {
            "ccomune": "Santena",
            "cprovincia": "TORINO",
            "cregione": "Piemonte",
            "cnome": "Castello dei Mosetti",
            "canno_inserimento": "2014",
            "cdata_e_ora_inserimento": "2014-06-24T09:33:42Z",
            "cidentificatore_in_openstreetmap": "2930725419",
            "clongitudine": "7.7863315",
            "clatitudine": "44.9587071999999"
        }
        ,
        {
            "ccomune": "Santena",
            "cprovincia": "TORINO",
            "cregione": "Piemonte",
            "cnome": "Castello di San Salv�",
            "canno_inserimento": "2015",
            "cdata_e_ora_inserimento": "2015-01-11T22:10:37Z",
            "cidentificatore_in_openstreetmap": "2930754522",
            "clongitudine": "7.7990255",
            "clatitudine": "44.9456745999999"
        }
        ,
        {
            "ccomune": "Settimo Vittone",
            "cprovincia": "TORINO",
            "cregione": "Piemonte",
            "cnome": "Castello di Castruzzone",
            "canno_inserimento": "2013",
            "cdata_e_ora_inserimento": "2013-11-29T16:52:19Z",
            "cidentificatore_in_openstreetmap": "2557345945",
            "clongitudine": "7.8284368",
            "clatitudine": "45.5620639999999"
        }
        ,
        {
            "ccomune": "Strambinello",
            "cprovincia": "TORINO",
            "cregione": "Piemonte",
            "cnome": "Castello di Strambinello",
            "canno_inserimento": "2014",
            "cdata_e_ora_inserimento": "2014-06-18T11:42:14Z",
            "cidentificatore_in_openstreetmap": "2921726092",
            "clongitudine": "7.7727133",
            "clatitudine": "45.4197263"
        }
        ,
        {
            "ccomune": "Strambino",
            "cprovincia": "TORINO",
            "cregione": "Piemonte",
            "cnome": "Castello di Strambino",
            "canno_inserimento": "2014",
            "cdata_e_ora_inserimento": "2014-09-08T12:02:06Z",
            "cidentificatore_in_openstreetmap": "3066536980",
            "clongitudine": "7.8798207",
            "clatitudine": "45.3854497"
        }
        ,
        {
            "ccomune": "Villar Focchiardo",
            "cprovincia": "TORINO",
            "cregione": "Piemonte",
            "cnome": "Castello Conti Carroccio",
            "canno_inserimento": "2011",
            "cdata_e_ora_inserimento": "2011-03-02T12:15:31Z",
            "cidentificatore_in_openstreetmap": "1165453515",
            "clongitudine": "7.227635",
            "clatitudine": "45.1078772999999"
        }
        ,
        {
            "ccomune": "Vische",
            "cprovincia": "TORINO",
            "cregione": "Piemonte",
            "cnome": "Castello di Vische",
            "canno_inserimento": "2012",
            "cdata_e_ora_inserimento": "2012-11-17T13:29:22Z",
            "cidentificatore_in_openstreetmap": "2018096579",
            "clongitudine": "7.9535923",
            "clatitudine": "45.3335194"
        }
        ,
        {
            "ccomune": "Albano Vercellese",
            "cprovincia": "VERCELLI",
            "cregione": "Piemonte",
            "cnome": "Castello di Albano",
            "canno_inserimento": "2013",
            "cdata_e_ora_inserimento": "2013-05-14T15:34:21Z",
            "cidentificatore_in_openstreetmap": "2302437386",
            "clongitudine": "8.3844616",
            "clatitudine": "45.4262463999999"
        }
        ,
        {
            "ccomune": "Cervatto",
            "cprovincia": "VERCELLI",
            "cregione": "Piemonte",
            "cnome": "Castello di Cervatto",
            "canno_inserimento": "2013",
            "cdata_e_ora_inserimento": "2013-05-02T14:31:16Z",
            "cidentificatore_in_openstreetmap": "2289205134",
            "clongitudine": "8.16473339999999",
            "clatitudine": "45.8828346999999"
        }
        ,
        {
            "ccomune": "Collobiano",
            "cprovincia": "VERCELLI",
            "cregione": "Piemonte",
            "cnome": "Castello di Collobiano",
            "canno_inserimento": "2013",
            "cdata_e_ora_inserimento": "2013-03-29T18:25:11Z",
            "cidentificatore_in_openstreetmap": "2235264091",
            "clongitudine": "8.3477911",
            "clatitudine": "45.3957187999999"
        }
        ,
        {
            "ccomune": "Crescentino",
            "cprovincia": "VERCELLI",
            "cregione": "Piemonte",
            "cnome": "Castello di San Genuario",
            "canno_inserimento": "2013",
            "cdata_e_ora_inserimento": "2013-09-16T15:54:39Z",
            "cidentificatore_in_openstreetmap": "2460540019",
            "clongitudine": "8.14470189999999",
            "clatitudine": "45.2136569999999"
        }
        ,
        {
            "ccomune": "Gattinara",
            "cprovincia": "VERCELLI",
            "cregione": "Piemonte",
            "cnome": "Torre delle Castelle",
            "canno_inserimento": "2013",
            "cdata_e_ora_inserimento": "2013-03-30T16:06:18Z",
            "cidentificatore_in_openstreetmap": "1644151991",
            "clongitudine": "8.3607089",
            "clatitudine": "45.6223156"
        }
        ,
        {
            "ccomune": "Moncrivello",
            "cprovincia": "VERCELLI",
            "cregione": "Piemonte",
            "cnome": "Castello di Moncrivello",
            "canno_inserimento": "2013",
            "cdata_e_ora_inserimento": "2013-12-17T16:25:01Z",
            "cidentificatore_in_openstreetmap": "2583899424",
            "clongitudine": "7.9955143",
            "clatitudine": "45.3301982999999"
        }
        ,
        {
            "ccomune": "Motta de' Conti",
            "cprovincia": "VERCELLI",
            "cregione": "Piemonte",
            "cnome": "Castello dei Conti della Motta",
            "canno_inserimento": "2014",
            "cdata_e_ora_inserimento": "2014-02-21T13:51:27Z",
            "cidentificatore_in_openstreetmap": "2682496585",
            "clongitudine": "8.5215352",
            "clatitudine": "45.1916044"
        }
        ,
        {
            "ccomune": "Rovasenda",
            "cprovincia": "VERCELLI",
            "cregione": "Piemonte",
            "cnome": "Castello di Rovasenda",
            "canno_inserimento": "2013",
            "cdata_e_ora_inserimento": "2013-10-17T12:35:21Z",
            "cidentificatore_in_openstreetmap": "2499293585",
            "clongitudine": "8.3133053",
            "clatitudine": "45.5355751999999"
        }
        ,
        {
            "ccomune": "Santhia'",
            "cprovincia": "VERCELLI",
            "cregione": "Piemonte",
            "cnome": "Castello di Vettign�",
            "canno_inserimento": "2012",
            "cdata_e_ora_inserimento": "2012-08-18T14:17:04Z",
            "cidentificatore_in_openstreetmap": "350435400",
            "clongitudine": "8.23867609999999",
            "clatitudine": "45.3932985"
        }
        ,
        {
            "ccomune": "Villarboit",
            "cprovincia": "VERCELLI",
            "cregione": "Piemonte",
            "cnome": "Castello di Villarboit",
            "canno_inserimento": "2013",
            "cdata_e_ora_inserimento": "2013-03-07T15:03:54Z",
            "cidentificatore_in_openstreetmap": "2189746047",
            "clongitudine": "8.3387091",
            "clatitudine": "45.435492"
        }
        ,
        {
            "ccomune": "Fara Novarese",
            "cprovincia": "NOVARA",
            "cregione": "Piemonte",
            "cnome": "Castrum Novum o Castello Superiore",
            "canno_inserimento": "2016",
            "cdata_e_ora_inserimento": "2016-02-01T16:49:52Z",
            "cidentificatore_in_openstreetmap": "3982347130",
            "clongitudine": "8.4612272",
            "clatitudine": "45.5570365"
        }
        ,
        {
            "ccomune": "Orta San Giulio",
            "cprovincia": "NOVARA",
            "cregione": "Piemonte",
            "cnome": "Castello del Buccione",
            "canno_inserimento": "2012",
            "cdata_e_ora_inserimento": "2012-12-18T13:47:59Z",
            "cidentificatore_in_openstreetmap": "2072875190",
            "clongitudine": "8.4317946",
            "clatitudine": "45.7706762999999"
        }
        ,
        {
            "ccomune": "Bagnolo Piemonte",
            "cprovincia": "CUNEO",
            "cregione": "Piemonte",
            "cnome": "Castello di Bagnolo",
            "canno_inserimento": "2011",
            "cdata_e_ora_inserimento": "2011-07-24T20:39:10Z",
            "cidentificatore_in_openstreetmap": "1373016632",
            "clongitudine": "7.2992367",
            "clatitudine": "44.7476761"
        }
        ,
        {
            "ccomune": "Bagnolo Piemonte",
            "cprovincia": "CUNEO",
            "cregione": "Piemonte",
            "cnome": "Palazzo Malingri",
            "canno_inserimento": "2011",
            "cdata_e_ora_inserimento": "2011-07-24T20:39:10Z",
            "cidentificatore_in_openstreetmap": "1373016671",
            "clongitudine": "7.2971641",
            "clatitudine": "44.7500525999999"
        }
        ,
        {
            "ccomune": "Brondello",
            "cprovincia": "CUNEO",
            "cregione": "Piemonte",
            "cnome": "Torre di Brondello",
            "canno_inserimento": "2011",
            "cdata_e_ora_inserimento": "2011-09-05T19:31:00Z",
            "cidentificatore_in_openstreetmap": "1424373550",
            "clongitudine": "7.4066418",
            "clatitudine": "44.5981248"
        }
        ,
        {
            "ccomune": "Casteldelfino",
            "cprovincia": "CUNEO",
            "cregione": "Piemonte",
            "cnome": "Ruderi del Castello (XIV sec)",
            "canno_inserimento": "2012",
            "cdata_e_ora_inserimento": "2012-09-07T22:00:18Z",
            "cidentificatore_in_openstreetmap": "1387857119",
            "clongitudine": "7.0651908",
            "clatitudine": "44.5883556"
        }
        ,
        {
            "ccomune": "Castellar",
            "cprovincia": "CUNEO",
            "cregione": "Piemonte",
            "cnome": "",
            "canno_inserimento": "2011",
            "cdata_e_ora_inserimento": "2011-09-04T10:27:19Z",
            "cidentificatore_in_openstreetmap": "1422844530",
            "clongitudine": "7.4383934",
            "clatitudine": "44.6217612"
        }
        ,
        {
            "ccomune": "Costigliole Saluzzo",
            "cprovincia": "CUNEO",
            "cregione": "Piemonte",
            "cnome": "Castello Reynaudi",
            "canno_inserimento": "2011",
            "cdata_e_ora_inserimento": "2011-08-27T06:40:43Z",
            "cidentificatore_in_openstreetmap": "1414223496",
            "clongitudine": "7.4811348",
            "clatitudine": "44.5641810999999"
        }
        ,
        {
            "ccomune": "Costigliole Saluzzo",
            "cprovincia": "CUNEO",
            "cregione": "Piemonte",
            "cnome": "Castello rosso",
            "canno_inserimento": "2011",
            "cdata_e_ora_inserimento": "2011-08-27T06:40:43Z",
            "cidentificatore_in_openstreetmap": "1414223497",
            "clongitudine": "7.4817726",
            "clatitudine": "44.5635479999999"
        }
        ,
        {
            "ccomune": "Costigliole Saluzzo",
            "cprovincia": "CUNEO",
            "cregione": "Piemonte",
            "cnome": "Il Castellotto",
            "canno_inserimento": "2011",
            "cdata_e_ora_inserimento": "2011-08-27T06:40:43Z",
            "cidentificatore_in_openstreetmap": "1414223498",
            "clongitudine": "7.482912",
            "clatitudine": "44.5635939"
        }
        ,
        {
            "ccomune": "Fossano",
            "cprovincia": "CUNEO",
            "cregione": "Piemonte",
            "cnome": "Castello di Fossano",
            "canno_inserimento": "2010",
            "cdata_e_ora_inserimento": "2010-11-28T14:02:11Z",
            "cidentificatore_in_openstreetmap": "1010828955",
            "clongitudine": "7.7224657",
            "clatitudine": "44.5496994"
        }
        ,
        {
            "ccomune": "Garessio",
            "cprovincia": "CUNEO",
            "cregione": "Piemonte",
            "cnome": "Castello di Casotto",
            "canno_inserimento": "2011",
            "cdata_e_ora_inserimento": "2011-07-12T12:07:14Z",
            "cidentificatore_in_openstreetmap": "1359285625",
            "clongitudine": "7.9240285",
            "clatitudine": "44.2302432999999"
        }
        ,
        {
            "ccomune": "Mango",
            "cprovincia": "CUNEO",
            "cregione": "Piemonte",
            "cnome": "",
            "canno_inserimento": "2016",
            "cdata_e_ora_inserimento": "2016-02-07T08:49:03Z",
            "cidentificatore_in_openstreetmap": "3993210556",
            "clongitudine": "8.150114",
            "clatitudine": "44.6848744999999"
        }
        ,
        {
            "ccomune": "Manta",
            "cprovincia": "CUNEO",
            "cregione": "Piemonte",
            "cnome": "Castello della Manta",
            "canno_inserimento": "2014",
            "cdata_e_ora_inserimento": "2014-08-20T13:28:51Z",
            "cidentificatore_in_openstreetmap": "1576909638",
            "clongitudine": "7.482817",
            "clatitudine": "44.6143896"
        }
        ,
        {
            "ccomune": "Marene",
            "cprovincia": "CUNEO",
            "cregione": "Piemonte",
            "cnome": "Castello della Salza",
            "canno_inserimento": "2012",
            "cdata_e_ora_inserimento": "2012-12-17T18:44:27Z",
            "cidentificatore_in_openstreetmap": "2071880922",
            "clongitudine": "7.7342466",
            "clatitudine": "44.6318606"
        }
        ,
        {
            "ccomune": "Moretta",
            "cprovincia": "CUNEO",
            "cregione": "Piemonte",
            "cnome": "Castello di Moretta",
            "canno_inserimento": "2016",
            "cdata_e_ora_inserimento": "2016-02-12T21:07:22Z",
            "cidentificatore_in_openstreetmap": "4003259736",
            "clongitudine": "7.5364862",
            "clatitudine": "44.7634475999999"
        }
        ,
        {
            "ccomune": "Neive",
            "cprovincia": "CUNEO",
            "cregione": "Piemonte",
            "cnome": "Castello di Neive",
            "canno_inserimento": "2015",
            "cdata_e_ora_inserimento": "2015-08-25T12:36:15Z",
            "cidentificatore_in_openstreetmap": "3462018789",
            "clongitudine": "8.114089",
            "clatitudine": "44.7256651"
        }
        ,
        {
            "ccomune": "Pamparato",
            "cprovincia": "CUNEO",
            "cregione": "Piemonte",
            "cnome": "Castello Cordero di Pamparato",
            "canno_inserimento": "2015",
            "cdata_e_ora_inserimento": "2015-12-05T13:47:27Z",
            "cidentificatore_in_openstreetmap": "3878424767",
            "clongitudine": "7.9129901",
            "clatitudine": "44.2775255999999"
        }
        ,
        {
            "ccomune": "Polonghera",
            "cprovincia": "CUNEO",
            "cregione": "Piemonte",
            "cnome": "Castello di Polonghera",
            "canno_inserimento": "2014",
            "cdata_e_ora_inserimento": "2014-01-04T22:42:21Z",
            "cidentificatore_in_openstreetmap": "2610169073",
            "clongitudine": "7.5946346",
            "clatitudine": "44.8044615"
        }
        ,
        {
            "ccomune": "Roccasparvera",
            "cprovincia": "CUNEO",
            "cregione": "Piemonte",
            "cnome": "",
            "canno_inserimento": "2011",
            "cdata_e_ora_inserimento": "2011-12-18T18:14:49Z",
            "cidentificatore_in_openstreetmap": "1413160965",
            "clongitudine": "7.4386664",
            "clatitudine": "44.3422508"
        }
        ,
        {
            "ccomune": "Saliceto",
            "cprovincia": "CUNEO",
            "cregione": "Piemonte",
            "cnome": "Castello Marchesi del Carretto",
            "canno_inserimento": "2015",
            "cdata_e_ora_inserimento": "2015-07-31T12:26:03Z",
            "cidentificatore_in_openstreetmap": "3006787888",
            "clongitudine": "8.168005",
            "clatitudine": "44.4152977999999"
        }
        ,
        {
            "ccomune": "Santa Vittoria d'Alba",
            "cprovincia": "CUNEO",
            "cregione": "Piemonte",
            "cnome": "",
            "canno_inserimento": "2014",
            "cdata_e_ora_inserimento": "2014-01-05T04:18:07Z",
            "cidentificatore_in_openstreetmap": "2371205022",
            "clongitudine": "7.9314866",
            "clatitudine": "44.6962663999999"
        }
        ,
        {
            "ccomune": "Vernante",
            "cprovincia": "CUNEO",
            "cregione": "Piemonte",
            "cnome": "la tourusela",
            "canno_inserimento": "2014",
            "cdata_e_ora_inserimento": "2014-09-09T17:34:30Z",
            "cidentificatore_in_openstreetmap": "3068692334",
            "clongitudine": "7.5355324",
            "clatitudine": "44.2476889"
        }
        ,
        {
            "ccomune": "Bubbio",
            "cprovincia": "ASTI",
            "cregione": "Piemonte",
            "cnome": "",
            "canno_inserimento": "2011",
            "cdata_e_ora_inserimento": "2011-08-09T19:07:35Z",
            "cidentificatore_in_openstreetmap": "1392854812",
            "clongitudine": "8.2952825",
            "clatitudine": "44.6617466"
        }
        ,
        {
            "ccomune": "Castelletto Molina",
            "cprovincia": "ASTI",
            "cregione": "Piemonte",
            "cnome": "Castello Conti Veggi",
            "canno_inserimento": "2015",
            "cdata_e_ora_inserimento": "2015-08-18T11:15:41Z",
            "cidentificatore_in_openstreetmap": "3292424868",
            "clongitudine": "8.4330861",
            "clatitudine": "44.7507579"
        }
        ,
        {
            "ccomune": "Rocchetta Tanaro",
            "cprovincia": "ASTI",
            "cregione": "Piemonte",
            "cnome": "Monumento ai Martiri della Liberazione",
            "canno_inserimento": "2014",
            "cdata_e_ora_inserimento": "2014-12-08T14:04:29Z",
            "cidentificatore_in_openstreetmap": "3224909370",
            "clongitudine": "8.3440651",
            "clatitudine": "44.8595326"
        }
        ,
        {
            "ccomune": "Cantalupo Ligure",
            "cprovincia": "ALESSANDRIA",
            "cregione": "Piemonte",
            "cnome": "Castello di Borgo Adorno",
            "canno_inserimento": "2010",
            "cdata_e_ora_inserimento": "2010-04-09T18:54:41Z",
            "cidentificatore_in_openstreetmap": "690768251",
            "clongitudine": "9.09399739999999",
            "clatitudine": "44.740257"
        }
        ,
        {
            "ccomune": "Carrega Ligure",
            "cprovincia": "ALESSANDRIA",
            "cregione": "Piemonte",
            "cnome": "Torre Malaspina",
            "canno_inserimento": "2013",
            "cdata_e_ora_inserimento": "2013-08-15T15:22:01Z",
            "cidentificatore_in_openstreetmap": "1035368806",
            "clongitudine": "9.1822011",
            "clatitudine": "44.6133247"
        }
        ,
        {
            "ccomune": "Castelletto d'Erro",
            "cprovincia": "ALESSANDRIA",
            "cregione": "Piemonte",
            "cnome": "",
            "canno_inserimento": "2015",
            "cdata_e_ora_inserimento": "2015-06-29T06:46:31Z",
            "cidentificatore_in_openstreetmap": "3624477305",
            "clongitudine": "8.39448239999999",
            "clatitudine": "44.6255984"
        }
        ,
        {
            "ccomune": "Frassinello Monferrato",
            "cprovincia": "ALESSANDRIA",
            "cregione": "Piemonte",
            "cnome": "Castello Nemours di Frassinello",
            "canno_inserimento": "2015",
            "cdata_e_ora_inserimento": "2015-08-07T07:43:54Z",
            "cidentificatore_in_openstreetmap": "3685037277",
            "clongitudine": "8.3872908",
            "clatitudine": "45.0319599999999"
        }
        ,
        {
            "ccomune": "Lerma",
            "cprovincia": "ALESSANDRIA",
            "cregione": "Piemonte",
            "cnome": "Castello di Lerma",
            "canno_inserimento": "2008",
            "cdata_e_ora_inserimento": "2008-09-30T22:10:45Z",
            "cidentificatore_in_openstreetmap": "301261709",
            "clongitudine": "8.7087187",
            "clatitudine": "44.6340429999999"
        }
        ,
        {
            "ccomune": "Mornese",
            "cprovincia": "ALESSANDRIA",
            "cregione": "Piemonte",
            "cnome": "Castello di Mornese",
            "canno_inserimento": "2013",
            "cdata_e_ora_inserimento": "2013-03-10T09:37:02Z",
            "cidentificatore_in_openstreetmap": "2193941036",
            "clongitudine": "8.7558558",
            "clatitudine": "44.6385482"
        }
        ,
        {
            "ccomune": "Novi Ligure",
            "cprovincia": "ALESSANDRIA",
            "cregione": "Piemonte",
            "cnome": "",
            "canno_inserimento": "2012",
            "cdata_e_ora_inserimento": "2012-04-28T19:54:49Z",
            "cidentificatore_in_openstreetmap": "1734436673",
            "clongitudine": "8.78753219999999",
            "clatitudine": "44.7577507999999"
        }
        ,
        {
            "ccomune": "Ozzano Monferrato",
            "cprovincia": "ALESSANDRIA",
            "cregione": "Piemonte",
            "cnome": "",
            "canno_inserimento": "2015",
            "cdata_e_ora_inserimento": "2015-01-13T16:08:04Z",
            "cidentificatore_in_openstreetmap": "3286034467",
            "clongitudine": "8.3751422",
            "clatitudine": "45.1037351"
        }
        ,
        {
            "ccomune": "Piovera",
            "cprovincia": "ALESSANDRIA",
            "cregione": "Piemonte",
            "cnome": "Castello Balbi",
            "canno_inserimento": "2015",
            "cdata_e_ora_inserimento": "2015-01-27T11:42:08Z",
            "cidentificatore_in_openstreetmap": "3314195575",
            "clongitudine": "8.7363968",
            "clatitudine": "44.9610346999999"
        }
        ,
        {
            "ccomune": "Ponzano Monferrato",
            "cprovincia": "ALESSANDRIA",
            "cregione": "Piemonte",
            "cnome": "Castello dei Conti Davico",
            "canno_inserimento": "2015",
            "cdata_e_ora_inserimento": "2015-11-01T21:36:44Z",
            "cidentificatore_in_openstreetmap": "3346416531",
            "clongitudine": "8.2846437",
            "clatitudine": "45.0854391"
        }
        ,
        {
            "ccomune": "Roccaforte Ligure",
            "cprovincia": "ALESSANDRIA",
            "cregione": "Piemonte",
            "cnome": "ruderi del Castello Malaspina",
            "canno_inserimento": "2010",
            "cdata_e_ora_inserimento": "2010-04-22T16:10:02Z",
            "cidentificatore_in_openstreetmap": "703741306",
            "clongitudine": "9.030839",
            "clatitudine": "44.6792286"
        }
        ,
        {
            "ccomune": "Rosignano Monferrato",
            "cprovincia": "ALESSANDRIA",
            "cregione": "Piemonte",
            "cnome": "Castello di Uviglie",
            "canno_inserimento": "2015",
            "cdata_e_ora_inserimento": "2015-08-07T11:33:00Z",
            "cidentificatore_in_openstreetmap": "3685453157",
            "clongitudine": "8.4098175",
            "clatitudine": "45.0747032"
        }
        ,
        {
            "ccomune": "Silvano d'Orba",
            "cprovincia": "ALESSANDRIA",
            "cregione": "Piemonte",
            "cnome": "",
            "canno_inserimento": "2015",
            "cdata_e_ora_inserimento": "2015-06-30T11:06:49Z",
            "cidentificatore_in_openstreetmap": "3626878538",
            "clongitudine": "8.6768445",
            "clatitudine": "44.6808624"
        }
        ,
        {
            "ccomune": "Solero",
            "cprovincia": "ALESSANDRIA",
            "cregione": "Piemonte",
            "cnome": "",
            "canno_inserimento": "2012",
            "cdata_e_ora_inserimento": "2012-08-07T12:39:44Z",
            "cidentificatore_in_openstreetmap": "1332420121",
            "clongitudine": "8.5053696",
            "clatitudine": "44.9175048999999"
        }
        ,
        {
            "ccomune": "Solonghello",
            "cprovincia": "ALESSANDRIA",
            "cregione": "Piemonte",
            "cnome": "Castello di Solonghello",
            "canno_inserimento": "2015",
            "cdata_e_ora_inserimento": "2015-02-15T16:34:17Z",
            "cidentificatore_in_openstreetmap": "3352259854",
            "clongitudine": "8.2825551",
            "clatitudine": "45.1312959999999"
        }
        ,
        {
            "ccomune": "Tassarolo",
            "cprovincia": "ALESSANDRIA",
            "cregione": "Piemonte",
            "cnome": "Castello di Tassarolo",
            "canno_inserimento": "2015",
            "cdata_e_ora_inserimento": "2015-09-08T12:40:16Z",
            "cidentificatore_in_openstreetmap": "3734469560",
            "clongitudine": "8.7690879",
            "clatitudine": "44.7272636"
        }
        ,
        {
            "ccomune": "Trisobbio",
            "cprovincia": "ALESSANDRIA",
            "cregione": "Piemonte",
            "cnome": "",
            "canno_inserimento": "2013",
            "cdata_e_ora_inserimento": "2013-05-14T12:20:46Z",
            "cidentificatore_in_openstreetmap": "2303714091",
            "clongitudine": "8.5862154",
            "clatitudine": "44.6617395"
        }
        ,
        {
            "ccomune": "Arvier",
            "cprovincia": "AOSTA",
            "cregione": "Valle d'Aosta",
            "cnome": "Casa Forte Di Planaval",
            "canno_inserimento": "2014",
            "cdata_e_ora_inserimento": "2014-10-30T21:45:29Z",
            "cidentificatore_in_openstreetmap": "1456970217",
            "clongitudine": "7.0834407",
            "clatitudine": "45.6726819"
        }
        ,
        {
            "ccomune": "Arvier",
            "cprovincia": "AOSTA",
            "cregione": "Valle d'Aosta",
            "cnome": "Ch�teau de Montmayeur",
            "canno_inserimento": "2009",
            "cdata_e_ora_inserimento": "2009-07-08T13:41:35Z",
            "cidentificatore_in_openstreetmap": "437246298",
            "clongitudine": "7.1405387",
            "clatitudine": "45.6882309"
        }
        ,
        {
            "ccomune": "Avise",
            "cprovincia": "AOSTA",
            "cregione": "Valle d'Aosta",
            "cnome": "Castello di Avise",
            "canno_inserimento": "2012",
            "cdata_e_ora_inserimento": "2012-10-25T14:38:17Z",
            "cidentificatore_in_openstreetmap": "1983001271",
            "clongitudine": "7.1400342",
            "clatitudine": "45.7088097"
        }
        ,
        {
            "ccomune": "Bard",
            "cprovincia": "AOSTA",
            "cregione": "Valle d'Aosta",
            "cnome": "",
            "canno_inserimento": "2015",
            "cdata_e_ora_inserimento": "2015-10-05T16:53:22Z",
            "cidentificatore_in_openstreetmap": "1746542514",
            "clongitudine": "7.7444528",
            "clatitudine": "45.6135889"
        }
        ,
        {
            "ccomune": "Brissogne",
            "cprovincia": "AOSTA",
            "cregione": "Valle d'Aosta",
            "cnome": "Castello Di Brissogne",
            "canno_inserimento": "2011",
            "cdata_e_ora_inserimento": "2011-11-16T17:14:43Z",
            "cidentificatore_in_openstreetmap": "1310669550",
            "clongitudine": "7.4033491",
            "clatitudine": "45.7264387"
        }
        ,
        {
            "ccomune": "Brusson",
            "cprovincia": "AOSTA",
            "cregione": "Valle d'Aosta",
            "cnome": "Castello di Graines",
            "canno_inserimento": "2011",
            "cdata_e_ora_inserimento": "2011-05-05T13:40:18Z",
            "cidentificatore_in_openstreetmap": "1273070382",
            "clongitudine": "7.75417",
            "clatitudine": "45.738419"
        }
        ,
        {
            "ccomune": "Challand-Saint-Victor",
            "cprovincia": "AOSTA",
            "cregione": "Valle d'Aosta",
            "cnome": "Castello Di Villa - Challand",
            "canno_inserimento": "2014",
            "cdata_e_ora_inserimento": "2014-09-18T18:51:49Z",
            "cidentificatore_in_openstreetmap": "1328782651",
            "clongitudine": "7.7002663",
            "clatitudine": "45.6849555"
        }
        ,
        {
            "ccomune": "Fenis",
            "cprovincia": "AOSTA",
            "cregione": "Valle d'Aosta",
            "cnome": "Castello di F�nis",
            "canno_inserimento": "2015",
            "cdata_e_ora_inserimento": "2015-02-11T21:45:07Z",
            "cidentificatore_in_openstreetmap": "473471590",
            "clongitudine": "7.4889728",
            "clatitudine": "45.7369463"
        }
        ,
        {
            "ccomune": "Gressan",
            "cprovincia": "AOSTA",
            "cregione": "Valle d'Aosta",
            "cnome": "Tour de Villa",
            "canno_inserimento": "2012",
            "cdata_e_ora_inserimento": "2012-05-01T21:41:54Z",
            "cidentificatore_in_openstreetmap": "1737747920",
            "clongitudine": "7.2829646",
            "clatitudine": "45.7146681999999"
        }
        ,
        {
            "ccomune": "La Thuile",
            "cprovincia": "AOSTA",
            "cregione": "Valle d'Aosta",
            "cnome": "Ex Ricovero Magg. Sonza",
            "canno_inserimento": "2011",
            "cdata_e_ora_inserimento": "2011-11-10T21:04:23Z",
            "cidentificatore_in_openstreetmap": "1497776389",
            "clongitudine": "6.8703768",
            "clatitudine": "45.763415"
        }
        ,
        {
            "ccomune": "La Thuile",
            "cprovincia": "AOSTA",
            "cregione": "Valle d'Aosta",
            "cnome": "Ricovero Cap. Sandino",
            "canno_inserimento": "2011",
            "cdata_e_ora_inserimento": "2011-11-08T09:11:42Z",
            "cidentificatore_in_openstreetmap": "1495164466",
            "clongitudine": "6.9708442",
            "clatitudine": "45.7168741999999"
        }
        ,
        {
            "ccomune": "Nus",
            "cprovincia": "AOSTA",
            "cregione": "Valle d'Aosta",
            "cnome": "Castello di Pilato",
            "canno_inserimento": "2012",
            "cdata_e_ora_inserimento": "2012-12-02T23:05:45Z",
            "cidentificatore_in_openstreetmap": "2047268551",
            "clongitudine": "7.4680364",
            "clatitudine": "45.7403067999999"
        }
        ,
        {
            "ccomune": "Perloz",
            "cprovincia": "AOSTA",
            "cregione": "Valle d'Aosta",
            "cnome": "Tour d'H�r�res",
            "canno_inserimento": "2015",
            "cdata_e_ora_inserimento": "2015-05-31T08:47:28Z",
            "cidentificatore_in_openstreetmap": "3558429280",
            "clongitudine": "7.8137285",
            "clatitudine": "45.616888"
        }
        ,
        {
            "ccomune": "Pre'-Saint-Didier",
            "cprovincia": "AOSTA",
            "cregione": "Valle d'Aosta",
            "cnome": "Ex Ricovero Magg. Reggiani",
            "canno_inserimento": "2011",
            "cdata_e_ora_inserimento": "2011-11-11T08:15:09Z",
            "cidentificatore_in_openstreetmap": "1498230355",
            "clongitudine": "6.920851",
            "clatitudine": "45.7619063"
        }
        ,
        {
            "ccomune": "Saint-Christophe",
            "cprovincia": "AOSTA",
            "cregione": "Valle d'Aosta",
            "cnome": "Castello Passerin d'Entreves",
            "canno_inserimento": "2012",
            "cdata_e_ora_inserimento": "2012-05-11T22:33:34Z",
            "cidentificatore_in_openstreetmap": "1310344644",
            "clongitudine": "7.3475444",
            "clatitudine": "45.7481753"
        }
        ,
        {
            "ccomune": "Saint-Oyen",
            "cprovincia": "AOSTA",
            "cregione": "Valle d'Aosta",
            "cnome": "Chateau Verdun",
            "canno_inserimento": "2012",
            "cdata_e_ora_inserimento": "2012-01-04T17:21:39Z",
            "cidentificatore_in_openstreetmap": "1577018410",
            "clongitudine": "7.21531",
            "clatitudine": "45.8240978999999"
        }
        ,
        {
            "ccomune": "Valgrisenche",
            "cprovincia": "AOSTA",
            "cregione": "Valle d'Aosta",
            "cnome": "Maison Forte",
            "canno_inserimento": "2011",
            "cdata_e_ora_inserimento": "2011-10-05T19:14:24Z",
            "cidentificatore_in_openstreetmap": "1456226533",
            "clongitudine": "7.0823085",
            "clatitudine": "45.6264782"
        }
        ,
        {
            "ccomune": "Aquila d'Arroscia",
            "cprovincia": "IMPERIA",
            "cregione": "Liguria",
            "cnome": "",
            "canno_inserimento": "2016",
            "cdata_e_ora_inserimento": "2016-01-30T20:04:42Z",
            "cidentificatore_in_openstreetmap": "1708025561",
            "clongitudine": "8.0021407",
            "clatitudine": "44.0951353"
        }
        ,
        {
            "ccomune": "Mallare",
            "cprovincia": "SAVONA",
            "cregione": "Liguria",
            "cnome": "Castello del Miele",
            "canno_inserimento": "2014",
            "cdata_e_ora_inserimento": "2014-07-20T11:04:33Z",
            "cidentificatore_in_openstreetmap": "1131770530",
            "clongitudine": "8.3061946",
            "clatitudine": "44.2812058"
        }
        ,
        {
            "ccomune": "Genova",
            "cprovincia": "GENOVA",
            "cregione": "Liguria",
            "cnome": "",
            "canno_inserimento": "2012",
            "cdata_e_ora_inserimento": "2012-12-15T23:46:07Z",
            "cidentificatore_in_openstreetmap": "2065592344",
            "clongitudine": "8.9377329",
            "clatitudine": "44.4467617999999"
        }
        ,
        {
            "ccomune": "Genova",
            "cprovincia": "GENOVA",
            "cregione": "Liguria",
            "cnome": "Castelluzzo",
            "canno_inserimento": "2015",
            "cdata_e_ora_inserimento": "2015-03-21T18:28:46Z",
            "cidentificatore_in_openstreetmap": "2861371309",
            "clongitudine": "8.9915758",
            "clatitudine": "44.4577291"
        }
        ,
        {
            "ccomune": "Genova",
            "cprovincia": "GENOVA",
            "cregione": "Liguria",
            "cnome": "Forte Fratello Maggiore",
            "canno_inserimento": "2013",
            "cdata_e_ora_inserimento": "2013-10-07T08:56:35Z",
            "cidentificatore_in_openstreetmap": "2065592330",
            "clongitudine": "8.9361289",
            "clatitudine": "44.4564270999999"
        }
        ,
        {
            "ccomune": "Rapallo",
            "cprovincia": "GENOVA",
            "cregione": "Liguria",
            "cnome": "Castello di Rapallo",
            "canno_inserimento": "2014",
            "cdata_e_ora_inserimento": "2014-01-07T19:50:24Z",
            "cidentificatore_in_openstreetmap": "304978654",
            "clongitudine": "9.23410329999999",
            "clatitudine": "44.3478517"
        }
        ,
        {
            "ccomune": "Sori",
            "cprovincia": "GENOVA",
            "cregione": "Liguria",
            "cnome": "Torre medievale",
            "canno_inserimento": "2013",
            "cdata_e_ora_inserimento": "2013-02-10T17:41:39Z",
            "cidentificatore_in_openstreetmap": "2149283583",
            "clongitudine": "9.1221728",
            "clatitudine": "44.3680342999999"
        }
        ,
        {
            "ccomune": "Calice al Cornoviglio",
            "cprovincia": "LA SPEZIA",
            "cregione": "Liguria",
            "cnome": "Castello Malaspina",
            "canno_inserimento": "2014",
            "cdata_e_ora_inserimento": "2014-01-07T13:30:25Z",
            "cidentificatore_in_openstreetmap": "828733724",
            "clongitudine": "9.8407517",
            "clatitudine": "44.2130171"
        }
        ,
        {
            "ccomune": "La Spezia",
            "cprovincia": "LA SPEZIA",
            "cregione": "Liguria",
            "cnome": "Castello San Giorgio",
            "canno_inserimento": "2014",
            "cdata_e_ora_inserimento": "2014-01-07T13:30:25Z",
            "cidentificatore_in_openstreetmap": "418864921",
            "clongitudine": "9.8216753",
            "clatitudine": "44.1065717"
        }
        ,
        {
            "ccomune": "Lerici",
            "cprovincia": "LA SPEZIA",
            "cregione": "Liguria",
            "cnome": "Castello di S.Giorgio",
            "canno_inserimento": "2015",
            "cdata_e_ora_inserimento": "2015-10-17T19:54:42Z",
            "cidentificatore_in_openstreetmap": "3790679344",
            "clongitudine": "9.90725879999999",
            "clatitudine": "44.0730427"
        }
        ,
        {
            "ccomune": "Vernazza",
            "cprovincia": "LA SPEZIA",
            "cregione": "Liguria",
            "cnome": "Castello Doria",
            "canno_inserimento": "2014",
            "cdata_e_ora_inserimento": "2014-01-07T13:30:25Z",
            "cidentificatore_in_openstreetmap": "796299490",
            "clongitudine": "9.6820346",
            "clatitudine": "44.1344873999999"
        }
        ,
        {
            "ccomune": "Vezzano Ligure",
            "cprovincia": "LA SPEZIA",
            "cregione": "Liguria",
            "cnome": "Forte Bastia",
            "canno_inserimento": "2013",
            "cdata_e_ora_inserimento": "2013-08-17T19:54:18Z",
            "cidentificatore_in_openstreetmap": "980696353",
            "clongitudine": "9.8693312",
            "clatitudine": "44.1395401999999"
        }
        ,
        {
            "ccomune": "Orino",
            "cprovincia": "VARESE",
            "cregione": "Lombardia",
            "cnome": "Rocca di Orino",
            "canno_inserimento": "2013",
            "cdata_e_ora_inserimento": "2013-12-21T20:46:33Z",
            "cidentificatore_in_openstreetmap": "393761012",
            "clongitudine": "8.7288201",
            "clatitudine": "45.8875362"
        }
        ,
        {
            "ccomune": "Sumirago",
            "cprovincia": "VARESE",
            "cregione": "Lombardia",
            "cnome": "Castello di Caidate",
            "canno_inserimento": "2011",
            "cdata_e_ora_inserimento": "2011-06-08T17:33:46Z",
            "cidentificatore_in_openstreetmap": "1316343164",
            "clongitudine": "8.7952125",
            "clatitudine": "45.7548429"
        }
        ,
        {
            "ccomune": "Varese",
            "cprovincia": "VARESE",
            "cregione": "Lombardia",
            "cnome": "Castello di Belforte",
            "canno_inserimento": "2010",
            "cdata_e_ora_inserimento": "2010-05-16T08:06:45Z",
            "cidentificatore_in_openstreetmap": "736058896",
            "clongitudine": "8.8511851",
            "clatitudine": "45.8143381"
        }
        ,
        {
            "ccomune": "Como",
            "cprovincia": "COMO",
            "cregione": "Lombardia",
            "cnome": "Castello Baradello",
            "canno_inserimento": "2015",
            "cdata_e_ora_inserimento": "2015-02-05T11:14:57Z",
            "cidentificatore_in_openstreetmap": "3228720572",
            "clongitudine": "9.0860187",
            "clatitudine": "45.7942125"
        }
        ,
        {
            "ccomune": "Monguzzo",
            "cprovincia": "COMO",
            "cregione": "Lombardia",
            "cnome": "Castello Feudale",
            "canno_inserimento": "2011",
            "cdata_e_ora_inserimento": "2011-07-06T22:16:51Z",
            "cidentificatore_in_openstreetmap": "945309382",
            "clongitudine": "9.22541249999999",
            "clatitudine": "45.7755974"
        }
        ,
        {
            "ccomune": "Torno",
            "cprovincia": "COMO",
            "cregione": "Lombardia",
            "cnome": "Castello d'Ardona",
            "canno_inserimento": "2014",
            "cdata_e_ora_inserimento": "2014-03-23T18:57:04Z",
            "cidentificatore_in_openstreetmap": "666086530",
            "clongitudine": "9.1201615",
            "clatitudine": "45.8432487999999"
        }
        ,
        {
            "ccomune": "San Siro",
            "cprovincia": "COMO",
            "cregione": "Lombardia",
            "cnome": "",
            "canno_inserimento": "2013",
            "cdata_e_ora_inserimento": "2013-03-16T16:29:06Z",
            "cidentificatore_in_openstreetmap": "299281512",
            "clongitudine": "9.2776593",
            "clatitudine": "46.0703627999999"
        }
        ,
        {
            "ccomune": "TREMEZZINA",
            "cprovincia": "COMO",
            "cregione": "Lombardia",
            "cnome": "",
            "canno_inserimento": "2014",
            "cdata_e_ora_inserimento": "2014-08-26T10:28:10Z",
            "cidentificatore_in_openstreetmap": "3043118620",
            "clongitudine": "9.19941629999999",
            "clatitudine": "45.9668277"
        }
        ,
        {
            "ccomune": "Gordona",
            "cprovincia": "SONDRIO",
            "cregione": "Lombardia",
            "cnome": "Torre di Signame",
            "canno_inserimento": "2015",
            "cdata_e_ora_inserimento": "2015-08-22T14:17:08Z",
            "cidentificatore_in_openstreetmap": "2855591681",
            "clongitudine": "9.3725342",
            "clatitudine": "46.2729009999999"
        }
        ,
        {
            "ccomune": "Tovo di Sant'Agata",
            "cprovincia": "SONDRIO",
            "cregione": "Lombardia",
            "cnome": "",
            "canno_inserimento": "2014",
            "cdata_e_ora_inserimento": "2014-03-03T16:15:01Z",
            "cidentificatore_in_openstreetmap": "2700142033",
            "clongitudine": "10.2563235",
            "clatitudine": "46.2458924"
        }
        ,
        {
            "ccomune": "Bussero",
            "cprovincia": "MILANO",
            "cregione": "Lombardia",
            "cnome": "",
            "canno_inserimento": "2013",
            "cdata_e_ora_inserimento": "2013-03-01T20:50:36Z",
            "cidentificatore_in_openstreetmap": "1657492581",
            "clongitudine": "9.3724863",
            "clatitudine": "45.5373111999999"
        }
        ,
        {
            "ccomune": "Cassano d'Adda",
            "cprovincia": "MILANO",
            "cregione": "Lombardia",
            "cnome": "Castello Borromeo",
            "canno_inserimento": "2012",
            "cdata_e_ora_inserimento": "2012-09-14T08:28:55Z",
            "cidentificatore_in_openstreetmap": "1792395835",
            "clongitudine": "9.5244034",
            "clatitudine": "45.5256958"
        }
        ,
        {
            "ccomune": "San Colombano al Lambro",
            "cprovincia": "MILANO",
            "cregione": "Lombardia",
            "cnome": "Castello Belgioioso",
            "canno_inserimento": "2013",
            "cdata_e_ora_inserimento": "2013-10-13T20:36:01Z",
            "cidentificatore_in_openstreetmap": "1553112007",
            "clongitudine": "9.4876586",
            "clatitudine": "45.1799672"
        }
        ,
        {
            "ccomune": "Cologno al Serio",
            "cprovincia": "BERGAMO",
            "cregione": "Lombardia",
            "cnome": "Rocca di Cologno al Serio",
            "canno_inserimento": "2015",
            "cdata_e_ora_inserimento": "2015-06-20T14:18:42Z",
            "cidentificatore_in_openstreetmap": "3607302514",
            "clongitudine": "9.70613859999999",
            "clatitudine": "45.5807973"
        }
        ,
        {
            "ccomune": "Romano di Lombardia",
            "cprovincia": "BERGAMO",
            "cregione": "Lombardia",
            "cnome": "Rocca",
            "canno_inserimento": "2012",
            "cdata_e_ora_inserimento": "2012-09-28T20:13:50Z",
            "cidentificatore_in_openstreetmap": "1937264372",
            "clongitudine": "9.7533952",
            "clatitudine": "45.521341"
        }
        ,
        {
            "ccomune": "Sotto il Monte Giovanni XXIII",
            "cprovincia": "BERGAMO",
            "cregione": "Lombardia",
            "cnome": "Rocca Alpini - Bar",
            "canno_inserimento": "2014",
            "cdata_e_ora_inserimento": "2014-09-30T15:12:31Z",
            "cidentificatore_in_openstreetmap": "3103941283",
            "clongitudine": "9.5009079",
            "clatitudine": "45.7095186"
        }
        ,
        {
            "ccomune": "Trescore Balneario",
            "cprovincia": "BERGAMO",
            "cregione": "Lombardia",
            "cnome": "Castello Suardi",
            "canno_inserimento": "2014",
            "cdata_e_ora_inserimento": "2014-05-14T21:58:51Z",
            "cidentificatore_in_openstreetmap": "2859080237",
            "clongitudine": "9.8461999",
            "clatitudine": "45.6931312"
        }
        ,
        {
            "ccomune": "Bovegno",
            "cprovincia": "BRESCIA",
            "cregione": "Lombardia",
            "cnome": "Castel Vanil",
            "canno_inserimento": "2013",
            "cdata_e_ora_inserimento": "2013-09-16T11:14:17Z",
            "cidentificatore_in_openstreetmap": "2350030647",
            "clongitudine": "10.2379662",
            "clatitudine": "45.7915478999999"
        }
        ,
        {
            "ccomune": "Breno",
            "cprovincia": "BRESCIA",
            "cregione": "Lombardia",
            "cnome": "",
            "canno_inserimento": "2014",
            "cdata_e_ora_inserimento": "2014-06-02T22:22:44Z",
            "cidentificatore_in_openstreetmap": "2896342823",
            "clongitudine": "10.2983034",
            "clatitudine": "45.9554957"
        }
        ,
        {
            "ccomune": "Cimbergo",
            "cprovincia": "BRESCIA",
            "cregione": "Lombardia",
            "cnome": "Castello di Cimbergo",
            "canno_inserimento": "2012",
            "cdata_e_ora_inserimento": "2012-12-18T17:44:46Z",
            "cidentificatore_in_openstreetmap": "456762310",
            "clongitudine": "10.3654015",
            "clatitudine": "46.0264956999999"
        }
        ,
        {
            "ccomune": "Lozio",
            "cprovincia": "BRESCIA",
            "cregione": "Lombardia",
            "cnome": "Castello di Lozio",
            "canno_inserimento": "2014",
            "cdata_e_ora_inserimento": "2014-04-12T18:31:34Z",
            "cidentificatore_in_openstreetmap": "2703121335",
            "clongitudine": "10.2340737",
            "clatitudine": "45.9972940999999"
        }
        ,
        {
            "ccomune": "Malonno",
            "cprovincia": "BRESCIA",
            "cregione": "Lombardia",
            "cnome": "Palazzo Martinengo",
            "canno_inserimento": "2015",
            "cdata_e_ora_inserimento": "2015-08-22T21:20:08Z",
            "cidentificatore_in_openstreetmap": "3709849860",
            "clongitudine": "10.3133684",
            "clatitudine": "46.1193079999999"
        }
        ,
        {
            "ccomune": "Montichiari",
            "cprovincia": "BRESCIA",
            "cregione": "Lombardia",
            "cnome": "Castello Bonoris",
            "canno_inserimento": "2013",
            "cdata_e_ora_inserimento": "2013-05-12T13:46:48Z",
            "cidentificatore_in_openstreetmap": "1838017852",
            "clongitudine": "10.3918821",
            "clatitudine": "45.4111898"
        }
        ,
        {
            "ccomune": "Padenghe sul Garda",
            "cprovincia": "BRESCIA",
            "cregione": "Lombardia",
            "cnome": "Castello Padenghe",
            "canno_inserimento": "2012",
            "cdata_e_ora_inserimento": "2012-12-18T09:37:44Z",
            "cidentificatore_in_openstreetmap": "2072572098",
            "clongitudine": "10.5009941999999",
            "clatitudine": "45.5070279999999"
        }
        ,
        {
            "ccomune": "Ponte di Legno",
            "cprovincia": "BRESCIA",
            "cregione": "Lombardia",
            "cnome": "",
            "canno_inserimento": "2015",
            "cdata_e_ora_inserimento": "2015-09-13T21:03:35Z",
            "cidentificatore_in_openstreetmap": "2407987609",
            "clongitudine": "10.5030085",
            "clatitudine": "46.2553193999999"
        }
        ,
        {
            "ccomune": "Pozzolengo",
            "cprovincia": "BRESCIA",
            "cregione": "Lombardia",
            "cnome": "Castello di Pozzolengo",
            "canno_inserimento": "2015",
            "cdata_e_ora_inserimento": "2015-06-29T08:45:04Z",
            "cidentificatore_in_openstreetmap": "2125260538",
            "clongitudine": "10.6261221999999",
            "clatitudine": "45.4045484999999"
        }
        ,
        {
            "ccomune": "Puegnago sul Garda",
            "cprovincia": "BRESCIA",
            "cregione": "Lombardia",
            "cnome": "",
            "canno_inserimento": "2009",
            "cdata_e_ora_inserimento": "2009-07-27T18:20:27Z",
            "cidentificatore_in_openstreetmap": "449136167",
            "clongitudine": "10.5111273",
            "clatitudine": "45.5689702"
        }
        ,
        {
            "ccomune": "Rovato",
            "cprovincia": "BRESCIA",
            "cregione": "Lombardia",
            "cnome": "Castello Quistini",
            "canno_inserimento": "2013",
            "cdata_e_ora_inserimento": "2013-01-20T15:47:37Z",
            "cidentificatore_in_openstreetmap": "2121223476",
            "clongitudine": "9.9995548",
            "clatitudine": "45.5708166"
        }
        ,
        {
            "ccomune": "Vestone",
            "cprovincia": "BRESCIA",
            "cregione": "Lombardia",
            "cnome": "",
            "canno_inserimento": "2013",
            "cdata_e_ora_inserimento": "2013-11-03T13:47:56Z",
            "cidentificatore_in_openstreetmap": "2518632661",
            "clongitudine": "10.3857341",
            "clatitudine": "45.7009365999999"
        }
        ,
        {
            "ccomune": "Alagna",
            "cprovincia": "PAVIA",
            "cregione": "Lombardia",
            "cnome": "Castello di Alagna",
            "canno_inserimento": "2015",
            "cdata_e_ora_inserimento": "2015-01-02T22:46:23Z",
            "cidentificatore_in_openstreetmap": "3266098567",
            "clongitudine": "8.8894029",
            "clatitudine": "45.1696545"
        }
        ,
        {
            "ccomune": "Arena Po",
            "cprovincia": "PAVIA",
            "cregione": "Lombardia",
            "cnome": "",
            "canno_inserimento": "2013",
            "cdata_e_ora_inserimento": "2013-11-24T14:29:37Z",
            "cidentificatore_in_openstreetmap": "1946549115",
            "clongitudine": "9.36439129999999",
            "clatitudine": "45.0971714"
        }
        ,
        {
            "ccomune": "Belgioioso",
            "cprovincia": "PAVIA",
            "cregione": "Lombardia",
            "cnome": "Castello di Belgioioso",
            "canno_inserimento": "2016",
            "cdata_e_ora_inserimento": "2016-02-07T18:39:56Z",
            "cidentificatore_in_openstreetmap": "1340899643",
            "clongitudine": "9.3130054",
            "clatitudine": "45.1605238"
        }
        ,
        {
            "ccomune": "Cassolnovo",
            "cprovincia": "PAVIA",
            "cregione": "Lombardia",
            "cnome": "Castello di Villanova",
            "canno_inserimento": "2015",
            "cdata_e_ora_inserimento": "2015-05-19T16:50:45Z",
            "cidentificatore_in_openstreetmap": "3528720310",
            "clongitudine": "8.75012869999999",
            "clatitudine": "45.364311"
        }
        ,
        {
            "ccomune": "Cergnago",
            "cprovincia": "PAVIA",
            "cregione": "Lombardia",
            "cnome": "Castello",
            "canno_inserimento": "2015",
            "cdata_e_ora_inserimento": "2015-02-09T21:39:04Z",
            "cidentificatore_in_openstreetmap": "1702531616",
            "clongitudine": "8.7722279",
            "clatitudine": "45.197716"
        }
        ,
        {
            "ccomune": "Chignolo Po",
            "cprovincia": "PAVIA",
            "cregione": "Lombardia",
            "cnome": "Castello Procaccini",
            "canno_inserimento": "2016",
            "cdata_e_ora_inserimento": "2016-01-12T17:01:15Z",
            "cidentificatore_in_openstreetmap": "3941999916",
            "clongitudine": "9.4924436",
            "clatitudine": "45.1560412999999"
        }
        ,
        {
            "ccomune": "Cozzo",
            "cprovincia": "PAVIA",
            "cregione": "Lombardia",
            "cnome": "Castello di Cozzo",
            "canno_inserimento": "2015",
            "cdata_e_ora_inserimento": "2015-12-31T11:18:39Z",
            "cidentificatore_in_openstreetmap": "3920352481",
            "clongitudine": "8.6094498",
            "clatitudine": "45.1928496"
        }
        ,
        {
            "ccomune": "Gambolo'",
            "cprovincia": "PAVIA",
            "cregione": "Lombardia",
            "cnome": "Castello di Gambol�",
            "canno_inserimento": "2015",
            "cdata_e_ora_inserimento": "2015-01-07T22:31:48Z",
            "cidentificatore_in_openstreetmap": "3267910107",
            "clongitudine": "8.8580973",
            "clatitudine": "45.2561506999999"
        }
        ,
        {
            "ccomune": "Godiasco",
            "cprovincia": "PAVIA",
            "cregione": "Lombardia",
            "cnome": "Castello Malaspina",
            "canno_inserimento": "2013",
            "cdata_e_ora_inserimento": "2013-10-03T16:31:14Z",
            "cidentificatore_in_openstreetmap": "2481358152",
            "clongitudine": "9.0544525",
            "clatitudine": "44.8964166"
        }
        ,
        {
            "ccomune": "Godiasco",
            "cprovincia": "PAVIA",
            "cregione": "Lombardia",
            "cnome": "Rocca di Montalfeo",
            "canno_inserimento": "2011",
            "cdata_e_ora_inserimento": "2011-12-19T17:47:57Z",
            "cidentificatore_in_openstreetmap": "1554423507",
            "clongitudine": "9.0399987",
            "clatitudine": "44.9061717"
        }
        ,
        {
            "ccomune": "Montesegale",
            "cprovincia": "PAVIA",
            "cregione": "Lombardia",
            "cnome": "Castello di Montesegale",
            "canno_inserimento": "2014",
            "cdata_e_ora_inserimento": "2014-03-31T10:21:16Z",
            "cidentificatore_in_openstreetmap": "832462823",
            "clongitudine": "9.12670909999999",
            "clatitudine": "44.9072382"
        }
        ,
        {
            "ccomune": "Mornico Losana",
            "cprovincia": "PAVIA",
            "cregione": "Lombardia",
            "cnome": "Castello di Mornico Losana",
            "canno_inserimento": "2009",
            "cdata_e_ora_inserimento": "2009-12-08T17:52:52Z",
            "cidentificatore_in_openstreetmap": "583320397",
            "clongitudine": "9.2022369",
            "clatitudine": "45.0113321999999"
        }
        ,
        {
            "ccomune": "Palestro",
            "cprovincia": "PAVIA",
            "cregione": "Lombardia",
            "cnome": "Torre di Palestro",
            "canno_inserimento": "2012",
            "cdata_e_ora_inserimento": "2012-11-16T00:09:22Z",
            "cidentificatore_in_openstreetmap": "2015899577",
            "clongitudine": "8.53277089999999",
            "clatitudine": "45.2982491"
        }
        ,
        {
            "ccomune": "Pavia",
            "cprovincia": "PAVIA",
            "cregione": "Lombardia",
            "cnome": "Castello Visconteo",
            "canno_inserimento": "2012",
            "cdata_e_ora_inserimento": "2012-04-30T20:39:46Z",
            "cidentificatore_in_openstreetmap": "1736655931",
            "clongitudine": "9.15832709999999",
            "clatitudine": "45.1900395999999"
        }
        ,
        {
            "ccomune": "Robbio",
            "cprovincia": "PAVIA",
            "cregione": "Lombardia",
            "cnome": "Castello Boschi",
            "canno_inserimento": "2010",
            "cdata_e_ora_inserimento": "2010-02-14T14:58:01Z",
            "cidentificatore_in_openstreetmap": "639042306",
            "clongitudine": "8.5948328",
            "clatitudine": "45.2916732999999"
        }
        ,
        {
            "ccomune": "Santa Giuletta",
            "cprovincia": "PAVIA",
            "cregione": "Lombardia",
            "cnome": "Castello di Santa Giuletta",
            "canno_inserimento": "2012",
            "cdata_e_ora_inserimento": "2012-06-29T17:47:24Z",
            "cidentificatore_in_openstreetmap": "1351755208",
            "clongitudine": "9.1954369",
            "clatitudine": "45.0238128"
        }
        ,
        {
            "ccomune": "Sartirana Lomellina",
            "cprovincia": "PAVIA",
            "cregione": "Lombardia",
            "cnome": "Castello di Sartirana",
            "canno_inserimento": "2014",
            "cdata_e_ora_inserimento": "2014-09-26T10:54:12Z",
            "cidentificatore_in_openstreetmap": "3097031651",
            "clongitudine": "8.6628013",
            "clatitudine": "45.1161291"
        }
        ,
        {
            "ccomune": "Scaldasole",
            "cprovincia": "PAVIA",
            "cregione": "Lombardia",
            "cnome": "Castello di Scaldasole",
            "canno_inserimento": "2015",
            "cdata_e_ora_inserimento": "2015-05-26T21:33:26Z",
            "cidentificatore_in_openstreetmap": "3548406039",
            "clongitudine": "8.90900959999999",
            "clatitudine": "45.1247785999999"
        }
        ,
        {
            "ccomune": "Valeggio",
            "cprovincia": "PAVIA",
            "cregione": "Lombardia",
            "cnome": "",
            "canno_inserimento": "2015",
            "cdata_e_ora_inserimento": "2015-01-06T18:34:29Z",
            "cidentificatore_in_openstreetmap": "3273513478",
            "clongitudine": "8.8638438",
            "clatitudine": "45.1495926999999"
        }
        ,
        {
            "ccomune": "Varzi",
            "cprovincia": "PAVIA",
            "cregione": "Lombardia",
            "cnome": "Palazzo - Castello Malaspina",
            "canno_inserimento": "2014",
            "cdata_e_ora_inserimento": "2014-07-23T12:33:29Z",
            "cidentificatore_in_openstreetmap": "1399778768",
            "clongitudine": "9.196926",
            "clatitudine": "44.8237454"
        }
        ,
        {
            "ccomune": "Varzi",
            "cprovincia": "PAVIA",
            "cregione": "Lombardia",
            "cnome": "Traccia del castello dei Malaspina",
            "canno_inserimento": "2014",
            "cdata_e_ora_inserimento": "2014-10-28T13:02:23Z",
            "cidentificatore_in_openstreetmap": "2586392166",
            "clongitudine": "9.20897929999999",
            "clatitudine": "44.8031684999999"
        }
        ,
        {
            "ccomune": "Zerbolo'",
            "cprovincia": "PAVIA",
            "cregione": "Lombardia",
            "cnome": "",
            "canno_inserimento": "2014",
            "cdata_e_ora_inserimento": "2014-12-16T11:15:01Z",
            "cidentificatore_in_openstreetmap": "3237748855",
            "clongitudine": "9.0127288",
            "clatitudine": "45.2080865"
        }
        ,
        {
            "ccomune": "Zerbolo'",
            "cprovincia": "PAVIA",
            "cregione": "Lombardia",
            "cnome": "Castello",
            "canno_inserimento": "2014",
            "cdata_e_ora_inserimento": "2014-12-16T22:40:19Z",
            "cidentificatore_in_openstreetmap": "495587329",
            "clongitudine": "8.9752585",
            "clatitudine": "45.2334328999999"
        }
        ,
        {
            "ccomune": "Torre de' Picenardi",
            "cprovincia": "CREMONA",
            "cregione": "Lombardia",
            "cnome": "",
            "canno_inserimento": "2012",
            "cdata_e_ora_inserimento": "2012-06-07T21:23:28Z",
            "cidentificatore_in_openstreetmap": "1779785473",
            "clongitudine": "10.3082059",
            "clatitudine": "45.1433006"
        }
        ,
        {
            "ccomune": "Torre de' Picenardi",
            "cprovincia": "CREMONA",
            "cregione": "Lombardia",
            "cnome": "",
            "canno_inserimento": "2012",
            "cdata_e_ora_inserimento": "2012-06-07T21:24:11Z",
            "cidentificatore_in_openstreetmap": "1779785787",
            "clongitudine": "10.2877674999999",
            "clatitudine": "45.1448746"
        }
        ,
        {
            "ccomune": "Ponti sul Mincio",
            "cprovincia": "MANTOVA",
            "cregione": "Lombardia",
            "cnome": "Castello",
            "canno_inserimento": "2010",
            "cdata_e_ora_inserimento": "2010-04-21T16:10:43Z",
            "cidentificatore_in_openstreetmap": "703324708",
            "clongitudine": "10.687738",
            "clatitudine": "45.4120443999999"
        }
        ,
        {
            "ccomune": "Appiano sulla Strada del Vino",
            "cprovincia": "BOLZANO",
            "cregione": "Trentino-Alto Adige",
            "cnome": "Schloss Korb - Castel Corba",
            "canno_inserimento": "2014",
            "cdata_e_ora_inserimento": "2014-05-21T16:24:53Z",
            "cidentificatore_in_openstreetmap": "373272472",
            "clongitudine": "11.2489794",
            "clatitudine": "46.4821354999999"
        }
        ,
        {
            "ccomune": "Bolzano",
            "cprovincia": "BOLZANO",
            "cregione": "Trentino-Alto Adige",
            "cnome": "Castel Flavon - K�epachweg",
            "canno_inserimento": "2014",
            "cdata_e_ora_inserimento": "2014-12-18T10:01:27Z",
            "cidentificatore_in_openstreetmap": "2749593398",
            "clongitudine": "11.3436038",
            "clatitudine": "46.4767341"
        }
        ,
        {
            "ccomune": "Bressanone",
            "cprovincia": "BOLZANO",
            "cregione": "Trentino-Alto Adige",
            "cnome": "Hanberg",
            "canno_inserimento": "2013",
            "cdata_e_ora_inserimento": "2013-03-21T18:29:33Z",
            "cidentificatore_in_openstreetmap": "921214495",
            "clongitudine": "11.6599032",
            "clatitudine": "46.7251845999999"
        }
        ,
        {
            "ccomune": "Bressanone",
            "cprovincia": "BOLZANO",
            "cregione": "Trentino-Alto Adige",
            "cnome": "Schloss Ratz�tz",
            "canno_inserimento": "2013",
            "cdata_e_ora_inserimento": "2013-10-14T17:44:38Z",
            "cidentificatore_in_openstreetmap": "516207579",
            "clongitudine": "11.6579278",
            "clatitudine": "46.6955055999999"
        }
        ,
        {
            "ccomune": "Campo di Trens",
            "cprovincia": "BOLZANO",
            "cregione": "Trentino-Alto Adige",
            "cnome": "Burg Welfenstein",
            "canno_inserimento": "2013",
            "cdata_e_ora_inserimento": "2013-04-10T05:45:40Z",
            "cidentificatore_in_openstreetmap": "2261088458",
            "clongitudine": "11.5112042",
            "clatitudine": "46.85772"
        }
        ,
        {
            "ccomune": "Campo Tures",
            "cprovincia": "BOLZANO",
            "cregione": "Trentino-Alto Adige",
            "cnome": "Toblburg",
            "canno_inserimento": "2014",
            "cdata_e_ora_inserimento": "2014-02-27T17:17:19Z",
            "cidentificatore_in_openstreetmap": "473429512",
            "clongitudine": "11.9896999999999",
            "clatitudine": "46.917968"
        }
        ,
        {
            "ccomune": "Castelbello-Ciardes",
            "cprovincia": "BOLZANO",
            "cregione": "Trentino-Alto Adige",
            "cnome": "Schlo� Juval - Castel Juval",
            "canno_inserimento": "2014",
            "cdata_e_ora_inserimento": "2014-08-11T18:10:46Z",
            "cidentificatore_in_openstreetmap": "362780422",
            "clongitudine": "10.9680134",
            "clatitudine": "46.6516268"
        }
        ,
        {
            "ccomune": "Fie' allo Sciliar",
            "cprovincia": "BOLZANO",
            "cregione": "Trentino-Alto Adige",
            "cnome": "Schloss Pr�sels - Castello Presule",
            "canno_inserimento": "2015",
            "cdata_e_ora_inserimento": "2015-04-03T11:57:05Z",
            "cidentificatore_in_openstreetmap": "1760716302",
            "clongitudine": "11.4956821",
            "clatitudine": "46.5054181"
        }
        ,
        {
            "ccomune": "Laces",
            "cprovincia": "BOLZANO",
            "cregione": "Trentino-Alto Adige",
            "cnome": "Bildungshaus Schlo� Goldrain",
            "canno_inserimento": "2013",
            "cdata_e_ora_inserimento": "2013-06-24T17:21:55Z",
            "cidentificatore_in_openstreetmap": "535614001",
            "clongitudine": "10.8297436",
            "clatitudine": "46.6243131"
        }
        ,
        {
            "ccomune": "Laion",
            "cprovincia": "BOLZANO",
            "cregione": "Trentino-Alto Adige",
            "cnome": "Ansitz Lusenegg",
            "canno_inserimento": "2013",
            "cdata_e_ora_inserimento": "2013-06-19T14:33:24Z",
            "cidentificatore_in_openstreetmap": "2352356359",
            "clongitudine": "11.5684003",
            "clatitudine": "46.6339990999999"
        }
        ,
        {
            "ccomune": "Lana",
            "cprovincia": "BOLZANO",
            "cregione": "Trentino-Alto Adige",
            "cnome": "Schloss Braunsberg",
            "canno_inserimento": "2012",
            "cdata_e_ora_inserimento": "2012-06-17T11:58:22Z",
            "cidentificatore_in_openstreetmap": "858593316",
            "clongitudine": "11.1391952",
            "clatitudine": "46.6150439"
        }
        ,
        {
            "ccomune": "Monguelfo",
            "cprovincia": "BOLZANO",
            "cregione": "Trentino-Alto Adige",
            "cnome": "Castello Monguelfo - Schloss Welsberg",
            "canno_inserimento": "2014",
            "cdata_e_ora_inserimento": "2014-12-16T20:34:49Z",
            "cidentificatore_in_openstreetmap": "2454239040",
            "clongitudine": "12.113773",
            "clatitudine": "46.7597384"
        }
        ,
        {
            "ccomune": "Nalles",
            "cprovincia": "BOLZANO",
            "cregione": "Trentino-Alto Adige",
            "cnome": "Castel Schwanburg",
            "canno_inserimento": "2014",
            "cdata_e_ora_inserimento": "2014-10-16T20:59:38Z",
            "cidentificatore_in_openstreetmap": "768139538",
            "clongitudine": "11.2015104",
            "clatitudine": "46.5376385"
        }
        ,
        {
            "ccomune": "Parcines",
            "cprovincia": "BOLZANO",
            "cregione": "Trentino-Alto Adige",
            "cnome": "Stachlburg",
            "canno_inserimento": "2011",
            "cdata_e_ora_inserimento": "2011-03-30T13:43:10Z",
            "cidentificatore_in_openstreetmap": "1225350806",
            "clongitudine": "11.0729741",
            "clatitudine": "46.683762"
        }
        ,
        {
            "ccomune": "San Pancrazio",
            "cprovincia": "BOLZANO",
            "cregione": "Trentino-Alto Adige",
            "cnome": "Eschenlohe",
            "canno_inserimento": "2013",
            "cdata_e_ora_inserimento": "2013-09-01T19:32:09Z",
            "cidentificatore_in_openstreetmap": "313207107",
            "clongitudine": "11.0983930999999",
            "clatitudine": "46.5972792"
        }
        ,
        {
            "ccomune": "Sarentino",
            "cprovincia": "BOLZANO",
            "cregione": "Trentino-Alto Adige",
            "cnome": "Reineck",
            "canno_inserimento": "2014",
            "cdata_e_ora_inserimento": "2014-11-16T16:10:24Z",
            "cidentificatore_in_openstreetmap": "1739412117",
            "clongitudine": "11.3637653",
            "clatitudine": "46.6408764"
        }
        ,
        {
            "ccomune": "Selva di Val Gardena",
            "cprovincia": "BOLZANO",
            "cregione": "Trentino-Alto Adige",
            "cnome": "Burg Wolkenstein",
            "canno_inserimento": "2014",
            "cdata_e_ora_inserimento": "2014-02-09T07:23:09Z",
            "cidentificatore_in_openstreetmap": "1825109464",
            "clongitudine": "11.7688413999999",
            "clatitudine": "46.5641833"
        }
        ,
        {
            "ccomune": "Terento",
            "cprovincia": "BOLZANO",
            "cregione": "Trentino-Alto Adige",
            "cnome": "Aschburg / Raubschl�ssl",
            "canno_inserimento": "2015",
            "cdata_e_ora_inserimento": "2015-01-06T23:16:40Z",
            "cidentificatore_in_openstreetmap": "3273888164",
            "clongitudine": "11.7771491",
            "clatitudine": "46.8195315999999"
        }
        ,
        {
            "ccomune": "Tesimo",
            "cprovincia": "BOLZANO",
            "cregione": "Trentino-Alto Adige",
            "cnome": "",
            "canno_inserimento": "2015",
            "cdata_e_ora_inserimento": "2015-08-29T17:05:22Z",
            "cidentificatore_in_openstreetmap": "2756022372",
            "clongitudine": "11.1802711",
            "clatitudine": "46.5537867"
        }
        ,
        {
            "ccomune": "Tesimo",
            "cprovincia": "BOLZANO",
            "cregione": "Trentino-Alto Adige",
            "cnome": "Ruine Casatsch",
            "canno_inserimento": "2010",
            "cdata_e_ora_inserimento": "2010-06-06T11:59:12Z",
            "cidentificatore_in_openstreetmap": "648861794",
            "clongitudine": "11.1979488",
            "clatitudine": "46.5476366999999"
        }
        ,
        {
            "ccomune": "Tesimo",
            "cprovincia": "BOLZANO",
            "cregione": "Trentino-Alto Adige",
            "cnome": "Zwingenburg",
            "canno_inserimento": "2011",
            "cdata_e_ora_inserimento": "2011-06-10T13:55:08Z",
            "cidentificatore_in_openstreetmap": "530773032",
            "clongitudine": "11.1678573",
            "clatitudine": "46.5484505"
        }
        ,
        {
            "ccomune": "Arco",
            "cprovincia": "TRENTO",
            "cregione": "Trentino-Alto Adige",
            "cnome": "Castello di Arco",
            "canno_inserimento": "2015",
            "cdata_e_ora_inserimento": "2015-01-26T19:11:01Z",
            "cidentificatore_in_openstreetmap": "302099274",
            "clongitudine": "10.8882457",
            "clatitudine": "45.9217860999999"
        }
        ,
        {
            "ccomune": "Besenello",
            "cprovincia": "TRENTO",
            "cregione": "Trentino-Alto Adige",
            "cnome": "Castel Beseno",
            "canno_inserimento": "2011",
            "cdata_e_ora_inserimento": "2011-08-07T21:14:48Z",
            "cidentificatore_in_openstreetmap": "430509429",
            "clongitudine": "11.1098546",
            "clatitudine": "45.9312303999999"
        }
        ,
        {
            "ccomune": "Bresimo",
            "cprovincia": "TRENTO",
            "cregione": "Trentino-Alto Adige",
            "cnome": "Castello d'Altaguardia",
            "canno_inserimento": "2011",
            "cdata_e_ora_inserimento": "2011-07-24T22:30:33Z",
            "cidentificatore_in_openstreetmap": "1104090926",
            "clongitudine": "10.9815322",
            "clatitudine": "46.4192382"
        }
        ,
        {
            "ccomune": "Caldonazzo",
            "cprovincia": "TRENTO",
            "cregione": "Trentino-Alto Adige",
            "cnome": "Castel Trapp",
            "canno_inserimento": "2013",
            "cdata_e_ora_inserimento": "2013-01-30T13:51:17Z",
            "cidentificatore_in_openstreetmap": "428818891",
            "clongitudine": "11.2644277",
            "clatitudine": "45.9893602"
        }
        ,
        {
            "ccomune": "Coredo",
            "cprovincia": "TRENTO",
            "cregione": "Trentino-Alto Adige",
            "cnome": "Castel Bragher",
            "canno_inserimento": "2011",
            "cdata_e_ora_inserimento": "2011-12-18T22:19:13Z",
            "cidentificatore_in_openstreetmap": "1552892978",
            "clongitudine": "11.0813834999999",
            "clatitudine": "46.3299203999999"
        }
        ,
        {
            "ccomune": "Denno",
            "cprovincia": "TRENTO",
            "cregione": "Trentino-Alto Adige",
            "cnome": "Castel Corona",
            "canno_inserimento": "2013",
            "cdata_e_ora_inserimento": "2013-06-21T09:37:20Z",
            "cidentificatore_in_openstreetmap": "1870055067",
            "clongitudine": "11.0189314",
            "clatitudine": "46.2739278999999"
        }
        ,
        {
            "ccomune": "Mezzocorona",
            "cprovincia": "TRENTO",
            "cregione": "Trentino-Alto Adige",
            "cnome": "Castello di San Gottardo",
            "canno_inserimento": "2013",
            "cdata_e_ora_inserimento": "2013-09-14T19:01:50Z",
            "cidentificatore_in_openstreetmap": "1149063602",
            "clongitudine": "11.1093809",
            "clatitudine": "46.2202065999999"
        }
        ,
        {
            "ccomune": "Mori",
            "cprovincia": "TRENTO",
            "cregione": "Trentino-Alto Adige",
            "cnome": "Osservatorio",
            "canno_inserimento": "2015",
            "cdata_e_ora_inserimento": "2015-03-23T20:24:36Z",
            "cidentificatore_in_openstreetmap": "3414873825",
            "clongitudine": "10.9490458",
            "clatitudine": "45.8626876"
        }
        ,
        {
            "ccomune": "Segonzano",
            "cprovincia": "TRENTO",
            "cregione": "Trentino-Alto Adige",
            "cnome": "",
            "canno_inserimento": "2011",
            "cdata_e_ora_inserimento": "2011-07-22T10:06:57Z",
            "cidentificatore_in_openstreetmap": "552935671",
            "clongitudine": "11.2513554",
            "clatitudine": "46.1865692"
        }
        ,
        {
            "ccomune": "Tassullo",
            "cprovincia": "TRENTO",
            "cregione": "Trentino-Alto Adige",
            "cnome": "Valer",
            "canno_inserimento": "2011",
            "cdata_e_ora_inserimento": "2011-01-21T18:03:50Z",
            "cidentificatore_in_openstreetmap": "707225069",
            "clongitudine": "11.0473964",
            "clatitudine": "46.3304653"
        }
        ,
        {
            "ccomune": "Ton",
            "cprovincia": "TRENTO",
            "cregione": "Trentino-Alto Adige",
            "cnome": "Tor di Visione",
            "canno_inserimento": "2012",
            "cdata_e_ora_inserimento": "2012-03-01T11:38:31Z",
            "cidentificatore_in_openstreetmap": "848796943",
            "clongitudine": "11.0665593",
            "clatitudine": "46.2355202"
        }
        ,
        {
            "ccomune": "Tonadico",
            "cprovincia": "TRENTO",
            "cregione": "Trentino-Alto Adige",
            "cnome": "Castel Pietra",
            "canno_inserimento": "2014",
            "cdata_e_ora_inserimento": "2014-12-29T20:10:00Z",
            "cidentificatore_in_openstreetmap": "754585196",
            "clongitudine": "11.8595004999999",
            "clatitudine": "46.1898729999999"
        }
        ,
        {
            "ccomune": "Vigolo Vattaro",
            "cprovincia": "TRENTO",
            "cregione": "Trentino-Alto Adige",
            "cnome": "",
            "canno_inserimento": "2013",
            "cdata_e_ora_inserimento": "2013-03-24T23:43:36Z",
            "cidentificatore_in_openstreetmap": "2220028925",
            "clongitudine": "11.2112391",
            "clatitudine": "46.0056124999999"
        }
        ,
        {
            "ccomune": "Villa Lagarina",
            "cprovincia": "TRENTO",
            "cregione": "Trentino-Alto Adige",
            "cnome": "Castello di Castellano",
            "canno_inserimento": "2015",
            "cdata_e_ora_inserimento": "2015-01-26T19:11:01Z",
            "cidentificatore_in_openstreetmap": "3309582310",
            "clongitudine": "11.0061893",
            "clatitudine": "45.9213722"
        }
        ,
        {
            "ccomune": "Bardolino",
            "cprovincia": "VERONA",
            "cregione": "Veneto",
            "cnome": "Torre Catullo",
            "canno_inserimento": "2010",
            "cdata_e_ora_inserimento": "2010-09-17T13:04:54Z",
            "cidentificatore_in_openstreetmap": "835642485",
            "clongitudine": "10.7191326999999",
            "clatitudine": "45.5474534"
        }
        ,
        {
            "ccomune": "Illasi",
            "cprovincia": "VERONA",
            "cregione": "Veneto",
            "cnome": "Castello di Illasi",
            "canno_inserimento": "2015",
            "cdata_e_ora_inserimento": "2015-12-03T20:08:49Z",
            "cidentificatore_in_openstreetmap": "1717760153",
            "clongitudine": "11.1938595",
            "clatitudine": "45.469357"
        }
        ,
        {
            "ccomune": "Lazise",
            "cprovincia": "VERONA",
            "cregione": "Veneto",
            "cnome": "Castello di Lazise",
            "canno_inserimento": "2015",
            "cdata_e_ora_inserimento": "2015-05-19T19:05:25Z",
            "cidentificatore_in_openstreetmap": "410875180",
            "clongitudine": "10.7325272",
            "clatitudine": "45.5039623999999"
        }
        ,
        {
            "ccomune": "Peschiera del Garda",
            "cprovincia": "VERONA",
            "cregione": "Veneto",
            "cnome": "Forte Salvi vecchio",
            "canno_inserimento": "2016",
            "cdata_e_ora_inserimento": "2016-02-22T09:11:03Z",
            "cidentificatore_in_openstreetmap": "4019309394",
            "clongitudine": "10.6878765",
            "clatitudine": "45.4358458"
        }
        ,
        {
            "ccomune": "Soave",
            "cprovincia": "VERONA",
            "cregione": "Veneto",
            "cnome": "Castello Scaligero",
            "canno_inserimento": "2014",
            "cdata_e_ora_inserimento": "2014-06-21T14:35:33Z",
            "cidentificatore_in_openstreetmap": "1092065252",
            "clongitudine": "11.2510674",
            "clatitudine": "45.4228410999999"
        }
        ,
        {
            "ccomune": "Bassano del Grappa",
            "cprovincia": "VICENZA",
            "cregione": "Veneto",
            "cnome": "Palazzon",
            "canno_inserimento": "2015",
            "cdata_e_ora_inserimento": "2015-01-06T15:05:48Z",
            "cidentificatore_in_openstreetmap": "1140892480",
            "clongitudine": "11.6890360999999",
            "clatitudine": "45.8121593999999"
        }
        ,
        {
            "ccomune": "Romano d'Ezzelino",
            "cprovincia": "VICENZA",
            "cregione": "Veneto",
            "cnome": "La Torre di Dante",
            "canno_inserimento": "2012",
            "cdata_e_ora_inserimento": "2012-01-04T23:27:29Z",
            "cidentificatore_in_openstreetmap": "1398697316",
            "clongitudine": "11.7672716",
            "clatitudine": "45.7979077"
        }
        ,
        {
            "ccomune": "Cortina d'Ampezzo",
            "cprovincia": "BELLUNO",
            "cregione": "Veneto",
            "cnome": "Castello di Podestagno",
            "canno_inserimento": "2015",
            "cdata_e_ora_inserimento": "2015-01-15T21:32:09Z",
            "cidentificatore_in_openstreetmap": "3213879339",
            "clongitudine": "12.1129821",
            "clatitudine": "46.5966055"
        }
        ,
        {
            "ccomune": "Fonzaso",
            "cprovincia": "BELLUNO",
            "cregione": "Veneto",
            "cnome": "Eremo San Micel",
            "canno_inserimento": "2014",
            "cdata_e_ora_inserimento": "2014-01-26T16:43:04Z",
            "cidentificatore_in_openstreetmap": "706700898",
            "clongitudine": "11.7972532",
            "clatitudine": "46.0227179"
        }
        ,
        {
            "ccomune": "Lorenzago di Cadore",
            "cprovincia": "BELLUNO",
            "cregione": "Veneto",
            "cnome": "",
            "canno_inserimento": "2013",
            "cdata_e_ora_inserimento": "2013-05-20T22:29:22Z",
            "cidentificatore_in_openstreetmap": "2313674342",
            "clongitudine": "12.4699638",
            "clatitudine": "46.4768145"
        }
        ,
        {
            "ccomune": "Lozzo di Cadore",
            "cprovincia": "BELLUNO",
            "cregione": "Veneto",
            "cnome": "Forte Alto di Col Vidal",
            "canno_inserimento": "2015",
            "cdata_e_ora_inserimento": "2015-12-01T21:29:31Z",
            "cidentificatore_in_openstreetmap": "815576394",
            "clongitudine": "12.429518",
            "clatitudine": "46.5159925"
        }
        ,
        {
            "ccomune": "Lozzo di Cadore",
            "cprovincia": "BELLUNO",
            "cregione": "Veneto",
            "cnome": "Forte Basso di Col Vidal",
            "canno_inserimento": "2015",
            "cdata_e_ora_inserimento": "2015-12-01T21:29:31Z",
            "cidentificatore_in_openstreetmap": "815576404",
            "clongitudine": "12.4288132",
            "clatitudine": "46.5145547999999"
        }
        ,
        {
            "ccomune": "Asolo",
            "cprovincia": "TREVISO",
            "cregione": "Veneto",
            "cnome": "Castello di Asolo",
            "canno_inserimento": "2012",
            "cdata_e_ora_inserimento": "2012-01-16T20:07:51Z",
            "cidentificatore_in_openstreetmap": "1408649520",
            "clongitudine": "11.9124395",
            "clatitudine": "45.8017086999999"
        }
        ,
        {
            "ccomune": "Castelfranco Veneto",
            "cprovincia": "TREVISO",
            "cregione": "Veneto",
            "cnome": "Castelfranco Veneto",
            "canno_inserimento": "2013",
            "cdata_e_ora_inserimento": "2013-01-04T12:38:43Z",
            "cidentificatore_in_openstreetmap": "1756780630",
            "clongitudine": "11.924217",
            "clatitudine": "45.6719354"
        }
        ,
        {
            "ccomune": "Conegliano",
            "cprovincia": "TREVISO",
            "cregione": "Veneto",
            "cnome": "Castello di Conegliano",
            "canno_inserimento": "2015",
            "cdata_e_ora_inserimento": "2015-08-24T13:58:20Z",
            "cidentificatore_in_openstreetmap": "783417921",
            "clongitudine": "12.2942754",
            "clatitudine": "45.8895674999999"
        }
        ,
        {
            "ccomune": "Fregona",
            "cprovincia": "TREVISO",
            "cregione": "Veneto",
            "cnome": "Castello di Piai",
            "canno_inserimento": "2015",
            "cdata_e_ora_inserimento": "2015-07-14T15:10:11Z",
            "cidentificatore_in_openstreetmap": "3650855654",
            "clongitudine": "12.3338838",
            "clatitudine": "46.0125739"
        }
        ,
        {
            "ccomune": "Santo Stino di Livenza",
            "cprovincia": "VENEZIA",
            "cregione": "Veneto",
            "cnome": "Castello di San Stino",
            "canno_inserimento": "2013",
            "cdata_e_ora_inserimento": "2013-01-24T12:44:27Z",
            "cidentificatore_in_openstreetmap": "2126202003",
            "clongitudine": "12.6779223",
            "clatitudine": "45.7306415999999"
        }
        ,
        {
            "ccomune": "Lusia",
            "cprovincia": "ROVIGO",
            "cregione": "Veneto",
            "cnome": "Torre Morosini",
            "canno_inserimento": "2013",
            "cdata_e_ora_inserimento": "2013-07-14T16:17:15Z",
            "cidentificatore_in_openstreetmap": "2378403008",
            "clongitudine": "11.6620003",
            "clatitudine": "45.1028998"
        }
        ,
        {
            "ccomune": "Occhiobello",
            "cprovincia": "ROVIGO",
            "cregione": "Veneto",
            "cnome": "Corte Palazzi",
            "canno_inserimento": "2010",
            "cdata_e_ora_inserimento": "2010-05-11T10:00:09Z",
            "cidentificatore_in_openstreetmap": "729611704",
            "clongitudine": "11.5977239",
            "clatitudine": "44.9297205"
        }
        ,
        {
            "ccomune": "Rovigo",
            "cprovincia": "ROVIGO",
            "cregione": "Veneto",
            "cnome": "Torre Don�",
            "canno_inserimento": "2010",
            "cdata_e_ora_inserimento": "2010-07-21T11:50:27Z",
            "cidentificatore_in_openstreetmap": "257552922",
            "clongitudine": "11.7877165",
            "clatitudine": "45.0703328"
        }
        ,
        {
            "ccomune": "Rovigo",
            "cprovincia": "ROVIGO",
            "cregione": "Veneto",
            "cnome": "Torre Mozza",
            "canno_inserimento": "2010",
            "cdata_e_ora_inserimento": "2010-07-21T11:50:26Z",
            "cidentificatore_in_openstreetmap": "257552921",
            "clongitudine": "11.7871184",
            "clatitudine": "45.0706295999999"
        }
        ,
        {
            "ccomune": "Cassacco",
            "cprovincia": "UDINE",
            "cregione": "Friuli-Venezia Giulia",
            "cnome": "Castello",
            "canno_inserimento": "2011",
            "cdata_e_ora_inserimento": "2011-01-22T20:16:24Z",
            "cidentificatore_in_openstreetmap": "322751352",
            "clongitudine": "13.1920383999999",
            "clatitudine": "46.1733959"
        }
        ,
        {
            "ccomune": "Colloredo di Monte Albano",
            "cprovincia": "UDINE",
            "cregione": "Friuli-Venezia Giulia",
            "cnome": "Castello di Caporiacco",
            "canno_inserimento": "2011",
            "cdata_e_ora_inserimento": "2011-06-18T15:33:16Z",
            "cidentificatore_in_openstreetmap": "1329738027",
            "clongitudine": "13.0876446",
            "clatitudine": "46.1500971999999"
        }
        ,
        {
            "ccomune": "Fagagna",
            "cprovincia": "UDINE",
            "cregione": "Friuli-Venezia Giulia",
            "cnome": "Castello di Villalta",
            "canno_inserimento": "2010",
            "cdata_e_ora_inserimento": "2010-12-07T20:50:24Z",
            "cidentificatore_in_openstreetmap": "1027159580",
            "clongitudine": "13.1162183",
            "clatitudine": "46.1058890999999"
        }
        ,
        {
            "ccomune": "Tricesimo",
            "cprovincia": "UDINE",
            "cregione": "Friuli-Venezia Giulia",
            "cnome": "Castello di Tricesimo",
            "canno_inserimento": "2012",
            "cdata_e_ora_inserimento": "2012-03-23T12:52:47Z",
            "cidentificatore_in_openstreetmap": "1687133156",
            "clongitudine": "13.2164231999999",
            "clatitudine": "46.1662515"
        }
        ,
        {
            "ccomune": "Dolegna del Collio",
            "cprovincia": "GORIZIA",
            "cregione": "Friuli-Venezia Giulia",
            "cnome": "Castello di Trussio",
            "canno_inserimento": "2012",
            "cdata_e_ora_inserimento": "2012-08-29T21:31:34Z",
            "cidentificatore_in_openstreetmap": "1888984727",
            "clongitudine": "13.4689941999999",
            "clatitudine": "45.9920414999999"
        }
        ,
        {
            "ccomune": "Gradisca d'Isonzo",
            "cprovincia": "GORIZIA",
            "cregione": "Friuli-Venezia Giulia",
            "cnome": "palazzo del capitano",
            "canno_inserimento": "2012",
            "cdata_e_ora_inserimento": "2012-11-25T23:18:34Z",
            "cidentificatore_in_openstreetmap": "1489867196",
            "clongitudine": "13.5041346",
            "clatitudine": "45.8879937"
        }
        ,
        {
            "ccomune": "Muggia",
            "cprovincia": "TRIESTE",
            "cregione": "Friuli-Venezia Giulia",
            "cnome": "Forte Olmi",
            "canno_inserimento": "2013",
            "cdata_e_ora_inserimento": "2013-01-29T15:45:34Z",
            "cidentificatore_in_openstreetmap": "2133810977",
            "clongitudine": "13.731483",
            "clatitudine": "45.6049694"
        }
        ,
        {
            "ccomune": "Trieste",
            "cprovincia": "TRIESTE",
            "cregione": "Friuli-Venezia Giulia",
            "cnome": "",
            "canno_inserimento": "2011",
            "cdata_e_ora_inserimento": "2011-11-30T09:31:34Z",
            "cidentificatore_in_openstreetmap": "1524405177",
            "clongitudine": "13.7734126",
            "clatitudine": "45.6471943999999"
        }
        ,
        {
            "ccomune": "Trieste",
            "cprovincia": "TRIESTE",
            "cregione": "Friuli-Venezia Giulia",
            "cnome": "Forte Kressich",
            "canno_inserimento": "2013",
            "cdata_e_ora_inserimento": "2013-01-29T15:39:56Z",
            "cidentificatore_in_openstreetmap": "2133807558",
            "clongitudine": "13.7569748",
            "clatitudine": "45.6759362999999"
        }
        ,
        {
            "ccomune": "Agazzano",
            "cprovincia": "PIACENZA",
            "cregione": "Emilia-Romagna",
            "cnome": "Castello di Agazzano",
            "canno_inserimento": "2014",
            "cdata_e_ora_inserimento": "2014-08-22T22:26:42Z",
            "cidentificatore_in_openstreetmap": "1319738429",
            "clongitudine": "9.5224312",
            "clatitudine": "44.9467049"
        }
        ,
        {
            "ccomune": "Agazzano",
            "cprovincia": "PIACENZA",
            "cregione": "Emilia-Romagna",
            "cnome": "Rocca di Agazzano",
            "canno_inserimento": "2012",
            "cdata_e_ora_inserimento": "2012-10-30T12:52:29Z",
            "cidentificatore_in_openstreetmap": "1989625592",
            "clongitudine": "9.5221939",
            "clatitudine": "44.9462119"
        }
        ,
        {
            "ccomune": "Borgonovo Val Tidone",
            "cprovincia": "PIACENZA",
            "cregione": "Emilia-Romagna",
            "cnome": "Castello di Castelnovo",
            "canno_inserimento": "2011",
            "cdata_e_ora_inserimento": "2011-06-15T13:38:10Z",
            "cidentificatore_in_openstreetmap": "1326420289",
            "clongitudine": "9.4405408",
            "clatitudine": "44.989248"
        }
        ,
        {
            "ccomune": "Castell'Arquato",
            "cprovincia": "PIACENZA",
            "cregione": "Emilia-Romagna",
            "cnome": "Pusterla",
            "canno_inserimento": "2015",
            "cdata_e_ora_inserimento": "2015-04-24T11:37:21Z",
            "cidentificatore_in_openstreetmap": "3050225700",
            "clongitudine": "9.8338348",
            "clatitudine": "44.8702224"
        }
        ,
        {
            "ccomune": "Castell'Arquato",
            "cprovincia": "PIACENZA",
            "cregione": "Emilia-Romagna",
            "cnome": "Rocca Viscontea",
            "canno_inserimento": "2014",
            "cdata_e_ora_inserimento": "2014-07-21T07:31:52Z",
            "cidentificatore_in_openstreetmap": "2972628765",
            "clongitudine": "9.8676446",
            "clatitudine": "44.8505887999999"
        }
        ,
        {
            "ccomune": "Gazzola",
            "cprovincia": "PIACENZA",
            "cregione": "Emilia-Romagna",
            "cnome": "Castello di Momeliano",
            "canno_inserimento": "2011",
            "cdata_e_ora_inserimento": "2011-09-04T06:59:45Z",
            "cidentificatore_in_openstreetmap": "1422692954",
            "clongitudine": "9.54667019999999",
            "clatitudine": "44.9268301999999"
        }
        ,
        {
            "ccomune": "Gazzola",
            "cprovincia": "PIACENZA",
            "cregione": "Emilia-Romagna",
            "cnome": "Castello di Rezzanello",
            "canno_inserimento": "2011",
            "cdata_e_ora_inserimento": "2011-10-14T13:06:51Z",
            "cidentificatore_in_openstreetmap": "1466997643",
            "clongitudine": "9.5163259",
            "clatitudine": "44.9121073"
        }
        ,
        {
            "ccomune": "Gazzola",
            "cprovincia": "PIACENZA",
            "cregione": "Emilia-Romagna",
            "cnome": "Castello di Rivalta",
            "canno_inserimento": "2011",
            "cdata_e_ora_inserimento": "2011-10-04T20:30:29Z",
            "cidentificatore_in_openstreetmap": "1455336982",
            "clongitudine": "9.59123409999999",
            "clatitudine": "44.9508123"
        }
        ,
        {
            "ccomune": "Gossolengo",
            "cprovincia": "PIACENZA",
            "cregione": "Emilia-Romagna",
            "cnome": "",
            "canno_inserimento": "2012",
            "cdata_e_ora_inserimento": "2012-07-24T09:22:51Z",
            "cidentificatore_in_openstreetmap": "1451669619",
            "clongitudine": "9.6135987",
            "clatitudine": "45.0036627"
        }
        ,
        {
            "ccomune": "Monticelli d'Ongina",
            "cprovincia": "PIACENZA",
            "cregione": "Emilia-Romagna",
            "cnome": "La Rocca",
            "canno_inserimento": "2014",
            "cdata_e_ora_inserimento": "2014-09-29T12:46:15Z",
            "cidentificatore_in_openstreetmap": "3101820603",
            "clongitudine": "9.9307807",
            "clatitudine": "45.0913084"
        }
        ,
        {
            "ccomune": "Nibbiano",
            "cprovincia": "PIACENZA",
            "cregione": "Emilia-Romagna",
            "cnome": "Castello Corticelli",
            "canno_inserimento": "2013",
            "cdata_e_ora_inserimento": "2013-01-01T15:57:32Z",
            "cidentificatore_in_openstreetmap": "2091074654",
            "clongitudine": "9.3731075",
            "clatitudine": "44.9382816"
        }
        ,
        {
            "ccomune": "Pianello Val Tidone",
            "cprovincia": "PIACENZA",
            "cregione": "Emilia-Romagna",
            "cnome": "Rocca d'Olgisio",
            "canno_inserimento": "2013",
            "cdata_e_ora_inserimento": "2013-10-13T14:56:31Z",
            "cidentificatore_in_openstreetmap": "1200566791",
            "clongitudine": "9.39270529999999",
            "clatitudine": "44.9142111999999"
        }
        ,
        {
            "ccomune": "Piozzano",
            "cprovincia": "PIACENZA",
            "cregione": "Emilia-Romagna",
            "cnome": "Montecanino",
            "canno_inserimento": "2013",
            "cdata_e_ora_inserimento": "2013-01-27T17:18:14Z",
            "cidentificatore_in_openstreetmap": "1016232447",
            "clongitudine": "9.4721568",
            "clatitudine": "44.9405032"
        }
        ,
        {
            "ccomune": "Ponte dell'Olio",
            "cprovincia": "PIACENZA",
            "cregione": "Emilia-Romagna",
            "cnome": "Castello di Folignano",
            "canno_inserimento": "2012",
            "cdata_e_ora_inserimento": "2012-10-03T10:35:51Z",
            "cidentificatore_in_openstreetmap": "1944059450",
            "clongitudine": "9.6593622",
            "clatitudine": "44.877709"
        }
        ,
        {
            "ccomune": "Ponte dell'Olio",
            "cprovincia": "PIACENZA",
            "cregione": "Emilia-Romagna",
            "cnome": "Castello di Torrano",
            "canno_inserimento": "2012",
            "cdata_e_ora_inserimento": "2012-10-01T12:07:16Z",
            "cidentificatore_in_openstreetmap": "1455373998",
            "clongitudine": "9.6834269",
            "clatitudine": "44.8884364999999"
        }
        ,
        {
            "ccomune": "Rivergaro",
            "cprovincia": "PIACENZA",
            "cregione": "Emilia-Romagna",
            "cnome": "Castello di Montechiaro",
            "canno_inserimento": "2011",
            "cdata_e_ora_inserimento": "2011-10-05T09:16:12Z",
            "cidentificatore_in_openstreetmap": "1455766082",
            "clongitudine": "9.5661937",
            "clatitudine": "44.8788936999999"
        }
        ,
        {
            "ccomune": "Rottofreno",
            "cprovincia": "PIACENZA",
            "cregione": "Emilia-Romagna",
            "cnome": "Castello di Rottofreno",
            "canno_inserimento": "2013",
            "cdata_e_ora_inserimento": "2013-05-22T09:43:25Z",
            "cidentificatore_in_openstreetmap": "2315646058",
            "clongitudine": "9.5524016",
            "clatitudine": "45.0630586999999"
        }
        ,
        {
            "ccomune": "Rottofreno",
            "cprovincia": "PIACENZA",
            "cregione": "Emilia-Romagna",
            "cnome": "Castello di Santimento",
            "canno_inserimento": "2015",
            "cdata_e_ora_inserimento": "2015-12-22T16:54:23Z",
            "cidentificatore_in_openstreetmap": "1778552582",
            "clongitudine": "9.5676109",
            "clatitudine": "45.0806727"
        }
        ,
        {
            "ccomune": "Travo",
            "cprovincia": "PIACENZA",
            "cregione": "Emilia-Romagna",
            "cnome": "Castello di Statto",
            "canno_inserimento": "2011",
            "cdata_e_ora_inserimento": "2011-11-29T21:14:57Z",
            "cidentificatore_in_openstreetmap": "1523767391",
            "clongitudine": "9.5852273",
            "clatitudine": "44.9098806"
        }
        ,
        {
            "ccomune": "Vernasca",
            "cprovincia": "PIACENZA",
            "cregione": "Emilia-Romagna",
            "cnome": "",
            "canno_inserimento": "2011",
            "cdata_e_ora_inserimento": "2011-08-20T09:49:49Z",
            "cidentificatore_in_openstreetmap": "910672333",
            "clongitudine": "9.901237",
            "clatitudine": "44.8164681"
        }
        ,
        {
            "ccomune": "Vigolzone",
            "cprovincia": "PIACENZA",
            "cregione": "Emilia-Romagna",
            "cnome": "Castello di Vigolzone",
            "canno_inserimento": "2011",
            "cdata_e_ora_inserimento": "2011-10-05T07:45:40Z",
            "cidentificatore_in_openstreetmap": "1455723401",
            "clongitudine": "9.67144019999999",
            "clatitudine": "44.9128601"
        }
        ,
        {
            "ccomune": "Bardi",
            "cprovincia": "PARMA",
            "cregione": "Emilia-Romagna",
            "cnome": "Castello di Bardi",
            "canno_inserimento": "2010",
            "cdata_e_ora_inserimento": "2010-06-20T12:17:47Z",
            "cidentificatore_in_openstreetmap": "403096890",
            "clongitudine": "9.7312615",
            "clatitudine": "44.6292363"
        }
        ,
        {
            "ccomune": "Colorno",
            "cprovincia": "PARMA",
            "cregione": "Emilia-Romagna",
            "cnome": "Reggia di Colorno",
            "canno_inserimento": "2014",
            "cdata_e_ora_inserimento": "2014-08-05T11:01:15Z",
            "cidentificatore_in_openstreetmap": "2997492755",
            "clongitudine": "10.3759253",
            "clatitudine": "44.9301509"
        }
        ,
        {
            "ccomune": "Corniglio",
            "cprovincia": "PARMA",
            "cregione": "Emilia-Romagna",
            "cnome": "Castello di Corniglio",
            "canno_inserimento": "2011",
            "cdata_e_ora_inserimento": "2011-04-13T13:34:45Z",
            "cidentificatore_in_openstreetmap": "898951127",
            "clongitudine": "10.0887382",
            "clatitudine": "44.4760277999999"
        }
        ,
        {
            "ccomune": "Fontanellato",
            "cprovincia": "PARMA",
            "cregione": "Emilia-Romagna",
            "cnome": "Rocca Sanvitale",
            "canno_inserimento": "2011",
            "cdata_e_ora_inserimento": "2011-01-11T09:53:03Z",
            "cidentificatore_in_openstreetmap": "411882586",
            "clongitudine": "10.1726534999999",
            "clatitudine": "44.8827148"
        }
        ,
        {
            "ccomune": "Montechiarugolo",
            "cprovincia": "PARMA",
            "cregione": "Emilia-Romagna",
            "cnome": "Castell di Montechiarugolo",
            "canno_inserimento": "2014",
            "cdata_e_ora_inserimento": "2014-01-19T13:50:01Z",
            "cidentificatore_in_openstreetmap": "392648522",
            "clongitudine": "10.4235872",
            "clatitudine": "44.6930048999999"
        }
        ,
        {
            "ccomune": "Pellegrino Parmense",
            "cprovincia": "PARMA",
            "cregione": "Emilia-Romagna",
            "cnome": "",
            "canno_inserimento": "2014",
            "cdata_e_ora_inserimento": "2014-04-28T17:59:31Z",
            "cidentificatore_in_openstreetmap": "2823057896",
            "clongitudine": "9.9243687",
            "clatitudine": "44.7300133"
        }
        ,
        {
            "ccomune": "Roccabianca",
            "cprovincia": "PARMA",
            "cregione": "Emilia-Romagna",
            "cnome": "Rocca dei Rossi",
            "canno_inserimento": "2013",
            "cdata_e_ora_inserimento": "2013-10-13T21:05:19Z",
            "cidentificatore_in_openstreetmap": "1098873912",
            "clongitudine": "10.2193276999999",
            "clatitudine": "45.0090410999999"
        }
        ,
        {
            "ccomune": "Salsomaggiore Terme",
            "cprovincia": "PARMA",
            "cregione": "Emilia-Romagna",
            "cnome": "Castello di Contignaco",
            "canno_inserimento": "2009",
            "cdata_e_ora_inserimento": "2009-12-06T18:59:21Z",
            "cidentificatore_in_openstreetmap": "582659726",
            "clongitudine": "9.9676961",
            "clatitudine": "44.7883132999999"
        }
        ,
        {
            "ccomune": "San Secondo Parmense",
            "cprovincia": "PARMA",
            "cregione": "Emilia-Romagna",
            "cnome": "Rocca de Rossi",
            "canno_inserimento": "2013",
            "cdata_e_ora_inserimento": "2013-10-13T21:05:19Z",
            "cidentificatore_in_openstreetmap": "411882578",
            "clongitudine": "10.2259688",
            "clatitudine": "44.9204111"
        }
        ,
        {
            "ccomune": "Soragna",
            "cprovincia": "PARMA",
            "cregione": "Emilia-Romagna",
            "cnome": "Rocca Meli Lupi",
            "canno_inserimento": "2014",
            "cdata_e_ora_inserimento": "2014-02-05T07:17:00Z",
            "cidentificatore_in_openstreetmap": "1098875656",
            "clongitudine": "10.1223721999999",
            "clatitudine": "44.9273452999999"
        }
        ,
        {
            "ccomune": "Tizzano Val Parma",
            "cprovincia": "PARMA",
            "cregione": "Emilia-Romagna",
            "cnome": "Rocca di Rusino",
            "canno_inserimento": "2012",
            "cdata_e_ora_inserimento": "2012-01-12T08:54:18Z",
            "cidentificatore_in_openstreetmap": "548591824",
            "clongitudine": "10.2484369",
            "clatitudine": "44.4992734"
        }
        ,
        {
            "ccomune": "Varsi",
            "cprovincia": "PARMA",
            "cregione": "Emilia-Romagna",
            "cnome": "Golaso",
            "canno_inserimento": "2010",
            "cdata_e_ora_inserimento": "2010-02-17T09:52:27Z",
            "cidentificatore_in_openstreetmap": "642997664",
            "clongitudine": "9.8725416",
            "clatitudine": "44.6795589999999"
        }
        ,
        {
            "ccomune": "Albinea",
            "cprovincia": "REGGIO EMILIA",
            "cregione": "Emilia-Romagna",
            "cnome": "Castello di Montericco",
            "canno_inserimento": "2014",
            "cdata_e_ora_inserimento": "2014-06-23T19:44:00Z",
            "cidentificatore_in_openstreetmap": "2929897245",
            "clongitudine": "10.6040671999999",
            "clatitudine": "44.6048138"
        }
        ,
        {
            "ccomune": "Baiso",
            "cprovincia": "REGGIO EMILIA",
            "cregione": "Emilia-Romagna",
            "cnome": "Castello di Baiso",
            "canno_inserimento": "2012",
            "cdata_e_ora_inserimento": "2012-05-28T09:52:42Z",
            "cidentificatore_in_openstreetmap": "1768470697",
            "clongitudine": "10.6017156",
            "clatitudine": "44.5047248999999"
        }
        ,
        {
            "ccomune": "Casalgrande",
            "cprovincia": "REGGIO EMILIA",
            "cregione": "Emilia-Romagna",
            "cnome": "Castello di Casalgrande",
            "canno_inserimento": "2010",
            "cdata_e_ora_inserimento": "2010-12-08T07:36:32Z",
            "cidentificatore_in_openstreetmap": "1027733801",
            "clongitudine": "10.7251347999999",
            "clatitudine": "44.5754638"
        }
        ,
        {
            "ccomune": "Casina",
            "cprovincia": "REGGIO EMILIA",
            "cregione": "Emilia-Romagna",
            "cnome": "Castello di Leguigno",
            "canno_inserimento": "2012",
            "cdata_e_ora_inserimento": "2012-11-18T14:28:30Z",
            "cidentificatore_in_openstreetmap": "2019827784",
            "clongitudine": "10.4521686",
            "clatitudine": "44.5185792999999"
        }
        ,
        {
            "ccomune": "Castellarano",
            "cprovincia": "REGGIO EMILIA",
            "cregione": "Emilia-Romagna",
            "cnome": "Rocchetta",
            "canno_inserimento": "2012",
            "cdata_e_ora_inserimento": "2012-02-16T04:11:51Z",
            "cidentificatore_in_openstreetmap": "1634786974",
            "clongitudine": "10.7306717",
            "clatitudine": "44.5110087999999"
        }
        ,
        {
            "ccomune": "Canossa",
            "cprovincia": "REGGIO EMILIA",
            "cregione": "Emilia-Romagna",
            "cnome": "Castello di Canossa",
            "canno_inserimento": "2013",
            "cdata_e_ora_inserimento": "2013-10-06T21:27:13Z",
            "cidentificatore_in_openstreetmap": "736680838",
            "clongitudine": "10.4558179",
            "clatitudine": "44.5756854999999"
        }
        ,
        {
            "ccomune": "Canossa",
            "cprovincia": "REGGIO EMILIA",
            "cregione": "Emilia-Romagna",
            "cnome": "Castello di Rossena",
            "canno_inserimento": "2012",
            "cdata_e_ora_inserimento": "2012-05-01T17:39:30Z",
            "cidentificatore_in_openstreetmap": "1736728953",
            "clongitudine": "10.4258913",
            "clatitudine": "44.5824426"
        }
        ,
        {
            "ccomune": "Fabbrico",
            "cprovincia": "REGGIO EMILIA",
            "cregione": "Emilia-Romagna",
            "cnome": "San Genesio",
            "canno_inserimento": "2013",
            "cdata_e_ora_inserimento": "2013-06-16T15:45:58Z",
            "cidentificatore_in_openstreetmap": "2347883881",
            "clongitudine": "10.8225121",
            "clatitudine": "44.8893287"
        }
        ,
        {
            "ccomune": "Quattro Castella",
            "cprovincia": "REGGIO EMILIA",
            "cregione": "Emilia-Romagna",
            "cnome": "Castello di Bianello",
            "canno_inserimento": "2014",
            "cdata_e_ora_inserimento": "2014-01-19T19:11:47Z",
            "cidentificatore_in_openstreetmap": "685255706",
            "clongitudine": "10.4684475999999",
            "clatitudine": "44.6277820999999"
        }
        ,
        {
            "ccomune": "Scandiano",
            "cprovincia": "REGGIO EMILIA",
            "cregione": "Emilia-Romagna",
            "cnome": "Castello D' Ondena",
            "canno_inserimento": "2012",
            "cdata_e_ora_inserimento": "2012-05-28T23:41:47Z",
            "cidentificatore_in_openstreetmap": "1769063346",
            "clongitudine": "10.6591121",
            "clatitudine": "44.5841805"
        }
        ,
        {
            "ccomune": "Viano",
            "cprovincia": "REGGIO EMILIA",
            "cregione": "Emilia-Romagna",
            "cnome": "Castello di Viano",
            "canno_inserimento": "2012",
            "cdata_e_ora_inserimento": "2012-05-28T14:39:26Z",
            "cidentificatore_in_openstreetmap": "1768691647",
            "clongitudine": "10.6385941",
            "clatitudine": "44.5502158999999"
        }
        ,
        {
            "ccomune": "Crevalcore",
            "cprovincia": "BOLOGNA",
            "cregione": "Emilia-Romagna",
            "cnome": "Castello di Galeazza",
            "canno_inserimento": "2014",
            "cdata_e_ora_inserimento": "2014-08-19T00:34:27Z",
            "cidentificatore_in_openstreetmap": "3026261132",
            "clongitudine": "11.2784055999999",
            "clatitudine": "44.7977133999999"
        }
        ,
        {
            "ccomune": "Imola",
            "cprovincia": "BOLOGNA",
            "cregione": "Emilia-Romagna",
            "cnome": "Castello Pieve Sant'Andrea",
            "canno_inserimento": "2013",
            "cdata_e_ora_inserimento": "2013-08-15T22:35:30Z",
            "cidentificatore_in_openstreetmap": "693321476",
            "clongitudine": "11.5874368",
            "clatitudine": "44.3292623999999"
        }
        ,
        {
            "ccomune": "Imola",
            "cprovincia": "BOLOGNA",
            "cregione": "Emilia-Romagna",
            "cnome": "Porta Montanara",
            "canno_inserimento": "2013",
            "cdata_e_ora_inserimento": "2013-03-30T13:45:01Z",
            "cidentificatore_in_openstreetmap": "343156118",
            "clongitudine": "11.7104591",
            "clatitudine": "44.3525703999999"
        }
        ,
        {
            "ccomune": "Malalbergo",
            "cprovincia": "BOLOGNA",
            "cregione": "Emilia-Romagna",
            "cnome": "Torre Gnadi",
            "canno_inserimento": "2011",
            "cdata_e_ora_inserimento": "2011-05-16T10:47:49Z",
            "cidentificatore_in_openstreetmap": "1287619974",
            "clongitudine": "11.5038172",
            "clatitudine": "44.6723845"
        }
        ,
        {
            "ccomune": "Pianoro",
            "cprovincia": "BOLOGNA",
            "cregione": "Emilia-Romagna",
            "cnome": "Castello di Zena",
            "canno_inserimento": "2012",
            "cdata_e_ora_inserimento": "2012-05-28T12:55:59Z",
            "cidentificatore_in_openstreetmap": "1414865280",
            "clongitudine": "11.3720361",
            "clatitudine": "44.3431198999999"
        }
        ,
        {
            "ccomune": "Pieve di Cento",
            "cprovincia": "BOLOGNA",
            "cregione": "Emilia-Romagna",
            "cnome": "Rocca",
            "canno_inserimento": "2012",
            "cdata_e_ora_inserimento": "2012-03-02T19:56:39Z",
            "cidentificatore_in_openstreetmap": "1656425249",
            "clongitudine": "11.3053328",
            "clatitudine": "44.7117007"
        }
        ,
        {
            "ccomune": "Bagnacavallo",
            "cprovincia": "RAVENNA",
            "cregione": "Emilia-Romagna",
            "cnome": "Castellaccio",
            "canno_inserimento": "2016",
            "cdata_e_ora_inserimento": "2016-02-12T19:47:44Z",
            "cidentificatore_in_openstreetmap": "4003129789",
            "clongitudine": "11.9753387",
            "clatitudine": "44.4162346999999"
        }
        ,
        {
            "ccomune": "Brisighella",
            "cprovincia": "RAVENNA",
            "cregione": "Emilia-Romagna",
            "cnome": "Castello di Fornazzano",
            "canno_inserimento": "2013",
            "cdata_e_ora_inserimento": "2013-01-28T16:05:15Z",
            "cidentificatore_in_openstreetmap": "1804836467",
            "clongitudine": "11.6260651999999",
            "clatitudine": "44.1547302999999"
        }
        ,
        {
            "ccomune": "Brisighella",
            "cprovincia": "RAVENNA",
            "cregione": "Emilia-Romagna",
            "cnome": "Castello di Rontana",
            "canno_inserimento": "2013",
            "cdata_e_ora_inserimento": "2013-02-22T14:38:49Z",
            "cidentificatore_in_openstreetmap": "884392197",
            "clongitudine": "11.7434746",
            "clatitudine": "44.2216357"
        }
        ,
        {
            "ccomune": "Lugo",
            "cprovincia": "RAVENNA",
            "cregione": "Emilia-Romagna",
            "cnome": "Rocca di Lugo",
            "canno_inserimento": "2015",
            "cdata_e_ora_inserimento": "2015-12-03T20:40:11Z",
            "cidentificatore_in_openstreetmap": "1642427497",
            "clongitudine": "11.9117659",
            "clatitudine": "44.4209875999999"
        }
        ,
        {
            "ccomune": "Civitella di Romagna",
            "cprovincia": "FORLI'",
            "cregione": "Emilia-Romagna",
            "cnome": "Castello",
            "canno_inserimento": "2012",
            "cdata_e_ora_inserimento": "2012-12-23T18:19:52Z",
            "cidentificatore_in_openstreetmap": "652651754",
            "clongitudine": "12.0038734999999",
            "clatitudine": "44.0438827999999"
        }
        ,
        {
            "ccomune": "Civitella di Romagna",
            "cprovincia": "FORLI'",
            "cregione": "Emilia-Romagna",
            "cnome": "Rocca Malatestiana di Giaggiolo",
            "canno_inserimento": "2013",
            "cdata_e_ora_inserimento": "2013-10-03T19:53:19Z",
            "cidentificatore_in_openstreetmap": "651808293",
            "clongitudine": "12.0574952999999",
            "clatitudine": "44.0328877"
        }
        ,
        {
            "ccomune": "Forli'",
            "cprovincia": "FORLI'",
            "cregione": "Emilia-Romagna",
            "cnome": "Rocca di Ravaldino",
            "canno_inserimento": "2015",
            "cdata_e_ora_inserimento": "2015-10-15T08:09:30Z",
            "cidentificatore_in_openstreetmap": "3787166348",
            "clongitudine": "12.0372445999999",
            "clatitudine": "44.2162523"
        }
        ,
        {
            "ccomune": "Galeata",
            "cprovincia": "FORLI'",
            "cregione": "Emilia-Romagna",
            "cnome": "Torre di Monte Erno",
            "canno_inserimento": "2012",
            "cdata_e_ora_inserimento": "2012-08-26T17:12:40Z",
            "cidentificatore_in_openstreetmap": "1881530607",
            "clongitudine": "11.8698072",
            "clatitudine": "44.0136637"
        }
        ,
        {
            "ccomune": "Longiano",
            "cprovincia": "FORLI'",
            "cregione": "Emilia-Romagna",
            "cnome": "Castello di Longiano",
            "canno_inserimento": "2014",
            "cdata_e_ora_inserimento": "2014-10-05T20:47:51Z",
            "cidentificatore_in_openstreetmap": "766460618",
            "clongitudine": "12.3248417",
            "clatitudine": "44.0725416"
        }
        ,
        {
            "ccomune": "Mercato Saraceno",
            "cprovincia": "FORLI'",
            "cregione": "Emilia-Romagna",
            "cnome": "Torre",
            "canno_inserimento": "2013",
            "cdata_e_ora_inserimento": "2013-09-22T11:07:58Z",
            "cidentificatore_in_openstreetmap": "2467545857",
            "clongitudine": "12.1072874",
            "clatitudine": "43.9938101999999"
        }
        ,
        {
            "ccomune": "Predappio",
            "cprovincia": "FORLI'",
            "cregione": "Emilia-Romagna",
            "cnome": "Rocca di Predappio Alta",
            "canno_inserimento": "2012",
            "cdata_e_ora_inserimento": "2012-05-02T09:03:33Z",
            "cidentificatore_in_openstreetmap": "257683775",
            "clongitudine": "11.9626569",
            "clatitudine": "44.0999806"
        }
        ,
        {
            "ccomune": "Verghereto",
            "cprovincia": "FORLI'",
            "cregione": "Emilia-Romagna",
            "cnome": "Castello di Colorio",
            "canno_inserimento": "2015",
            "cdata_e_ora_inserimento": "2015-09-11T09:54:26Z",
            "cidentificatore_in_openstreetmap": "3738833803",
            "clongitudine": "12.0690662999999",
            "clatitudine": "43.7536278999999"
        }
        ,
        {
            "ccomune": "Macerata Feltria",
            "cprovincia": "PESARO E URBINO",
            "cregione": "Marche",
            "cnome": "Torre di cerignano",
            "canno_inserimento": "2010",
            "cdata_e_ora_inserimento": "2010-02-16T11:15:23Z",
            "cidentificatore_in_openstreetmap": "641311024",
            "clongitudine": "12.48869",
            "clatitudine": "43.8255671"
        }
        ,
        {
            "ccomune": "Monte Porzio",
            "cprovincia": "PESARO E URBINO",
            "cregione": "Marche",
            "cnome": "Castello Barberini",
            "canno_inserimento": "2013",
            "cdata_e_ora_inserimento": "2013-07-12T11:56:38Z",
            "cidentificatore_in_openstreetmap": "2382266595",
            "clongitudine": "13.0564193",
            "clatitudine": "43.6977659"
        }
        ,
        {
            "ccomune": "Piobbico",
            "cprovincia": "PESARO E URBINO",
            "cregione": "Marche",
            "cnome": "Castello dei Pecorari",
            "canno_inserimento": "2014",
            "cdata_e_ora_inserimento": "2014-06-17T10:38:11Z",
            "cidentificatore_in_openstreetmap": "2920098697",
            "clongitudine": "12.4937611",
            "clatitudine": "43.6094707999999"
        }
        ,
        {
            "ccomune": "Sassocorvaro",
            "cprovincia": "PESARO E URBINO",
            "cregione": "Marche",
            "cnome": "",
            "canno_inserimento": "2013",
            "cdata_e_ora_inserimento": "2013-10-09T09:43:39Z",
            "cidentificatore_in_openstreetmap": "2489195709",
            "clongitudine": "12.495792",
            "clatitudine": "43.7809084"
        }
        ,
        {
            "ccomune": "Agugliano",
            "cprovincia": "ANCONA",
            "cregione": "Marche",
            "cnome": "Castel d'Emilio",
            "canno_inserimento": "2010",
            "cdata_e_ora_inserimento": "2010-08-18T12:10:54Z",
            "cidentificatore_in_openstreetmap": "866644437",
            "clongitudine": "13.3836409",
            "clatitudine": "43.5636203999999"
        }
        ,
        {
            "ccomune": "Arcevia",
            "cprovincia": "ANCONA",
            "cregione": "Marche",
            "cnome": "Porta del Forno",
            "canno_inserimento": "2008",
            "cdata_e_ora_inserimento": "2008-09-27T13:52:05Z",
            "cidentificatore_in_openstreetmap": "300298469",
            "clongitudine": "12.9391181999999",
            "clatitudine": "43.4972955"
        }
        ,
        {
            "ccomune": "Camerata Picena",
            "cprovincia": "ANCONA",
            "cregione": "Marche",
            "cnome": "Castello del Cassero",
            "canno_inserimento": "2010",
            "cdata_e_ora_inserimento": "2010-08-18T12:10:56Z",
            "cidentificatore_in_openstreetmap": "866644450",
            "clongitudine": "13.3866096999999",
            "clatitudine": "43.5825729999999"
        }
        ,
        {
            "ccomune": "Serra San Quirico",
            "cprovincia": "ANCONA",
            "cregione": "Marche",
            "cnome": "Rotoscio de Castella",
            "canno_inserimento": "2009",
            "cdata_e_ora_inserimento": "2009-05-23T16:08:47Z",
            "cidentificatore_in_openstreetmap": "410209221",
            "clongitudine": "13.0605319",
            "clatitudine": "43.4210928999999"
        }
        ,
        {
            "ccomune": "Colmurano",
            "cprovincia": "MACERATA",
            "cregione": "Marche",
            "cnome": "La rocca",
            "canno_inserimento": "2011",
            "cdata_e_ora_inserimento": "2011-07-24T17:35:49Z",
            "cidentificatore_in_openstreetmap": "1372651730",
            "clongitudine": "13.3565257",
            "clatitudine": "43.1638287"
        }
        ,
        {
            "ccomune": "Poggio San Vicino",
            "cprovincia": "MACERATA",
            "cregione": "Marche",
            "cnome": "",
            "canno_inserimento": "2009",
            "cdata_e_ora_inserimento": "2009-09-07T09:10:57Z",
            "cidentificatore_in_openstreetmap": "487095584",
            "clongitudine": "13.0776841",
            "clatitudine": "43.3759956999999"
        }
        ,
        {
            "ccomune": "San Severino Marche",
            "cprovincia": "MACERATA",
            "cregione": "Marche",
            "cnome": "Castello di Pitino",
            "canno_inserimento": "2015",
            "cdata_e_ora_inserimento": "2015-11-27T11:22:27Z",
            "cidentificatore_in_openstreetmap": "3625426643",
            "clongitudine": "13.2365482",
            "clatitudine": "43.2797808999999"
        }
        ,
        {
            "ccomune": "Acquaviva Picena",
            "cprovincia": "ASCOLI PICENO",
            "cregione": "Marche",
            "cnome": "Fortezza medioevale",
            "canno_inserimento": "2013",
            "cdata_e_ora_inserimento": "2013-12-28T17:49:32Z",
            "cidentificatore_in_openstreetmap": "2598642587",
            "clongitudine": "13.8115939999999",
            "clatitudine": "42.9444147"
        }
        ,
        {
            "ccomune": "Cupra Marittima",
            "cprovincia": "ASCOLI PICENO",
            "cregione": "Marche",
            "cnome": "Castello di Sant'Andrea",
            "canno_inserimento": "2013",
            "cdata_e_ora_inserimento": "2013-09-10T22:04:18Z",
            "cidentificatore_in_openstreetmap": "1390575473",
            "clongitudine": "13.8597634",
            "clatitudine": "43.0164203"
        }
        ,
        {
            "ccomune": "Grottammare",
            "cprovincia": "ASCOLI PICENO",
            "cregione": "Marche",
            "cnome": "Castello di Grottamare",
            "canno_inserimento": "2011",
            "cdata_e_ora_inserimento": "2011-06-28T16:47:19Z",
            "cidentificatore_in_openstreetmap": "1342443842",
            "clongitudine": "13.8651231",
            "clatitudine": "42.9955713"
        }
        ,
        {
            "ccomune": "San Benedetto del Tronto",
            "cprovincia": "ASCOLI PICENO",
            "cregione": "Marche",
            "cnome": "Torre Guelfa",
            "canno_inserimento": "2012",
            "cdata_e_ora_inserimento": "2012-04-05T08:32:45Z",
            "cidentificatore_in_openstreetmap": "1702373453",
            "clongitudine": "13.8880437",
            "clatitudine": "42.9142851"
        }
        ,
        {
            "ccomune": "Carrara",
            "cprovincia": "MASSA-CARRARA",
            "cregione": "Toscana",
            "cnome": "Castello di Moneta",
            "canno_inserimento": "2014",
            "cdata_e_ora_inserimento": "2014-03-24T16:23:56Z",
            "cidentificatore_in_openstreetmap": "2739745084",
            "clongitudine": "10.0780563",
            "clatitudine": "44.0796426"
        }
        ,
        {
            "ccomune": "Carrara",
            "cprovincia": "MASSA-CARRARA",
            "cregione": "Toscana",
            "cnome": "Palazzetti",
            "canno_inserimento": "2014",
            "cdata_e_ora_inserimento": "2014-01-15T20:10:23Z",
            "cidentificatore_in_openstreetmap": "2623907433",
            "clongitudine": "10.067484",
            "clatitudine": "44.0661889"
        }
        ,
        {
            "ccomune": "Fosdinovo",
            "cprovincia": "MASSA-CARRARA",
            "cregione": "Toscana",
            "cnome": "Castello Malaspina",
            "canno_inserimento": "2014",
            "cdata_e_ora_inserimento": "2014-02-08T23:00:17Z",
            "cidentificatore_in_openstreetmap": "1411140414",
            "clongitudine": "10.0211503",
            "clatitudine": "44.1357385"
        }
        ,
        {
            "ccomune": "Licciana Nardi",
            "cprovincia": "MASSA-CARRARA",
            "cregione": "Toscana",
            "cnome": "Castello di Bastia",
            "canno_inserimento": "2010",
            "cdata_e_ora_inserimento": "2010-10-12T21:52:58Z",
            "cidentificatore_in_openstreetmap": "946219696",
            "clongitudine": "10.0484638",
            "clatitudine": "44.2646159999999"
        }
        ,
        {
            "ccomune": "Montignoso",
            "cprovincia": "MASSA-CARRARA",
            "cregione": "Toscana",
            "cnome": "Castello aghinolfi",
            "canno_inserimento": "2012",
            "cdata_e_ora_inserimento": "2012-09-25T10:57:43Z",
            "cidentificatore_in_openstreetmap": "1611906850",
            "clongitudine": "10.1672185",
            "clatitudine": "44.0085905999999"
        }
        ,
        {
            "ccomune": "Mulazzo",
            "cprovincia": "MASSA-CARRARA",
            "cregione": "Toscana",
            "cnome": "castello di Borgo",
            "canno_inserimento": "2011",
            "cdata_e_ora_inserimento": "2011-10-14T10:21:33Z",
            "cidentificatore_in_openstreetmap": "1466763310",
            "clongitudine": "9.9075839",
            "clatitudine": "44.2907561999999"
        }
        ,
        {
            "ccomune": "Castiglione di Garfagnana",
            "cprovincia": "LUCCA",
            "cregione": "Toscana",
            "cnome": "Rocca di Castiglione",
            "canno_inserimento": "2014",
            "cdata_e_ora_inserimento": "2014-09-05T11:19:16Z",
            "cidentificatore_in_openstreetmap": "3060716882",
            "clongitudine": "10.4106463999999",
            "clatitudine": "44.1496676"
        }
        ,
        {
            "ccomune": "Fosciandora",
            "cprovincia": "LUCCA",
            "cregione": "Toscana",
            "cnome": "Antica Rocca di Ceserana",
            "canno_inserimento": "2015",
            "cdata_e_ora_inserimento": "2015-03-22T20:21:45Z",
            "cidentificatore_in_openstreetmap": "3413313904",
            "clongitudine": "10.4539658",
            "clatitudine": "44.1188425"
        }
        ,
        {
            "ccomune": "Lucca",
            "cprovincia": "LUCCA",
            "cregione": "Toscana",
            "cnome": "Castello di Nozzano",
            "canno_inserimento": "2011",
            "cdata_e_ora_inserimento": "2011-06-16T13:53:43Z",
            "cidentificatore_in_openstreetmap": "1327519889",
            "clongitudine": "10.4173054999999",
            "clatitudine": "43.8352737"
        }
        ,
        {
            "ccomune": "Montecarlo",
            "cprovincia": "LUCCA",
            "cregione": "Toscana",
            "cnome": "Fortezza del Cerruglio",
            "canno_inserimento": "2012",
            "cdata_e_ora_inserimento": "2012-07-01T16:59:07Z",
            "cidentificatore_in_openstreetmap": "854899075",
            "clongitudine": "10.6669246999999",
            "clatitudine": "43.8520539"
        }
        ,
        {
            "ccomune": "Villa Basilica",
            "cprovincia": "LUCCA",
            "cregione": "Toscana",
            "cnome": "",
            "canno_inserimento": "2013",
            "cdata_e_ora_inserimento": "2013-07-05T09:39:03Z",
            "cidentificatore_in_openstreetmap": "2374711402",
            "clongitudine": "10.6425442",
            "clatitudine": "43.9259277"
        }
        ,
        {
            "ccomune": "Massa e Cozzile",
            "cprovincia": "PISTOIA",
            "cregione": "Toscana",
            "cnome": "Castello di Verruca",
            "canno_inserimento": "2012",
            "cdata_e_ora_inserimento": "2012-10-07T19:23:24Z",
            "cidentificatore_in_openstreetmap": "1951351072",
            "clongitudine": "10.7602449",
            "clatitudine": "43.9217962999999"
        }
        ,
        {
            "ccomune": "Bagno a Ripoli",
            "cprovincia": "FIRENZE",
            "cregione": "Toscana",
            "cnome": "Castel Belforte",
            "canno_inserimento": "2016",
            "cdata_e_ora_inserimento": "2016-01-26T22:33:27Z",
            "cidentificatore_in_openstreetmap": "3969467494",
            "clongitudine": "11.3761825",
            "clatitudine": "43.7683128999999"
        }
        ,
        {
            "ccomune": "Bagno a Ripoli",
            "cprovincia": "FIRENZE",
            "cregione": "Toscana",
            "cnome": "Castello di Monte Acuto",
            "canno_inserimento": "2016",
            "cdata_e_ora_inserimento": "2016-01-26T22:33:27Z",
            "cidentificatore_in_openstreetmap": "3969467495",
            "clongitudine": "11.3733802",
            "clatitudine": "43.7741803999999"
        }
        ,
        {
            "ccomune": "Bagno a Ripoli",
            "cprovincia": "FIRENZE",
            "cregione": "Toscana",
            "cnome": "Poggio a Luco",
            "canno_inserimento": "2016",
            "cdata_e_ora_inserimento": "2016-01-26T22:33:27Z",
            "cidentificatore_in_openstreetmap": "3969467496",
            "clongitudine": "11.3904951",
            "clatitudine": "43.7579332999999"
        }
        ,
        {
            "ccomune": "Calenzano",
            "cprovincia": "FIRENZE",
            "cregione": "Toscana",
            "cnome": "castello di Legri",
            "canno_inserimento": "2012",
            "cdata_e_ora_inserimento": "2012-07-10T13:18:24Z",
            "cidentificatore_in_openstreetmap": "1820305256",
            "clongitudine": "11.2284073",
            "clatitudine": "43.9144884"
        }
        ,
        {
            "ccomune": "Certaldo",
            "cprovincia": "FIRENZE",
            "cregione": "Toscana",
            "cnome": "Torre di Pogni",
            "canno_inserimento": "2012",
            "cdata_e_ora_inserimento": "2012-09-02T16:34:03Z",
            "cidentificatore_in_openstreetmap": "1085564321",
            "clongitudine": "11.1289289",
            "clatitudine": "43.5635280999999"
        }
        ,
        {
            "ccomune": "Fucecchio",
            "cprovincia": "FIRENZE",
            "cregione": "Toscana",
            "cnome": "Castello di Salamarzana",
            "canno_inserimento": "2015",
            "cdata_e_ora_inserimento": "2015-06-18T15:26:08Z",
            "cidentificatore_in_openstreetmap": "3602886814",
            "clongitudine": "10.8095705",
            "clatitudine": "43.7300568"
        }
        ,
        {
            "ccomune": "Marradi",
            "cprovincia": "FIRENZE",
            "cregione": "Toscana",
            "cnome": "Rocca di Castiglione",
            "canno_inserimento": "2015",
            "cdata_e_ora_inserimento": "2015-04-29T10:41:31Z",
            "cidentificatore_in_openstreetmap": "1753813154",
            "clongitudine": "11.59556",
            "clatitudine": "44.0687056"
        }
        ,
        {
            "ccomune": "Montespertoli",
            "cprovincia": "FIRENZE",
            "cregione": "Toscana",
            "cnome": "Castello di Poppiano",
            "canno_inserimento": "2011",
            "cdata_e_ora_inserimento": "2011-06-12T12:38:06Z",
            "cidentificatore_in_openstreetmap": "1321715813",
            "clongitudine": "11.1133001",
            "clatitudine": "43.6498623"
        }
        ,
        {
            "ccomune": "Pontassieve",
            "cprovincia": "FIRENZE",
            "cregione": "Toscana",
            "cnome": "Castello del Monte di Croce",
            "canno_inserimento": "2016",
            "cdata_e_ora_inserimento": "2016-02-06T23:35:21Z",
            "cidentificatore_in_openstreetmap": "3992846358",
            "clongitudine": "11.4097582",
            "clatitudine": "43.8307762999999"
        }
        ,
        {
            "ccomune": "San Casciano in Val di Pesa",
            "cprovincia": "FIRENZE",
            "cregione": "Toscana",
            "cnome": "Castello di Castelbonsi",
            "canno_inserimento": "2013",
            "cdata_e_ora_inserimento": "2013-01-24T20:15:26Z",
            "cidentificatore_in_openstreetmap": "2126717389",
            "clongitudine": "11.215422",
            "clatitudine": "43.6548876"
        }
        ,
        {
            "ccomune": "Scandicci",
            "cprovincia": "FIRENZE",
            "cregione": "Toscana",
            "cnome": "Villa Il Castellare",
            "canno_inserimento": "2012",
            "cdata_e_ora_inserimento": "2012-12-24T17:09:58Z",
            "cidentificatore_in_openstreetmap": "2081384964",
            "clongitudine": "11.1229413",
            "clatitudine": "43.6892915"
        }
        ,
        {
            "ccomune": "Tavarnelle Val di Pesa",
            "cprovincia": "FIRENZE",
            "cregione": "Toscana",
            "cnome": "Castello del Nero",
            "canno_inserimento": "2011",
            "cdata_e_ora_inserimento": "2011-06-05T15:58:27Z",
            "cidentificatore_in_openstreetmap": "1313203730",
            "clongitudine": "11.1878052",
            "clatitudine": "43.5521085"
        }
        ,
        {
            "ccomune": "Campiglia Marittima",
            "cprovincia": "LIVORNO",
            "cregione": "Toscana",
            "cnome": "",
            "canno_inserimento": "2009",
            "cdata_e_ora_inserimento": "2009-09-10T18:53:55Z",
            "cidentificatore_in_openstreetmap": "492678960",
            "clongitudine": "10.6184884",
            "clatitudine": "43.0606300999999"
        }
        ,
        {
            "ccomune": "Capraia Isola",
            "cprovincia": "LIVORNO",
            "cregione": "Toscana",
            "cnome": "Forte San Giorgio",
            "canno_inserimento": "2010",
            "cdata_e_ora_inserimento": "2010-09-06T21:13:01Z",
            "cidentificatore_in_openstreetmap": "506787941",
            "clongitudine": "9.8452441",
            "clatitudine": "43.0480159"
        }
        ,
        {
            "ccomune": "Castagneto Carducci",
            "cprovincia": "LIVORNO",
            "cregione": "Toscana",
            "cnome": "",
            "canno_inserimento": "2014",
            "cdata_e_ora_inserimento": "2014-11-09T18:26:49Z",
            "cidentificatore_in_openstreetmap": "3177479987",
            "clongitudine": "10.611006",
            "clatitudine": "43.1608588"
        }
        ,
        {
            "ccomune": "Marciana",
            "cprovincia": "LIVORNO",
            "cregione": "Toscana",
            "cnome": "",
            "canno_inserimento": "2013",
            "cdata_e_ora_inserimento": "2013-03-30T10:28:50Z",
            "cidentificatore_in_openstreetmap": "2237407776",
            "clongitudine": "10.1672748",
            "clatitudine": "42.7890609"
        }
        ,
        {
            "ccomune": "Rosignano Marittimo",
            "cprovincia": "LIVORNO",
            "cregione": "Toscana",
            "cnome": "",
            "canno_inserimento": "2010",
            "cdata_e_ora_inserimento": "2010-08-18T09:05:15Z",
            "cidentificatore_in_openstreetmap": "866366121",
            "clongitudine": "10.4748923",
            "clatitudine": "43.4050821"
        }
        ,
        {
            "ccomune": "Rosignano Marittimo",
            "cprovincia": "LIVORNO",
            "cregione": "Toscana",
            "cnome": "",
            "canno_inserimento": "2012",
            "cdata_e_ora_inserimento": "2012-04-13T20:11:12Z",
            "cidentificatore_in_openstreetmap": "1715066506",
            "clongitudine": "10.4127211",
            "clatitudine": "43.4054981999999"
        }
        ,
        {
            "ccomune": "Rosignano Marittimo",
            "cprovincia": "LIVORNO",
            "cregione": "Toscana",
            "cnome": "Torre di Vada",
            "canno_inserimento": "2013",
            "cdata_e_ora_inserimento": "2013-10-10T20:24:56Z",
            "cidentificatore_in_openstreetmap": "1863647488",
            "clongitudine": "10.4541661",
            "clatitudine": "43.3508382999999"
        }
        ,
        {
            "ccomune": "Suvereto",
            "cprovincia": "LIVORNO",
            "cregione": "Toscana",
            "cnome": "Rocca Aldobrandesca",
            "canno_inserimento": "2013",
            "cdata_e_ora_inserimento": "2013-10-24T19:57:20Z",
            "cidentificatore_in_openstreetmap": "1845293095",
            "clongitudine": "10.68003",
            "clatitudine": "43.0794652"
        }
        ,
        {
            "ccomune": "Castelnuovo di Val di Cecina",
            "cprovincia": "PISA",
            "cregione": "Toscana",
            "cnome": "",
            "canno_inserimento": "2012",
            "cdata_e_ora_inserimento": "2012-05-15T20:03:55Z",
            "cidentificatore_in_openstreetmap": "918458702",
            "clongitudine": "10.9575066",
            "clatitudine": "43.2654216"
        }
        ,
        {
            "ccomune": "Pomarance",
            "cprovincia": "PISA",
            "cregione": "Toscana",
            "cnome": "Rocca Sillana",
            "canno_inserimento": "2014",
            "cdata_e_ora_inserimento": "2014-12-22T18:20:51Z",
            "cidentificatore_in_openstreetmap": "918441555",
            "clongitudine": "10.9349320999999",
            "clatitudine": "43.2745451999999"
        }
        ,
        {
            "ccomune": "San Miniato",
            "cprovincia": "PISA",
            "cregione": "Toscana",
            "cnome": "Montebicchieri",
            "canno_inserimento": "2013",
            "cdata_e_ora_inserimento": "2013-06-22T09:10:41Z",
            "cidentificatore_in_openstreetmap": "2354718476",
            "clongitudine": "10.7902211",
            "clatitudine": "43.6519870999999"
        }
        ,
        {
            "ccomune": "Vicopisano",
            "cprovincia": "PISA",
            "cregione": "Toscana",
            "cnome": "Rocca di Vicopisano",
            "canno_inserimento": "2013",
            "cdata_e_ora_inserimento": "2013-10-24T20:06:43Z",
            "cidentificatore_in_openstreetmap": "1769847315",
            "clongitudine": "10.5869812",
            "clatitudine": "43.6996583999999"
        }
        ,
        {
            "ccomune": "CASCIANA TERME LARI",
            "cprovincia": "PISA",
            "cregione": "Toscana",
            "cnome": "Castello dei Vicari",
            "canno_inserimento": "2011",
            "cdata_e_ora_inserimento": "2011-09-22T14:12:22Z",
            "cidentificatore_in_openstreetmap": "1440354831",
            "clongitudine": "10.5919569",
            "clatitudine": "43.5660937999999"
        }
        ,
        {
            "ccomune": "CASCIANA TERME LARI",
            "cprovincia": "PISA",
            "cregione": "Toscana",
            "cnome": "Castello di Gello",
            "canno_inserimento": "2012",
            "cdata_e_ora_inserimento": "2012-04-30T20:41:41Z",
            "cidentificatore_in_openstreetmap": "1623538031",
            "clongitudine": "10.5749856",
            "clatitudine": "43.5149604"
        }
        ,
        {
            "ccomune": "Bibbiena",
            "cprovincia": "AREZZO",
            "cregione": "Toscana",
            "cnome": "Castello di Gressa",
            "canno_inserimento": "2014",
            "cdata_e_ora_inserimento": "2014-12-02T16:10:39Z",
            "cidentificatore_in_openstreetmap": "1826344745",
            "clongitudine": "11.8442071",
            "clatitudine": "43.7309142"
        }
        ,
        {
            "ccomune": "Bucine",
            "cprovincia": "AREZZO",
            "cregione": "Toscana",
            "cnome": "Castello di Cennina",
            "canno_inserimento": "2014",
            "cdata_e_ora_inserimento": "2014-12-29T18:42:26Z",
            "cidentificatore_in_openstreetmap": "270303425",
            "clongitudine": "11.5900833999999",
            "clatitudine": "43.4387534999999"
        }
        ,
        {
            "ccomune": "Castel San Niccolo'",
            "cprovincia": "AREZZO",
            "cregione": "Toscana",
            "cnome": "Castello di Castel San Niccol�",
            "canno_inserimento": "2013",
            "cdata_e_ora_inserimento": "2013-08-23T16:46:19Z",
            "cidentificatore_in_openstreetmap": "281860509",
            "clongitudine": "11.70623",
            "clatitudine": "43.73944"
        }
        ,
        {
            "ccomune": "Castiglion Fiorentino",
            "cprovincia": "AREZZO",
            "cregione": "Toscana",
            "cnome": "",
            "canno_inserimento": "2015",
            "cdata_e_ora_inserimento": "2015-04-24T08:08:50Z",
            "cidentificatore_in_openstreetmap": "3474614125",
            "clongitudine": "11.9228448999999",
            "clatitudine": "43.3414131999999"
        }
        ,
        {
            "ccomune": "Cortona",
            "cprovincia": "AREZZO",
            "cregione": "Toscana",
            "cnome": "Castello di Pierle",
            "canno_inserimento": "2012",
            "cdata_e_ora_inserimento": "2012-06-12T22:25:47Z",
            "cidentificatore_in_openstreetmap": "1785396929",
            "clongitudine": "12.1109981",
            "clatitudine": "43.2580664999999"
        }
        ,
        {
            "ccomune": "Cortona",
            "cprovincia": "AREZZO",
            "cregione": "Toscana",
            "cnome": "Fortezza del Girifalco",
            "canno_inserimento": "2010",
            "cdata_e_ora_inserimento": "2010-01-19T19:45:30Z",
            "cidentificatore_in_openstreetmap": "616796376",
            "clongitudine": "11.9940677",
            "clatitudine": "43.2770034999999"
        }
        ,
        {
            "ccomune": "Loro Ciuffenna",
            "cprovincia": "AREZZO",
            "cregione": "Toscana",
            "cnome": "castello della trappola",
            "canno_inserimento": "2014",
            "cdata_e_ora_inserimento": "2014-04-19T10:58:11Z",
            "cidentificatore_in_openstreetmap": "2800775828",
            "clongitudine": "11.6504005999999",
            "clatitudine": "43.6193213999999"
        }
        ,
        {
            "ccomune": "Poppi",
            "cprovincia": "AREZZO",
            "cregione": "Toscana",
            "cnome": "Castello dei Conti Guidi",
            "canno_inserimento": "2016",
            "cdata_e_ora_inserimento": "2016-01-24T19:06:54Z",
            "cidentificatore_in_openstreetmap": "3964750357",
            "clongitudine": "11.7678499",
            "clatitudine": "43.7231603"
        }
        ,
        {
            "ccomune": "CASTELFRANCO PIANDISCO'",
            "cprovincia": "AREZZO",
            "cregione": "Toscana",
            "cnome": "Torre di Menzano",
            "canno_inserimento": "2011",
            "cdata_e_ora_inserimento": "2011-02-12T17:40:29Z",
            "cidentificatore_in_openstreetmap": "1149313517",
            "clongitudine": "11.5500817999999",
            "clatitudine": "43.6577551999999"
        }
        ,
        {
            "ccomune": "Casole d'Elsa",
            "cprovincia": "SIENA",
            "cregione": "Toscana",
            "cnome": "",
            "canno_inserimento": "2013",
            "cdata_e_ora_inserimento": "2013-05-28T19:45:57Z",
            "cidentificatore_in_openstreetmap": "1324793182",
            "clongitudine": "11.0428268",
            "clatitudine": "43.3401549"
        }
        ,
        {
            "ccomune": "Castellina in Chianti",
            "cprovincia": "SIENA",
            "cregione": "Toscana",
            "cnome": "Castello di Mortennano",
            "canno_inserimento": "2012",
            "cdata_e_ora_inserimento": "2012-09-02T16:28:57Z",
            "cidentificatore_in_openstreetmap": "1895026939",
            "clongitudine": "11.2329966999999",
            "clatitudine": "43.4750184"
        }
        ,
        {
            "ccomune": "Castellina in Chianti",
            "cprovincia": "SIENA",
            "cregione": "Toscana",
            "cnome": "Rocca alle Mac�e",
            "canno_inserimento": "2010",
            "cdata_e_ora_inserimento": "2010-10-22T15:09:46Z",
            "cidentificatore_in_openstreetmap": "960385727",
            "clongitudine": "11.2703966",
            "clatitudine": "43.4362575999999"
        }
        ,
        {
            "ccomune": "Castelnuovo Berardenga",
            "cprovincia": "SIENA",
            "cregione": "Toscana",
            "cnome": "Castell' in Villa",
            "canno_inserimento": "2009",
            "cdata_e_ora_inserimento": "2009-09-14T13:38:56Z",
            "cidentificatore_in_openstreetmap": "496114538",
            "clongitudine": "11.4639063",
            "clatitudine": "43.3636965999999"
        }
        ,
        {
            "ccomune": "Castelnuovo Berardenga",
            "cprovincia": "SIENA",
            "cregione": "Toscana",
            "cnome": "Villa Arceno",
            "canno_inserimento": "2009",
            "cdata_e_ora_inserimento": "2009-10-09T07:44:32Z",
            "cidentificatore_in_openstreetmap": "526760608",
            "clongitudine": "11.5113757",
            "clatitudine": "43.3788409"
        }
        ,
        {
            "ccomune": "Castiglione d'Orcia",
            "cprovincia": "SIENA",
            "cregione": "Toscana",
            "cnome": "Ripa d'Orcia",
            "canno_inserimento": "2010",
            "cdata_e_ora_inserimento": "2010-05-30T15:09:35Z",
            "cidentificatore_in_openstreetmap": "759566295",
            "clongitudine": "11.6141770999999",
            "clatitudine": "43.0094617"
        }
        ,
        {
            "ccomune": "Castiglione d'Orcia",
            "cprovincia": "SIENA",
            "cregione": "Toscana",
            "cnome": "Rocca d'Orcia",
            "canno_inserimento": "2009",
            "cdata_e_ora_inserimento": "2009-05-11T12:17:13Z",
            "cidentificatore_in_openstreetmap": "393769658",
            "clongitudine": "11.6137362",
            "clatitudine": "43.0096003"
        }
        ,
        {
            "ccomune": "Gaiole in Chianti",
            "cprovincia": "SIENA",
            "cregione": "Toscana",
            "cnome": "Torre di Barbischio",
            "canno_inserimento": "2012",
            "cdata_e_ora_inserimento": "2012-09-02T12:36:35Z",
            "cidentificatore_in_openstreetmap": "1894575669",
            "clongitudine": "11.4554376999999",
            "clatitudine": "43.4629248999999"
        }
        ,
        {
            "ccomune": "Montalcino",
            "cprovincia": "SIENA",
            "cregione": "Toscana",
            "cnome": "Castelgiocondo",
            "canno_inserimento": "2009",
            "cdata_e_ora_inserimento": "2009-09-30T10:00:25Z",
            "cidentificatore_in_openstreetmap": "514255322",
            "clongitudine": "11.4214676",
            "clatitudine": "43.0459553"
        }
        ,
        {
            "ccomune": "Montalcino",
            "cprovincia": "SIENA",
            "cregione": "Toscana",
            "cnome": "Poggio alle Mura",
            "canno_inserimento": "2009",
            "cdata_e_ora_inserimento": "2009-09-30T10:00:25Z",
            "cidentificatore_in_openstreetmap": "514255318",
            "clongitudine": "11.3983941",
            "clatitudine": "42.980255"
        }
        ,
        {
            "ccomune": "Piancastagnaio",
            "cprovincia": "SIENA",
            "cregione": "Toscana",
            "cnome": "Rocca Aldobrandesca",
            "canno_inserimento": "2012",
            "cdata_e_ora_inserimento": "2012-09-03T13:18:12Z",
            "cidentificatore_in_openstreetmap": "1896261843",
            "clongitudine": "11.6924369",
            "clatitudine": "42.8494476999999"
        }
        ,
        {
            "ccomune": "Pienza",
            "cprovincia": "SIENA",
            "cregione": "Toscana",
            "cnome": "Palazzo Massaini",
            "canno_inserimento": "2009",
            "cdata_e_ora_inserimento": "2009-11-17T10:01:09Z",
            "cidentificatore_in_openstreetmap": "566132511",
            "clongitudine": "11.6968748",
            "clatitudine": "43.1053678999999"
        }
        ,
        {
            "ccomune": "Radicofani",
            "cprovincia": "SIENA",
            "cregione": "Toscana",
            "cnome": "Rocca di Radicofani",
            "canno_inserimento": "2013",
            "cdata_e_ora_inserimento": "2013-01-02T12:16:02Z",
            "cidentificatore_in_openstreetmap": "746847503",
            "clongitudine": "11.768682",
            "clatitudine": "42.8987793"
        }
        ,
        {
            "ccomune": "Sinalunga",
            "cprovincia": "SIENA",
            "cregione": "Toscana",
            "cnome": "Palazzo Pretorio",
            "canno_inserimento": "2008",
            "cdata_e_ora_inserimento": "2008-07-02T09:29:33Z",
            "cidentificatore_in_openstreetmap": "275546244",
            "clongitudine": "11.7375719",
            "clatitudine": "43.2130109"
        }
        ,
        {
            "ccomune": "Arcidosso",
            "cprovincia": "GROSSETO",
            "cregione": "Toscana",
            "cnome": "",
            "canno_inserimento": "2015",
            "cdata_e_ora_inserimento": "2015-05-26T18:18:54Z",
            "cidentificatore_in_openstreetmap": "3547822331",
            "clongitudine": "11.5359058",
            "clatitudine": "42.8721036"
        }
        ,
        {
            "ccomune": "Massa Marittima",
            "cprovincia": "GROSSETO",
            "cregione": "Toscana",
            "cnome": "Rocca aldobrandesca",
            "canno_inserimento": "2012",
            "cdata_e_ora_inserimento": "2012-12-15T12:21:49Z",
            "cidentificatore_in_openstreetmap": "2068108370",
            "clongitudine": "11.0275093",
            "clatitudine": "43.0227116"
        }
        ,
        {
            "ccomune": "Roccalbegna",
            "cprovincia": "GROSSETO",
            "cregione": "Toscana",
            "cnome": "Castello di Triana",
            "canno_inserimento": "2009",
            "cdata_e_ora_inserimento": "2009-06-06T23:59:02Z",
            "cidentificatore_in_openstreetmap": "416719311",
            "clongitudine": "11.5475407",
            "clatitudine": "42.7873248"
        }
        ,
        {
            "ccomune": "Scarlino",
            "cprovincia": "GROSSETO",
            "cregione": "Toscana",
            "cnome": "Torre Civette",
            "canno_inserimento": "2012",
            "cdata_e_ora_inserimento": "2012-02-10T23:46:11Z",
            "cidentificatore_in_openstreetmap": "1627631475",
            "clongitudine": "10.7763822",
            "clatitudine": "42.8444609"
        }
        ,
        {
            "ccomune": "Assisi",
            "cprovincia": "PERUGIA",
            "cregione": "Umbria",
            "cnome": "",
            "canno_inserimento": "2013",
            "cdata_e_ora_inserimento": "2013-06-03T11:42:02Z",
            "cidentificatore_in_openstreetmap": "2330492120",
            "clongitudine": "12.6152578",
            "clatitudine": "43.0732603"
        }
        ,
        {
            "ccomune": "Assisi",
            "cprovincia": "PERUGIA",
            "cregione": "Umbria",
            "cnome": "Castello di Biagiano",
            "canno_inserimento": "2015",
            "cdata_e_ora_inserimento": "2015-11-20T09:40:10Z",
            "cidentificatore_in_openstreetmap": "3846407005",
            "clongitudine": "12.5948533",
            "clatitudine": "43.1017259999999"
        }
        ,
        {
            "ccomune": "Assisi",
            "cprovincia": "PERUGIA",
            "cregione": "Umbria",
            "cnome": "San Gregorio borgo medioevale",
            "canno_inserimento": "2013",
            "cdata_e_ora_inserimento": "2013-06-03T08:59:53Z",
            "cidentificatore_in_openstreetmap": "2328041071",
            "clongitudine": "12.5488923",
            "clatitudine": "43.1366074999999"
        }
        ,
        {
            "ccomune": "Assisi",
            "cprovincia": "PERUGIA",
            "cregione": "Umbria",
            "cnome": "Torre di Torchiagina",
            "canno_inserimento": "2013",
            "cdata_e_ora_inserimento": "2013-06-03T10:07:43Z",
            "cidentificatore_in_openstreetmap": "2330420606",
            "clongitudine": "12.5376922",
            "clatitudine": "43.1261726999999"
        }
        ,
        {
            "ccomune": "Campello sul Clitunno",
            "cprovincia": "PERUGIA",
            "cregione": "Umbria",
            "cnome": "Castello di Pissignano",
            "canno_inserimento": "2014",
            "cdata_e_ora_inserimento": "2014-07-02T11:03:31Z",
            "cidentificatore_in_openstreetmap": "2943276573",
            "clongitudine": "12.7597725",
            "clatitudine": "42.8430922"
        }
        ,
        {
            "ccomune": "Castiglione del Lago",
            "cprovincia": "PERUGIA",
            "cregione": "Umbria",
            "cnome": "Torre di Beccati Quest'altro",
            "canno_inserimento": "2016",
            "cdata_e_ora_inserimento": "2016-02-10T16:30:01Z",
            "cidentificatore_in_openstreetmap": "1711223006",
            "clongitudine": "11.9730088",
            "clatitudine": "43.0285506999999"
        }
        ,
        {
            "ccomune": "Cerreto di Spoleto",
            "cprovincia": "PERUGIA",
            "cregione": "Umbria",
            "cnome": "",
            "canno_inserimento": "2015",
            "cdata_e_ora_inserimento": "2015-10-22T12:05:59Z",
            "cidentificatore_in_openstreetmap": "3798062795",
            "clongitudine": "12.936595",
            "clatitudine": "42.8287143"
        }
        ,
        {
            "ccomune": "Citta' della Pieve",
            "cprovincia": "PERUGIA",
            "cregione": "Umbria",
            "cnome": "Castello di Salci",
            "canno_inserimento": "2012",
            "cdata_e_ora_inserimento": "2012-03-13T20:14:18Z",
            "cidentificatore_in_openstreetmap": "1673767971",
            "clongitudine": "11.9896282",
            "clatitudine": "42.8839596999999"
        }
        ,
        {
            "ccomune": "Citta' di Castello",
            "cprovincia": "PERUGIA",
            "cregione": "Umbria",
            "cnome": "Castello Bourbon di Petrelle",
            "canno_inserimento": "2014",
            "cdata_e_ora_inserimento": "2014-09-12T08:09:24Z",
            "cidentificatore_in_openstreetmap": "3073002983",
            "clongitudine": "12.1526456",
            "clatitudine": "43.3452188999999"
        }
        ,
        {
            "ccomune": "Lisciano Niccone",
            "cprovincia": "PERUGIA",
            "cregione": "Umbria",
            "cnome": "Castello di Sorbello",
            "canno_inserimento": "2011",
            "cdata_e_ora_inserimento": "2011-02-18T18:06:46Z",
            "cidentificatore_in_openstreetmap": "1159409837",
            "clongitudine": "12.1988217999999",
            "clatitudine": "43.275911"
        }
        ,
        {
            "ccomune": "Monte Santa Maria Tiberina",
            "cprovincia": "PERUGIA",
            "cregione": "Umbria",
            "cnome": "Castello Bourbon",
            "canno_inserimento": "2012",
            "cdata_e_ora_inserimento": "2012-06-07T10:16:28Z",
            "cidentificatore_in_openstreetmap": "1779033068",
            "clongitudine": "12.1626444",
            "clatitudine": "43.4376712999999"
        }
        ,
        {
            "ccomune": "Monte Santa Maria Tiberina",
            "cprovincia": "PERUGIA",
            "cregione": "Umbria",
            "cnome": "Castello di Lippiano",
            "canno_inserimento": "2013",
            "cdata_e_ora_inserimento": "2013-06-04T16:39:16Z",
            "cidentificatore_in_openstreetmap": "1900102180",
            "clongitudine": "12.120804",
            "clatitudine": "43.4622946"
        }
        ,
        {
            "ccomune": "Perugia",
            "cprovincia": "PERUGIA",
            "cregione": "Umbria",
            "cnome": "Castello di Civitella d'Arna",
            "canno_inserimento": "2014",
            "cdata_e_ora_inserimento": "2014-12-01T12:16:15Z",
            "cidentificatore_in_openstreetmap": "3213969173",
            "clongitudine": "12.4858408",
            "clatitudine": "43.1280750999999"
        }
        ,
        {
            "ccomune": "San Giustino",
            "cprovincia": "PERUGIA",
            "cregione": "Umbria",
            "cnome": "Castello Bufalini",
            "canno_inserimento": "2014",
            "cdata_e_ora_inserimento": "2014-01-09T12:26:04Z",
            "cidentificatore_in_openstreetmap": "703150915",
            "clongitudine": "12.1765221",
            "clatitudine": "43.5494046999999"
        }
        ,
        {
            "ccomune": "Umbertide",
            "cprovincia": "PERUGIA",
            "cregione": "Umbria",
            "cnome": "Castello di Civitella Ranieri",
            "canno_inserimento": "2014",
            "cdata_e_ora_inserimento": "2014-01-04T00:09:41Z",
            "cidentificatore_in_openstreetmap": "2608864332",
            "clongitudine": "12.3586372",
            "clatitudine": "43.3106549999999"
        }
        ,
        {
            "ccomune": "Castel Viscardo",
            "cprovincia": "TERNI",
            "cregione": "Umbria",
            "cnome": "",
            "canno_inserimento": "2014",
            "cdata_e_ora_inserimento": "2014-10-25T17:22:43Z",
            "cidentificatore_in_openstreetmap": "3149446078",
            "clongitudine": "12.0190208",
            "clatitudine": "42.7722105"
        }
        ,
        {
            "ccomune": "Fabro",
            "cprovincia": "TERNI",
            "cregione": "Umbria",
            "cnome": "Castello di Carnaiola",
            "canno_inserimento": "2014",
            "cdata_e_ora_inserimento": "2014-10-03T15:52:56Z",
            "cidentificatore_in_openstreetmap": "319572660",
            "clongitudine": "12.0580896",
            "clatitudine": "42.8785554"
        }
        ,
        {
            "ccomune": "Fabro",
            "cprovincia": "TERNI",
            "cregione": "Umbria",
            "cnome": "Castello di Fabro",
            "canno_inserimento": "2014",
            "cdata_e_ora_inserimento": "2014-10-05T12:23:06Z",
            "cidentificatore_in_openstreetmap": "3049523502",
            "clongitudine": "12.0132604",
            "clatitudine": "42.8641578"
        }
        ,
        {
            "ccomune": "Narni",
            "cprovincia": "TERNI",
            "cregione": "Umbria",
            "cnome": "",
            "canno_inserimento": "2012",
            "cdata_e_ora_inserimento": "2012-05-06T14:26:49Z",
            "cidentificatore_in_openstreetmap": "749982494",
            "clongitudine": "12.5161747",
            "clatitudine": "42.4997565999999"
        }
        ,
        {
            "ccomune": "Polino",
            "cprovincia": "TERNI",
            "cregione": "Umbria",
            "cnome": "Rocca di Polino",
            "canno_inserimento": "2015",
            "cdata_e_ora_inserimento": "2015-02-10T08:58:20Z",
            "cidentificatore_in_openstreetmap": "3341428582",
            "clongitudine": "12.8429240999999",
            "clatitudine": "42.5853354999999"
        }
        ,
        {
            "ccomune": "Capodimonte",
            "cprovincia": "VITERBO",
            "cregione": "Lazio",
            "cnome": "Palazzo Farnese",
            "canno_inserimento": "2011",
            "cdata_e_ora_inserimento": "2011-02-24T09:13:57Z",
            "cidentificatore_in_openstreetmap": "1132184490",
            "clongitudine": "11.9121149",
            "clatitudine": "42.5495542999999"
        }
        ,
        {
            "ccomune": "Civita Castellana",
            "cprovincia": "VITERBO",
            "cregione": "Lazio",
            "cnome": "Castello di Borghetto",
            "canno_inserimento": "2013",
            "cdata_e_ora_inserimento": "2013-04-01T20:58:20Z",
            "cidentificatore_in_openstreetmap": "891113420",
            "clongitudine": "12.4538344",
            "clatitudine": "42.3432388"
        }
        ,
        {
            "ccomune": "Faleria",
            "cprovincia": "VITERBO",
            "cregione": "Lazio",
            "cnome": "Castello degli Anguillara",
            "canno_inserimento": "2009",
            "cdata_e_ora_inserimento": "2009-06-13T13:22:30Z",
            "cidentificatore_in_openstreetmap": "419726002",
            "clongitudine": "12.4429276",
            "clatitudine": "42.2273862999999"
        }
        ,
        {
            "ccomune": "Ischia di Castro",
            "cprovincia": "VITERBO",
            "cregione": "Lazio",
            "cnome": "Palazzo Farnese",
            "canno_inserimento": "2011",
            "cdata_e_ora_inserimento": "2011-02-24T09:33:49Z",
            "cidentificatore_in_openstreetmap": "1132219474",
            "clongitudine": "11.7529904",
            "clatitudine": "42.5441642999999"
        }
        ,
        {
            "ccomune": "Onano",
            "cprovincia": "VITERBO",
            "cregione": "Lazio",
            "cnome": "Palazzo Monaldeschi della Cervara",
            "canno_inserimento": "2012",
            "cdata_e_ora_inserimento": "2012-07-31T14:54:43Z",
            "cidentificatore_in_openstreetmap": "1845197859",
            "clongitudine": "11.8161851",
            "clatitudine": "42.6926978999999"
        }
        ,
        {
            "ccomune": "Proceno",
            "cprovincia": "VITERBO",
            "cregione": "Lazio",
            "cnome": "Palazzo del Cardinale Guido Ascanio Sforza",
            "canno_inserimento": "2013",
            "cdata_e_ora_inserimento": "2013-10-29T22:39:05Z",
            "cidentificatore_in_openstreetmap": "1169700053",
            "clongitudine": "11.8299691",
            "clatitudine": "42.7572793"
        }
        ,
        {
            "ccomune": "Vasanello",
            "cprovincia": "VITERBO",
            "cregione": "Lazio",
            "cnome": "Castello Orsini",
            "canno_inserimento": "2015",
            "cdata_e_ora_inserimento": "2015-02-05T11:17:47Z",
            "cidentificatore_in_openstreetmap": "963839224",
            "clongitudine": "12.3464373",
            "clatitudine": "42.4177874"
        }
        ,
        {
            "ccomune": "Vejano",
            "cprovincia": "VITERBO",
            "cregione": "Lazio",
            "cnome": "",
            "canno_inserimento": "2013",
            "cdata_e_ora_inserimento": "2013-06-23T11:12:40Z",
            "cidentificatore_in_openstreetmap": "2357075752",
            "clongitudine": "12.0958916999999",
            "clatitudine": "42.2161621999999"
        }
        ,
        {
            "ccomune": "Vignanello",
            "cprovincia": "VITERBO",
            "cregione": "Lazio",
            "cnome": "Castello Ruspoli",
            "canno_inserimento": "2015",
            "cdata_e_ora_inserimento": "2015-04-17T11:23:50Z",
            "cidentificatore_in_openstreetmap": "3461414295",
            "clongitudine": "12.2804509999999",
            "clatitudine": "42.3841789"
        }
        ,
        {
            "ccomune": "Borgorose",
            "cprovincia": "RIETI",
            "cregione": "Lazio",
            "cnome": "",
            "canno_inserimento": "2014",
            "cdata_e_ora_inserimento": "2014-05-07T22:36:27Z",
            "cidentificatore_in_openstreetmap": "2843129002",
            "clongitudine": "13.2663093",
            "clatitudine": "42.2069695"
        }
        ,
        {
            "ccomune": "Borgorose",
            "cprovincia": "RIETI",
            "cregione": "Lazio",
            "cnome": "Castello di Collefegato",
            "canno_inserimento": "2014",
            "cdata_e_ora_inserimento": "2014-11-27T19:10:49Z",
            "cidentificatore_in_openstreetmap": "2854681889",
            "clongitudine": "13.2427039",
            "clatitudine": "42.1944270999999"
        }
        ,
        {
            "ccomune": "Cittareale",
            "cprovincia": "RIETI",
            "cregione": "Lazio",
            "cnome": "Rocca",
            "canno_inserimento": "2013",
            "cdata_e_ora_inserimento": "2013-05-22T13:31:57Z",
            "cidentificatore_in_openstreetmap": "2315848949",
            "clongitudine": "13.1597060999999",
            "clatitudine": "42.6202133"
        }
        ,
        {
            "ccomune": "Montebuono",
            "cprovincia": "RIETI",
            "cregione": "Lazio",
            "cnome": "",
            "canno_inserimento": "2015",
            "cdata_e_ora_inserimento": "2015-08-25T17:57:27Z",
            "cidentificatore_in_openstreetmap": "2127534907",
            "clongitudine": "12.5597068",
            "clatitudine": "42.3737762"
        }
        ,
        {
            "ccomune": "Orvinio",
            "cprovincia": "RIETI",
            "cregione": "Lazio",
            "cnome": "",
            "canno_inserimento": "2011",
            "cdata_e_ora_inserimento": "2011-02-03T15:33:12Z",
            "cidentificatore_in_openstreetmap": "1133891710",
            "clongitudine": "12.9400701",
            "clatitudine": "42.1321665999999"
        }
        ,
        {
            "ccomune": "Orvinio",
            "cprovincia": "RIETI",
            "cregione": "Lazio",
            "cnome": "di Vallebona",
            "canno_inserimento": "2016",
            "cdata_e_ora_inserimento": "2016-01-22T12:12:33Z",
            "cidentificatore_in_openstreetmap": "1732012502",
            "clongitudine": "12.9222547999999",
            "clatitudine": "42.1378400999999"
        }
        ,
        {
            "ccomune": "Salisano",
            "cprovincia": "RIETI",
            "cregione": "Lazio",
            "cnome": "",
            "canno_inserimento": "2012",
            "cdata_e_ora_inserimento": "2012-01-11T18:16:34Z",
            "cidentificatore_in_openstreetmap": "1585942235",
            "clongitudine": "12.7456204999999",
            "clatitudine": "42.2575369999999"
        }
        ,
        {
            "ccomune": "Torri in Sabina",
            "cprovincia": "RIETI",
            "cregione": "Lazio",
            "cnome": "",
            "canno_inserimento": "2010",
            "cdata_e_ora_inserimento": "2010-12-29T10:11:49Z",
            "cidentificatore_in_openstreetmap": "1070520965",
            "clongitudine": "12.6258876",
            "clatitudine": "42.3727482999999"
        }
        ,
        {
            "ccomune": "Castelnuovo di Porto",
            "cprovincia": "ROMA",
            "cregione": "Lazio",
            "cnome": "Rocca Colonna",
            "canno_inserimento": "2012",
            "cdata_e_ora_inserimento": "2012-08-13T19:31:38Z",
            "cidentificatore_in_openstreetmap": "1864740490",
            "clongitudine": "12.500847",
            "clatitudine": "42.1252704999999"
        }
        ,
        {
            "ccomune": "Grottaferrata",
            "cprovincia": "ROMA",
            "cregione": "Lazio",
            "cnome": "",
            "canno_inserimento": "2013",
            "cdata_e_ora_inserimento": "2013-05-03T23:06:46Z",
            "cidentificatore_in_openstreetmap": "2290944556",
            "clongitudine": "12.6482538",
            "clatitudine": "41.7984657"
        }
        ,
        {
            "ccomune": "Grottaferrata",
            "cprovincia": "ROMA",
            "cregione": "Lazio",
            "cnome": "Abbazzia di S. Nilo Bastioni di difesa",
            "canno_inserimento": "2013",
            "cdata_e_ora_inserimento": "2013-05-03T22:30:26Z",
            "cidentificatore_in_openstreetmap": "2290919809",
            "clongitudine": "12.6672276",
            "clatitudine": "41.7859167"
        }
        ,
        {
            "ccomune": "Guidonia Montecelio",
            "cprovincia": "ROMA",
            "cregione": "Lazio",
            "cnome": "",
            "canno_inserimento": "2012",
            "cdata_e_ora_inserimento": "2012-04-27T17:33:35Z",
            "cidentificatore_in_openstreetmap": "1733223548",
            "clongitudine": "12.7426029",
            "clatitudine": "42.0230324999999"
        }
        ,
        {
            "ccomune": "Licenza",
            "cprovincia": "ROMA",
            "cregione": "Lazio",
            "cnome": "",
            "canno_inserimento": "2011",
            "cdata_e_ora_inserimento": "2011-02-04T14:14:01Z",
            "cidentificatore_in_openstreetmap": "1135669102",
            "clongitudine": "12.9024766",
            "clatitudine": "42.0722255"
        }
        ,
        {
            "ccomune": "Nerola",
            "cprovincia": "ROMA",
            "cregione": "Lazio",
            "cnome": "Castello Orsini",
            "canno_inserimento": "2011",
            "cdata_e_ora_inserimento": "2011-03-18T07:59:52Z",
            "cidentificatore_in_openstreetmap": "1207022478",
            "clongitudine": "12.7868751",
            "clatitudine": "42.1630053"
        }
        ,
        {
            "ccomune": "Palestrina",
            "cprovincia": "ROMA",
            "cregione": "Lazio",
            "cnome": "Porta San Martino",
            "canno_inserimento": "2013",
            "cdata_e_ora_inserimento": "2013-02-07T21:26:25Z",
            "cidentificatore_in_openstreetmap": "2145855006",
            "clongitudine": "12.8884937",
            "clatitudine": "41.8393672999999"
        }
        ,
        {
            "ccomune": "Palestrina",
            "cprovincia": "ROMA",
            "cregione": "Lazio",
            "cnome": "Porta Santa Croce",
            "canno_inserimento": "2013",
            "cdata_e_ora_inserimento": "2013-02-07T21:26:25Z",
            "cidentificatore_in_openstreetmap": "2145855007",
            "clongitudine": "12.8940701",
            "clatitudine": "41.8402201999999"
        }
        ,
        {
            "ccomune": "Percile",
            "cprovincia": "ROMA",
            "cregione": "Lazio",
            "cnome": "",
            "canno_inserimento": "2012",
            "cdata_e_ora_inserimento": "2012-03-30T13:14:43Z",
            "cidentificatore_in_openstreetmap": "1133892332",
            "clongitudine": "12.9084622",
            "clatitudine": "42.0948909999999"
        }
        ,
        {
            "ccomune": "Roccagiovine",
            "cprovincia": "ROMA",
            "cregione": "Lazio",
            "cnome": "",
            "canno_inserimento": "2011",
            "cdata_e_ora_inserimento": "2011-02-04T14:13:59Z",
            "cidentificatore_in_openstreetmap": "1135669030",
            "clongitudine": "12.8999659999999",
            "clatitudine": "42.0499303"
        }
        ,
        {
            "ccomune": "Rocca Priora",
            "cprovincia": "ROMA",
            "cregione": "Lazio",
            "cnome": "",
            "canno_inserimento": "2012",
            "cdata_e_ora_inserimento": "2012-10-11T12:18:43Z",
            "cidentificatore_in_openstreetmap": "1871857579",
            "clongitudine": "12.7635866999999",
            "clatitudine": "41.7944195999999"
        }
        ,
        {
            "ccomune": "Roma",
            "cprovincia": "ROMA",
            "cregione": "Lazio",
            "cnome": "Castello di Gulio II",
            "canno_inserimento": "2013",
            "cdata_e_ora_inserimento": "2013-12-17T13:06:23Z",
            "cidentificatore_in_openstreetmap": "2079045670",
            "clongitudine": "12.3012408",
            "clatitudine": "41.7592743"
        }
        ,
        {
            "ccomune": "Roma",
            "cprovincia": "ROMA",
            "cregione": "Lazio",
            "cnome": "Castello di Lunghezza",
            "canno_inserimento": "2014",
            "cdata_e_ora_inserimento": "2014-12-12T18:30:50Z",
            "cidentificatore_in_openstreetmap": "1507426935",
            "clongitudine": "12.666674",
            "clatitudine": "41.9251123"
        }
        ,
        {
            "ccomune": "Roviano",
            "cprovincia": "ROMA",
            "cregione": "Lazio",
            "cnome": "Castello Brancaccio",
            "canno_inserimento": "2014",
            "cdata_e_ora_inserimento": "2014-05-01T21:44:36Z",
            "cidentificatore_in_openstreetmap": "1705946699",
            "clongitudine": "12.9937521",
            "clatitudine": "42.025157"
        }
        ,
        {
            "ccomune": "Roviano",
            "cprovincia": "ROMA",
            "cregione": "Lazio",
            "cnome": "Torre",
            "canno_inserimento": "2014",
            "cdata_e_ora_inserimento": "2014-05-01T21:54:21Z",
            "cidentificatore_in_openstreetmap": "2812986102",
            "clongitudine": "12.9777083",
            "clatitudine": "42.0309053"
        }
        ,
        {
            "ccomune": "San Polo dei Cavalieri",
            "cprovincia": "ROMA",
            "cregione": "Lazio",
            "cnome": "Castello Cesi",
            "canno_inserimento": "2012",
            "cdata_e_ora_inserimento": "2012-04-11T17:32:52Z",
            "cidentificatore_in_openstreetmap": "1166346607",
            "clongitudine": "12.8385491",
            "clatitudine": "42.0098423"
        }
        ,
        {
            "ccomune": "Vicovaro",
            "cprovincia": "ROMA",
            "cregione": "Lazio",
            "cnome": "Cenci",
            "canno_inserimento": "2012",
            "cdata_e_ora_inserimento": "2012-04-05T01:30:08Z",
            "cidentificatore_in_openstreetmap": "1154224885",
            "clongitudine": "12.8938749",
            "clatitudine": "42.0161913999999"
        }
        ,
        {
            "ccomune": "Lariano",
            "cprovincia": "ROMA",
            "cregione": "Lazio",
            "cnome": "Castello d'Ariano",
            "canno_inserimento": "2010",
            "cdata_e_ora_inserimento": "2010-10-17T12:39:14Z",
            "cidentificatore_in_openstreetmap": "666474791",
            "clongitudine": "12.7910868",
            "clatitudine": "41.7390538"
        }
        ,
        {
            "ccomune": "Cori",
            "cprovincia": "LATINA",
            "cregione": "Lazio",
            "cnome": "Palazzo Salviati",
            "canno_inserimento": "2014",
            "cdata_e_ora_inserimento": "2014-05-20T17:27:44Z",
            "cidentificatore_in_openstreetmap": "1844548626",
            "clongitudine": "12.8746968",
            "clatitudine": "41.6857763"
        }
        ,
        {
            "ccomune": "Sermoneta",
            "cprovincia": "LATINA",
            "cregione": "Lazio",
            "cnome": "",
            "canno_inserimento": "2012",
            "cdata_e_ora_inserimento": "2012-05-10T17:55:31Z",
            "cidentificatore_in_openstreetmap": "1736994279",
            "clongitudine": "12.9843262",
            "clatitudine": "41.5499171"
        }
        ,
        {
            "ccomune": "Alvito",
            "cprovincia": "FROSINONE",
            "cregione": "Lazio",
            "cnome": "Castello di Alvito",
            "canno_inserimento": "2015",
            "cdata_e_ora_inserimento": "2015-04-29T17:58:52Z",
            "cidentificatore_in_openstreetmap": "3487199711",
            "clongitudine": "13.7405162",
            "clatitudine": "41.6921522"
        }
        ,
        {
            "ccomune": "Morolo",
            "cprovincia": "FROSINONE",
            "cregione": "Lazio",
            "cnome": "",
            "canno_inserimento": "2016",
            "cdata_e_ora_inserimento": "2016-01-17T11:56:21Z",
            "cidentificatore_in_openstreetmap": "3951456259",
            "clongitudine": "13.1958676",
            "clatitudine": "41.6370819999999"
        }
        ,
        {
            "ccomune": "Sora",
            "cprovincia": "FROSINONE",
            "cregione": "Lazio",
            "cnome": "Castello dei Santi Casto e Cassio",
            "canno_inserimento": "2016",
            "cdata_e_ora_inserimento": "2016-02-12T17:07:46Z",
            "cidentificatore_in_openstreetmap": "2093153447",
            "clongitudine": "13.6124022999999",
            "clatitudine": "41.7284109"
        }
        ,
        {
            "ccomune": "Trevi nel Lazio",
            "cprovincia": "FROSINONE",
            "cregione": "Lazio",
            "cnome": "Castello Cajetani",
            "canno_inserimento": "2012",
            "cdata_e_ora_inserimento": "2012-04-10T11:00:11Z",
            "cidentificatore_in_openstreetmap": "1709824321",
            "clongitudine": "13.2471005",
            "clatitudine": "41.8623479999999"
        }
        ,
        {
            "ccomune": "Vicalvi",
            "cprovincia": "FROSINONE",
            "cregione": "Lazio",
            "cnome": "Castello di Vicalvi",
            "canno_inserimento": "2015",
            "cdata_e_ora_inserimento": "2015-04-29T18:14:49Z",
            "cidentificatore_in_openstreetmap": "3487233747",
            "clongitudine": "13.7139623",
            "clatitudine": "41.6820408"
        }
        ,
        {
            "ccomune": "Riardo",
            "cprovincia": "CASERTA",
            "cregione": "Campania",
            "cnome": "",
            "canno_inserimento": "2012",
            "cdata_e_ora_inserimento": "2012-04-28T20:59:47Z",
            "cidentificatore_in_openstreetmap": "1734524911",
            "clongitudine": "14.1539524",
            "clatitudine": "41.2624126999999"
        }
        ,
        {
            "ccomune": "Vairano Patenora",
            "cprovincia": "CASERTA",
            "cregione": "Campania",
            "cnome": "",
            "canno_inserimento": "2014",
            "cdata_e_ora_inserimento": "2014-06-01T07:52:34Z",
            "cidentificatore_in_openstreetmap": "2892973321",
            "clongitudine": "14.1349126",
            "clatitudine": "41.3343532999999"
        }
        ,
        {
            "ccomune": "San Nazzaro",
            "cprovincia": "BENEVENTO",
            "cregione": "Campania",
            "cnome": "Castello",
            "canno_inserimento": "2013",
            "cdata_e_ora_inserimento": "2013-04-03T07:46:43Z",
            "cidentificatore_in_openstreetmap": "2246061239",
            "clongitudine": "14.8554606",
            "clatitudine": "41.0472016"
        }
        ,
        {
            "ccomune": "Agerola",
            "cprovincia": "NAPOLI",
            "cregione": "Campania",
            "cnome": "Castello Lauritano",
            "canno_inserimento": "2015",
            "cdata_e_ora_inserimento": "2015-03-03T19:38:31Z",
            "cidentificatore_in_openstreetmap": "945460618",
            "clongitudine": "14.5762902",
            "clatitudine": "40.627425"
        }
        ,
        {
            "ccomune": "Agerola",
            "cprovincia": "NAPOLI",
            "cregione": "Campania",
            "cnome": "Colonia Montana",
            "canno_inserimento": "2015",
            "cdata_e_ora_inserimento": "2015-03-02T23:54:59Z",
            "cidentificatore_in_openstreetmap": "1982764460",
            "clongitudine": "14.5654838",
            "clatitudine": "40.6237765999999"
        }
        ,
        {
            "ccomune": "Forio",
            "cprovincia": "NAPOLI",
            "cregione": "Campania",
            "cnome": "",
            "canno_inserimento": "2012",
            "cdata_e_ora_inserimento": "2012-03-01T10:29:27Z",
            "cidentificatore_in_openstreetmap": "1654208474",
            "clongitudine": "13.8584090999999",
            "clatitudine": "40.7372108"
        }
        ,
        {
            "ccomune": "Forio",
            "cprovincia": "NAPOLI",
            "cregione": "Campania",
            "cnome": "",
            "canno_inserimento": "2012",
            "cdata_e_ora_inserimento": "2012-03-01T10:59:20Z",
            "cidentificatore_in_openstreetmap": "1654238179",
            "clongitudine": "13.8727747",
            "clatitudine": "40.7602569"
        }
        ,
        {
            "ccomune": "Piano di Sorrento",
            "cprovincia": "NAPOLI",
            "cregione": "Campania",
            "cnome": "",
            "canno_inserimento": "2011",
            "cdata_e_ora_inserimento": "2011-06-19T13:34:24Z",
            "cidentificatore_in_openstreetmap": "1330819499",
            "clongitudine": "14.4290419",
            "clatitudine": "40.6180366999999"
        }
        ,
        {
            "ccomune": "Portici",
            "cprovincia": "NAPOLI",
            "cregione": "Campania",
            "cnome": "Palazzo Reale di Portici",
            "canno_inserimento": "2013",
            "cdata_e_ora_inserimento": "2013-04-01T22:16:27Z",
            "cidentificatore_in_openstreetmap": "472481721",
            "clongitudine": "14.3431244",
            "clatitudine": "40.8115950999999"
        }
        ,
        {
            "ccomune": "Portici",
            "cprovincia": "NAPOLI",
            "cregione": "Campania",
            "cnome": "Torre Medievale",
            "canno_inserimento": "2009",
            "cdata_e_ora_inserimento": "2009-08-23T23:31:44Z",
            "cidentificatore_in_openstreetmap": "472481730",
            "clongitudine": "14.339248",
            "clatitudine": "40.8141733"
        }
        ,
        {
            "ccomune": "Ariano Irpino",
            "cprovincia": "AVELLINO",
            "cregione": "Campania",
            "cnome": "",
            "canno_inserimento": "2013",
            "cdata_e_ora_inserimento": "2013-01-29T16:34:57Z",
            "cidentificatore_in_openstreetmap": "2133855016",
            "clongitudine": "15.0947271",
            "clatitudine": "41.1543355"
        }
        ,
        {
            "ccomune": "Grottaminarda",
            "cprovincia": "AVELLINO",
            "cregione": "Campania",
            "cnome": "D'Aquino",
            "canno_inserimento": "2008",
            "cdata_e_ora_inserimento": "2008-05-16T12:52:55Z",
            "cidentificatore_in_openstreetmap": "264892549",
            "clongitudine": "15.060006",
            "clatitudine": "41.0737838"
        }
        ,
        {
            "ccomune": "Montella",
            "cprovincia": "AVELLINO",
            "cregione": "Campania",
            "cnome": "Castello",
            "canno_inserimento": "2011",
            "cdata_e_ora_inserimento": "2011-09-18T07:19:27Z",
            "cidentificatore_in_openstreetmap": "1436202982",
            "clongitudine": "15.0124448",
            "clatitudine": "40.836837"
        }
        ,
        {
            "ccomune": "Pietradefusi",
            "cprovincia": "AVELLINO",
            "cregione": "Campania",
            "cnome": "Torre Aragonese",
            "canno_inserimento": "2014",
            "cdata_e_ora_inserimento": "2014-07-03T09:26:26Z",
            "cidentificatore_in_openstreetmap": "2945534467",
            "clongitudine": "14.8838586",
            "clatitudine": "41.0441293"
        }
        ,
        {
            "ccomune": "Senerchia",
            "cprovincia": "AVELLINO",
            "cregione": "Campania",
            "cnome": "",
            "canno_inserimento": "2011",
            "cdata_e_ora_inserimento": "2011-04-06T15:23:39Z",
            "cidentificatore_in_openstreetmap": "1234792263",
            "clongitudine": "15.1986700999999",
            "clatitudine": "40.7376712"
        }
        ,
        {
            "ccomune": "Acerno",
            "cprovincia": "SALERNO",
            "cregione": "Campania",
            "cnome": "Castello di Acerno",
            "canno_inserimento": "2014",
            "cdata_e_ora_inserimento": "2014-04-07T21:24:00Z",
            "cidentificatore_in_openstreetmap": "2776218792",
            "clongitudine": "15.0780513",
            "clatitudine": "40.7207484999999"
        }
        ,
        {
            "ccomune": "Auletta",
            "cprovincia": "SALERNO",
            "cregione": "Campania",
            "cnome": "Castello Marchesale (Scanderbeg)",
            "canno_inserimento": "2015",
            "cdata_e_ora_inserimento": "2015-06-19T14:12:48Z",
            "cidentificatore_in_openstreetmap": "3605283006",
            "clongitudine": "15.4262815999999",
            "clatitudine": "40.5582411999999"
        }
        ,
        {
            "ccomune": "Castel San Giorgio",
            "cprovincia": "SALERNO",
            "cregione": "Campania",
            "cnome": "",
            "canno_inserimento": "2015",
            "cdata_e_ora_inserimento": "2015-01-24T14:19:11Z",
            "cidentificatore_in_openstreetmap": "3307623669",
            "clongitudine": "14.6935085",
            "clatitudine": "40.7842398"
        }
        ,
        {
            "ccomune": "Centola",
            "cprovincia": "SALERNO",
            "cregione": "Campania",
            "cnome": "Castello di Molpa",
            "canno_inserimento": "2011",
            "cdata_e_ora_inserimento": "2011-05-01T01:01:54Z",
            "cidentificatore_in_openstreetmap": "1268312092",
            "clongitudine": "15.3038817",
            "clatitudine": "40.0324397999999"
        }
        ,
        {
            "ccomune": "Eboli",
            "cprovincia": "SALERNO",
            "cregione": "Campania",
            "cnome": "Castello Colonna",
            "canno_inserimento": "2011",
            "cdata_e_ora_inserimento": "2011-04-22T16:45:39Z",
            "cidentificatore_in_openstreetmap": "1081511418",
            "clongitudine": "15.0545223",
            "clatitudine": "40.6208612"
        }
        ,
        {
            "ccomune": "Eboli",
            "cprovincia": "SALERNO",
            "cregione": "Campania",
            "cnome": "Il Castelluccio",
            "canno_inserimento": "2014",
            "cdata_e_ora_inserimento": "2014-01-09T01:17:38Z",
            "cidentificatore_in_openstreetmap": "2615761385",
            "clongitudine": "15.0259441",
            "clatitudine": "40.6112870999999"
        }
        ,
        {
            "ccomune": "Morigerati",
            "cprovincia": "SALERNO",
            "cregione": "Campania",
            "cnome": "",
            "canno_inserimento": "2011",
            "cdata_e_ora_inserimento": "2011-04-05T19:24:59Z",
            "cidentificatore_in_openstreetmap": "1234013962",
            "clongitudine": "15.5547395",
            "clatitudine": "40.1389727999999"
        }
        ,
        {
            "ccomune": "Nocera Inferiore",
            "cprovincia": "SALERNO",
            "cregione": "Campania",
            "cnome": "Castello Fienga",
            "canno_inserimento": "2014",
            "cdata_e_ora_inserimento": "2014-02-09T00:39:35Z",
            "cidentificatore_in_openstreetmap": "1892072446",
            "clongitudine": "14.6425037",
            "clatitudine": "40.7505922"
        }
        ,
        {
            "ccomune": "Sacco",
            "cprovincia": "SALERNO",
            "cregione": "Campania",
            "cnome": "Resti del Castello del duca Zottone di Benevento",
            "canno_inserimento": "2013",
            "cdata_e_ora_inserimento": "2013-04-30T11:18:53Z",
            "cidentificatore_in_openstreetmap": "2286622872",
            "clongitudine": "15.3680105",
            "clatitudine": "40.3877513999999"
        }
        ,
        {
            "ccomune": "Sarno",
            "cprovincia": "SALERNO",
            "cregione": "Campania",
            "cnome": "Il Castello",
            "canno_inserimento": "2013",
            "cdata_e_ora_inserimento": "2013-04-30T10:48:04Z",
            "cidentificatore_in_openstreetmap": "2286605434",
            "clongitudine": "14.6183645",
            "clatitudine": "40.8180993"
        }
        ,
        {
            "ccomune": "Sessa Cilento",
            "cprovincia": "SALERNO",
            "cregione": "Campania",
            "cnome": "Castelluccio",
            "canno_inserimento": "2013",
            "cdata_e_ora_inserimento": "2013-12-02T20:03:50Z",
            "cidentificatore_in_openstreetmap": "960506533",
            "clongitudine": "15.0512751",
            "clatitudine": "40.2500787"
        }
        ,
        {
            "ccomune": "Fossa",
            "cprovincia": "L'AQUILA",
            "cregione": "Abruzzo",
            "cnome": "Castello di Fossa",
            "canno_inserimento": "2014",
            "cdata_e_ora_inserimento": "2014-10-11T15:18:12Z",
            "cidentificatore_in_openstreetmap": "3124159786",
            "clongitudine": "13.4867533",
            "clatitudine": "42.2931062999999"
        }
        ,
        {
            "ccomune": "Ovindoli",
            "cprovincia": "L'AQUILA",
            "cregione": "Abruzzo",
            "cnome": "",
            "canno_inserimento": "2013",
            "cdata_e_ora_inserimento": "2013-11-18T13:40:10Z",
            "cidentificatore_in_openstreetmap": "2537925903",
            "clongitudine": "13.5102755",
            "clatitudine": "42.0989308999999"
        }
        ,
        {
            "ccomune": "Pacentro",
            "cprovincia": "L'AQUILA",
            "cregione": "Abruzzo",
            "cnome": "Castello Caldora",
            "canno_inserimento": "2015",
            "cdata_e_ora_inserimento": "2015-12-02T09:30:51Z",
            "cidentificatore_in_openstreetmap": "724261178",
            "clongitudine": "13.9953927999999",
            "clatitudine": "42.0515544"
        }
        ,
        {
            "ccomune": "Pescina",
            "cprovincia": "L'AQUILA",
            "cregione": "Abruzzo",
            "cnome": "",
            "canno_inserimento": "2014",
            "cdata_e_ora_inserimento": "2014-02-20T18:37:03Z",
            "cidentificatore_in_openstreetmap": "2682296691",
            "clongitudine": "13.666847",
            "clatitudine": "42.0280402"
        }
        ,
        {
            "ccomune": "Sant'Eusanio Forconese",
            "cprovincia": "L'AQUILA",
            "cregione": "Abruzzo",
            "cnome": "",
            "canno_inserimento": "2015",
            "cdata_e_ora_inserimento": "2015-06-26T11:16:04Z",
            "cidentificatore_in_openstreetmap": "3619525038",
            "clongitudine": "13.5208461999999",
            "clatitudine": "42.2939319999999"
        }
        ,
        {
            "ccomune": "Scurcola Marsicana",
            "cprovincia": "L'AQUILA",
            "cregione": "Abruzzo",
            "cnome": "La Rocca",
            "canno_inserimento": "2013",
            "cdata_e_ora_inserimento": "2013-02-22T17:43:06Z",
            "cidentificatore_in_openstreetmap": "2167318929",
            "clongitudine": "13.3412372",
            "clatitudine": "42.0668438"
        }
        ,
        {
            "ccomune": "Teramo",
            "cprovincia": "TERAMO",
            "cregione": "Abruzzo",
            "cnome": "Castello Della Monica",
            "canno_inserimento": "2013",
            "cdata_e_ora_inserimento": "2013-10-05T11:18:46Z",
            "cidentificatore_in_openstreetmap": "1659665994",
            "clongitudine": "13.6946032",
            "clatitudine": "42.6607705999999"
        }
        ,
        {
            "ccomune": "Valle Castellana",
            "cprovincia": "TERAMO",
            "cregione": "Abruzzo",
            "cnome": "Castel Manfrino",
            "canno_inserimento": "2014",
            "cdata_e_ora_inserimento": "2014-02-08T23:26:10Z",
            "cidentificatore_in_openstreetmap": "1716707724",
            "clongitudine": "13.5898283",
            "clatitudine": "42.7472897"
        }
        ,
        {
            "ccomune": "Castiglione a Casauria",
            "cprovincia": "PESCARA",
            "cregione": "Abruzzo",
            "cnome": "Palazzo de Petris Fraggianni",
            "canno_inserimento": "2014",
            "cdata_e_ora_inserimento": "2014-05-09T14:42:10Z",
            "cidentificatore_in_openstreetmap": "489356326",
            "clongitudine": "13.8951508",
            "clatitudine": "42.2365017999999"
        }
        ,
        {
            "ccomune": "Elice",
            "cprovincia": "PESCARA",
            "cregione": "Abruzzo",
            "cnome": "Castello Medievale",
            "canno_inserimento": "2014",
            "cdata_e_ora_inserimento": "2014-12-30T07:04:42Z",
            "cidentificatore_in_openstreetmap": "3021799138",
            "clongitudine": "13.9681951",
            "clatitudine": "42.5183359999999"
        }
        ,
        {
            "ccomune": "Nocciano",
            "cprovincia": "PESCARA",
            "cregione": "Abruzzo",
            "cnome": "Castello De Sterlich-Aliprandi",
            "canno_inserimento": "2009",
            "cdata_e_ora_inserimento": "2009-04-21T21:31:58Z",
            "cidentificatore_in_openstreetmap": "379745961",
            "clongitudine": "13.9834581",
            "clatitudine": "42.333311"
        }
        ,
        {
            "ccomune": "Torre de' Passeri",
            "cprovincia": "PESCARA",
            "cregione": "Abruzzo",
            "cnome": "Castelluccio",
            "canno_inserimento": "2009",
            "cdata_e_ora_inserimento": "2009-08-23T18:20:41Z",
            "cidentificatore_in_openstreetmap": "472344318",
            "clongitudine": "13.9266831999999",
            "clatitudine": "42.2433656999999"
        }
        ,
        {
            "ccomune": "Montebello sul Sangro",
            "cprovincia": "CHIETI",
            "cregione": "Abruzzo",
            "cnome": "Paese Vecchio",
            "canno_inserimento": "2011",
            "cdata_e_ora_inserimento": "2011-04-20T12:27:08Z",
            "cidentificatore_in_openstreetmap": "1252356752",
            "clongitudine": "14.3272774999999",
            "clatitudine": "41.9893209999999"
        }
        ,
        {
            "ccomune": "Crecchio",
            "cprovincia": "CHIETI",
            "cregione": "Abruzzo",
            "cnome": "Castello Ducale De Riseis - D'Aragona",
            "canno_inserimento": "2013",
            "cdata_e_ora_inserimento": "2013-09-13T20:02:48Z",
            "cidentificatore_in_openstreetmap": "1942016415",
            "clongitudine": "14.3265806",
            "clatitudine": "42.2966363"
        }
        ,
        {
            "ccomune": "Miglianico",
            "cprovincia": "CHIETI",
            "cregione": "Abruzzo",
            "cnome": "",
            "canno_inserimento": "2014",
            "cdata_e_ora_inserimento": "2014-12-31T16:31:04Z",
            "cidentificatore_in_openstreetmap": "3261999164",
            "clongitudine": "14.2910097",
            "clatitudine": "42.3599512999999"
        }
        ,
        {
            "ccomune": "Apricena",
            "cprovincia": "FOGGIA",
            "cregione": "Puglia",
            "cnome": "Castel Pagano",
            "canno_inserimento": "2014",
            "cdata_e_ora_inserimento": "2014-08-18T11:00:34Z",
            "cidentificatore_in_openstreetmap": "1702343243",
            "clongitudine": "15.530695",
            "clatitudine": "41.7560836999999"
        }
        ,
        {
            "ccomune": "Apricena",
            "cprovincia": "FOGGIA",
            "cregione": "Puglia",
            "cnome": "Palazzo Baronale",
            "canno_inserimento": "2009",
            "cdata_e_ora_inserimento": "2009-11-13T19:01:22Z",
            "cidentificatore_in_openstreetmap": "563217307",
            "clongitudine": "15.441599",
            "clatitudine": "41.7858777"
        }
        ,
        {
            "ccomune": "Deliceto",
            "cprovincia": "FOGGIA",
            "cregione": "Puglia",
            "cnome": "Castello di Deliceto",
            "canno_inserimento": "2010",
            "cdata_e_ora_inserimento": "2010-03-16T23:10:27Z",
            "cidentificatore_in_openstreetmap": "667530948",
            "clongitudine": "15.3891489",
            "clatitudine": "41.2215141"
        }
        ,
        {
            "ccomune": "Peschici",
            "cprovincia": "FOGGIA",
            "cregione": "Puglia",
            "cnome": "",
            "canno_inserimento": "2013",
            "cdata_e_ora_inserimento": "2013-06-15T09:34:02Z",
            "cidentificatore_in_openstreetmap": "2345304556",
            "clongitudine": "16.0123883",
            "clatitudine": "41.9498395"
        }
        ,
        {
            "ccomune": "Serracapriola",
            "cprovincia": "FOGGIA",
            "cregione": "Puglia",
            "cnome": "",
            "canno_inserimento": "2011",
            "cdata_e_ora_inserimento": "2011-04-13T21:31:02Z",
            "cidentificatore_in_openstreetmap": "1243811812",
            "clongitudine": "15.2339698",
            "clatitudine": "41.8837576"
        }
        ,
        {
            "ccomune": "Vieste",
            "cprovincia": "FOGGIA",
            "cregione": "Puglia",
            "cnome": "Castello",
            "canno_inserimento": "2011",
            "cdata_e_ora_inserimento": "2011-10-05T14:22:19Z",
            "cidentificatore_in_openstreetmap": "1216633998",
            "clongitudine": "16.1795116",
            "clatitudine": "41.8809448"
        }
        ,
        {
            "ccomune": "Massafra",
            "cprovincia": "TARANTO",
            "cregione": "Puglia",
            "cnome": "",
            "canno_inserimento": "2014",
            "cdata_e_ora_inserimento": "2014-02-09T00:26:34Z",
            "cidentificatore_in_openstreetmap": "1434165120",
            "clongitudine": "17.1111444",
            "clatitudine": "40.5871623"
        }
        ,
        {
            "ccomune": "Palagianello",
            "cprovincia": "TARANTO",
            "cregione": "Puglia",
            "cnome": "castello Caracciolo",
            "canno_inserimento": "2014",
            "cdata_e_ora_inserimento": "2014-06-30T15:02:44Z",
            "cidentificatore_in_openstreetmap": "2940657812",
            "clongitudine": "16.9739611",
            "clatitudine": "40.613495"
        }
        ,
        {
            "ccomune": "Brindisi",
            "cprovincia": "BRINDISI",
            "cregione": "Puglia",
            "cnome": "Castello Svevo",
            "canno_inserimento": "2014",
            "cdata_e_ora_inserimento": "2014-01-21T17:19:01Z",
            "cidentificatore_in_openstreetmap": "2631353308",
            "clongitudine": "17.9372219999999",
            "clatitudine": "40.64023"
        }
        ,
        {
            "ccomune": "Castri di Lecce",
            "cprovincia": "LECCE",
            "cregione": "Puglia",
            "cnome": "palazzo Ducale",
            "canno_inserimento": "2015",
            "cdata_e_ora_inserimento": "2015-06-05T08:15:53Z",
            "cidentificatore_in_openstreetmap": "3187598769",
            "clongitudine": "18.26536",
            "clatitudine": "40.272928"
        }
        ,
        {
            "ccomune": "Vernole",
            "cprovincia": "LECCE",
            "cregione": "Puglia",
            "cnome": "Palazzo Baronale",
            "canno_inserimento": "2015",
            "cdata_e_ora_inserimento": "2015-11-30T15:07:48Z",
            "cidentificatore_in_openstreetmap": "3869302968",
            "clongitudine": "18.3173342999999",
            "clatitudine": "40.3055609"
        }
        ,
        {
            "ccomune": "Avigliano",
            "cprovincia": "POTENZA",
            "cregione": "Basilicata",
            "cnome": "Castello di Lagopesole",
            "canno_inserimento": "2009",
            "cdata_e_ora_inserimento": "2009-10-18T06:06:36Z",
            "cidentificatore_in_openstreetmap": "534538663",
            "clongitudine": "15.7328086",
            "clatitudine": "40.8070126"
        }
        ,
        {
            "ccomune": "Calvello",
            "cprovincia": "POTENZA",
            "cregione": "Basilicata",
            "cnome": "Castello Carafa-Ruffo",
            "canno_inserimento": "2014",
            "cdata_e_ora_inserimento": "2014-02-07T16:22:06Z",
            "cidentificatore_in_openstreetmap": "2659646731",
            "clongitudine": "15.8498362",
            "clatitudine": "40.4764464"
        }
        ,
        {
            "ccomune": "Lavello",
            "cprovincia": "POTENZA",
            "cregione": "Basilicata",
            "cnome": "",
            "canno_inserimento": "2013",
            "cdata_e_ora_inserimento": "2013-03-24T19:33:40Z",
            "cidentificatore_in_openstreetmap": "2219273474",
            "clongitudine": "15.8009611",
            "clatitudine": "41.0490077999999"
        }
        ,
        {
            "ccomune": "Melfi",
            "cprovincia": "POTENZA",
            "cregione": "Basilicata",
            "cnome": "Castello di Melfi",
            "canno_inserimento": "2015",
            "cdata_e_ora_inserimento": "2015-04-27T11:08:11Z",
            "cidentificatore_in_openstreetmap": "700106977",
            "clongitudine": "15.6531435",
            "clatitudine": "40.9983463"
        }
        ,
        {
            "ccomune": "Missanello",
            "cprovincia": "POTENZA",
            "cregione": "Basilicata",
            "cnome": "",
            "canno_inserimento": "2015",
            "cdata_e_ora_inserimento": "2015-08-15T15:24:23Z",
            "cidentificatore_in_openstreetmap": "3698670645",
            "clongitudine": "16.1665283",
            "clatitudine": "40.2827283"
        }
        ,
        {
            "ccomune": "Tito",
            "cprovincia": "POTENZA",
            "cregione": "Basilicata",
            "cnome": "Torre di Satriano",
            "canno_inserimento": "2013",
            "cdata_e_ora_inserimento": "2013-12-01T17:55:45Z",
            "cidentificatore_in_openstreetmap": "1238539260",
            "clongitudine": "15.637759",
            "clatitudine": "40.570056"
        }
        ,
        {
            "ccomune": "Viggianello",
            "cprovincia": "POTENZA",
            "cregione": "Basilicata",
            "cnome": "Castello dei Principi di Sanseverino",
            "canno_inserimento": "2011",
            "cdata_e_ora_inserimento": "2011-06-19T15:51:45Z",
            "cidentificatore_in_openstreetmap": "1330960545",
            "clongitudine": "16.0870111",
            "clatitudine": "39.9735909999999"
        }
        ,
        {
            "ccomune": "Tricarico",
            "cprovincia": "MATERA",
            "cregione": "Basilicata",
            "cnome": "torre normanna",
            "canno_inserimento": "2016",
            "cdata_e_ora_inserimento": "2016-01-07T12:24:55Z",
            "cidentificatore_in_openstreetmap": "3931977695",
            "clongitudine": "16.1470997999999",
            "clatitudine": "40.6205202"
        }
        ,
        {
            "ccomune": "Aieta",
            "cprovincia": "COSENZA",
            "cregione": "Calabria",
            "cnome": "Palazzo marchionale Martirano-Spinelli XVI secol",
            "canno_inserimento": "2014",
            "cdata_e_ora_inserimento": "2014-07-21T09:01:35Z",
            "cidentificatore_in_openstreetmap": "2972710564",
            "clongitudine": "15.8238498",
            "clatitudine": "39.9293254"
        }
        ,
        {
            "ccomune": "Orsomarso",
            "cprovincia": "COSENZA",
            "cregione": "Calabria",
            "cnome": "",
            "canno_inserimento": "2013",
            "cdata_e_ora_inserimento": "2013-06-17T23:50:59Z",
            "cidentificatore_in_openstreetmap": "2350116980",
            "clongitudine": "15.9075685999999",
            "clatitudine": "39.7986221999999"
        }
        ,
        {
            "ccomune": "Sangineto",
            "cprovincia": "COSENZA",
            "cregione": "Calabria",
            "cnome": "Il Castello del Principe",
            "canno_inserimento": "2015",
            "cdata_e_ora_inserimento": "2015-10-28T22:41:20Z",
            "cidentificatore_in_openstreetmap": "3807576703",
            "clongitudine": "15.8651417",
            "clatitudine": "39.5905074"
        }
        ,
        {
            "ccomune": "Palmi",
            "cprovincia": "REGGIO CALABRIA",
            "cregione": "Calabria",
            "cnome": "Fortino di Pietrenere",
            "canno_inserimento": "2012",
            "cdata_e_ora_inserimento": "2012-04-15T11:46:13Z",
            "cidentificatore_in_openstreetmap": "1699495574",
            "clongitudine": "15.8642292",
            "clatitudine": "38.3975314999999"
        }
        ,
        {
            "ccomune": "Erice",
            "cprovincia": "TRAPANI",
            "cregione": "Sicilia",
            "cnome": "",
            "canno_inserimento": "2013",
            "cdata_e_ora_inserimento": "2013-08-03T12:46:53Z",
            "cidentificatore_in_openstreetmap": "1454213483",
            "clongitudine": "12.5904421",
            "clatitudine": "38.0358372999999"
        }
        ,
        {
            "ccomune": "Favignana",
            "cprovincia": "TRAPANI",
            "cregione": "Sicilia",
            "cnome": "",
            "canno_inserimento": "2012",
            "cdata_e_ora_inserimento": "2012-10-30T20:07:41Z",
            "cidentificatore_in_openstreetmap": "309135710",
            "clongitudine": "12.0640988",
            "clatitudine": "37.9922522"
        }
        ,
        {
            "ccomune": "Favignana",
            "cprovincia": "TRAPANI",
            "cregione": "Sicilia",
            "cnome": "Castello Santa Caterina",
            "canno_inserimento": "2013",
            "cdata_e_ora_inserimento": "2013-08-06T13:26:06Z",
            "cidentificatore_in_openstreetmap": "463258587",
            "clongitudine": "12.3121012",
            "clatitudine": "37.9270026"
        }
        ,
        {
            "ccomune": "Salemi",
            "cprovincia": "TRAPANI",
            "cregione": "Sicilia",
            "cnome": "",
            "canno_inserimento": "2013",
            "cdata_e_ora_inserimento": "2013-12-08T00:15:59Z",
            "cidentificatore_in_openstreetmap": "2570834827",
            "clongitudine": "12.8004433",
            "clatitudine": "37.8182219999999"
        }
        ,
        {
            "ccomune": "Santa Ninfa",
            "cprovincia": "TRAPANI",
            "cregione": "Sicilia",
            "cnome": "Castello di Rampinzeri",
            "canno_inserimento": "2012",
            "cdata_e_ora_inserimento": "2012-08-10T23:14:46Z",
            "cidentificatore_in_openstreetmap": "1860894660",
            "clongitudine": "12.9132751",
            "clatitudine": "37.780897"
        }
        ,
        {
            "ccomune": "Carini",
            "cprovincia": "PALERMO",
            "cregione": "Sicilia",
            "cnome": "",
            "canno_inserimento": "2012",
            "cdata_e_ora_inserimento": "2012-01-03T20:19:08Z",
            "cidentificatore_in_openstreetmap": "1576059948",
            "clongitudine": "13.2218111",
            "clatitudine": "38.1738789999999"
        }
        ,
        {
            "ccomune": "Castelbuono",
            "cprovincia": "PALERMO",
            "cregione": "Sicilia",
            "cnome": "",
            "canno_inserimento": "2012",
            "cdata_e_ora_inserimento": "2012-12-06T21:01:28Z",
            "cidentificatore_in_openstreetmap": "538077523",
            "clongitudine": "14.0885982999999",
            "clatitudine": "37.9346801"
        }
        ,
        {
            "ccomune": "Casteldaccia",
            "cprovincia": "PALERMO",
            "cregione": "Sicilia",
            "cnome": "Torre del Duca di Salaparuta",
            "canno_inserimento": "2016",
            "cdata_e_ora_inserimento": "2016-01-19T18:26:28Z",
            "cidentificatore_in_openstreetmap": "3955609661",
            "clongitudine": "13.530124",
            "clatitudine": "38.0540442"
        }
        ,
        {
            "ccomune": "Collesano",
            "cprovincia": "PALERMO",
            "cregione": "Sicilia",
            "cnome": "",
            "canno_inserimento": "2013",
            "cdata_e_ora_inserimento": "2013-08-25T09:24:54Z",
            "cidentificatore_in_openstreetmap": "2430821068",
            "clongitudine": "13.9375707",
            "clatitudine": "37.9262707"
        }
        ,
        {
            "ccomune": "Ficarazzi",
            "cprovincia": "PALERMO",
            "cregione": "Sicilia",
            "cnome": "",
            "canno_inserimento": "2012",
            "cdata_e_ora_inserimento": "2012-08-12T20:19:22Z",
            "cidentificatore_in_openstreetmap": "1863537896",
            "clongitudine": "13.4705470999999",
            "clatitudine": "38.0888429"
        }
        ,
        {
            "ccomune": "Geraci Siculo",
            "cprovincia": "PALERMO",
            "cregione": "Sicilia",
            "cnome": "Manor of Ventimiglia",
            "canno_inserimento": "2013",
            "cdata_e_ora_inserimento": "2013-03-26T13:02:13Z",
            "cidentificatore_in_openstreetmap": "2225344867",
            "clongitudine": "14.1533652",
            "clatitudine": "37.8534853999999"
        }
        ,
        {
            "ccomune": "Isnello",
            "cprovincia": "PALERMO",
            "cregione": "Sicilia",
            "cnome": "",
            "canno_inserimento": "2013",
            "cdata_e_ora_inserimento": "2013-12-10T17:08:14Z",
            "cidentificatore_in_openstreetmap": "2574604528",
            "clongitudine": "14.0049509",
            "clatitudine": "37.9457049"
        }
        ,
        {
            "ccomune": "Misilmeri",
            "cprovincia": "PALERMO",
            "cregione": "Sicilia",
            "cnome": "ruderi del castello arabo-normanno",
            "canno_inserimento": "2015",
            "cdata_e_ora_inserimento": "2015-06-03T20:26:02Z",
            "cidentificatore_in_openstreetmap": "2408310542",
            "clongitudine": "13.4478209",
            "clatitudine": "38.0359448"
        }
        ,
        {
            "ccomune": "Pollina",
            "cprovincia": "PALERMO",
            "cregione": "Sicilia",
            "cnome": "",
            "canno_inserimento": "2013",
            "cdata_e_ora_inserimento": "2013-03-25T14:53:35Z",
            "cidentificatore_in_openstreetmap": "2222513161",
            "clongitudine": "14.1434263",
            "clatitudine": "37.9926115"
        }
        ,
        {
            "ccomune": "Trabia",
            "cprovincia": "PALERMO",
            "cregione": "Sicilia",
            "cnome": "",
            "canno_inserimento": "2011",
            "cdata_e_ora_inserimento": "2011-08-24T21:34:19Z",
            "cidentificatore_in_openstreetmap": "1411663631",
            "clongitudine": "13.6536782",
            "clatitudine": "37.9973631"
        }
        ,
        {
            "ccomune": "Trabia",
            "cprovincia": "PALERMO",
            "cregione": "Sicilia",
            "cnome": "",
            "canno_inserimento": "2011",
            "cdata_e_ora_inserimento": "2011-08-24T21:41:49Z",
            "cidentificatore_in_openstreetmap": "1411667203",
            "clongitudine": "13.6161423999999",
            "clatitudine": "38.0155092999999"
        }
        ,
        {
            "ccomune": "Castelmola",
            "cprovincia": "MESSINA",
            "cregione": "Sicilia",
            "cnome": "",
            "canno_inserimento": "2013",
            "cdata_e_ora_inserimento": "2013-07-21T11:02:47Z",
            "cidentificatore_in_openstreetmap": "475018370",
            "clongitudine": "15.277227",
            "clatitudine": "37.8593053"
        }
        ,
        {
            "ccomune": "Mistretta",
            "cprovincia": "MESSINA",
            "cregione": "Sicilia",
            "cnome": "Mistretta Castle",
            "canno_inserimento": "2014",
            "cdata_e_ora_inserimento": "2014-05-09T03:20:17Z",
            "cidentificatore_in_openstreetmap": "2225265043",
            "clongitudine": "14.362332",
            "clatitudine": "37.9322598999999"
        }
        ,
        {
            "ccomune": "Acquedolci",
            "cprovincia": "MESSINA",
            "cregione": "Sicilia",
            "cnome": "Castello Cupane",
            "canno_inserimento": "2014",
            "cdata_e_ora_inserimento": "2014-10-16T06:05:17Z",
            "cidentificatore_in_openstreetmap": "3132627159",
            "clongitudine": "14.590666",
            "clatitudine": "38.0583541"
        }
        ,
        {
            "ccomune": "Alessandria della Rocca",
            "cprovincia": "AGRIGENTO",
            "cregione": "Sicilia",
            "cnome": "Castello della Pietra d'Amico",
            "canno_inserimento": "2013",
            "cdata_e_ora_inserimento": "2013-11-14T19:18:59Z",
            "cidentificatore_in_openstreetmap": "2532586175",
            "clongitudine": "13.4182815",
            "clatitudine": "37.5787600999999"
        }
        ,
        {
            "ccomune": "Resuttano",
            "cprovincia": "CALTANISSETTA",
            "cregione": "Sicilia",
            "cnome": "Castello di Resuttano",
            "canno_inserimento": "2012",
            "cdata_e_ora_inserimento": "2012-10-15T17:55:31Z",
            "cidentificatore_in_openstreetmap": "1966850156",
            "clongitudine": "14.0595745999999",
            "clatitudine": "37.6848164999999"
        }
        ,
        {
            "ccomune": "Calascibetta",
            "cprovincia": "ENNA",
            "cregione": "Sicilia",
            "cnome": "",
            "canno_inserimento": "2013",
            "cdata_e_ora_inserimento": "2013-03-25T12:02:53Z",
            "cidentificatore_in_openstreetmap": "2222218984",
            "clongitudine": "14.277442",
            "clatitudine": "37.586058"
        }
        ,
        {
            "ccomune": "Sperlinga",
            "cprovincia": "ENNA",
            "cregione": "Sicilia",
            "cnome": "Castello di Sperlinga",
            "canno_inserimento": "2012",
            "cdata_e_ora_inserimento": "2012-11-29T00:42:06Z",
            "cidentificatore_in_openstreetmap": "305769944",
            "clongitudine": "14.3530957",
            "clatitudine": "37.7663014999999"
        }
        ,
        {
            "ccomune": "Adrano",
            "cprovincia": "CATANIA",
            "cregione": "Sicilia",
            "cnome": "",
            "canno_inserimento": "2015",
            "cdata_e_ora_inserimento": "2015-12-25T07:25:59Z",
            "cidentificatore_in_openstreetmap": "459944023",
            "clongitudine": "14.8685771",
            "clatitudine": "37.6740973"
        }
        ,
        {
            "ccomune": "Caltagirone",
            "cprovincia": "CATANIA",
            "cregione": "Sicilia",
            "cnome": "Masseria Silvestri",
            "canno_inserimento": "2013",
            "cdata_e_ora_inserimento": "2013-09-17T20:12:41Z",
            "cidentificatore_in_openstreetmap": "2462115304",
            "clongitudine": "14.5763158",
            "clatitudine": "37.1272439"
        }
        ,
        {
            "ccomune": "Grammichele",
            "cprovincia": "CATANIA",
            "cregione": "Sicilia",
            "cnome": "Castello di Occhiol�",
            "canno_inserimento": "2015",
            "cdata_e_ora_inserimento": "2015-04-24T14:26:54Z",
            "cidentificatore_in_openstreetmap": "3475044885",
            "clongitudine": "14.6205058",
            "clatitudine": "37.2370348"
        }
        ,
        {
            "ccomune": "Licodia Eubea",
            "cprovincia": "CATANIA",
            "cregione": "Sicilia",
            "cnome": "Santapau Castle",
            "canno_inserimento": "2013",
            "cdata_e_ora_inserimento": "2013-12-10T01:12:43Z",
            "cidentificatore_in_openstreetmap": "2233689489",
            "clongitudine": "14.6985756999999",
            "clatitudine": "37.1538994"
        }
        ,
        {
            "ccomune": "Mineo",
            "cprovincia": "CATANIA",
            "cregione": "Sicilia",
            "cnome": "Castello di Mongialino",
            "canno_inserimento": "2016",
            "cdata_e_ora_inserimento": "2016-02-04T18:01:09Z",
            "cidentificatore_in_openstreetmap": "3988466569",
            "clongitudine": "14.5743358",
            "clatitudine": "37.3400429"
        }
        ,
        {
            "ccomune": "Augusta",
            "cprovincia": "SIRACUSA",
            "cregione": "Sicilia",
            "cnome": "Brucoli",
            "canno_inserimento": "2013",
            "cdata_e_ora_inserimento": "2013-11-19T09:22:07Z",
            "cidentificatore_in_openstreetmap": "2193905469",
            "clongitudine": "15.1865067",
            "clatitudine": "37.2855105"
        }
        ,
        {
            "ccomune": "Augusta",
            "cprovincia": "SIRACUSA",
            "cregione": "Sicilia",
            "cnome": "Castello Svevo",
            "canno_inserimento": "2013",
            "cdata_e_ora_inserimento": "2013-11-18T04:26:27Z",
            "cidentificatore_in_openstreetmap": "2537502380",
            "clongitudine": "15.2207197",
            "clatitudine": "37.2345922"
        }
        ,
        {
            "ccomune": "Augusta",
            "cprovincia": "SIRACUSA",
            "cregione": "Sicilia",
            "cnome": "Forti Gar�ia e Vittoria",
            "canno_inserimento": "2013",
            "cdata_e_ora_inserimento": "2013-11-17T21:29:50Z",
            "cidentificatore_in_openstreetmap": "2537174038",
            "clongitudine": "15.2042492",
            "clatitudine": "37.2360371999999"
        }
        ,
        {
            "ccomune": "Augusta",
            "cprovincia": "SIRACUSA",
            "cregione": "Sicilia",
            "cnome": "Porta Spagnola",
            "canno_inserimento": "2015",
            "cdata_e_ora_inserimento": "2015-03-02T19:34:20Z",
            "cidentificatore_in_openstreetmap": "2537503449",
            "clongitudine": "15.2201127",
            "clatitudine": "37.2357668"
        }
        ,
        {
            "ccomune": "Monteleone Rocca Doria",
            "cprovincia": "SASSARI",
            "cregione": "Sardegna",
            "cnome": "",
            "canno_inserimento": "2012",
            "cdata_e_ora_inserimento": "2012-10-16T20:45:05Z",
            "cidentificatore_in_openstreetmap": "1969034594",
            "clongitudine": "8.5624853",
            "clatitudine": "40.4719631999999"
        }
        ,
        {
            "ccomune": "Galtelli",
            "cprovincia": "NUORO",
            "cregione": "Sardegna",
            "cnome": "Castello Guzzetti o di Malicas",
            "canno_inserimento": "2013",
            "cdata_e_ora_inserimento": "2013-07-12T12:47:19Z",
            "cidentificatore_in_openstreetmap": "2382342961",
            "clongitudine": "9.6114569",
            "clatitudine": "40.3836473"
        }
        ,
        {
            "ccomune": "Posada",
            "cprovincia": "NUORO",
            "cregione": "Sardegna",
            "cnome": "Torre Aragonese",
            "canno_inserimento": "2016",
            "cdata_e_ora_inserimento": "2016-01-13T12:07:27Z",
            "cidentificatore_in_openstreetmap": "263732120",
            "clongitudine": "9.7529657",
            "clatitudine": "40.6153892"
        }
        ,
        {
            "ccomune": "Domus de Maria",
            "cprovincia": "CAGLIARI",
            "cregione": "Sardegna",
            "cnome": "Torre di Pixinn�",
            "canno_inserimento": "2012",
            "cdata_e_ora_inserimento": "2012-08-26T21:38:41Z",
            "cidentificatore_in_openstreetmap": "1884529680",
            "clongitudine": "8.77775439999999",
            "clatitudine": "38.9043459"
        }
        ,
        {
            "ccomune": "Villasimius",
            "cprovincia": "CAGLIARI",
            "cregione": "Sardegna",
            "cnome": "La Fortezza Vecchia",
            "canno_inserimento": "2011",
            "cdata_e_ora_inserimento": "2011-06-02T23:44:24Z",
            "cidentificatore_in_openstreetmap": "603107962",
            "clongitudine": "9.50366069999999",
            "clatitudine": "39.1161928"
        }
        ,
        {
            "ccomune": "Aviano",
            "cprovincia": "PORDENONE",
            "cregione": "Friuli-Venezia Giulia",
            "cnome": "Castello medioevale di Aviano",
            "canno_inserimento": "2014",
            "cdata_e_ora_inserimento": "2014-07-07T14:36:03Z",
            "cidentificatore_in_openstreetmap": "2952546010",
            "clongitudine": "12.5624053",
            "clatitudine": "46.0488371"
        }
        ,
        {
            "ccomune": "Caneva",
            "cprovincia": "PORDENONE",
            "cregione": "Friuli-Venezia Giulia",
            "cnome": "Castello di Caneva",
            "canno_inserimento": "2011",
            "cdata_e_ora_inserimento": "2011-08-11T08:00:46Z",
            "cidentificatore_in_openstreetmap": "426472490",
            "clongitudine": "12.4487766",
            "clatitudine": "45.9814711"
        }
        ,
        {
            "ccomune": "San Vito al Tagliamento",
            "cprovincia": "PORDENONE",
            "cregione": "Friuli-Venezia Giulia",
            "cnome": "",
            "canno_inserimento": "2013",
            "cdata_e_ora_inserimento": "2013-06-11T15:14:39Z",
            "cidentificatore_in_openstreetmap": "2340691928",
            "clongitudine": "12.8562963",
            "clatitudine": "45.9145012999999"
        }
        ,
        {
            "ccomune": "Zoppola",
            "cprovincia": "PORDENONE",
            "cregione": "Friuli-Venezia Giulia",
            "cnome": "Castello di Zoppola",
            "canno_inserimento": "2012",
            "cdata_e_ora_inserimento": "2012-09-09T07:43:44Z",
            "cidentificatore_in_openstreetmap": "1906523404",
            "clongitudine": "12.7756902",
            "clatitudine": "45.9663355"
        }
        ,
        {
            "ccomune": "Samugheo",
            "cprovincia": "ORISTANO",
            "cregione": "Sardegna",
            "cnome": "Castel Medusa",
            "canno_inserimento": "2014",
            "cdata_e_ora_inserimento": "2014-03-21T18:56:42Z",
            "cidentificatore_in_openstreetmap": "2732140643",
            "clongitudine": "8.95903659999999",
            "clatitudine": "39.8906247999999"
        }
        ,
        {
            "ccomune": "Cossato (BI)",
            "cprovincia": "BIELLA",
            "cregione": "Piemonte",
            "cnome": "Castello di Castellengo",
            "canno_inserimento": "2011",
            "cdata_e_ora_inserimento": "2011-10-17T10:36:00Z",
            "cidentificatore_in_openstreetmap": "1470674351",
            "clongitudine": "8.1877657",
            "clatitudine": "45.5315439"
        }
        ,
        {
            "ccomune": "Roppolo (BI)",
            "cprovincia": "BIELLA",
            "cregione": "Piemonte",
            "cnome": "Castello di Roppolo",
            "canno_inserimento": "2011",
            "cdata_e_ora_inserimento": "2011-06-25T11:08:51Z",
            "cidentificatore_in_openstreetmap": "1338166441",
            "clongitudine": "8.0724924",
            "clatitudine": "45.4222558"
        }
        ,
        {
            "ccomune": "Rosazza (BI)",
            "cprovincia": "BIELLA",
            "cregione": "Piemonte",
            "cnome": "Castello di Rosazza",
            "canno_inserimento": "2012",
            "cdata_e_ora_inserimento": "2012-10-03T17:38:22Z",
            "cidentificatore_in_openstreetmap": "1234102766",
            "clongitudine": "7.9749562",
            "clatitudine": "45.674689"
        }
        ,
        {
            "ccomune": "Verrone (BI)",
            "cprovincia": "BIELLA",
            "cregione": "Piemonte",
            "cnome": "Castello di Verrone",
            "canno_inserimento": "2015",
            "cdata_e_ora_inserimento": "2015-09-14T10:06:56Z",
            "cidentificatore_in_openstreetmap": "1836790799",
            "clongitudine": "8.1170459",
            "clatitudine": "45.5023532"
        }
        ,
        {
            "ccomune": "Calolziocorte (LC)",
            "cprovincia": "LECCO",
            "cregione": "Lombardia",
            "cnome": "Castello di Rossino",
            "canno_inserimento": "2016",
            "cdata_e_ora_inserimento": "2016-01-12T21:52:47Z",
            "cidentificatore_in_openstreetmap": "3942508757",
            "clongitudine": "9.438434",
            "clatitudine": "45.8047796"
        }
        ,
        {
            "ccomune": "Sant'Angelo Lodigiano (LO)",
            "cprovincia": "LODI",
            "cregione": "Lombardia",
            "cnome": "Castello Morando Bolognini",
            "canno_inserimento": "2015",
            "cdata_e_ora_inserimento": "2015-06-24T07:20:23Z",
            "cidentificatore_in_openstreetmap": "3614452752",
            "clongitudine": "9.4082841",
            "clatitudine": "45.2392498"
        }
        ,
        {
            "ccomune": "Somaglia (LO)",
            "cprovincia": "LODI",
            "cregione": "Lombardia",
            "cnome": "Castello Cavazzi",
            "canno_inserimento": "2016",
            "cdata_e_ora_inserimento": "2016-01-02T17:00:32Z",
            "cidentificatore_in_openstreetmap": "635334953",
            "clongitudine": "9.6399167",
            "clatitudine": "45.1466063"
        }
        ,
        {
            "ccomune": "San Clemente (RN)",
            "cprovincia": "RIMINI",
            "cregione": "Emilia-Romagna",
            "cnome": "",
            "canno_inserimento": "2013",
            "cdata_e_ora_inserimento": "2013-01-20T14:22:11Z",
            "cidentificatore_in_openstreetmap": "2121085824",
            "clongitudine": "12.6247215",
            "clatitudine": "43.9327072999999"
        }
        ,
        {
            "ccomune": "San Clemente (RN)",
            "cprovincia": "RIMINI",
            "cregione": "Emilia-Romagna",
            "cnome": "castelleale",
            "canno_inserimento": "2012",
            "cdata_e_ora_inserimento": "2012-11-04T08:38:58Z",
            "cidentificatore_in_openstreetmap": "1996682202",
            "clongitudine": "12.6135325",
            "clatitudine": "43.9488091999999"
        }
        ,
        {
            "ccomune": "San Clemente (RN)",
            "cprovincia": "RIMINI",
            "cregione": "Emilia-Romagna",
            "cnome": "Castello di Agello",
            "canno_inserimento": "2013",
            "cdata_e_ora_inserimento": "2013-06-16T12:35:13Z",
            "cidentificatore_in_openstreetmap": "1996682375",
            "clongitudine": "12.609646",
            "clatitudine": "43.9357516999999"
        }
        ,
        {
            "ccomune": "San Leo (RN)",
            "cprovincia": "RIMINI",
            "cregione": "Emilia-Romagna",
            "cnome": "San Leo",
            "canno_inserimento": "2011",
            "cdata_e_ora_inserimento": "2011-04-25T21:43:15Z",
            "cidentificatore_in_openstreetmap": "372410543",
            "clongitudine": "12.3461621",
            "clatitudine": "43.8966690999999"
        }
        ,
        {
            "ccomune": "Carmignano (PO)",
            "cprovincia": "PRATO",
            "cregione": "Toscana",
            "cnome": "",
            "canno_inserimento": "2012",
            "cdata_e_ora_inserimento": "2012-05-11T20:14:49Z",
            "cidentificatore_in_openstreetmap": "1748927909",
            "clongitudine": "11.0367943",
            "clatitudine": "43.7828803"
        }
        ,
        {
            "ccomune": "Carmignano (PO)",
            "cprovincia": "PRATO",
            "cregione": "Toscana",
            "cnome": "Rocca di Carmignano",
            "canno_inserimento": "2011",
            "cdata_e_ora_inserimento": "2011-08-11T09:47:45Z",
            "cidentificatore_in_openstreetmap": "1394685541",
            "clongitudine": "11.0130506",
            "clatitudine": "43.8118029999999"
        }
        ,
        {
            "ccomune": "Ciro' (KR)",
            "cprovincia": "CROTONE",
            "cregione": "Calabria",
            "cnome": "Castello Carafa",
            "canno_inserimento": "2014",
            "cdata_e_ora_inserimento": "2014-02-19T09:23:52Z",
            "cidentificatore_in_openstreetmap": "2680222017",
            "clongitudine": "17.064468",
            "clatitudine": "39.3805819999999"
        }
        ,
        {
            "ccomune": "Isola di Capo Rizzuto (KR)",
            "cprovincia": "CROTONE",
            "cregione": "Calabria",
            "cnome": "Il Concio",
            "canno_inserimento": "2014",
            "cdata_e_ora_inserimento": "2014-09-28T17:25:13Z",
            "cidentificatore_in_openstreetmap": "3100623798",
            "clongitudine": "17.0638054",
            "clatitudine": "38.9866612"
        }
        ,
        {
            "ccomune": "Strongoli (KR)",
            "cprovincia": "CROTONE",
            "cregione": "Calabria",
            "cnome": "",
            "canno_inserimento": "2014",
            "cdata_e_ora_inserimento": "2014-02-15T19:19:49Z",
            "cidentificatore_in_openstreetmap": "2673352479",
            "clongitudine": "17.0458471",
            "clatitudine": "39.2658740999999"
        }
        ,
        {
            "ccomune": "Vogogna (VB)",
            "cprovincia": "VERBANIA",
            "cregione": "Piemonte",
            "cnome": "Castello Visconteo",
            "canno_inserimento": "2014",
            "cdata_e_ora_inserimento": "2014-06-17T21:33:07Z",
            "cidentificatore_in_openstreetmap": "2921108647",
            "clongitudine": "8.2960596",
            "clatitudine": "46.0080142999999"
        }
        ,
        {
            "ccomune": "Canosa di Puglia (BT)",
            "cprovincia": "BARLETTA ANDRIA TRANI",
            "cregione": "Puglia",
            "cnome": "Castello di Canosa",
            "canno_inserimento": "2015",
            "cdata_e_ora_inserimento": "2015-07-02T18:01:26Z",
            "cidentificatore_in_openstreetmap": "3631841582",
            "clongitudine": "16.0592381999999",
            "clatitudine": "41.224598"
        }
    ];

    return places.map((place) => {
        return {
            name: place.cnome,
            lng: place.clongitudine,
            lat: place.clatitudine,
        };
    })
}
