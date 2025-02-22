import React, { useState } from 'react';
import { CraneData, ComparisonResult } from '../types';
import { AlertTriangle, CheckCircle, Info } from 'lucide-react';

interface AnalysisFormProps {
  selectedCranes: CraneData[];
  onAnalysis: (result: ComparisonResult) => void;
}

export const AnalysisForm: React.FC<AnalysisFormProps> = ({ selectedCranes, onAnalysis }) => {
  const [loadWeight, setLoadWeight] = useState('');
  const [liftHeight, setLiftHeight] = useState('');
  const [windSpeed, setWindSpeed] = useState('');
  const [workingRadius, setWorkingRadius] = useState('');
  const [groundCondition, setGroundCondition] = useState('firm');
  const [loadType, setLoadType] = useState('static');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const weight = parseFloat(loadWeight);
    const height = parseFloat(liftHeight);
    const wind = parseFloat(windSpeed);
    const radius = parseFloat(workingRadius);

    // Enhanced analysis logic
    const result: ComparisonResult = {
      isValid: true,
      recommendation: '',
      safetyScore: 0,
      warnings: [],
    };

    // Check each crane's capabilities with more detailed analysis
    const suitableCranes = selectedCranes.filter(crane => {
      const isWithinCapacity = crane.maxLiftCapacity >= weight;
      const isWithinHeight = crane.maxRadius >= height;
      const isWithinWindTolerance = crane.windTolerance >= wind;
      const isWithinRadius = crane.maxRadius >= radius;

      if (!isWithinCapacity) result.warnings.push(`${crane.manufacturer} ${crane.model}: Load weight exceeds maximum capacity`);
      if (!isWithinHeight) result.warnings.push(`${crane.manufacturer} ${crane.model}: Lift height exceeds crane's reach`);
      if (!isWithinWindTolerance) result.warnings.push(`${crane.manufacturer} ${crane.model}: Wind speed exceeds safe operating conditions`);
      if (!isWithinRadius) result.warnings.push(`${crane.manufacturer} ${crane.model}: Working radius exceeds crane's maximum reach`);

      return isWithinCapacity && isWithinHeight && isWithinWindTolerance && isWithinRadius;
    });

    if (suitableCranes.length === 0) {
      result.isValid = false;
      result.warnings.push('No selected crane meets all the requirements');
      result.safetyScore = 0;
    } else {
      // Find the most suitable crane with weighted scoring
      const bestCrane = suitableCranes.reduce((prev, current) => {
        const weightScore = (current.maxLiftCapacity / weight) * 0.4;
        const heightScore = (current.maxRadius / height) * 0.2;
        const windScore = (current.windTolerance / wind) * 0.2;
        const radiusScore = (current.maxRadius / radius) * 0.2;
        
        const currentTotalScore = weightScore + heightScore + windScore + radiusScore;
        const prevTotalScore = (prev.maxLiftCapacity / weight) * 0.4 +
                             (prev.maxRadius / height) * 0.2 +
                             (prev.windTolerance / wind) * 0.2 +
                             (prev.maxRadius / radius) * 0.2;

        return currentTotalScore > prevTotalScore ? current : prev;
      });

      // Calculate safety score based on multiple factors
      const capacityMargin = (bestCrane.maxLiftCapacity - weight) / bestCrane.maxLiftCapacity * 100;
      const windMargin = (bestCrane.windTolerance - wind) / bestCrane.windTolerance * 100;
      result.safetyScore = Math.min(100, (capacityMargin * 0.6 + windMargin * 0.4));

      result.recommendation = `Recommended: ${bestCrane.manufacturer} ${bestCrane.model}
        \n• Optimal for ${weight} ton load at ${radius}m radius
        \n• Operating at ${Math.round((weight/bestCrane.maxLiftCapacity) * 100)}% of maximum capacity
        \n• ${Math.round(result.safetyScore)}% overall safety rating`;

      // Additional safety checks
      if (wind > bestCrane.windTolerance * 0.7) {
        result.warnings.push('High wind conditions - Consider postponing operation');
      }
      if (groundCondition !== 'firm') {
        result.warnings.push('Unstable ground conditions - Additional ground preparation may be required');
      }
      if (loadType === 'dynamic') {
        result.warnings.push('Dynamic load - Reduce operational speed and increase safety margins');
      }
    }

    onAnalysis(result);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-6 space-y-6">
      <div className="border-b pb-4">
        <h3 className="text-xl font-bold text-gray-800">Load Analysis</h3>
        <p className="text-sm text-gray-600 mt-1">Enter operation parameters for safety analysis</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Load Weight (tons)</label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <input
              type="number"
              value={loadWeight}
              onChange={(e) => setLoadWeight(e.target.value)}
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              required
              min="0"
              step="0.1"
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <span className="text-gray-500 sm:text-sm">tons</span>
            </div>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Working Radius (m)</label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <input
              type="number"
              value={workingRadius}
              onChange={(e) => setWorkingRadius(e.target.value)}
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              required
              min="0"
              step="0.1"
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <span className="text-gray-500 sm:text-sm">m</span>
            </div>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Lift Height (m)</label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <input
              type="number"
              value={liftHeight}
              onChange={(e) => setLiftHeight(e.target.value)}
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              required
              min="0"
              step="0.1"
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <span className="text-gray-500 sm:text-sm">m</span>
            </div>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Wind Speed (km/h)</label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <input
              type="number"
              value={windSpeed}
              onChange={(e) => setWindSpeed(e.target.value)}
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              required
              min="0"
              step="0.1"
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <span className="text-gray-500 sm:text-sm">km/h</span>
            </div>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Ground Condition</label>
          <select
            value={groundCondition}
            onChange={(e) => setGroundCondition(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="firm">Firm Ground</option>
            <option value="soft">Soft Ground</option>
            <option value="uneven">Uneven Terrain</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Load Type</label>
          <select
            value={loadType}
            onChange={(e) => setLoadType(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="static">Static Load</option>
            <option value="dynamic">Dynamic Load</option>
          </select>
        </div>
      </div>

      <div className="pt-4">
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 px-4 rounded-md hover:bg-blue-600 transition-colors flex items-center justify-center space-x-2"
        >
          <CheckCircle className="w-5 h-5" />
          <span>Analyze Operation Safety</span>
        </button>
      </div>

      {selectedCranes.length === 0 && (
        <div className="mt-4 p-4 bg-yellow-50 rounded-md flex items-start space-x-3">
          <Info className="w-5 h-5 text-yellow-400 mt-0.5" />
          <p className="text-sm text-yellow-700">
            Please select at least one crane for comparison and analysis
          </p>
        </div>
      )}
    </form>
  );
};