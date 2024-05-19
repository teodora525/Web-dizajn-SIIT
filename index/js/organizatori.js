let firebaseUrl = "https://web-dizajn-55370-default-rtdb.firebaseio.com";
let organizatori = {};

getSviorganizatori();

function getSviorganizatori(){
    let request = new XMLHttpRequest();

    request.onreadystatechange = function(){
        if(this.readyState == 4){
            if(this.status == 200){
                removeTableRows("organizatori");

                console.log(request.responseText);

                organizatori = JSON.parse(request.responseText);

                for(let id in organizatori){
                    let organizator = organizatori[id];
                    dodajRed("organizatori", id, organizator);
                }
            }else{
                alert("Greška prilikom učitavanja organizatora!")
            } 
        }
    };
    request.open("GET", firebaseUrl + "/organizatoriFestivala.json");
    request.send();
}

function dodajRed(tBody, id, organizator){
    let organizatorRed = document.createElement("tr");

    let nazivTd = document.createElement("td");
    nazivTd.innerText = organizator.naziv;
    organizatorRed.appendChild(nazivTd);

    let adresaTd = document.createElement("td");
    adresaTd.innerText = organizator.adresa;
    organizatorRed.appendChild(adresaTd);

    let godinaTd = document.createElement("td");
    godinaTd.innerText = organizator.godinaOsnivanja;
    organizatorRed.appendChild(godinaTd);

    let logoTd = document.createElement("td");
    let logoImg = document.createElement("img");
    logoImg.setAttribute("src", organizator.logo);
    logoImg.setAttribute("alt", organizator.naziv);
    logoTd.appendChild(logoImg);
    organizatorRed.appendChild(logoTd);

    let brojTelefonaTd = document.createElement("td");
    brojTelefonaTd.innerText = organizator.kontaktTelefon;
    organizatorRed.appendChild(brojTelefonaTd);

    let emailTd = document.createElement("td");
    let emailLink = document.createElement("a");
    emailLink.setAttribute("href", "mailto:" + organizator.email);
    emailLink.innerText = organizator.email;
    emailTd.appendChild(emailLink);
    organizatorRed.appendChild(emailTd);

    let festivaliTd = document.createElement("td");
    let festivaliLink = document.createElement("a");
    festivaliLink.setAttribute("href", organizator.festivali);
    festivaliLink.innerText = "Link ka festivalima";
    festivaliTd.appendChild(festivaliLink);
    organizatorRed.appendChild(festivaliTd);

    let izmeniBtn = document.createElement("button");
    izmeniBtn.type = "button";
    izmeniBtn.innerText = "Izmeni";
    izmeniBtn.onclick = izmena;
    izmeniBtn.setAttribute("data-id", id);

    let izmeniTd = document.createElement("td");
    izmeniTd.appendChild(izmeniBtn);
    organizatorRed.appendChild(izmeniTd);

    let obrisiBtn = document.createElement("button");
    obrisiBtn.type = "button";
    obrisiBtn.innerText = "Obriši";
    obrisiBtn.onclick = obrisi;
    obrisiBtn.setAttribute("data-id", id);

    let obrisiTd = document.createElement("td");
    obrisiTd.appendChild(obrisiBtn);
    organizatorRed.appendChild(obrisiTd);

    document.getElementById(tBody).appendChild(organizatorRed);
}

function removeTableRows(tBodyId){
    let tBody = document.getElementById(tBodyId);
    if (tBody) {
        while(tBody.firstChild){
            tBody.removeChild(tBody.firstChild);
        }
    } else {
        console.error("Element with id '" + tBodyId + "' not found.");
    }
}

function izmena(){
    let clickedBtn = this;
    console.log(clickedBtn);
    let organizatorId = clickedBtn.getAttribute("data-id");
    window.location.href = "izmena.html?id=" + organizatorId;
}

function obrisi(){
    let clickedBtn = this;
    let organizatorId = clickedBtn.getAttribute("data-id");

    let request = new XMLHttpRequest();

    request.onreadystatechange = function(){
        if (this.readyState == 4){
            if(this.status == 200){
                getSviorganizatori();
            } else {
                alert("Greška prilikom brisanja organizatora");
            }
        }
    };

    request.open("DELETE", firebaseUrl + "/organizatoriFestivala/" + organizatorId + ".json");
    request.send();
}
