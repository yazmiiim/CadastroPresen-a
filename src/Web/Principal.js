let Fusca = new Veiculo(new MotorFusca(),"Volkswagen Typ 1","Geraldo","1999");

console.log(Fusca.acelerar());

let Palio = new Veiculo(new MotorPalio(),"Essence Dualogic 1.6 16V","Antonio","2010");

console.log(Palio.acelerar());

let Cadete = new Veiculo(new MotorCadete(),"Ipanema","Simon","2001");

console.log(Cadete.acelerar() + "<br><br>");

console.log(Fusca.piloto)