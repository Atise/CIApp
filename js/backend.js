function storeRepo() {


    var theGit = document.getElementById("repoInput").value;

    var check = /https?:\/\/(.+?\.)?github\.com(\/[A-Za-z0-9\-\._~:\/\?#\[\]@!$&'\(\)\*\+,;\=]*)?/;

    if (theGit.match(check)) {
        //Gitrepository är sparat i variabeln theGIT. Här, i if satsen kan exempelvis ett anrop till funktionen som skickar
        //Gitrepot till Jenkins.



    } else {
        document.getElementById("headLine").innerHTML = "Are you kidding?";
    }
}




