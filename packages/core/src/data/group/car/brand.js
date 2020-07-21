import { v4 as uuidv4 } from 'uuid'

export const brands = [
  {
    id: uuidv4(),
    name: 'Abarth',
    isPopular: false,
    isFooterBrand: false,
    models: [
      { id: uuidv4(), name: '500' },
      { id: uuidv4(), name: '500C' },
      { id: uuidv4(), name: 'Other models' },
    ],
  },
  { id: uuidv4(), name: 'Aixam', isPopular: false, isFooterBrand: false, models: [] },
  {
    id: uuidv4(),
    name: 'Alfa Romeo',
    isPopular: false,
    isFooterBrand: false,
    models: [
      { id: uuidv4(), name: '33' },
      { id: uuidv4(), name: '75' },
      { id: uuidv4(), name: '145' },
      { id: uuidv4(), name: '146' },
      { id: uuidv4(), name: '147' },
      { id: uuidv4(), name: '155' },
      { id: uuidv4(), name: '156' },
      { id: uuidv4(), name: '159' },
      { id: uuidv4(), name: '164' },
      { id: uuidv4(), name: '166' },
      { id: uuidv4(), name: '4C' },
      { id: uuidv4(), name: '8C' },
      { id: uuidv4(), name: 'Brera' },
      { id: uuidv4(), name: 'Giulia' },
      { id: uuidv4(), name: 'Giulietta' },
      { id: uuidv4(), name: 'GT' },
      { id: uuidv4(), name: 'GTV' },
      { id: uuidv4(), name: 'MiTo' },
      { id: uuidv4(), name: 'Spider' },
      { id: uuidv4(), name: 'Stelvio' },
      { id: uuidv4(), name: 'Other models' },
    ],
  },
  {
    id: uuidv4(),
    name: 'Alpina',
    isPopular: false,
    isFooterBrand: false,
    models: [
      { id: uuidv4(), name: 'B10' },
      { id: uuidv4(), name: 'B12' },
      { id: uuidv4(), name: 'B3' },
      { id: uuidv4(), name: 'B4' },
      { id: uuidv4(), name: 'B5' },
      { id: uuidv4(), name: 'B6' },
      { id: uuidv4(), name: 'B7' },
      { id: uuidv4(), name: 'B8' },
      { id: uuidv4(), name: 'D10' },
      { id: uuidv4(), name: 'D3' },
      { id: uuidv4(), name: 'D4' },
      { id: uuidv4(), name: 'D5' },
      { id: uuidv4(), name: 'Roadster S' },
      { id: uuidv4(), name: 'XD3' },
      { id: uuidv4(), name: 'Other models' },
    ],
  },
  {
    id: uuidv4(),
    name: 'Alpine',
    isPopular: false,
    isFooterBrand: false,
    models: [
      { id: uuidv4(), name: 'A110' },
      { id: uuidv4(), name: 'Other models' },
    ],
  },
  {
    id: uuidv4(),
    name: 'Aston Martin',
    isPopular: false,
    isFooterBrand: false,
    models: [
      { id: uuidv4(), name: 'Cygnet' },
      { id: uuidv4(), name: 'DB7' },
      { id: uuidv4(), name: 'DB9' },
      { id: uuidv4(), name: 'DBS' },
      { id: uuidv4(), name: 'Lagonda' },
      { id: uuidv4(), name: 'Rapide' },
      { id: uuidv4(), name: 'V8' },
      { id: uuidv4(), name: 'Vantage' },
      { id: uuidv4(), name: 'Vanquish' },
      { id: uuidv4(), name: 'Vantage' },
      { id: uuidv4(), name: 'Virage' },
      { id: uuidv4(), name: 'Other models' },
    ],
  },
  {
    id: uuidv4(),
    name: 'Audi',
    isPopular: true,
    isFooterBrand: false,
    models: [
      { id: uuidv4(), name: '80' },
      { id: uuidv4(), name: '90' },
      { id: uuidv4(), name: '100' },
      { id: uuidv4(), name: '200' },
      { id: uuidv4(), name: 'A1' },
      { id: uuidv4(), name: 'A2' },
      { id: uuidv4(), name: 'A3' },
      { id: uuidv4(), name: 'A4' },
      { id: uuidv4(), name: 'A5' },
      { id: uuidv4(), name: 'A6' },
      { id: uuidv4(), name: 'A7' },
      { id: uuidv4(), name: 'A8' },
      { id: uuidv4(), name: 'Cabrio' },
      { id: uuidv4(), name: 'Coupe' },
      { id: uuidv4(), name: 'e-Tron' },
      { id: uuidv4(), name: 'Q2' },
      { id: uuidv4(), name: 'Q3' },
      { id: uuidv4(), name: 'Q5' },
      { id: uuidv4(), name: 'Q7' },
      { id: uuidv4(), name: 'Q8' },
      { id: uuidv4(), name: 'Quattro' },
      { id: uuidv4(), name: 'R8' },
      { id: uuidv4(), name: 'RS2' },
      { id: uuidv4(), name: 'RS3' },
      { id: uuidv4(), name: 'RS4' },
      { id: uuidv4(), name: 'RS5' },
      { id: uuidv4(), name: 'RS6' },
      { id: uuidv4(), name: 'RS7' },
      { id: uuidv4(), name: 'S1' },
      { id: uuidv4(), name: 'S2' },
      { id: uuidv4(), name: 'S3' },
      { id: uuidv4(), name: 'S4' },
      { id: uuidv4(), name: 'S5' },
      { id: uuidv4(), name: 'S6' },
      { id: uuidv4(), name: 'S7' },
      { id: uuidv4(), name: 'S8' },
      { id: uuidv4(), name: 'SQ2' },
      { id: uuidv4(), name: 'SQ5' },
      { id: uuidv4(), name: 'SQ7' },
      { id: uuidv4(), name: 'TT' },
      { id: uuidv4(), name: 'V8' },
      { id: uuidv4(), name: 'Other models' },
    ],
  },
  { id: uuidv4(), name: 'Austin', isPopular: false, isFooterBrand: false, models: [] },
  {
    id: uuidv4(),
    name: 'BMW',
    isPopular: true,
    isFooterBrand: true,
    models: [
      { id: uuidv4(), name: '1-Serie' },
      { id: uuidv4(), name: '2-Serie Active Tourer' },
      { id: uuidv4(), name: '2-Serie' },
      { id: uuidv4(), name: '3-Serie' },
      { id: uuidv4(), name: '3-Serie GT' },
      { id: uuidv4(), name: '4-Serie' },
      { id: uuidv4(), name: '4-Serie Gran Coupé' },
      { id: uuidv4(), name: '5-Serie' },
      { id: uuidv4(), name: '5-Serie GT' },
      { id: uuidv4(), name: '6-Serie' },
      { id: uuidv4(), name: '6-Serie Gran Coupé' },
      { id: uuidv4(), name: '7-Serie' },
      { id: uuidv4(), name: '8-Serie' },
      { id: uuidv4(), name: 'i3' },
      { id: uuidv4(), name: 'i8' },
      { id: uuidv4(), name: 'X1' },
      { id: uuidv4(), name: 'X2' },
      { id: uuidv4(), name: 'X3' },
      { id: uuidv4(), name: 'X4' },
      { id: uuidv4(), name: 'X5' },
      { id: uuidv4(), name: 'X6' },
      { id: uuidv4(), name: 'X7' },
      { id: uuidv4(), name: 'Z1' },
      { id: uuidv4(), name: 'Z3' },
      { id: uuidv4(), name: 'Z4' },
      { id: uuidv4(), name: 'Z8' },
      { id: uuidv4(), name: 'Other models' },
    ],
  },
  {
    id: uuidv4(),
    name: 'Bentley',
    isPopular: false,
    isFooterBrand: false,
    models: [
      { id: uuidv4(), name: 'Arnage' },
      { id: uuidv4(), name: 'Azure' },
      { id: uuidv4(), name: 'Brooklands' },
      { id: uuidv4(), name: 'Continental' },
      { id: uuidv4(), name: 'Eight' },
      { id: uuidv4(), name: 'Mulsanne' },
      { id: uuidv4(), name: 'Turbo' },
      { id: uuidv4(), name: 'Bentayga' },
      { id: uuidv4(), name: 'Continental GTC' },
      { id: uuidv4(), name: 'Flying Spur' },
      { id: uuidv4(), name: 'Other models' },
    ],
  },
  { id: uuidv4(), name: 'Vans', isPopular: false, isFooterBrand: false, models: [] },
  {
    id: uuidv4(),
    name: 'Bugatti',
    isPopular: false,
    isFooterBrand: false,
    models: [
      { id: uuidv4(), name: 'Chiron' },
      { id: uuidv4(), name: 'EB110' },
      { id: uuidv4(), name: 'EB112' },
      { id: uuidv4(), name: 'Veyron' },
      { id: uuidv4(), name: 'Other models' },
    ],
  },
  {
    id: uuidv4(),
    name: 'Buick',
    isPopular: false,
    isFooterBrand: false,
    models: [
      { id: uuidv4(), name: 'Enclave' },
      { id: uuidv4(), name: 'Encore' },
      { id: uuidv4(), name: 'Park Avenue' },
      { id: uuidv4(), name: 'Regal' },
      { id: uuidv4(), name: 'Riviera' },
      { id: uuidv4(), name: 'Skylark' },
      { id: uuidv4(), name: 'Verano' },
      { id: uuidv4(), name: 'Other models' },
    ],
  },
  {
    id: uuidv4(),
    name: 'Cadillac',
    isPopular: false,
    isFooterBrand: false,
    models: [
      { id: uuidv4(), name: 'ATS' },
      { id: uuidv4(), name: 'BLS' },
      { id: uuidv4(), name: 'Brougham' },
      { id: uuidv4(), name: 'Coupe de Ville' },
      { id: uuidv4(), name: 'CTS' },
      { id: uuidv4(), name: 'Eldorado' },
      { id: uuidv4(), name: 'ELR' },
      { id: uuidv4(), name: 'Escalade' },
      { id: uuidv4(), name: 'Seville' },
      { id: uuidv4(), name: 'SRX' },
      { id: uuidv4(), name: 'STS' },
      { id: uuidv4(), name: 'XLR' },
      { id: uuidv4(), name: 'XTS' },
      { id: uuidv4(), name: 'CT6' },
      { id: uuidv4(), name: 'XT5' },
      { id: uuidv4(), name: 'Other models' },
    ],
  },
  {
    id: uuidv4(),
    name: 'Chevrolet',
    isPopular: false,
    isFooterBrand: false,
    models: [
      { id: uuidv4(), name: 'Alero' },
      { id: uuidv4(), name: 'Avalanche' },
      { id: uuidv4(), name: 'Aveo' },
      { id: uuidv4(), name: 'Blazer' },
      { id: uuidv4(), name: 'Camaro' },
      { id: uuidv4(), name: 'Caprice' },
      { id: uuidv4(), name: 'Captiva' },
      { id: uuidv4(), name: 'Chevy Van' },
      { id: uuidv4(), name: 'Corsica' },
      { id: uuidv4(), name: 'Corvette' },
      { id: uuidv4(), name: 'Cruze' },
      { id: uuidv4(), name: 'Epica' },
      { id: uuidv4(), name: 'Kalos' },
      { id: uuidv4(), name: 'Lacetti' },
      { id: uuidv4(), name: 'Lumina' },
      { id: uuidv4(), name: 'Matiz' },
      { id: uuidv4(), name: 'Nubira' },
      { id: uuidv4(), name: 'Orlando' },
      { id: uuidv4(), name: 'Pick-up' },
      { id: uuidv4(), name: 'Silverado' },
      { id: uuidv4(), name: 'Spark' },
      { id: uuidv4(), name: 'Suburban' },
      { id: uuidv4(), name: 'Tacuma' },
      { id: uuidv4(), name: 'Tahoe' },
      { id: uuidv4(), name: 'Trailblazer' },
      { id: uuidv4(), name: 'Trans Sport' },
      { id: uuidv4(), name: 'Trax' },
      { id: uuidv4(), name: 'Volt' },
      { id: uuidv4(), name: 'Other models' },
    ],
  },
  {
    id: uuidv4(),
    name: 'Chrysler',
    isPopular: false,
    isFooterBrand: false,
    models: [
      { id: uuidv4(), name: '200' },
      { id: uuidv4(), name: '300C' },
      { id: uuidv4(), name: '300M' },
      { id: uuidv4(), name: 'Crossfire' },
      { id: uuidv4(), name: 'Le Baron' },
      { id: uuidv4(), name: 'Grand Voyager' },
      { id: uuidv4(), name: 'Neon' },
      { id: uuidv4(), name: 'Pacifica' },
      { id: uuidv4(), name: 'PT Cruiser' },
      { id: uuidv4(), name: 'Sebring' },
      { id: uuidv4(), name: 'Stratus' },
      { id: uuidv4(), name: 'Vision' },
      { id: uuidv4(), name: 'Voyager' },
      { id: uuidv4(), name: 'Other models' },
    ],
  },
  {
    id: uuidv4(),
    name: 'Citroën',
    isPopular: true,
    isFooterBrand: false,
    models: [
      { id: uuidv4(), name: '2CV' },
      { id: uuidv4(), name: 'AX' },
      { id: uuidv4(), name: 'Berlingo' },
      { id: uuidv4(), name: 'BX' },
      { id: uuidv4(), name: 'C-Zero' },
      { id: uuidv4(), name: 'C-Crosser' },
      { id: uuidv4(), name: 'C1' },
      { id: uuidv4(), name: 'C2' },
      { id: uuidv4(), name: 'C3' },
      { id: uuidv4(), name: 'C3 Picasso' },
      { id: uuidv4(), name: 'C4' },
      { id: uuidv4(), name: 'C4 Aircross' },
      { id: uuidv4(), name: 'C4 Cactus' },
      { id: uuidv4(), name: 'C4 (Grand) Picasso' },
      { id: uuidv4(), name: 'C5' },
      { id: uuidv4(), name: 'C6' },
      { id: uuidv4(), name: 'C8' },
      { id: uuidv4(), name: 'CX' },
      { id: uuidv4(), name: 'DS' },
      { id: uuidv4(), name: 'DS3' },
      { id: uuidv4(), name: 'DS4' },
      { id: uuidv4(), name: 'DS5' },
      { id: uuidv4(), name: 'Evasion' },
      { id: uuidv4(), name: 'Nemo' },
      { id: uuidv4(), name: 'Saxo' },
      { id: uuidv4(), name: 'Xantia' },
      { id: uuidv4(), name: 'Xsara' },
      { id: uuidv4(), name: 'XM' },
      { id: uuidv4(), name: 'ZX' },
      { id: uuidv4(), name: 'Jumper' },
      { id: uuidv4(), name: 'Jumpy Combi' },
      { id: uuidv4(), name: 'Space Tourer' },
      { id: uuidv4(), name: 'Other models' },
    ],
  },
  {
    id: uuidv4(),
    name: 'DS',
    isPopular: false,
    isFooterBrand: false,
    models: [
      { id: uuidv4(), name: 'DS3' },
      { id: uuidv4(), name: 'DS4' },
      { id: uuidv4(), name: 'DS5' },
      { id: uuidv4(), name: 'DS7' },
      { id: uuidv4(), name: 'Other models' },
    ],
  },
  {
    id: uuidv4(),
    name: 'Dacia',
    isPopular: false,
    isFooterBrand: false,
    models: [
      { id: uuidv4(), name: 'Duster' },
      { id: uuidv4(), name: 'Lodgy' },
      { id: uuidv4(), name: 'Logan' },
      { id: uuidv4(), name: 'Logan MCV' },
      { id: uuidv4(), name: 'Sandero' },
      { id: uuidv4(), name: 'Sandero Stepway' },
      { id: uuidv4(), name: 'Dokker' },
      { id: uuidv4(), name: 'Other models' },
    ],
  },
  {
    id: uuidv4(),
    name: 'Daewoo',
    isPopular: false,
    isFooterBrand: false,
    models: [
      { id: uuidv4(), name: 'Espero' },
      { id: uuidv4(), name: 'Evanda' },
      { id: uuidv4(), name: 'Kalos' },
      { id: uuidv4(), name: 'Lacetti' },
      { id: uuidv4(), name: 'Lanos' },
      { id: uuidv4(), name: 'Leganza' },
      { id: uuidv4(), name: 'Matiz' },
      { id: uuidv4(), name: 'Nexia' },
      { id: uuidv4(), name: 'Nubira' },
      { id: uuidv4(), name: 'Tacuma' },
      { id: uuidv4(), name: 'Other models' },
    ],
  },
  {
    id: uuidv4(),
    name: 'Daihatsu',
    isPopular: false,
    isFooterBrand: false,
    models: [
      { id: uuidv4(), name: 'Applause' },
      { id: uuidv4(), name: 'Charade' },
      { id: uuidv4(), name: 'Copen' },
      { id: uuidv4(), name: 'Cuore' },
      { id: uuidv4(), name: 'Feroza' },
      { id: uuidv4(), name: 'Gran Move' },
      { id: uuidv4(), name: 'Materia' },
      { id: uuidv4(), name: 'Move' },
      { id: uuidv4(), name: 'Rocky' },
      { id: uuidv4(), name: 'Sirion' },
      { id: uuidv4(), name: 'Terios' },
      { id: uuidv4(), name: 'Valera' },
      { id: uuidv4(), name: 'Trevis' },
      { id: uuidv4(), name: 'YRV' },
      { id: uuidv4(), name: 'Other models' },
    ],
  },
  {
    id: uuidv4(),
    name: 'Dodge',
    isPopular: false,
    isFooterBrand: false,
    models: [
      { id: uuidv4(), name: 'Avenger' },
      { id: uuidv4(), name: 'Caliber' },
      { id: uuidv4(), name: '(Grand) Caravan' },
      { id: uuidv4(), name: 'Challenger' },
      { id: uuidv4(), name: 'Charger' },
      { id: uuidv4(), name: 'Dakota' },
      { id: uuidv4(), name: 'Dart' },
      { id: uuidv4(), name: 'Durango' },
      { id: uuidv4(), name: 'Journey' },
      { id: uuidv4(), name: 'Magnum' },
      { id: uuidv4(), name: 'Nitro' },
      { id: uuidv4(), name: 'RAM' },
      { id: uuidv4(), name: 'RAM1500' },
      { id: uuidv4(), name: 'RAM2500' },
      { id: uuidv4(), name: 'RAM3500' },
      { id: uuidv4(), name: 'RAM Van' },
      { id: uuidv4(), name: 'Stealth' },
      { id: uuidv4(), name: 'Viper' },
      { id: uuidv4(), name: 'W200' },
      { id: uuidv4(), name: 'Other models' },
    ],
  },
  {
    id: uuidv4(),
    name: 'Ferrari',
    isPopular: false,
    isFooterBrand: false,
    models: [
      { id: uuidv4(), name: '308' },
      { id: uuidv4(), name: '328' },
      { id: uuidv4(), name: '348' },
      { id: uuidv4(), name: '360' },
      { id: uuidv4(), name: '430' },
      { id: uuidv4(), name: '440' },
      { id: uuidv4(), name: '456' },
      { id: uuidv4(), name: '458' },
      { id: uuidv4(), name: '512 TR' },
      { id: uuidv4(), name: '550' },
      { id: uuidv4(), name: '575' },
      { id: uuidv4(), name: '599' },
      { id: uuidv4(), name: 'California' },
      { id: uuidv4(), name: 'Enzo' },
      { id: uuidv4(), name: 'Enzo II' },
      { id: uuidv4(), name: 'F12 Berlinetta' },
      { id: uuidv4(), name: 'F355' },
      { id: uuidv4(), name: 'F430' },
      { id: uuidv4(), name: 'F50' },
      { id: uuidv4(), name: 'F512M' },
      { id: uuidv4(), name: 'FF' },
      { id: uuidv4(), name: 'Mondial' },
      { id: uuidv4(), name: 'Testarossa' },
      { id: uuidv4(), name: 'GTC4Lusso' },
      { id: uuidv4(), name: 'Other models' },
      { id: uuidv4(), name: 'Portofino' },
    ],
  },
  {
    id: uuidv4(),
    name: 'Fiat',
    isPopular: true,
    isFooterBrand: false,
    models: [
      { id: uuidv4(), name: '500' },
      { id: uuidv4(), name: '500L' },
      { id: uuidv4(), name: '500L Trekking' },
      { id: uuidv4(), name: '500X' },
      { id: uuidv4(), name: '500XL' },
      { id: uuidv4(), name: 'Barchetta' },
      { id: uuidv4(), name: 'Brava' },
      { id: uuidv4(), name: 'Bravo' },
      { id: uuidv4(), name: 'Coupe' },
      { id: uuidv4(), name: 'Cinquecento' },
      { id: uuidv4(), name: 'Croma' },
      { id: uuidv4(), name: 'Doblo' },
      { id: uuidv4(), name: 'Grande Punto' },
      { id: uuidv4(), name: 'Idea' },
      { id: uuidv4(), name: 'Marea' },
      { id: uuidv4(), name: 'Multipla' },
      { id: uuidv4(), name: 'Palio' },
      { id: uuidv4(), name: 'Panda' },
      { id: uuidv4(), name: 'Punto' },
      { id: uuidv4(), name: 'Punto EVO' },
      { id: uuidv4(), name: 'Qubo' },
      { id: uuidv4(), name: 'Sedici' },
      { id: uuidv4(), name: 'Seicento' },
      { id: uuidv4(), name: 'Stilo' },
      { id: uuidv4(), name: 'Tempra' },
      { id: uuidv4(), name: 'Tipo' },
      { id: uuidv4(), name: 'Ulysse' },
      { id: uuidv4(), name: 'Uno' },
      { id: uuidv4(), name: '124 Spider' },
      { id: uuidv4(), name: '500C' },
      { id: uuidv4(), name: 'Ducato' },
      { id: uuidv4(), name: 'Fullback' },
      { id: uuidv4(), name: 'Talento' },
      { id: uuidv4(), name: 'Other models' },
    ],
  },
  { id: uuidv4(), name: 'Fisker', isPopular: false, isFooterBrand: false, models: [] },
  {
    id: uuidv4(),
    name: 'Ford',
    isPopular: true,
    isFooterBrand: false,
    models: [
      { id: uuidv4(), name: 'B-Max' },
      { id: uuidv4(), name: 'C-Max' },
      { id: uuidv4(), name: 'Cougar' },
      { id: uuidv4(), name: 'Ecosport' },
      { id: uuidv4(), name: 'Edge' },
      { id: uuidv4(), name: 'Escort' },
      { id: uuidv4(), name: 'Fiësta' },
      { id: uuidv4(), name: 'Focus' },
      { id: uuidv4(), name: 'Fusion' },
      { id: uuidv4(), name: 'Galaxy' },
      { id: uuidv4(), name: 'Grand C-Max' },
      { id: uuidv4(), name: 'Ka' },
      { id: uuidv4(), name: 'Kuga' },
      { id: uuidv4(), name: 'Mondeo' },
      { id: uuidv4(), name: 'Mustang' },
      { id: uuidv4(), name: 'Probe' },
      { id: uuidv4(), name: 'Puma' },
      { id: uuidv4(), name: 'S-Max' },
      { id: uuidv4(), name: 'Scorpio' },
      { id: uuidv4(), name: 'Sierra' },
      { id: uuidv4(), name: 'Tourneo Connect' },
      { id: uuidv4(), name: 'Tourneo Courier' },
      { id: uuidv4(), name: 'Ranger' },
      { id: uuidv4(), name: 'Transit' },
      { id: uuidv4(), name: 'Other models' },
    ],
  },
  {
    id: uuidv4(),
    name: 'Ford Usa',
    isPopular: false,
    isFooterBrand: false,
    models: [
      { id: uuidv4(), name: 'Bronco' },
      { id: uuidv4(), name: 'Edge' },
      { id: uuidv4(), name: 'Escape' },
      { id: uuidv4(), name: 'Expedition' },
      { id: uuidv4(), name: 'Explorer' },
      { id: uuidv4(), name: 'E-Series' },
      { id: uuidv4(), name: 'Flex' },
      { id: uuidv4(), name: 'Fusion' },
      { id: uuidv4(), name: 'F-150' },
      { id: uuidv4(), name: 'F-250' },
      { id: uuidv4(), name: 'F-350' },
      { id: uuidv4(), name: 'Mustang' },
      { id: uuidv4(), name: 'Super Duty' },
      { id: uuidv4(), name: 'Taurus' },
      { id: uuidv4(), name: 'Thunderbird' },
      { id: uuidv4(), name: 'Windstar' },
      { id: uuidv4(), name: 'Other models' },
    ],
  },
  { id: uuidv4(), name: 'GMC', isPopular: false, isFooterBrand: false, models: [] },
  {
    id: uuidv4(),
    name: 'Honda',
    isPopular: false,
    isFooterBrand: false,
    models: [
      { id: uuidv4(), name: 'Accord' },
      { id: uuidv4(), name: 'Civic' },
      { id: uuidv4(), name: 'Concerto' },
      { id: uuidv4(), name: 'CR-V' },
      { id: uuidv4(), name: 'CRX' },
      { id: uuidv4(), name: 'CR-Z' },
      { id: uuidv4(), name: 'FR-V' },
      { id: uuidv4(), name: 'HR-V' },
      { id: uuidv4(), name: 'Insight' },
      { id: uuidv4(), name: 'Integra' },
      { id: uuidv4(), name: 'Jazz' },
      { id: uuidv4(), name: 'Legend' },
      { id: uuidv4(), name: 'LOGO' },
      { id: uuidv4(), name: 'NSX' },
      { id: uuidv4(), name: 'Prelude' },
      { id: uuidv4(), name: 'S2000' },
      { id: uuidv4(), name: 'Shuttle' },
      { id: uuidv4(), name: 'Stream' },
      { id: uuidv4(), name: 'Other models' },
    ],
  },
  {
    id: uuidv4(),
    name: 'Hummer',
    isPopular: false,
    isFooterBrand: false,
    models: [
      { id: uuidv4(), name: 'H1' },
      { id: uuidv4(), name: 'H2' },
      { id: uuidv4(), name: 'H3' },
      { id: uuidv4(), name: 'Other models' },
    ],
  },
  { id: uuidv4(), name: 'Hyundai', isPopular: false, isFooterBrand: false, models: [] },
  { id: uuidv4(), name: 'Infiniti', isPopular: false, isFooterBrand: false, models: [] },
  { id: uuidv4(), name: 'Jaguar', isPopular: false, isFooterBrand: false, models: [] },
  { id: uuidv4(), name: 'Jeep', isPopular: false, isFooterBrand: false, models: [] },
  { id: uuidv4(), name: 'Kia', isPopular: false, isFooterBrand: false, models: [] },
  { id: uuidv4(), name: 'Lada', isPopular: false, isFooterBrand: false, models: [] },
  { id: uuidv4(), name: 'Lamborghini', isPopular: false, isFooterBrand: false, models: [] },
  { id: uuidv4(), name: 'Lancia', isPopular: false, isFooterBrand: false, models: [] },
  { id: uuidv4(), name: 'Land Rover', isPopular: false, isFooterBrand: false, models: [] },
  { id: uuidv4(), name: 'Landwind', isPopular: false, isFooterBrand: false, models: [] },
  { id: uuidv4(), name: 'Lexus', isPopular: false, isFooterBrand: false, models: [] },
  { id: uuidv4(), name: 'Lincoln', isPopular: false, isFooterBrand: false, models: [] },
  { id: uuidv4(), name: 'Lotus', isPopular: false, isFooterBrand: false, models: [] },
  { id: uuidv4(), name: 'MG', isPopular: false, isFooterBrand: false, models: [] },
  { id: uuidv4(), name: 'Maserati', isPopular: false, isFooterBrand: false, models: [] },
  { id: uuidv4(), name: 'Mazda', isPopular: false, isFooterBrand: false, models: [] },
  { id: uuidv4(), name: 'McLaren', isPopular: false, isFooterBrand: false, models: [] },
  { id: uuidv4(), name: 'Mercedes-Benz', isPopular: true, isFooterBrand: false, models: [] },
  { id: uuidv4(), name: 'Mercury', isPopular: false, isFooterBrand: false, models: [] },
  { id: uuidv4(), name: 'Mini', isPopular: false, isFooterBrand: false, models: [] },
  { id: uuidv4(), name: 'Mitsubishi', isPopular: false, isFooterBrand: false, models: [] },
  { id: uuidv4(), name: 'Nissan', isPopular: false, isFooterBrand: false, models: [] },
  { id: uuidv4(), name: 'Oldsmobile', isPopular: false, isFooterBrand: false, models: [] },
  { id: uuidv4(), name: 'Oldtimers', isPopular: false, isFooterBrand: false, models: [] },
  { id: uuidv4(), name: 'Opel', isPopular: true, isFooterBrand: true, models: [] },
  { id: uuidv4(), name: 'OtherCars', isPopular: false, isFooterBrand: false, models: [] },
  { id: uuidv4(), name: 'Peugeot', isPopular: true, isFooterBrand: true, models: [] },
  { id: uuidv4(), name: 'Polestar', isPopular: false, isFooterBrand: false, models: [] },
  { id: uuidv4(), name: 'Pontiac', isPopular: false, isFooterBrand: false, models: [] },
  { id: uuidv4(), name: 'Porsche', isPopular: false, isFooterBrand: false, models: [] },
  {
    id: uuidv4(),
    name: 'Renault',
    isPopular: true,
    isFooterBrand: false,
    models: [
      { id: uuidv4(), name: '5' },
      { id: uuidv4(), name: '19' },
      { id: uuidv4(), name: '21' },
      { id: uuidv4(), name: '25' },
      { id: uuidv4(), name: 'Alpine A310' },
      { id: uuidv4(), name: 'Alpine A610' },
      { id: uuidv4(), name: 'Avantime' },
      { id: uuidv4(), name: 'Captur' },
      { id: uuidv4(), name: 'Clio' },
      { id: uuidv4(), name: 'Espace' },
      { id: uuidv4(), name: 'Fluence' },
      { id: uuidv4(), name: 'Grand Espace' },
      { id: uuidv4(), name: 'Grand Modus' },
      { id: uuidv4(), name: 'Grand Scenic' },
      { id: uuidv4(), name: 'Kadjar' },
      { id: uuidv4(), name: 'Kangoo' },
      { id: uuidv4(), name: 'Koleos' },
      { id: uuidv4(), name: 'Laguna' },
      { id: uuidv4(), name: 'Modus' },
      { id: uuidv4(), name: 'Mégane' },
      { id: uuidv4(), name: 'Safrane' },
      { id: uuidv4(), name: 'Scénic' },
      { id: uuidv4(), name: 'Talisman' },
      { id: uuidv4(), name: 'Twingo' },
      { id: uuidv4(), name: 'Twizy' },
      { id: uuidv4(), name: 'Vel Satis' },
      { id: uuidv4(), name: 'Wind' },
      { id: uuidv4(), name: 'ZOE' },
      { id: uuidv4(), name: 'Master' },
      { id: uuidv4(), name: 'Trafic' },
      { id: uuidv4(), name: 'Twizy Cargo' },
      { id: uuidv4(), name: 'Other models' },
    ],
  },
  { id: uuidv4(), name: 'Rolls-Royce', isPopular: false, isFooterBrand: false, models: [] },
  { id: uuidv4(), name: 'Rover', isPopular: false, isFooterBrand: false, models: [] },
  { id: uuidv4(), name: 'Saab', isPopular: false, isFooterBrand: false, models: [] },
  { id: uuidv4(), name: 'Seat', isPopular: true, isFooterBrand: false, models: [] },
  { id: uuidv4(), name: 'Skoda', isPopular: false, isFooterBrand: false, models: [] },
  { id: uuidv4(), name: 'Smart', isPopular: false, isFooterBrand: false, models: [] },
  { id: uuidv4(), name: 'Spyker', isPopular: false, isFooterBrand: false, models: [] },
  { id: uuidv4(), name: 'SsangYong', isPopular: false, isFooterBrand: false, models: [] },
  { id: uuidv4(), name: 'Subaru', isPopular: false, isFooterBrand: false, models: [] },
  { id: uuidv4(), name: 'Suzuki', isPopular: false, isFooterBrand: false, models: [] },
  { id: uuidv4(), name: 'Tesla', isPopular: false, isFooterBrand: false, models: [] },
  { id: uuidv4(), name: 'Toyota', isPopular: true, isFooterBrand: false, models: [] },
  { id: uuidv4(), name: 'Triumph', isPopular: false, isFooterBrand: false, models: [] },
  { id: uuidv4(), name: 'Volkswagen', isPopular: true, isFooterBrand: true, models: [] },
  { id: uuidv4(), name: 'Volvo', isPopular: true, isFooterBrand: false, models: [] },
  { id: uuidv4(), name: 'Trucks', isPopular: false, isFooterBrand: false, models: [] },
]
