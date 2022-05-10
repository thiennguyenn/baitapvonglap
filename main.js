

document.getElementById("btnnhapso").onclick = function () {


    var tong = 0;
    var n = 0;

    while (tong < 10000) {
       
        n++;
        tong += n ;
    }
    document.getElementById("ftsubmit").innerHTML = n;

};


// Bài tập2
document.getElementById("btnSoXN").onclick = function () {
    var x = document.getElementById("soX").value * 1;
    var n = document.getElementById("soN").value * 1;

 var   tichT = 1;
   var tongS = 0;
  for(var i = 1; i <= n; i++ ){
      tichT =tichT*x;
      tongS += tichT;

  }
document.getElementById("ftbtnSoXN").innerHTML=tongS;
};

// Bài tập3
document.getElementById("btntinhGT").onclick = function () {
    var n = document.getElementById("nhapN").value * 1;

var gT = 1;
 
  for(var i = 1; i <= n; i++ ){
    gT = gT * i;

  }
document.getElementById("ftgT").innerHTML=gT;
};

document.getElementById("btnChanLe").onclick = function () {
    var num = document.getElementById("nhapChanLe").value * 1;
    var soChan = "";
    var soLe = "";
    for (var i = 0; i < num; i++) {
        if (i % 2 === 0) {
            soChan += "<div>" + "Div số chẵn "+i +"</div>"+"<br/>";
        } else {
            soLe += "<div>" + "Div số Lẻ "+i +"</div>"+"<br/>";
        }
    }
    var kq = soChan  + soLe;

    document.getElementById("ftLeChan").innerHTML = kq;


};


