import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataGraphIngresosService } from '../../../services/data-graph-ingresos.service';
import economicos from '../../../../assets/data/EconomicosIngresos2022.json';

@Component({
  selector: 'app-select-economico-ingreso',
  templateUrl: './select-economico-ingreso.component.html',
  styleUrls: ['./select-economico-ingreso.component.scss']
})
export class SelectEconomicoIngresoComponent implements OnInit {
  // userArrayJSON = import(`../../../../assets/data/EconomicosIngresos2022.json`);

  // ecoArray =
  //   [
  //     {
  //       "Eco": 10000,
  //       "DesEco": "Impuestos sobre la Renta de las Personas Físicas."
  //     },
  //     {
  //       "Eco": 11200,
  //       "DesEco": "Impuesto sobre Bienes Inmuebles. Bienes Inmuebles de Naturaleza Rústica."
  //     },
  //     {
  //       "Eco": 11300,
  //       "DesEco": "Impuesto sobre Bienes Inmuebles. Bienes inmuebles de Naturaleza Urbana."
  //     },
  //     {
  //       "Eco": 11400,
  //       "DesEco": "Impuesto sobre Bienes Inmuebles. Bienes Inmuebles de características especiales."
  //     },
  //     {
  //       "Eco": 11500,
  //       "DesEco": "Impuesto sobre Vehículos de Tracción Mecánica."
  //     },
  //     {
  //       "Eco": 11600,
  //       "DesEco": "Impuesto sobre Incremento del Valor de los Terrenos de Naturaleza Urbana."
  //     },
  //     {
  //       "Eco": 13000,
  //       "DesEco": "Impuesto sobre Actividades Económicas."
  //     },
  //     {
  //       "Eco": 13001,
  //       "DesEco": "Distribución cuotas nacionales IAE"
  //     },
  //     {
  //       "Eco": 13002,
  //       "DesEco": "Distribución cuotas provinciales IAE"
  //     },
  //     {
  //       "Eco": 21000,
  //       "DesEco": "Impuesto sobre el Valor Añadido"
  //     },
  //     {
  //       "Eco": 22000,
  //       "DesEco": "Impuestos sobre el alcohol y bebidas derivadas"
  //     },
  //     {
  //       "Eco": 22001,
  //       "DesEco": "Impuesto sobre la cerveza"
  //     },
  //     {
  //       "Eco": 22003,
  //       "DesEco": "Impuestos sobre las labores del tabaco"
  //     },
  //     {
  //       "Eco": 22004,
  //       "DesEco": "Impuestos sobre hidrocarburos"
  //     },
  //     {
  //       "Eco": 22006,
  //       "DesEco": "Impuestos sobre productos intermedios"
  //     },
  //     {
  //       "Eco": 29000,
  //       "DesEco": "Impuestos sobre construcciones, instalaciones y obras"
  //     },
  //     {
  //       "Eco": 29100,
  //       "DesEco": "Impuestos sobre gastos suntuarios cotos de caza y pesca"
  //     },
  //     {
  //       "Eco": 30000,
  //       "DesEco": "Tasas por servicio de"
  //     },
  //     {
  //       "Eco": 30001,
  //       "DesEco": "Servicio de abastecimiento de agua ELA Torrecera"
  //     },
  //     {
  //       "Eco": 30100,
  //       "DesEco": "Tasas por servicio de alcantarillado"
  //     },
  //     {
  //       "Eco": 30200,
  //       "DesEco": "Tasas por servicio recogida de basura"
  //     },
  //     {
  //       "Eco": 30300,
  //       "DesEco": "Tasas servicio de tratamiento de"
  //     },
  //     {
  //       "Eco": 30901,
  //       "DesEco": "Tasas prestación servicios cementerio municipal"
  //     },
  //     {
  //       "Eco": 30902,
  //       "DesEco": "Tasas extinción de incendios y salvamentos"
  //     },
  //     {
  //       "Eco": 30903,
  //       "DesEco": "Tasas servicios especiales de vigilancia, control prot."
  //     },
  //     {
  //       "Eco": 32100,
  //       "DesEco": "Tasas licencias urbanísticas"
  //     },
  //     {
  //       "Eco": 32201,
  //       "DesEco": "Tasas licencias de aperturas"
  //     },
  //     {
  //       "Eco": 32500,
  //       "DesEco": "Tasas por expedición de documentos"
  //     },
  //     {
  //       "Eco": 32600,
  //       "DesEco": "Tasas retirada de vehículos"
  //     },
  //     {
  //       "Eco": 32901,
  //       "DesEco": "Tasas por celebración de matrimonios civiles"
  //     },
  //     {
  //       "Eco": 33000,
  //       "DesEco": "Tasas de estacionamiento de vehículos"
  //     },
  //     {
  //       "Eco": 33100,
  //       "DesEco": "Tasa por entrada de vehículos"
  //     },
  //     {
  //       "Eco": 33204,
  //       "DesEco": "Tasa utilización superficies y servicios estación autobús"
  //     },
  //     {
  //       "Eco": 33401,
  //       "DesEco": "Ingresos por canalizaciones vía pública"
  //     },
  //     {
  //       "Eco": 34402,
  //       "DesEco": "Taquillas fiestas bulerias"
  //     },
  //     {
  //       "Eco": 33501,
  //       "DesEco": "Tasas ocupación vía pública gestionada por urbanismo"
  //     },
  //     {
  //       "Eco": 33601,
  //       "DesEco": "Tasas por alteración o interrupción del tráfico"
  //     },
  //     {
  //       "Eco": 33701,
  //       "DesEco": "Tasas ocupación suelo, vuelo o subsuelo por empresas"
  //     },
  //     {
  //       "Eco": 33800,
  //       "DesEco": "Compensación de Telefónica de España S.A."
  //     },
  //     {
  //       "Eco": 33901,
  //       "DesEco": "Tasas licencias autotaxi y vehículos de alquiler"
  //     },
  //     {
  //       "Eco": 33902,
  //       "DesEco": "Tasas utilización puestos en mercado de abastos"
  //     },
  //     {
  //       "Eco": 33903,
  //       "DesEco": "Tasas ocupación con mercancias, materiales de construcción"
  //     },
  //     {
  //       "Eco": 33904,
  //       "DesEco": "Tasas ocupación con kioscos"
  //     },
  //     {
  //       "Eco": 33905,
  //       "DesEco": "Tasas fijación anuncios y publicidad en el dominio público local"
  //     },
  //     {
  //       "Eco": 33906,
  //       "DesEco": "Tasas por ocupación con puestos, barracas, etc."
  //     },
  //     {
  //       "Eco": 33907,
  //       "DesEco": "Tasas por instalación fijas, puestos, espectáculos, etc."
  //     },
  //     {
  //       "Eco": 33908,
  //       "DesEco": "Ocupación vía pública con mesas y sillas"
  //     },
  //     {
  //       "Eco": 34101,
  //       "DesEco": "Precios públicos servicio ayuda a domicilio"
  //     },
  //     {
  //       "Eco": 34201,
  //       "DesEco": "Precios públicos matrículas Escuela de música"
  //     },
  //     {
  //       "Eco": 34202,
  //       "DesEco": "Servicios actividades de mayores"
  //     },
  //     {
  //       "Eco": 34301,
  //       "DesEco": "Precios públicos utilización de instalaciones deportivas"
  //     },
  //     {
  //       "Eco": 34302,
  //       "DesEco": "Precios públicos matrículas competiciones hípicas"
  //     },
  //     {
  //       "Eco": 34303,
  //       "DesEco": "Inscripciones deportivas"
  //     },
  //     {
  //       "Eco": 34403,
  //       "DesEco": "Precios públicos por ventas de entradas Museo Arqueológico"
  //     },
  //     {
  //       "Eco": 34404,
  //       "DesEco": "Precios públicos por entradas al conjunto monumental El Alcázar"
  //     },
  //     {
  //       "Eco": 34405,
  //       "DesEco": "Precios públicos venta de entradas pruebas hípicas"
  //     },
  //     {
  //       "Eco": 34407,
  //       "DesEco": "Taquilla Sala Compañía"
  //     },
  //     {
  //       "Eco": 34409,
  //       "DesEco": "Precios públicos entrada en Claustros Santo Domingo"
  //     },
  //     {
  //       "Eco": 34410,
  //       "DesEco": "Precios públicos venta de entradas Zoológico"
  //     },
  //     {
  //       "Eco": 34902,
  //       "DesEco": "Serv. Inspección Sanitaria Análisis"
  //     },
  //     {
  //       "Eco": 34903,
  //       "DesEco": "Precios públicos servicios de sanidad preventiva, desinfección, etc."
  //     },
  //     {
  //       "Eco": 34905,
  //       "DesEco": "Celebración eventos privados Alcázar, P. Villavicencio, S. Com"
  //     },
  //     {
  //       "Eco": 34906,
  //       "DesEco": "Centros Sociales"
  //     },
  //     {
  //       "Eco": 34907,
  //       "DesEco": "Celebración eventos Claustros de Santo Domingo"
  //     },
  //     {
  //       "Eco": 34908,
  //       "DesEco": "Precios públicos servicio mantenimiento animales incautados"
  //     },
  //     {
  //       "Eco": 34909,
  //       "DesEco": "Precios públicos servicios informáticos y telecomunicaciones"
  //     },
  //     {
  //       "Eco": 34910,
  //       "DesEco": "Prestación de servicio recaudación"
  //     },
  //     {
  //       "Eco": 34911,
  //       "DesEco": "P.P. Servicio recogida animales"
  //     },
  //     {
  //       "Eco": 36001,
  //       "DesEco": "Ventas de libros"
  //     },
  //     {
  //       "Eco": 36002,
  //       "DesEco": "Fotocopias"
  //     },
  //     {
  //       "Eco": 36003,
  //       "DesEco": "Ventas objetos Museo Arqueológico"
  //     },
  //     {
  //       "Eco": 36400,
  //       "DesEco": "Venta por máquinas expendedoras"
  //     },
  //     {
  //       "Eco": 38000,
  //       "DesEco": "Reintegro avales"
  //     },
  //     {
  //       "Eco": 38001,
  //       "DesEco": "Ejecución de aval incumplimiento contrato obras"
  //     },
  //     {
  //       "Eco": 38801,
  //       "DesEco": "Ejecución de aval incumplimiento contrato obras"
  //     },
  //     {
  //       "Eco": 38900,
  //       "DesEco": "Otros reintegros de operaciones corrientes"
  //     },
  //     {
  //       "Eco": 38901,
  //       "DesEco": "Anuncios a cargo de particulares"
  //     },
  //     {
  //       "Eco": 38902,
  //       "DesEco": "Obras e instalaciones a cargo de particulares"
  //     },
  //     {
  //       "Eco": 39100,
  //       "DesEco": "Multas por infracciones urbanísticas"
  //     },
  //     {
  //       "Eco": 39110,
  //       "DesEco": "Multas por infracciones tributarias y análogas"
  //     },
  //     {
  //       "Eco": 39120,
  //       "DesEco": "Multas por infracciones de la Ordenanza de circulación"
  //     },
  //     {
  //       "Eco": 39190,
  //       "DesEco": "Otras multas y sanciones"
  //     },
  //     {
  //       "Eco": 39191,
  //       "DesEco": "Multas de ordenanzas municipales"
  //     },
  //     {
  //       "Eco": 39192,
  //       "DesEco": "Sanción salud pública"
  //     },
  //     {
  //       "Eco": 39211,
  //       "DesEco": "Recargo de apremio"
  //     },
  //     {
  //       "Eco": 39300,
  //       "DesEco": "Intereses de demora"
  //     },
  //     {
  //       "Eco": 39610,
  //       "DesEco": "Cuotas de urbanización"
  //     },
  //     {
  //       "Eco": 39690,
  //       "DesEco": "Convenios urbanísticos"
  //     },
  //     {
  //       "Eco": 39710,
  //       "DesEco": "Otros ingresos por aprovechamientos urbanísticos"
  //     },
  //     {
  //       "Eco": 39900,
  //       "DesEco": "Otros ingresos diversos destinados PMS"
  //     },
  //     {
  //       "Eco": 39901,
  //       "DesEco": "Ingresos diversos"
  //     },
  //     {
  //       "Eco": 39902,
  //       "DesEco": "Imprevistos"
  //     },
  //     {
  //       "Eco": 39903,
  //       "DesEco": "Recursos telefonos"
  //     },
  //     {
  //       "Eco": 39904,
  //       "DesEco": "Ingresos extraordinarios derivados"
  //     },
  //     {
  //       "Eco": 39907,
  //       "DesEco": "Ingresos de fincas no urbanizables"
  //     },
  //     {
  //       "Eco": 39909,
  //       "DesEco": "Indennización por CIA"
  //     },
  //     {
  //       "Eco": 39911,
  //       "DesEco": "Ingresos costas judiciales"
  //     },
  //     {
  //       "Eco": 39913,
  //       "DesEco": "Ingresos por publicidad a cargo de particulares"
  //     },
  //     {
  //       "Eco": 39916,
  //       "DesEco": "Aprovechamiento urbanístico PMS"
  //     },
  //     {
  //       "Eco": 39918,
  //       "DesEco": "Ingresos por ejecución obras a cargo particulares"
  //     },
  //     {
  //       "Eco": 39919,
  //       "DesEco": "Indemnizaciones en bienes y derechos"
  //     },
  //     {
  //       "Eco": 39920,
  //       "DesEco": "Servicio recogida residuos"
  //     },
  //     {
  //       "Eco": 39921,
  //       "DesEco": "Otros ingresos diversos AJEMSA"
  //     },
  //     {
  //       "Eco": 39922,
  //       "DesEco": "Ingresos por multas coercitivas"
  //     },
  //     {
  //       "Eco": 42001,
  //       "DesEco": "Otras transferencias del Estado déficit autobuses"
  //     },
  //     {
  //       "Eco": 42007,
  //       "DesEco": "Otros ingresos Administración General del Estado"
  //     },
  //     {
  //       "Eco": 42009,
  //       "DesEco": "Subvención Ministerio de Sanidad Plan Nacional sobre drogas"
  //     },
  //     {
  //       "Eco": 42010,
  //       "DesEco": "Fondo complementario de financiación"
  //     },
  //     {
  //       "Eco": 42020,
  //       "DesEco": "Compensación por beneficios fiscales"
  //     },
  //     {
  //       "Eco": 42090,
  //       "DesEco": "Otras transferencias corrientes de la Administración General"
  //     },
  //     {
  //       "Eco": 42094,
  //       "DesEco": "Conv. prestaciones básicas servicios sociales comunitarios"
  //     },
  //     {
  //       "Eco": 42101,
  //       "DesEco": "Transferencias Instituto Nacional de Estadística"
  //     },
  //     {
  //       "Eco": 42107,
  //       "DesEco": "Subvención IMSERSO"
  //     },
  //     {
  //       "Eco": 42122,
  //       "DesEco": "De Organismo Autónomo Programas Educativos Europeos"
  //     },
  //     {
  //       "Eco": 42124,
  //       "DesEco": "De Organismos Autónomos y agencias estatales"
  //     },
  //     {
  //       "Eco": 42190,
  //       "DesEco": "De otros Organismos Autónomos y agencias"
  //     },
  //     {
  //       "Eco": 42201,
  //       "DesEco": "De fundaciones estatales"
  //     },
  //     {
  //       "Eco": 44100,
  //       "DesEco": "De sociedades mercantiles"
  //     },
  //     {
  //       "Eco": 45000,
  //       "DesEco": "Participacion en los tributos de la Comunidad Autónoma"
  //     },
  //     {
  //       "Eco": 45002,
  //       "DesEco": "Transferencias en materia de servicios sociales y políticas de igualdad"
  //     },
  //     {
  //       "Eco": 45030,
  //       "DesEco": "Transferencias corrientes en cumplimiento de convenios suscritos"
  //     },
  //     {
  //       "Eco": 45050,
  //       "DesEco": "Transferencias corrientes"
  //     },
  //     {
  //       "Eco": 45060,
  //       "DesEco": "Otras transferencias corrientes en cumplimiento de convenios"
  //     },
  //     {
  //       "Eco": 45080,
  //       "DesEco": "Otras subvenciones corrientes de la Administración General del Estado"
  //     },
  //     {
  //       "Eco": 45100,
  //       "DesEco": "Instituto Andaluz de la Mujer"
  //     },
  //     {
  //       "Eco": 45101,
  //       "DesEco": "De FAISEM Fundación Andaluza"
  //     },
  //     {
  //       "Eco": 45103,
  //       "DesEco": "De la Agencia Andaluza de Instituciones Culturales"
  //     },
  //     {
  //       "Eco": 45106,
  //       "DesEco": "Subvenciones Instituto Andaluz de la Juventud"
  //     },
  //     {
  //       "Eco": 45107,
  //       "DesEco": "Subvenciones Servicio Andaluz de Empleo"
  //     },
  //     {
  //       "Eco": 45108,
  //       "DesEco": "Agencia de Servicios Sociales y Dependencia de Andalucía"
  //     },
  //     {
  //       "Eco": 46117,
  //       "DesEco": "Diputación Provincial de Cádiz"
  //     },
  //     {
  //       "Eco": 46600,
  //       "DesEco": "De otras entidades que agrupen municipios"
  //     },
  //     {
  //       "Eco": 46800,
  //       "DesEco": "De entidades locales autonomas"
  //     },
  //     {
  //       "Eco": 47000,
  //       "DesEco": "De empresas privadas"
  //     },
  //     {
  //       "Eco": 48000,
  //       "DesEco": "Transferencias a Instituciones sin animo de lucro"
  //     },
  //     {
  //       "Eco": 49000,
  //       "DesEco": "Transferencias de La Unión europea"
  //     },
  //     {
  //       "Eco": 51100,
  //       "DesEco": "Intereses de préstamos concedios a Organ. Autónomos y a"
  //     },
  //     {
  //       "Eco": 51400,
  //       "DesEco": "Intereses de préstamos concedidos a sociedades mercantiles,E"
  //     },
  //     {
  //       "Eco": 52000,
  //       "DesEco": "Intereses de depósito"
  //     },
  //     {
  //       "Eco": 53410,
  //       "DesEco": "De sociedades y entidades no dependientes de la entidades locales"
  //     },
  //     {
  //       "Eco": 54100,
  //       "DesEco": "Arrendamientos de fincas urbanas"
  //     },
  //     {
  //       "Eco": 55000,
  //       "DesEco": "Concesiones administrativas"
  //     },
  //     {
  //       "Eco": 55903,
  //       "DesEco": "Vallas publicitarias"
  //     },
  //     {
  //       "Eco": 59000,
  //       "DesEco": "Patrocinio y publicidad Deportes"
  //     },
  //     {
  //       "Eco": 59002,
  //       "DesEco": "Patrocinio eventos de fiestas"
  //     },
  //     {
  //       "Eco": 59003,
  //       "DesEco": "Patrocinio y publicidad zoo"
  //     },
  //     {
  //       "Eco": 59005,
  //       "DesEco": "Patrocinio y publicidad"
  //     },
  //     {
  //       "Eco": 59900,
  //       "DesEco": "Otros ingresos patrimoniales"
  //     },
  //     {
  //       "Eco": 59901,
  //       "DesEco": "Patrocinio actos culturales"
  //     },
  //     {
  //       "Eco": 59902,
  //       "DesEco": "Patrocinio eventos fiestas"
  //     },
  //     {
  //       "Eco": 59906,
  //       "DesEco": "Sponsorización eventos de Fomento"
  //     },
  //     {
  //       "Eco": 59908,
  //       "DesEco": "Ingresos publicidad TV y radio"
  //     },
  //     {
  //       "Eco": 60000,
  //       "DesEco": "Venta de solares (No PMS)"
  //     },
  //     {
  //       "Eco": 60300,
  //       "DesEco": "Enajenaciones PMS"
  //     },
  //     {
  //       "Eco": 61000,
  //       "DesEco": "De las demás inversiones reales"
  //     },
  //     {
  //       "Eco": 61900,
  //       "DesEco": "De otras inversiones reales elementos de transporte"
  //     },
  //     {
  //       "Eco": 72000,
  //       "DesEco": "Transferencias capital Administración General del Estado"
  //     },
  //     {
  //       "Eco": 72112,
  //       "DesEco": "Instituto de la Juventud"
  //     },
  //     {
  //       "Eco": 72190,
  //       "DesEco": "De otros Organismos Autónomos y agencias"
  //     },
  //     {
  //       "Eco": 75012,
  //       "DesEco": "Transferencias de capital"
  //     },
  //     {
  //       "Eco": 75030,
  //       "DesEco": "Transferencias de capital en cumplimiento de convenios suscritos"
  //     },
  //     {
  //       "Eco": 75060,
  //       "DesEco": "Otras transferencias de capital en cumplimiento de convenios"
  //     },
  //     {
  //       "Eco": 75080,
  //       "DesEco": "Otras transferencias de capital de la Administración General del Estado"
  //     },
  //     {
  //       "Eco": 75100,
  //       "DesEco": "Transferencias capital Organismos Autónomos y Agencias CCAA"
  //     },
  //     {
  //       "Eco": 76100,
  //       "DesEco": "Transferencia de capital de Diputación Provincial de Cádiz"
  //     },
  //     {
  //       "Eco": 76117,
  //       "DesEco": "De Diputaciones, Consejos o Cabildos"
  //     },
  //     {
  //       "Eco": 76800,
  //       "DesEco": "De Entidades Locales Menores"
  //     },
  //     {
  //       "Eco": 77000,
  //       "DesEco": "De empresas privadas"
  //     },
  //     {
  //       "Eco": 78000,
  //       "DesEco": "De familias e instituciones sin animo de lucro"
  //     },
  //     {
  //       "Eco": 78001,
  //       "DesEco": "De la Asociación para el desarrollo rural de la campiña de Jerez"
  //     },
  //     {
  //       "Eco": 79007,
  //       "DesEco": "Del Fondo Social Europeo"
  //     },
  //     {
  //       "Eco": 82120,
  //       "DesEco": "De Entidades locales"
  //     },
  //     {
  //       "Eco": 83001,
  //       "DesEco": "Reintegro de anticipos al personal a corto plazo"
  //     },
  //     {
  //       "Eco": 83101,
  //       "DesEco": "Reintegro de anticipos al personal a largo plazo"
  //     },
  //     {
  //       "Eco": 87010,
  //       "DesEco": "Para gastos con financiación afectada"
  //     },
  //     {
  //       "Eco": 91100,
  //       "DesEco": "Préstamos recibidos a largo plazo de entes del sector público"
  //     },
  //     {
  //       "Eco": 91101,
  //       "DesEco": "Préstamo Fondo Ordenación sentencias judiciales firmes"
  //     },
  //     {
  //       "Eco": 91301,
  //       "DesEco": "Prestamos recibidos a largo plazo de entes fuera del sector público"
  //     }
  //   ];
  ecoArray: { Eco: number, DesEco: string }[] = []
  form = new FormGroup({
    ecoIng: new FormControl('', Validators.required)
  });

  get f() {
    return this.form.controls;
  }

  submit() {
    // console.log(this.form.value);
    this.dataGraphIngresosService.ecoIngreso = this.form.value.ecoIng;
    // this.router.navigate(['/Grafico',{}])
    this.router.navigateByUrl('/Grafico')
  }
  changeEco(e) {
    console.log(e.target.value);
  }

  constructor(
    private router: Router,
    private dataGraphIngresosService: DataGraphIngresosService) {
    // cargaDatos();
  }

  ngOnInit(): void {
    this.ecoArray = economicos;
    // this.cargaDatos();
  }

  // async cargaDatos() {
  //   debugger
  //   const data = await import(`../../../../assets/data/EconomicosIngresos2022.json`);
  // }

}

