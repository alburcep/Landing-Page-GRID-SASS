Diseño: https://leadtech.invisionapp.com/share/GPPNHVF63VR#/screens/337010165

********************************************************

TIPOGRAFÍA

@import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');
font-family: 'Montserrat', ;

@import url('https://fonts.googleapis.com/css?family=Merriweather&display=swap');
font-family: 'Merriweather', ;

********************************************************

SASS

sass sass/style.scss css/style.css
sass --watch sass:style

_layout.scss
_component.scss
_base.scss
_variables.scss
main.scss
*

Base - mixins, utility CSS classes

Components - botones, loading

Layout - grid desktop/mobile

Variables - vars

Main - importar *


*******************************************************

Data slider.json

Get desde URL externa: https://api.npoint.io/428466d6262b85c32f71
(En la array hay dos objetos con los mismos datos, usaré el primer objeto)

- title: 'Vista to the Moon' -/- 'Moon' está en mayúsculas en vez de en miníuscula.

*******************************************************

Imágenes

Cambio la extensión de la imagen 'rocket.png' a 'rocket.jpg' para que coincida con el archivo 'slider.json'

Cambio nombre de 'background moon.jpg' a 'background_moon.jpg' para poder acceder al recurso


*******************************************************

'Explore to the moon' no está en el archivo json. Lo introduzco a mano.