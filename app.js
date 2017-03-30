    var Person = {
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

    	console.log(prenom);
    	console.log(nom);
    	console.log(age);

	});




