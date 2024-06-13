import { createDocument } from "./CreateTemplate.js";
import { AEAO, EA, EE, EspRelVE, MassaDoVE, MassaSC, SupCorporea, VolAeSc, deltaD, feCubo, feTeichholz, massaAltura } from "./calculate.js";

export function createBaseDocument({nome, idade, peso, altura}) {
  const eTiss = 14.5;
  const vmxe = 89.1;
  const vmxa = 41.4;
  const VEsist = 29;
  const ae = 32;
  const ao = 34;
  const VolAe = 0;
  const alturaPaciente = 165;
  const peso = 70;
  const Vediast = 47;
  const PPdiast = 8;
  const Sdiast = 8;
  const massaVE = MassaDoVE(PPdiast, Vediast, Sdiast);
  const supCorporea = SupCorporea(alturaPaciente, peso);

  const data = {
    Titulo: "RELATÓRIO DE ECOCARDIOGRAMA",
    nomePaciente: nome,
    idadePaciente: idade,
    alturaPaciente: altura,
    diagnostico: "Ta batendo",
    peso,
    VolAeSc: VolAeSc(supCorporea, VolAe),
    massaDoVE: MassaDoVE(PPdiast, Vediast, Sdiast),
    espRelVE: EspRelVE(PPdiast, Vediast),
    massaSC: MassaSC(supCorporea, massaVE),
    SupCorporea: SupCorporea(alturaPaciente, peso),
    massaAltura: massaAltura(alturaPaciente, massaVE),
    AO: 34,
    AF: 32,
    AEAO: AEAO(ae, ao),
    VD: 40,
    VEdiast: 47,
    VEsist: 29,
    AOasc: 28,
    FETei: feTeichholz(Vediast, VEsist),
    FESim: 0,
    deltaD: deltaD(Vediast, VEsist),
    DC: 0,
    FEcub: feCubo(Vediast, VEsist),
    EA: EA(vmxe, vmxa),
    TRIV: 0,
    TDF: 0,
    EE: EE(vmxe, eTiss),
    ETiss: 14.5,
    ATiss: 0,
    Sdiast: 8,
    ExcS: 0,
    PPdiast: 8,
    ExcPP: 0,
    TAPSE: 25,
    FAC: 0,
    SVD: 0,
    mitralVmxe: 89.1,
    mitralVmxa: 41.4,
    aorticaVmxe: 116,
    aorticaGmax: 0,
    aorticaGmed: 0,
    pulmonarGmax: 77,
    pulmonarTac: 0,
    pulmonarTej: 0,
    alturaPaciente: 1.65,
    diagnostico: "Ta batendo",
    comentario:
      "Exame realizado em condições técnicas adequadas e em ritmo cardíaco regular. À ecoscopia observam-se câmaras cardíacas, raiz da aorta e aorta ascendente com dimensões normais. Não há hipertrofia do ventrículo esquerdo (VE). A função sistólica do VE está preservada. Não há alterações da contratilidade segmentar ou global do VE ao repouso. Os parâmetros de avaliação da função diastólica do VE ao repouso se encontravam normais no momento do exame. A função sistólica do VD está preservada. As valvas cardíacas não apresentam alterações morfológicas ou funcionais significativas. Não há sinais de hipertensão arterial pulmonar. Pericárdio de aspecto normal. Ausência de derrame pericárdico.",
    conclusao: "Estudo ecocardiográfico compatível com a normalidade.",
    data: "14/12/2023",
  };

  var nomeArquivo = "TestModelo.docx";
  var nomeModelo = "TestModelo.docx";

  createDocument(nomeModelo, data, nomeArquivo);

}

