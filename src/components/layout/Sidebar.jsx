import { NavLink } from "react-router-dom";
import { cn } from "../../utils/cn";

function Sidebar({ isOpen, onClose }) {

  const menuItems = [
    {
      path: "/pos",
      label: "Punto de Venta",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 3h2l.4 2M7 13h10l4-8H5.4
               M7 13L5.4 5
               M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17
               m0 0a2 2 0 100 4 2 2 0 000-4
               m-8 2a2 2 0 11-4 0 2 2 0 014 0"
          />
        </svg>
      ),
    },
    {
      path: "/products",
      label: "Productos",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4
               m0-10L4 7m8 4v10M4 7v10l8 4"
          />
        </svg>
      ),
    },
    {
      path: "/dashboard",
      label: "Dashboard",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round"
            d="M5 20V10M12 20V4M19 20V14" />
        </svg>
      ),
    },
  ];

  return (
    <>
      {/* Overlay oscuro para móvil */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed lg:static inset-y-0 left-0 z-50",
          "w-64 h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950",
          "text-white flex flex-col shadow-2xl",
          "transform transition-transform duration-300 ease-in-out lg:transform-none",
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        )}
      >
        {/* ================= HEADER / HOTBAR ================= */}
        <div className="p-5 border-b border-slate-700/50">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-2 rounded-xl shadow-lg shadow-blue-500/30">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  viewBox="0 0 24 24"
                >
                  {/* Pantalla grande */}
                  <rect x="3" y="4" width="17" height="12" rx="2" />
                  {/* Pantalla chica */}
                  <rect x="7" y="7" width="5" height="9" rx="1.5" />
                </svg>
              </div>
              <div>
                <h2 className="text-lg font-bold tracking-tight">StockTrack</h2>
                <p className="text-xs text-slate-400">Gestión de Stock</p>
              </div>
            </div>

            {/* Botón cerrar (solo móvil) */}
            <button
              onClick={onClose}
              className="lg:hidden p-2 rounded-lg hover:bg-slate-800 transition"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* ================= NAV ================= */}
        <nav className="px-4 pt-6 flex flex-col gap-y-3">
          <p className="px-3 mb-6 text-xs font-semibold text-slate-500 uppercase tracking-wider">
            Menú principal
          </p>

          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => onClose()}
              className={({ isActive }) =>
                cn(
                  "relative flex items-center gap-4 rounded-2xl",
                  "px-5 py-5 text-base font-medium",
                  "transition-all duration-200 ease-in-out",
                  isActive
                    ? "bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg shadow-blue-600/40"
                    : "bg-slate-800/40 text-slate-300 hover:bg-slate-700/60 hover:text-white hover:translate-x-1"
                )
              }
            >
              {({ isActive }) => (
                <>
                  {isActive && (
                    <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-10 bg-blue-400 rounded-r-full" />
                  )}

                  <div
                    className={cn(
                      "flex-shrink-0 transition-colors",
                      isActive ? "text-white" : "text-slate-400"
                    )}
                  >
                    {item.icon}
                  </div>

                  <span className="font-semibold">{item.label}</span>
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Empuja el footer hacia abajo */}
        <div className="flex-1" />

        {/* ================= FOOTER ================= */}
        <div className="p-4">
          <div className="flex items-center gap-3 px-3 py-3 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:bg-slate-800 transition cursor-pointer">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-purple-600 flex items-center justify-center font-bold text-sm shadow-lg shadow-purple-500/30">
              A
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold truncate">Admin</p>
              <p className="text-xs text-slate-400">Administrador</p>
            </div>
            <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;