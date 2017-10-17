function storeRepo() {


    var theGit = document.getElementById("repoInput").value;

    var check = /https?:\/\/(.+?\.)?github\.com(\/[A-Za-z0-9\-\._~:\/\?#\[\]@!$&'\(\)\*\+,;\=]*)?/;

    if (theGit.match(check)) {
        //Gitrepository är sparat i variabeln GIT

        document.getElementById("headLine").innerHTML = theGit;

    } else {
        document.getElementById("headLine").innerHTML = "Are you kidding?";
    }
}




