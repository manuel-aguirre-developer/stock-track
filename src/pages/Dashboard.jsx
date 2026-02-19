function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Header de la página */}
      <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Dashboard</h2>
        <p className="text-gray-500">Reportes, estadísticas y métricas de tu negocio</p>
      </div>

      {/* Contenido */}
      <div className="bg-white rounded-xl shadow-sm p-12 border border-gray-200">
        <div className="flex flex-col items-center justify-center text-center space-y-4">
          <div className="bg-purple-50 p-6 rounded-full">
            <span className="text-6xl">📊</span>
          </div>
          <p className="text-xl font-medium text-gray-700">Dashboard Analítico</p>
          <p className="text-gray-500">En desarrollo</p>
        </div>
      </div>
    </div>
  )
}

export default Dashboard