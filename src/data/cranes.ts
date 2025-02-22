import { CraneData } from '../types';

export const cranes: CraneData[] = [
  // Tower Cranes
  {
    id: 'tc-1',
    model: '550 EC-H',
    manufacturer: 'Liebherr',
    type: 'Tower Crane',
    maxLiftCapacity: 40,
    maxRadius: 80,
    windTolerance: 50,
    maxSpeed: 1.5,
    imageUrl: 'https://images.unsplash.com/photo-1541976590-713941681591',
  },
  {
    id: 'tc-2',
    model: 'CTT 202-10',
    manufacturer: 'Terex',
    type: 'Tower Crane',
    maxLiftCapacity: 10,
    maxRadius: 65,
    windTolerance: 45,
    maxSpeed: 1.2,
    imageUrl: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd',
  },
  {
    id: 'tc-3',
    model: 'MDT 809',
    manufacturer: 'Potain',
    type: 'Tower Crane',
    maxLiftCapacity: 40,
    maxRadius: 80,
    windTolerance: 50,
    maxSpeed: 1.5,
    imageUrl: 'https://images.unsplash.com/photo-1495556650867-99590cea3657',
  },

  // Crawler Cranes
  {
    id: 'cc-1',
    model: '31000',
    manufacturer: 'Manitowoc',
    type: 'Crawler Crane',
    maxLiftCapacity: 2300,
    maxRadius: 100,
    windTolerance: 55,
    maxSpeed: 1.5,
    imageUrl: 'https://images.unsplash.com/photo-1526304760382-3591d3840148',
  },
  {
    id: 'cc-2',
    model: 'LR 13000',
    manufacturer: 'Liebherr',
    type: 'Crawler Crane',
    maxLiftCapacity: 3000,
    maxRadius: 120,
    windTolerance: 50,
    maxSpeed: 1.3,
    imageUrl: 'https://images.unsplash.com/photo-1495556650867-99590cea3657',
  },
  {
    id: 'cc-3',
    model: 'SCX2800-2',
    manufacturer: 'Hitachi Sumitomo',
    type: 'Crawler Crane',
    maxLiftCapacity: 275,
    maxRadius: 90,
    windTolerance: 50,
    maxSpeed: 1.4,
    imageUrl: 'https://images.unsplash.com/photo-1541976590-713941681591',
  },

  // Mobile Cranes
  {
    id: 'mc-1',
    model: 'LTM 11200-9.1',
    manufacturer: 'Liebherr',
    type: 'Mobile Crane',
    maxLiftCapacity: 1200,
    maxRadius: 100,
    windTolerance: 50,
    maxSpeed: 85,
    imageUrl: 'https://images.unsplash.com/photo-1495556650867-99590cea3657',
  },
  {
    id: 'mc-2',
    model: 'GMK6400-1',
    manufacturer: 'Grove',
    type: 'Mobile Crane',
    maxLiftCapacity: 400,
    maxRadius: 80,
    windTolerance: 45,
    maxSpeed: 80,
    imageUrl: 'https://images.unsplash.com/photo-1526304760382-3591d3840148',
  },
  {
    id: 'mc-3',
    model: 'ATF 400G-6',
    manufacturer: 'Tadano',
    type: 'Mobile Crane',
    maxLiftCapacity: 400,
    maxRadius: 75,
    windTolerance: 50,
    maxSpeed: 85,
    imageUrl: 'https://images.unsplash.com/photo-1541976590-713941681591',
  },

  // Rough Terrain Cranes
  {
    id: 'rt-1',
    model: 'GR-1000XL',
    manufacturer: 'Tadano',
    type: 'Rough Terrain Crane',
    maxLiftCapacity: 100,
    maxRadius: 47,
    windTolerance: 45,
    maxSpeed: 40,
    imageUrl: 'https://images.unsplash.com/photo-1495556650867-99590cea3657',
  },
  {
    id: 'rt-2',
    model: 'RTC-80160',
    manufacturer: 'Link-Belt',
    type: 'Rough Terrain Crane',
    maxLiftCapacity: 160,
    maxRadius: 60,
    windTolerance: 50,
    maxSpeed: 35,
    imageUrl: 'https://images.unsplash.com/photo-1526304760382-3591d3840148',
  },
  {
    id: 'rt-3',
    model: 'RT9130E-2',
    manufacturer: 'Grove',
    type: 'Rough Terrain Crane',
    maxLiftCapacity: 130,
    maxRadius: 55,
    windTolerance: 45,
    maxSpeed: 40,
    imageUrl: 'https://images.unsplash.com/photo-1541976590-713941681591',
  },

  // All-Terrain Cranes
  {
    id: 'at-1',
    model: 'LTM 1450-8.1',
    manufacturer: 'Liebherr',
    type: 'All-Terrain Crane',
    maxLiftCapacity: 450,
    maxRadius: 85,
    windTolerance: 50,
    maxSpeed: 80,
    imageUrl: 'https://images.unsplash.com/photo-1495556650867-99590cea3657',
  },
  {
    id: 'at-2',
    model: 'AC 500-8',
    manufacturer: 'Demag',
    type: 'All-Terrain Crane',
    maxLiftCapacity: 500,
    maxRadius: 90,
    windTolerance: 55,
    maxSpeed: 85,
    imageUrl: 'https://images.unsplash.com/photo-1526304760382-3591d3840148',
  },
  {
    id: 'at-3',
    model: 'ATF 220G-5',
    manufacturer: 'Tadano',
    type: 'All-Terrain Crane',
    maxLiftCapacity: 220,
    maxRadius: 75,
    windTolerance: 50,
    maxSpeed: 80,
    imageUrl: 'https://images.unsplash.com/photo-1541976590-713941681591',
  },

  // Telescopic Cranes
  {
    id: 'tel-1',
    model: 'GMK5250XL-1',
    manufacturer: 'Grove',
    type: 'Telescopic Crane',
    maxLiftCapacity: 250,
    maxRadius: 78,
    windTolerance: 50,
    maxSpeed: 80,
    imageUrl: 'https://images.unsplash.com/photo-1495556650867-99590cea3657',
  },
  {
    id: 'tel-2',
    model: 'LTM 1650-8.1',
    manufacturer: 'Liebherr',
    type: 'Telescopic Crane',
    maxLiftCapacity: 650,
    maxRadius: 90,
    windTolerance: 55,
    maxSpeed: 85,
    imageUrl: 'https://images.unsplash.com/photo-1526304760382-3591d3840148',
  },
  {
    id: 'tel-3',
    model: 'ATF 400G-6',
    manufacturer: 'Tadano',
    type: 'Telescopic Crane',
    maxLiftCapacity: 400,
    maxRadius: 80,
    windTolerance: 50,
    maxSpeed: 85,
    imageUrl: 'https://images.unsplash.com/photo-1541976590-713941681591',
  },

  // Floating Cranes
  {
    id: 'fc-1',
    model: 'Taklift 4',
    manufacturer: 'Taklift',
    type: 'Floating Crane',
    maxLiftCapacity: 1600,
    maxRadius: 100,
    windTolerance: 60,
    maxSpeed: 5,
    imageUrl: 'https://images.unsplash.com/photo-1495556650867-99590cea3657',
  },
  {
    id: 'fc-2',
    model: 'Saipem 7000',
    manufacturer: 'Saipem',
    type: 'Floating Crane',
    maxLiftCapacity: 14000,
    maxRadius: 140,
    windTolerance: 55,
    maxSpeed: 4,
    imageUrl: 'https://images.unsplash.com/photo-1526304760382-3591d3840148',
  },
  {
    id: 'fc-3',
    model: 'LHM 600',
    manufacturer: 'Liebherr',
    type: 'Floating Crane',
    maxLiftCapacity: 208,
    maxRadius: 58,
    windTolerance: 50,
    maxSpeed: 6,
    imageUrl: 'https://images.unsplash.com/photo-1541976590-713941681591',
  },

  // Gantry Cranes
  {
    id: 'gc-1',
    model: 'Goliath',
    manufacturer: 'Konecranes',
    type: 'Gantry Crane',
    maxLiftCapacity: 2000,
    maxRadius: 120,
    windTolerance: 55,
    maxSpeed: 2,
    imageUrl: 'https://images.unsplash.com/photo-1495556650867-99590cea3657',
  },
  {
    id: 'gc-2',
    model: 'V-Type',
    manufacturer: 'Demag',
    type: 'Gantry Crane',
    maxLiftCapacity: 500,
    maxRadius: 70,
    windTolerance: 50,
    maxSpeed: 1.8,
    imageUrl: 'https://images.unsplash.com/photo-1526304760382-3591d3840148',
  },
  {
    id: 'gc-3',
    model: 'RMG',
    manufacturer: 'Liebherr',
    type: 'Gantry Crane',
    maxLiftCapacity: 350,
    maxRadius: 80,
    windTolerance: 55,
    maxSpeed: 2.5,
    imageUrl: 'https://images.unsplash.com/photo-1541976590-713941681591',
  },

  // Overhead Cranes
  {
    id: 'oc-1',
    model: 'CXT',
    manufacturer: 'Konecranes',
    type: 'Overhead Crane',
    maxLiftCapacity: 80,
    maxRadius: 35,
    windTolerance: 50,
    maxSpeed: 1.5,
    imageUrl: 'https://images.unsplash.com/photo-1495556650867-99590cea3657',
  },
  {
    id: 'oc-2',
    model: 'Overhead Crane',
    manufacturer: 'Demag',
    type: 'Overhead Crane',
    maxLiftCapacity: 250,
    maxRadius: 50,
    windTolerance: 50,
    maxSpeed: 1.2,
    imageUrl: 'https://images.unsplash.com/photo-1526304760382-3591d3840148',
  },
  {
    id: 'oc-3',
    model: 'Jib Crane',
    manufacturer: 'Gorbel',
    type: 'Overhead Crane',
    maxLiftCapacity: 5,
    maxRadius: 6,
    windTolerance: 50,
    maxSpeed: 1.5,
    imageUrl: 'https://images.unsplash.com/photo-1541976590-713941681591',
  },

  // Loader Cranes
  {
    id: 'lc-1',
    model: 'X-HiPro 1058',
    manufacturer: 'Hiab',
    type: 'Loader Crane',
    maxLiftCapacity: 58,
    maxRadius: 30,
    windTolerance: 50,
    maxSpeed: 80,
    imageUrl: 'https://images.unsplash.com/photo-1495556650867-99590cea3657',
  },
  {
    id: 'lc-2',
    model: 'PK 150002',
    manufacturer: 'Palfinger',
    type: 'Loader Crane',
    maxLiftCapacity: 35,
    maxRadius: 25,
    windTolerance: 50,
    maxSpeed: 80,
    imageUrl: 'https://images.unsplash.com/photo-1526304760382-3591d3840148',
  },
  {
    id: 'lc-3',
    model: 'F2150RA',
    manufacturer: 'Fassi',
    type: 'Loader Crane',
    maxLiftCapacity: 150,
    maxRadius: 32,
    windTolerance: 50,
    maxSpeed: 80,
    imageUrl: 'https://images.unsplash.com/photo-1541976590-713941681591',
  },
];