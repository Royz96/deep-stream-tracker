import './App.css'
import { useDeepStreamDataMock } from './hooks/useDeepStreamDataMock'
import { TrackingDisplay } from './components/TrackingDisplay'
import { MetadataPanel } from './components/MetadataPanel'
import { StreamControls } from './components/StreamControls'

function App() {
  const { data, isRunning, toggleStream, tempHistory } = useDeepStreamDataMock()

  return (
    <div className="min-h-screen bg-gray-950 p-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-semibold text-gray-100">DeepStream</h1>
          <StreamControls isRunning={isRunning} onToggle={toggleStream} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <TrackingDisplay data={data} />
          </div>

          <div>
            <MetadataPanel data={data} isRunning={isRunning} tempHistory={tempHistory} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
