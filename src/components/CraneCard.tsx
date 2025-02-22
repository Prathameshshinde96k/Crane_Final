import React from 'react';
import { Wind, Weight, Ruler, ArrowUpDown, Truck } from 'lucide-react';
import { CraneData } from '../types';

interface CraneCardProps {
  crane: CraneData;
  isSelected: boolean;
  onSelect: (crane: CraneData) => void;
}

export const CraneCard: React.FC<CraneCardProps> = ({ crane, isSelected, onSelect }) => {
  return (
    <div
      className={`bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl cursor-pointer transform hover:-translate-y-1 ${
        isSelected ? 'ring-2 ring-blue-500' : ''
      }`}
      onClick={() => onSelect(crane)}
    >
      <div className="relative h-48">
        <img
          src={crane.imageUrl}
          alt={crane.model}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 right-0 m-2 bg-blue-500 text-white px-3 py-1 rounded-full text-sm">
          {crane.manufacturer}
        </div>
        <div className="absolute bottom-0 left-0 m-2 bg-gray-800 bg-opacity-75 text-white px-3 py-1 rounded-full text-sm">
          {crane.type}
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{crane.model}</h3>
        <div className="space-y-2">
          <div className="flex items-center text-gray-600">
            <Weight className="w-5 h-5 mr-2" />
            <span>Max Capacity: {crane.maxLiftCapacity} tons</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Ruler className="w-5 h-5 mr-2" />
            <span>Max Radius: {crane.maxRadius}m</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Wind className="w-5 h-5 mr-2" />
            <span>Wind Tolerance: {crane.windTolerance} km/h</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Truck className="w-5 h-5 mr-2" />
            <span>Max Speed: {crane.maxSpeed} km/h</span>
          </div>
        </div>
      </div>
    </div>
  );
};