import React, { useState } from 'react';
import { Calculator, AlertTriangle, Brain, Info, Shield, Wind, Weight, Ruler } from 'lucide-react';

interface SafetyNexusInputs {
  weight: number;
  angle: number;
  windSpeed: number;
  craneCapacity: number;
  liftingPoints: number;
  groundStability: number;
  cgOffset: number;
  boomLength: number;
  operatorFatigue: number;
  daysSinceMaintenance: number;
}

export const SafetyNexus: React.FC = () => {
  const [showMetricInfo, setShowMetricInfo] = useState<string | null>(null);
  const [inputs, setInputs] = useState<SafetyNexusInputs>({
    weight: 1000,
    angle: 45,
    windSpeed: 5,
    craneCapacity: 5000,
    liftingPoints: 4,
    groundStability: 8,
    cgOffset: 0.5,
    boomLength: 30,
    operatorFatigue: 2,
    daysSinceMaintenance: 30
  });

  const handleInputChange = (field: keyof SafetyNexusInputs, value: string) => {
    const parsedValue = value === '' ? 0 : parseFloat(value);
    setInputs(prev => ({
      ...prev,
      [field]: parsedValue
    }));
  };

  const calculateSafetyMetrics = () => {
    // Dynamic Load Stress
    const DLS = (inputs.weight * Math.sin(inputs.angle * Math.PI / 180) * inputs.windSpeed) / 
                (inputs.craneCapacity * inputs.liftingPoints * inputs.groundStability || 1);

    // Center of Gravity Chaos Factor
    const CGF = Math.abs(inputs.cgOffset / (inputs.boomLength || 1)) * (1 + inputs.operatorFatigue / 10);

    // Risk Index
    const RI = ((inputs.weight ** 2 * inputs.angle) / (inputs.craneCapacity * inputs.liftingPoints || 1)) + 
               ((CGF * inputs.windSpeed) / (inputs.operatorFatigue + 1));

    // Safety Score
    const SS = 1000 / (DLS + CGF + Math.log(Math.max(RI, 1)));

    // Liftability Quotient
    const LQ = SS / (RI * (inputs.daysSinceMaintenance || 1));

    return {
      DLS: isFinite(DLS) ? DLS : 0,
      CGF: isFinite(CGF) ? CGF : 0,
      RI: isFinite(RI) ? RI : 0,
      SS: isFinite(SS) ? SS : 0,
      LQ: isFinite(LQ) ? LQ : 0
    };
  };

  const getRecommendation = (LQ: number) => {
    if (LQ > 50) {
      return {
        text: "All systems go! Optimal lifting conditions detected.",
        color: "text-green-600",
        icon: Shield
      };
    } else if (LQ > 20) {
      return {
        text: "Proceed with caution. Additional safety measures recommended.",
        color: "text-yellow-600",
        icon: AlertTriangle
      };
    } else {
      return {
        text: "High-risk conditions detected. Operation not recommended.",
        color: "text-red-600",
        icon: AlertTriangle
      };
    }
  };

  const metrics = calculateSafetyMetrics();
  const recommendation = getRecommendation(metrics.LQ);

  const metricInfo = {
    DLS: "Dynamic Load Stress (DLS) measures the combined effect of load weight, lift angle, and wind forces relative to the crane's capacity. Lower values indicate safer lifting conditions.",
    CGF: "Center of Gravity Factor (CGF) analyzes load stability based on center of gravity offset and operator readiness. Values closer to 0 indicate better load balance.",
    SS: "Safety Score represents the overall safety rating of the operation, considering all factors. Higher scores indicate safer conditions.",
    LQ: "Liftability Quotient (LQ) is the final safety metric that determines operational feasibility. Values above 50 indicate optimal conditions."
  };

  return (
    <div className="glass-card rounded-xl p-6 space-y-6 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold gradient-text flex items-center gap-2">
            <Brain className="w-8 h-8" />
            CraneSafe Quantum Analyzer
          </h2>
          <p className="text-sm text-gray-600">Advanced Lift Safety Analysis System</p>
        </div>
        <div className="flex items-center gap-4">
          <Wind className="w-6 h-6 text-blue-500 animate-pulse" />
          <Calculator className="w-6 h-6 text-blue-500" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div className="glass-card p-4 rounded-lg bg-white/80">
            <h3 className="text-lg font-semibold text-blue-700 mb-3 flex items-center gap-2">
              <Weight className="w-5 h-5" />
              Load Parameters
            </h3>
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-gray-700">Load Weight (kg)</label>
                <input
                  type="number"
                  value={inputs.weight || ''}
                  onChange={(e) => handleInputChange('weight', e.target.value)}
                  min="0"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Angle (degrees)</label>
                <input
                  type="number"
                  value={inputs.angle || ''}
                  onChange={(e) => handleInputChange('angle', e.target.value)}
                  min="0"
                  max="360"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Wind Speed (m/s)</label>
                <input
                  type="number"
                  value={inputs.windSpeed || ''}
                  onChange={(e) => handleInputChange('windSpeed', e.target.value)}
                  min="0"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>

          <div className="glass-card p-4 rounded-lg bg-white/80">
            <h3 className="text-lg font-semibold text-blue-700 mb-3 flex items-center gap-2">
              <Ruler className="w-5 h-5" />
              Equipment Settings
            </h3>
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-gray-700">Crane Capacity (kg)</label>
                <input
                  type="number"
                  value={inputs.craneCapacity || ''}
                  onChange={(e) => handleInputChange('craneCapacity', e.target.value)}
                  min="0"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Lifting Points</label>
                <input
                  type="number"
                  value={inputs.liftingPoints || ''}
                  onChange={(e) => handleInputChange('liftingPoints', e.target.value)}
                  min="1"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="glass-card p-4 rounded-lg bg-white/80">
            <h3 className="text-lg font-semibold text-blue-700 mb-3">Environmental Factors</h3>
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-gray-700">Ground Stability (1-10)</label>
                <input
                  type="number"
                  value={inputs.groundStability || ''}
                  onChange={(e) => handleInputChange('groundStability', e.target.value)}
                  min="1"
                  max="10"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">CG Offset (meters)</label>
                <input
                  type="number"
                  value={inputs.cgOffset || ''}
                  onChange={(e) => handleInputChange('cgOffset', e.target.value)}
                  min="0"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Boom Length (meters)</label>
                <input
                  type="number"
                  value={inputs.boomLength || ''}
                  onChange={(e) => handleInputChange('boomLength', e.target.value)}
                  min="0"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>

          <div className="glass-card p-4 rounded-lg bg-white/80">
            <h3 className="text-lg font-semibold text-blue-700 mb-3">Operational Status</h3>
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-gray-700">Operator Fatigue (0-10)</label>
                <input
                  type="number"
                  value={inputs.operatorFatigue || ''}
                  onChange={(e) => handleInputChange('operatorFatigue', e.target.value)}
                  min="0"
                  max="10"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Days Since Maintenance</label>
                <input
                  type="number"
                  value={inputs.daysSinceMaintenance || ''}
                  onChange={(e) => handleInputChange('daysSinceMaintenance', e.target.value)}
                  min="0"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 space-y-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {Object.entries(metrics).map(([key, value]) => (
            <div
              key={key}
              className="glass-card p-4 rounded-lg bg-white/80 hover:bg-blue-50 transition-colors cursor-help relative group"
              onMouseEnter={() => setShowMetricInfo(key)}
              onMouseLeave={() => setShowMetricInfo(null)}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="text-sm font-medium text-gray-600">{key}</div>
                <Info className="w-4 h-4 text-blue-400" />
              </div>
              <div className="text-lg font-bold text-blue-600">{value.toFixed(2)}</div>
              {showMetricInfo === key && (
                <div className="absolute bottom-full left-0 mb-2 p-3 bg-white rounded-lg shadow-lg z-10 w-64">
                  <p className="text-sm text-gray-600">{metricInfo[key as keyof typeof metricInfo]}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className={`glass-card p-6 rounded-lg bg-gradient-to-r ${
          recommendation.color === 'text-green-600' ? 'from-green-50 to-blue-50' :
          recommendation.color === 'text-yellow-600' ? 'from-yellow-50 to-orange-50' :
          'from-red-50 to-pink-50'
        }`}>
          <div className="flex items-start space-x-4">
            <recommendation.icon className={`w-6 h-6 ${recommendation.color} mt-1`} />
            <div>
              <div className="font-medium text-gray-700">Safety Analysis Result</div>
              <div className={`${recommendation.color} font-medium text-lg`}>{recommendation.text}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};