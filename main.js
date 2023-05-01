var num=5;
var string="";

for(var i=1;i<=num;i++){

    for(var j=0;j<num-i;j++){

        string+=" ";

    }

    for(var k=0;k<i;k++ ){

     string+="*";

    }

    string+="<br>";
    

}

document.getElementById("nested1").innerHTML=string;



var string2="";

for(var i=1;i<=num;i++){

    for(var j=0;j<=num-i;j++){

        string2+="&nbsp;&nbsp";

    }

    for(var k=0;k<i;k++){

    string2+="*";

    }

string2+="<br>";

}

document.getElementById("nested2").innerHTML=string2;

























