import React from 'react';
import { CraneData } from '../types';

interface ComparisonTableProps {
  cranes: CraneData[];
}

export const ComparisonTable: React.FC<ComparisonTableProps> = ({ cranes }) => {
  if (cranes.length === 0) return null;

  return (
    <div className="overflow-x-auto bg-white rounded-lg shadow-lg p-6">
      <table className="min-w-full">
        <thead>
          <tr className="border-b-2 border-gray-200">
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Specification</th>
            {cranes.map((crane) => (
              <th key={crane.id} className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                {crane.manufacturer} {crane.model}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-gray-200">
            <td className="px-6 py-4 text-sm text-gray-600 font-medium">Type</td>
            {cranes.map((crane) => (
              <td key={crane.id} className="px-6 py-4 text-sm text-gray-800">
                {crane.type}
              </td>
            ))}
          </tr>
          <tr className="border-b border-gray-200">
            <td className="px-6 py-4 text-sm text-gray-600 font-medium">Max Lift Capacity (tons)</td>
            {cranes.map((crane) => (
              <td key={crane.id} className="px-6 py-4 text-sm text-gray-800">
                {crane.maxLiftCapacity}
              </td>
            ))}
          </tr>
          <tr className="border-b border-gray-200">
            <td className="px-6 py-4 text-sm text-gray-600 font-medium">Max Radius (m)</td>
            {cranes.map((crane) => (
              <td key={crane.id} className="px-6 py-4 text-sm text-gray-800">
                {crane.maxRadius}
              </td>
            ))}
          </tr>
          <tr className="border-b border-gray-200">
            <td className="px-6 py-4 text-sm text-gray-600 font-medium">Wind Tolerance (km/h)</td>
            {cranes.map((crane) => (
              <td key={crane.id} className="px-6 py-4 text-sm text-gray-800">
                {crane.windTolerance}
              </td>
            ))}
          </tr>
          <tr>
            <td className="px-6 py-4 text-sm text-gray-600 font-medium">Max Speed (km/h)</td>
            {cranes.map((crane) => (
              <td key={crane.id} className="px-6 py-4 text-sm text-gray-800">
                {crane.maxSpeed}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};