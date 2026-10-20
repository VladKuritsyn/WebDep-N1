let change = document.getElementById("change");
change.addEventListener("click", change_all);

function change_all() {
  let divs = document.querySelector('.passport-wrapper').getElementsByTagName('div');
  
  if (divs[4].innerHTML === "Курицын") {
    divs[0].innerHTML = "MVD of Russia, Nizhny Novgorod Region";
    divs[4].innerHTML = "Kuritsyn";
    divs[5].innerHTML = "Vladislav";
    divs[6].innerHTML = "Andreevich";
    divs[7].innerHTML = "MALE";
    divs[8].innerHTML = "2007";
    divs[9].innerHTML = "Nizhny Novgorod";
    

  } else {
    
    divs[0].innerHTML = "ГУ МВД России по Нижегородской Области";
    divs[4].innerHTML = "Курицын";
    divs[5].innerHTML = "Владислав";
    divs[6].innerHTML = "Андреевич";
    divs[7].innerHTML = "МУЖ.";
    divs[8].innerHTML = "2007 г.";
    divs[9].innerHTML = "гор. Нижний Новгород";
      }
}