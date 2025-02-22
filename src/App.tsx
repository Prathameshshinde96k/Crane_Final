import React, { useState } from 'react';
import { CraneCard } from './components/CraneCard';
import { ComparisonTable } from './components/ComparisonTable';
import { AnalysisForm } from './components/AnalysisForm';
import { SafetyNexus } from './components/SafetyNexus';
import { CraneData, ComparisonResult, CraneType } from './types';
import { cranes } from './data/cranes';
import { Construction, AlertTriangle, CheckCircle, BarChart3, Search, Settings2 } from 'lucide-react';

function App() {
  const [selectedCranes, setSelectedCranes] = useState<CraneData[]>([]);
  const [analysisResult, setAnalysisResult] = useState<ComparisonResult | null>(null);
  const [selectedType, setSelectedType] = useState<CraneType | 'All'>('All');

  const handleCraneSelect = (crane: CraneData) => {
    if (selectedCranes.find(c => c.id === crane.id)) {
      setSelectedCranes(selectedCranes.filter(c => c.id !== crane.id));
    } else {
      setSelectedCranes([...selectedCranes, crane]);
    }
  };

  const craneTypes: CraneType[] = [
    'Tower Crane',
    'Crawler Crane',
    'Mobile Crane',
    'Rough Terrain Crane',
    'All-Terrain Crane',
    'Telescopic Crane',
    'Floating Crane',
    'Gantry Crane',
    'Overhead Crane',
    'Loader Crane'
  ];

  const filteredCranes = selectedType === 'All' 
    ? cranes 
    : cranes.filter(crane => crane.type === selectedType);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <header className="glass-card sticky top-0 z-50 border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-radial from-blue-500 to-blue-600 p-2 rounded-xl">
                <Construction className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold gradient-text">LiftWise</h1>
                <p className="text-sm text-gray-600">Intelligent Lifting Solutions</p>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <BarChart3 className="w-5 h-5 text-blue-500" />
                <span className="text-sm font-medium text-gray-600">
                  {selectedCranes.length} Selected
                </span>
              </div>
              <button className="p-2 rounded-lg hover:bg-blue-50 transition-colors">
                <Settings2 className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="glass-card rounded-xl p-6 mb-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold gradient-text">Equipment Catalog</h2>
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                    <select
                      value={selectedType}
                      onChange={(e) => setSelectedType(e.target.value as CraneType | 'All')}
                      className="pl-10 pr-4 py-2 rounded-lg border border-gray-200 bg-white/50 focus:border-blue-500 focus:ring-blue-500 appearance-none"
                    >
                      <option value="All">All Types</option>
                      {craneTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredCranes.map((crane) => (
                  <CraneCard
                    key={crane.id}
                    crane={crane}
                    isSelected={selectedCranes.some(c => c.id === crane.id)}
                    onSelect={handleCraneSelect}
                  />
                ))}
              </div>
            </div>

            {selectedCranes.length > 0 && (
              <div className="glass-card rounded-xl p-6">
                <h2 className="text-xl font-bold gradient-text mb-6">Equipment Comparison</h2>
                <ComparisonTable cranes={selectedCranes} />
              </div>
            )}

            <div className="mt-8">
              <SafetyNexus />
            </div>
          </div>

          <div className="lg:col-span-1 space-y-8">
            <AnalysisForm
              selectedCranes={selectedCranes}
              onAnalysis={setAnalysisResult}
            />
            
            {analysisResult && (
              <div className="glass-card rounded-xl p-6">
                <h3 className="text-xl font-bold gradient-text mb-4">Analysis Results</h3>
                
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-600">Safety Score</span>
                      <span className="font-semibold">{Math.round(analysisResult.safetyScore)}%</span>
                    </div>
                    <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className="h-full transition-all duration-500"
                        style={{
                          width: `${analysisResult.safetyScore}%`,
                          background: `linear-gradient(90deg, 
                            ${analysisResult.safetyScore >= 80 ? '#22c55e' : 
                              analysisResult.safetyScore >= 60 ? '#eab308' : 
                              '#ef4444'} 0%, 
                            ${analysisResult.safetyScore >= 80 ? '#16a34a' : 
                              analysisResult.safetyScore >= 60 ? '#ca8a04' : 
                              '#dc2626'} 100%)`
                        }}
                      />
                    </div>
                  </div>

                  {analysisResult.recommendation && (
                    <div className="glass-card rounded-lg p-4 border-l-4 border-blue-500">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-blue-500 mt-1" />
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-2">Recommendation</h4>
                          <p className="text-gray-700 whitespace-pre-line">{analysisResult.recommendation}</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {analysisResult.warnings.length > 0 && (
                    <div className="space-y-3">
                      <h4 className="font-semibold text-gray-700">Safety Warnings</h4>
                      {analysisResult.warnings.map((warning, index) => (
                        <div key={index} className="glass-card rounded-lg p-4 border-l-4 border-yellow-500 flex items-start space-x-3">
                          <AlertTriangle className="w-5 h-5 text-yellow-500 mt-1" />
                          <p className="text-gray-700">{warning}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;