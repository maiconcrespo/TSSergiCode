let interMiami: number = 11
let eibar: number = 11
let messi: number =1
let juegaMessi: boolean = true

let palabras:  string =' Me emocione al verlo'

function jugar(equipo1:number , equipo2:number,juegaMessi: boolean):void{
    let motivo: string =''
    if (juegaMessi) {
        equipo1 += messi
        motivo = 'porque juega Messi'
    }
    if(equipo1>equipo2)console.log(`Gana Inter Miami ${motivo}`)
    if(equipo1==equipo2)console.log('Empata')
    if(equipo1<equipo2)console.log('Gana Eibar')

}

jugar(interMiami,eibar,juegaMessi)

