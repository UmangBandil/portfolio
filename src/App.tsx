import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-3xl font-bold">Portfolio - Test</h1>
      </header>
      
      <main className="p-8 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Welcome to My Portfolio</h2>
        <p className="text-gray-700 mb-8">If you see this, the page is loading correctly!</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="font-bold mb-2">Skill 1</h3>
            <p className="text-gray-600">React Development</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="font-bold mb-2">Skill 2</h3>
            <p className="text-gray-600">TypeScript</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="font-bold mb-2">Skill 3</h3>
            <p className="text-gray-600">TailwindCSS</p>
          </div>
        </div>
      </main>
      
      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>&copy; 2024 My Portfolio</p>
      </footer>
    </div>
  )
}

export default App
