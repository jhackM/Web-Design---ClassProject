$(document).ready(function () {
    
    $("#form-contact").submit(function(e){
        e.preventDefault();    
        $('#exampleModal').modal('show')   ;
        $('.modal-body').html("");
        var infor=$(this).serializeArray();
        var name = infor[0].value;
        var company =infor[2].value
        var phoneNumber =infor[3].value;

        var header="Hi! "+name+",";

        var text= "Welcome! You're now subscribed to our latest news. Check your email for the details.";

        var head = $("<h4></h4>").text(header); 
       // head.css
        var content = $("<p></p>").text(text); 
        $(".modal-body").append(head, content); 
        // e.preventDefault();
        // var infor=$(this).serializeArray();
        
 
        // $.ajax({type: "GET",url: "http://jac.stephmoreau.ca/submitForm/",data: infor}).done(function (data) {

        //     var test =data;
            
        // })
    });
    $("#form-search").submit(function(e){
        e.preventDefault(); 
        var str = $("#input-keyWord").val();
        if (str.includes("beer")||str.includes("product")) {
            window.location.replace("./product.html");
        } 
        else if (str.includes("story")){
            window.location.replace("./story.html");
        }
        else if (str.includes("contact")){
            window.location.replace("./contact.html");
        }        else if (str.includes("event")){
            window.location.replace("./events.html");
        }
        else if (str.includes("commit")){
            window.location.replace("./commitment.html");
        }
    });
    $( "#subBeer1" ).click(function() {
        ajaxcall();
    });
    $( "#subBeer2" ).click(function() {
        ajaxcall();
    });
    $( "#subBeer3" ).click(function() {
        ajaxcall();
    });
    $( "#subBeer4" ).click(function() {
        ajaxcall();
    });

    var ajaxcall= function () {
        $.ajax({ url: "https://api.punkapi.com/v2/beers/random"}).done(function (data) {
            if (data&&data[0].name) {
               // alert("Beer: " + data.name + ", thanks you.")
                $('#exampleModal').modal('show')   ;
                $('.modal-body').html("");
                var infor=$(this).serializeArray();
                var name = data[0].name;

                var header="This is "+name+"!";
        
                var textdescription= data[0].description;
        
                var head = $("<h4></h4>").text(header); 
               // head.css
                var content = $("<p></p>").text(textdescription); 
                $(".modal-body").append(head, content); 
            }
        }).fail(function (data) {
            console.log("Failed");
        })
     }
});