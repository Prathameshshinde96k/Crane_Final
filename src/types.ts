export interface CraneData {
  id: string;
  model: string;
  manufacturer: string;
  type: CraneType;
  maxLiftCapacity: number; // in metric tons
  maxRadius: number; // in meters
  windTolerance: number; // in km/h
  maxSpeed: number; // in km/h
  imageUrl: string;
}

export type CraneType = 
  | 'Tower Crane'
  | 'Crawler Crane'
  | 'Mobile Crane'
  | 'Rough Terrain Crane'
  | 'All-Terrain Crane'
  | 'Telescopic Crane'
  | 'Floating Crane'
  | 'Gantry Crane'
  | 'Overhead Crane'
  | 'Loader Crane';

export interface ComparisonResult {
  isValid: boolean;
  recommendation: string;
  safetyScore: number;
  warnings: string[];
}