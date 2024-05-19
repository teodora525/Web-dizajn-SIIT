let firebaseUrl = "https://web-dizajn-55370-default-rtdb.firebaseio.com";

let korisnici = {};

getSviKorisnici();


function getSviKorisnici(){
    let request = new XMLHttpRequest();

    request.onreadystatechange = function(){
        if(this.readyState == 4){
            if(this.status == 200){
                removeTableRows("korisnici");

                korisnici = JSON.parse(request.responseText);
                console.log(korisnici);


                for(let id in korisnici){
                    let korisnik = korisnici[id];
                    dodajRed("korisnici", id, korisnik);
                }
            }else{
                alert("Greška prilikom učitavanja korisnika!")
            } 
        }
        };
        request.open("GET", firebaseUrl + "/korisnici.json");
        request.send();
    }

    


function izmena(){
    let clickedBtn = this;
    console.log(clickedBtn);
    let korisnikId = clickedBtn.getAttribute("data-id");
    window.location.href = "izmena.html?id" + korisnikId;
}

function obrisi(){
    let clickedBtn = this;
    let korisnikId = clickedBtn.getAttribute("data-id");

    let request = new XMLHttpRequest();

    request.onreadystatechange = function(){
        if (this.readyState == 4){
            if(this.status == 200){
                getSviKorisnici();
            } else {
                alert("Greška prilikom brisanja korisnika");
            }
        }
    };

    request.open("DELETE", firebaseUrl + "/korisnici/" + korisnikId + ".json");
    request.send();
}




function dodajRed(tBody, id, korisnik){
    let korisnikRed = document.createElement("tr");

    let imeId = document.createElement("td");
    imeId.innerText = korisnik.ime;
    korisnikRed.appendChild(imeId);

    let prezimeId = document.createElement("td");
    prezimeId.innerText = korisnik.prezime;
    korisnikRed.appendChild(prezimeId);

    let korisnickoImeId = document.createElement("td");
    korisnickoImeId.innerText = korisnik.korisnickoIme;
    korisnikRed.appendChild(korisnickoImeId);

    let lozinkaId = document.createElement("td");
    lozinkaId.innerText = korisnik.lozinka;
    korisnikRed.appendChild(lozinkaId);

    let emailId = document.createElement("td");
    emailId.innerText = korisnik.email;
    korisnikRed.appendChild(emailId);

    let datumRodjenjaId = document.createElement("td");
    datumRodjenjaId.innerText = korisnik.datumRodjenja;
    korisnikRed.appendChild(datumRodjenjaId);

    let adresaId = document.createElement("td");
    adresaId.innerText = korisnik.adresa;
    korisnikRed.appendChild(adresaId);

    let telefonId = document.createElement("td");
    telefonId.innerText = korisnik.telefon;
    korisnikRed.appendChild(telefonId);

    let zanimanjeId = document.createElement("td");
    zanimanjeId.innerText = korisnik.zanimanje;
    korisnikRed.appendChild(zanimanjeId);


    let izmeniBtn = document.createElement("button");
    izmeniBtn.type = "button";
    izmeniBtn.innerText = "Izmeni";
    izmeniBtn.onclick = izmena;
    izmeniBtn.setAttribute("data-id", id);

    let izmeniTd = document.createElement("td");
    izmeniTd.appendChild(izmeniBtn);
    korisnikRed.appendChild(izmeniTd);
    

    let obrisiBtn = document.createElement("button");
    obrisiBtn.type = "button";
    obrisiBtn.innerText = "Obriši";
    obrisiBtn.onclick = obrisi;
    obrisiBtn.setAttribute("data-id", id);

    let obrisiTd = document.createElement("td");
    obrisiTd.appendChild(obrisiBtn);
    korisnikRed.appendChild(obrisiTd);

    document.getElementById(tBody).appendChild(korisnikRed);
}

function removeTableRows(tBodyId){
    let tBody = document.getElementById(tBodyId);
    while(tBody.firstChild){
        tBody.removeChild(tBody.lastChild);
    
    }
}


