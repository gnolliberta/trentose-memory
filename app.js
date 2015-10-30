/* your code should go here */


// Three main classes of cards:
// done: when the user has discovered the pair of cards
// hidden: when the card has not been discovered yet

var tmpl1 =  "<li id='VAL-1' class='hidden'>"+
             "<h3>VAL</h3>"  +       
             "</li>";

var tmpl2 =  "<li id='VAL-1' class='done'>"+
             "<h3>VAL</h3>"  +       
             "</li>";
var  a;

var counter = 1;

$(document).ready(function(){
    for(var i =0; i< 10 ; i++)
        {
            a = tmpl2.replace("VAL-1", data[i]);
            a = a.replace("VAL", data[i]);
            $(".cards").append(a);
            
        }
    
    $(".opt-start").click(function(){
        
        $(".done").addClass("hidden");
        $(".hidden").removeClass("done");
        
       /*$(".cards").on("click","li",function(e){
            $(e.currentTarget).addClass("selected");
            $(".selected").removeClass("hidden");
        });*/
        
        $("#1").click(function(){
            
            if(counter === 1){counter++;$("#1").removeClass("hidden");}
            else{alert("You Lost")}
            
        });
        $("#2").click(function(){
            
            if(counter === 2){counter++;$("#2").removeClass("hidden");}
            else{alert("You Lost")}
            
        });
        $("#3").click(function(){
            
            if(counter == 3){counter++;$("#3").removeClass("hidden");}
            else{alert("You Lost")}
            
        });
        $("#4").click(function(){
            
            if(counter == 4){counter++;$("#4").removeClass("hidden");}
            else{alert("You Lost")}
            
        });
        $("#5").click(function(){
            
            if(counter == 5){counter++;$("#5").removeClass("hidden");}
            else{alert("You Lost")}
            
        });
        $("#6").click(function(){
            
            if(counter == 6){counter++;$("#6").removeClass("hidden");}
            else{alert("You Lost")}
            
        });
        $("#7").click(function(){
            
            if(counter == 7){counter++;$("#7").removeClass("hidden");}
            else{alert("You Lost")}
            
        });
        $("#8").click(function(){
            
            if(counter == 8){counter++;$("#8").removeClass("hidden");}
            else{alert("You Lost")}
            
        });
        $("#9").click(function(){
            
            if(counter == 9){counter++;$("#9").removeClass("hidden");}
            else{alert("You Lost")}
            
        });
        $("#10").click(function(){
            
            if(counter == 10) { $("#10").removeClass("hidden"); alert("You Won");}
            else{alert("You Lost")}
            
        });
        
        
    });


});





