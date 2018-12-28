$(document).ready(function () {

    $("#date").Zebra_DatePicker({ format: 'd/m/Y' });

    $("#nbp").change(function () {
        $("#chaises").html("");
        var nbPlaces = $("#nbp").val();
        var img = "<img src='./images/chaise.jpg'/>";
        for (var i = 0; i < nbPlaces; i++) 
        {
            $("#chaises").append(img);
        }
    });


    function isValid(nbp, civ, fullName, tel, platsHtml) {
        debugger;
        if (nbp == -1) {
            return "Veuillez selectionner le nombre des places !";
        }
        else {
            if (civ == undefined) {
                return "Veuillez indiquer votre civilité !";
            }
            else {
                if (fullName == "") {
                    return "Nom et prénom Obligatoire !";
                }
                else {
                    if (tel == "") {
                        return "Veuillez indiquer votre numéro de téléphone !";
                    }
                    else {
                        if (tel.length != 8 || isNaN(tel)) {
                            return "Le numéro de téléphone  est invalide !";
                        }
                        else {
                            if (platsHtml == "") {
                                return "Veuillez indiquer les plats souhaités !";
                            }
                            else {
                                return "";
                            }

                        }
                    }
                }
            }
        }
    }




    $("#b1").click(function () {

        var platsHtml = "";
        var total = 0;

        var civ = $("input[name = civilite]:checked").val();
        var civilite = "";

        var date = $("#date").val();

        var fullName = $("#nom").val();
        var tel = $("#tel").val();

        var nbp = $("#nbp").val();

        var accompagnateurs = $("#accompagnateurs").val();

        $('input[type="checkbox"]:checked').each(function () {
            platsHtml += "<li style='margin-left: 25px;'>" + this.value + "</li>";

            total += $(this).data('prix');
        });

        console.log(platsHtml);


        if (civ == 'mme') {
            civilite = 'Madame';
        }
        else {
            if (civ == 'mlle') {
                civilite = 'Mademoiselle';
            }
            else {
                civilite = 'Monsieur';
            }
        }

        debugger;
        var validFormMsg = isValid(nbp, civ, fullName, tel, platsHtml);
        if (validFormMsg != "") {

            alert(validFormMsg);
        }
        else {
            if ($("#date").val() != "") {
                var text = "Bonjour " + civilite + " <strong>" + fullName + "</strong><br />" +
                    "Votre commande du <u>" + date + "</u> a bien été validée. <br />" +
                    "Les plats commandés sont :" +
                    platsHtml +
                    "Le montant total de votre commande est de <strong>" + total + "</strong> Dinars.";


                $("#div_resume").html(text);
                $(window).scrollTop(500);
            }
            else {
                alert("Veuillez indiquer la date !");
            }
        }




    });
});