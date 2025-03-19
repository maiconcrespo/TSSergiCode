"use strict";
let interMiami = 11;
let eibar = 11;
let messi = 1;
let juegaMessi = true;
let palabras = ' Me emocione al verlo';
function jugar(equipo1, equipo2, juegaMessi) {
    let motivo = '';
    if (juegaMessi) {
        equipo1 += messi;
        motivo = 'porque juega Messi';
    }
    if (equipo1 > equipo2)
        console.log(`Gana Inter Miami ${motivo}`);
    if (equipo1 == equipo2)
        console.log('Empata');
    if (equipo1 < equipo2)
        console.log('Gana Eibar');
}
jugar(interMiami, eibar, juegaMessi);
