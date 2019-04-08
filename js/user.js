$(document).ready(function() {

    var userListBody = $('.userList tbody');

    //@todo store and somehow update the current number of users


    $('.needs-validation').submit(function(event) {

        event.preventDefault();
        event.stopPropagation();

        if (this.checkValidity() === false) {

            $(this).addClass('was-validated');

            return false;
        }

        //@todo
        //1. get values
        //2. create a new element
        //3. somehow add them to userListBody
        //4. update number of current users
        //5. clear entries from the form
        //6. maybe do something else... :-)

        //your code follows here

        var Element = document.getElementById("UserId");
        var neuerNutzer = Element.value;
        userListBody.push(neuerNutzer);
        var Liste = userListBody.length;
        var Tabelle= document.getElementById("table");
        var Reihe = Tabelle.insertRow (-1);
        var ErsteSpalte = Reihe.insertCell(0);
        var ZweiteSpalte = Reihe.insertCell (1);
        var DritteSpalte = Reihe.insertCell (2);
        ErsteSpalte.innerHTML = Liste; //speichern der Länge
        ZweiteSpalte.innerHTML = neuerNutzer; //ausgeben des users
        DritteSpalte.innerHTML = "<button type=\"button\" class=\"btn btn-secondary btn-danger deleteTrigger\" title=\"Löschen\"><i class=\"fa fa-trash\"></i></button>"; // Deleter


        return false;
    });

    $(userListBody).on('click', '.deleteTrigger', function(){
        $(this).closest('tr').remove();
    });

    //maybe some code follows here

});