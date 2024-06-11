export function SupCorporea(altura, peso) {
  const multiplicação = altura * peso;
  const resultado = Math.sqrt(multiplicação / 3600);
  return resultado.toFixed(2);
}

export function AEAO(AE, AO) {
  const resultado = AE / AO;
  return resultado.toFixed(2);
}

export function EE(vmxe, ETiss) {
  const resultado = vmxe / ETiss;
  return resultado.toFixed(2);
}

export function EA(vmxe, vmxa) {
  const resultado = vmxe / vmxa;
  return resultado.toFixed(1);
}

export function deltaD(VeDiast, VEsist) {
  const resultado = (VeDiast - VEsist) / VeDiast;
  return resultado.toFixed(2);
}

export function VolAeSc(SupCorporea, VolAe) {
  const resultado = VolAe / SupCorporea;
  return resultado.toFixed(3);
}

export function massaAltura(altura, massaVE) {
  const peso = massaVE / 1000;
  const potencia = (altura / 100) ** 2.7;
  const resultado = peso / potencia;
  return resultado.toFixed(2);
}

export function MassaDoVE(PPdiast, VEdiast, Sdiast) {
  const soma = (PPdiast + VEdiast + Sdiast) ** 3;
  const potencia = VEdiast ** 3;
  const resultado = 0.832 * (soma - potencia) + 0.6;
  return resultado.toFixed();
}

export function EspRelVE(PPdiast, VEdiast) {
  const soma = PPdiast + PPdiast;
  const resultado = soma / VEdiast;
  return resultado.toFixed(2);
}

export function MassaSC(SupCorporea, massaVE) {
  const multiplicacao = SupCorporea * 1000;
  const resultado = massaVE / multiplicacao;
  return resultado.toFixed(2);
}

export function feTeichholz(Vediast, VEsist) {
  const resultado =
    (((70 * Vediast ** 3) / (24 + Vediast) -
      (70 * VEsist ** 3) / (24 + VEsist)) /
      ((70 * Vediast ** 3) / (24 + Vediast))) *
    100;
  return resultado.toFixed(0);
}

export function feCubo(Vediast, VEsist) {
  const resultado = ((Vediast ** 3 - VEsist ** 3) / Vediast ** 3) * 100;
  return resultado.toFixed(0);
}


