function SupCorporea(altura, peso) {
  const multiplicação = altura * peso;
  const resultado = Math.sqrt(multiplicação / 3600);
  return resultado.toFixed(2);
}

function AEAO(AE, AO) {
  const resultado = AE / AO;
  return resultado.toFixed(2);
}

function EE(vmxe, ETiss) {
  const resultado = vmxe / ETiss;
  return resultado.toFixed(2);
}

function EA(vmxe, vmxa) {
  const resultado = vmxe / vmxa;
  return resultado.toFixed(1);
}

function deltaD(VeDiast, VEsist) {
  const resultado = (VeDiast - VEsist) / VeDiast;
  return resultado.toFixed(2);
}

function VolAeSc(SupCorporea, VolAe) {
  const resultado = VolAe / SupCorporea;
  return resultado.toFixed(3);
}

function massaAltura(altura, massaVE) {
  const peso = massaVE / 1000;
  const potencia = (altura / 100) ** 2.7;
  const resultado = peso / potencia;
  return resultado.toFixed(2);
}

function MassaDoVE(PPdiast, VEdiast, Sdiast) {
  const soma = (PPdiast + VEdiast + Sdiast) ** 3;
  const potencia = VEdiast ** 3;
  const resultado = 0.832 * (soma - potencia) + 0.6;
  return resultado.toFixed();
}

function EspRelVE(PPdiast, VEdiast) {
  const soma = PPdiast + PPdiast;
  const resultado = soma / VEdiast;
  return resultado.toFixed(2);
}

function MassaSC(SupCorporea, massaVE) {
  const multiplicacao = SupCorporea * 1000;
  const resultado = massaVE / multiplicacao;
  return resultado.toFixed(2);
}

function feTeichholz(Vediast, VEsist) {
  const resultado =
    (((70 * Vediast ** 3) / (24 + Vediast) -
      (70 * VEsist ** 3) / (24 + VEsist)) /
      ((70 * Vediast ** 3) / (24 + Vediast))) *
    100;
  return resultado.toFixed(0);
}

function feCubo(Vediast, VEsist) {
  const resultado = ((Vediast ** 3 - VEsist ** 3) / Vediast ** 3) * 100;
  return resultado.toFixed(0);
}

module.exports = {
  SupCorporea: SupCorporea,
  VolAeSc: VolAeSc,
  massaAltura: massaAltura,
  EspRelVE: EspRelVE,
  MassaSC: MassaSC,
  MassaDoVE: MassaDoVE,
  AEAO: AEAO,
  deltaD: deltaD,
  EA: EA,
  EE: EE,
  feTeichholz: feTeichholz,
  feCubo: feCubo,
};
