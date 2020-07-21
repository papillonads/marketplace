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
  { id: uuidv4(), name: 'BMW', isPopular: true, isFooterBrand: true, models: [] },
  { id: uuidv4(), name: 'Bentley', isPopular: false, isFooterBrand: false, models: [] },
  { id: uuidv4(), name: 'Vans', isPopular: false, isFooterBrand: false, models: [] },
  { id: uuidv4(), name: 'Bugatti', isPopular: false, isFooterBrand: false, models: [] },
  { id: uuidv4(), name: 'Buick', isPopular: false, isFooterBrand: false, models: [] },
  { id: uuidv4(), name: 'Cadillac', isPopular: false, isFooterBrand: false, models: [] },
  { id: uuidv4(), name: 'Chevrolet', isPopular: false, isFooterBrand: false, models: [] },
  { id: uuidv4(), name: 'Chrysler', isPopular: false, isFooterBrand: false, models: [] },
  { id: uuidv4(), name: 'Citroën', isPopular: true, isFooterBrand: false, models: [] },
  { id: uuidv4(), name: 'DS', isPopular: false, isFooterBrand: false, models: [] },
  { id: uuidv4(), name: 'Dacia', isPopular: false, isFooterBrand: false, models: [] },
  { id: uuidv4(), name: 'Daewoo', isPopular: false, isFooterBrand: false, models: [] },
  { id: uuidv4(), name: 'Daihatsu', isPopular: false, isFooterBrand: false, models: [] },
  { id: uuidv4(), name: 'Dodge', isPopular: false, isFooterBrand: false, models: [] },
  { id: uuidv4(), name: 'Ferrari', isPopular: false, isFooterBrand: false, models: [] },
  { id: uuidv4(), name: 'Fiat', isPopular: true, isFooterBrand: false, models: [] },
  { id: uuidv4(), name: 'Fisker', isPopular: false, isFooterBrand: false, models: [] },
  { id: uuidv4(), name: 'Ford', isPopular: true, isFooterBrand: false, models: [] },
  { id: uuidv4(), name: 'Ford Usa', isPopular: false, isFooterBrand: false, models: [] },
  { id: uuidv4(), name: 'GMC', isPopular: false, isFooterBrand: false, models: [] },
  { id: uuidv4(), name: 'Honda', isPopular: false, isFooterBrand: false, models: [] },
  { id: uuidv4(), name: 'Hummer', isPopular: false, isFooterBrand: false, models: [] },
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
  { id: uuidv4(), name: 'Renault', isPopular: true, isFooterBrand: false, models: [] },
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
