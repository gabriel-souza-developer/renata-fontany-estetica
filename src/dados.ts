export const NOME = "Clínica de Estética Renata Fontany";
export const TELEFONE = "5531985245318";
export const TELEFONE_LEGIVEL = "(31) 98524-5318";
export const INSTAGRAM = "https://www.instagram.com/renatafontany/";
export const INSTAGRAM_ARROBA = "@renatafontany";
export const ENDERECO = "Rua Tabelião Ferreira de Carvalho, 960";
export const BAIRRO_CIDADE = "Cidade Nova, Belo Horizonte, MG";
export const CEP = "31170-180";
export const MAPA = "https://www.google.com/maps/search/?api=1&query=Cl%C3%ADnica%20de%20Est%C3%A9tica%20Renata%20Fontany&query_place_id=ChIJieu3MkKapgARWS-o0ZNWYJg";
export const NOTA_GOOGLE = { nota: "4,9", avaliacoes: 95, consulta: "novembro de 2026" };

export function whatsapp(mensagem = "Olá! Vim pelo site e quero agendar um horário.") {
  return "https://wa.me/" + TELEFONE + "?text=" + encodeURIComponent(mensagem);
}

export const MAPA_EMBED =
  "https://www.google.com/maps?q=" +
  encodeURIComponent("Clínica de Estética Renata Fontany, Rua Tabelião Ferreira de Carvalho, 960, Cidade Nova, Belo Horizonte, MG, 31170-180") +
  "&z=16&hl=pt-BR&output=embed";
