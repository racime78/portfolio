
<div id="slider">
                <img src="Public/mer2.webp"  id="slide">
                <div id="precedent" onclick="ChangeSlide(-1)"><</div>
                <div id="suivant" onclick="ChangeSlide(1)">></div>
            </div> <!-- fin div slider -->


var slide = new Array("mer2.webp", "ciel2.webp");
var numero = 0;

function ChangeSlide(sens) {
    numero = numero + sens;
    if (numero < 0)
        numero = slide.length - 1;
    if (numero > slide.length - 1)
        numero = 0;
    document.getElementById("slide").src = slide[numero];}



/* CSS DU SLIDER PROFIL */


#slider 
{
  position: relative;
  width: 300px;
  margin: auto;
  display: flex;
  align-items: center;
}

#precedent,#suivant 
{
  cursor: pointer;
  transition: opacity 0.3s ease;
  opacity: 0;
  position: absolute;
  font-size: 40px;
  color: rgba(220, 220, 220, 0.8);
  background-color: rgba(0, 0, 0, 0.8);
  padding: 5px;
}

#precedent {
  left: 0;
}

#suivant {
  right: 0;
}

#slider:hover #precedent,
#slider:hover #suivant 
{
  opacity: 1;
}
/* FIN CSS DU SLIDER PROFIL */

    
    