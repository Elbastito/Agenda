class EstrCon{
    constructor(n,app,tel,ca,ext,col){
        this.nombre=n;
        this.apellidos=app;
        this.telefono=tel;
        this.calle=ca;
        this.exterior=ext;
        this.colonia=col;
    }
}

let contacto= function (){
    let cbar=new EstrCon(a=prompt("Nombre"),b=prompt("Apellido paterno"), c=prompt("Telefono"),d=prompt("Calle"),e=prompt("No. exterior"),f=prompt("Colonia"));
    return cbar;
}

let Agenda=[];
let o=1;
do {
    o=Number(prompt("***BENVENDIO A TU AGENDA***\n1.Agregar contanto\n2.Buscar contacto\n0.Salir"));
    switch (o) {
        case 1:
            Agenda.push(contacto());
            break;
        case 2:
            Agenda.filter();
            break;
        case 3:
            break;
        case 0:
            break;
    
        default:
            alert("PORFAVOR INTRODUCE UNA OPCION VALIDA")
            break;
    } 
} while (o!=0);

console.log(Agenda);


