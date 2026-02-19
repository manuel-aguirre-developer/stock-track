import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'

function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div id="app-container" className="flex h-screen bg-slate-50">
      {/* Sidebar - desplegable en móvil, fijo en desktop */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Contenedor derecho (header + contenido) */}
      <div id="right-container" className="flex-1 flex flex-col overflow-hidden">
        {/* Header principal */}
        <header id="main-header" className="bg-red-50 border-b border-slate-200 shadow-sm">
          <div className="px-4 lg:px-8 py-4 flex items-center gap-4">
            {/* Botón hamburguesa (solo móvil) */}
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden p-2 rounded-lg hover:bg-slate-100 transition"
            >
              <svg className="w-6 h-6 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            <div>
              <h1 className="text-xl lg:text-2xl font-bold text-slate-800">Sistema de Gestión</h1>
              <p className="text-sm text-slate-500 mt-1">Administra tu inventario y ventas</p>
            </div>
          </div>
        </header>

        {/* Área de contenido principal */}
        <main id="main-content" className="flex-1 overflow-auto p-4 lg:p-8 bg-slate-50">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default Layout