    var info = {
        "prenom" : "",
        "nom" : "",
        "age" : 0

    };


    var prenom = "";
	var nom = "" ;
	var age = "";	

	$("#prenom").keyup(function(){
		prenom = $("#prenom").val();

	});


	$("#nom").keyup(function(){
    	nom = $("#nom").val();
   
    });

	$("#age").keyup(function(){
		age = $("#age").val();

	});


	$("#button").click(function(){

    	//console.log(prenom);
    	//console.log(nom);
    	//console.log(age);
	var person = {"prenom" : prenom, "nom" : nom, "age" : age};

	$("#table").append($('<tr><td>'+prenom+'</td><td>'+nom+'</td><td>'+age+'</td><td>'+"<button class='supprimer'>Supprimer</button>"+"</td></tr>"));
	$('input').val("");



	$( "tbody" ).delegate(".supprimer", "click", function(){
    $(this).parent().parent().remove();

    });
  


	});






