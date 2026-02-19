# StockTrack 📦

Sistema de gestión de inventario y ventas para ferreterías y comercios minoristas.

## 🚀 Características

### Módulos Principales

- **Punto de Venta (POS)**: Interfaz rápida para registrar ventas en tiempo real
- **Gestión de Inventario**: Control completo de productos y stock
- **Reportes y Estadísticas**: Análisis de ventas, productos más vendidos y métricas de negocio
- **Multi-usuario**: Sistema de roles (Empleado/Gerente)

### Funcionalidades destacadas esperadas

✅ Control de stock en tiempo real  
✅ Alertas de stock mínimo  
✅ Búsqueda rápida de productos  
✅ Generación de tickets de venta  
✅ Reportes visuales con gráficos  
✅ Historial de ventas  
✅ Gestión de categorías y proveedores  
✅ Autenticación y roles de usuario  

## 🛠️ Tecnologías

### Frontend
- **React** - Biblioteca de UI
- **Vite** - Build tool
- **React Router** - Navegación
- **Zustand** - Gestión de estado
- **TailwindCSS** - Estilos
- **Recharts** - Gráficos y visualización de datos
- **Lucide React** - Iconos

### Backend
- **Node.js** - Entorno de ejecución
- **Express** - Framework para API REST
- **Prisma ORM** - Acceso y modelado de la base de datos
- **PostgreSQL** - Base de datos relacional (alojada en la nube)

## 🗄️ Estructura de Base de Datos

```
users           → Usuarios del sistema con roles (empleado/gerente)
categorias      → Categorías de productos
proveedores     → Proveedores de productos
productos       → Inventario con precios, stock actual y mínimo
ventas          → Registro de ventas con método de pago y estado
venta_items     → Detalle de productos por venta
stock_movimientos → Historial de entradas, salidas y ajustes de stock
```

## 📋 Requisitos Previos

- Node.js >= 18.0.0
- npm o yarn
- PostgreSQL (local o en la nube)

## 🔧 Instalación

1. Clonar el repositorio:
```bash
git clone https://github.com/manuel-aguirre-developer/stock-track.git
cd stock-track
```

2. Instalar dependencias del frontend:
```bash
npm install
```

3. Instalar dependencias del backend:
```bash
cd server
npm install
```

4. Configurar variables de entorno:
```bash
cp .env.example .env
```

5. Ejecutar migraciones de Prisma:
```bash
npx prisma migrate dev
```

6. Ejecutar en desarrollo:
```bash
# Frontend
npm run dev

# Backend
cd server && node index.js
```

## 📁 Estructura del Proyecto

```
stock-track/
├── src/                    # Frontend React
│   ├── components/         # Componentes reutilizables
│   │   ├── Layout/         # Sidebar y estructura principal
│   │   ├── POS/            # Componentes del punto de venta
│   │   ├── Inventario/     # Componentes de gestión de productos
│   │   └── Reportes/       # Componentes de visualización de datos
│   ├── pages/              # Páginas principales
│   ├── store/              # Estado global (Zustand)
│   ├── utils/              # Funciones auxiliares
│   └── App.jsx             # Componente raíz
├── server/                 # Backend Node.js
│   ├── routes/             # Rutas de la API
│   ├── controllers/        # Lógica de negocio
│   ├── prisma/
│   │   └── schema.prisma   # Modelos de la base de datos
│   └── index.js            # Entrada del servidor
└── .env                    # Variables de entorno
```

## 👥 Roles de Usuario

### Empleado
- Registrar ventas
- Buscar productos
- Ver stock disponible
- Generar tickets

### Gerente/Admin
- Todo lo anterior +
- Gestionar productos (CRUD)
- Ver reportes completos
- Gestionar empleados
- Ajustar precios
- Control de inventario

## 🔌 API REST

El backend expone una API REST consumida por el frontend. Endpoints principales:

```
GET    /api/productos         → Listar productos
POST   /api/productos         → Crear producto
PUT    /api/productos/:id     → Editar producto
DELETE /api/productos/:id     → Eliminar producto

POST   /api/ventas            → Registrar venta
GET    /api/ventas            → Historial de ventas

GET    /api/reportes/stock    → Reporte de stock
GET    /api/reportes/ventas   → Reporte de ventas

POST   /api/auth/login        → Autenticación
```

## 🚧 Estado del Proyecto

🔨 **En desarrollo activo**

### Completado
- Configuración inicial del frontend
- Maquetado del layout y sidebar
- Configuración del backend (Express + Prisma)
- Conexión a base de datos PostgreSQL (Neon)
- Migraciones iniciales

### En progreso
- Módulo de productos

### Próximamente
- Configuración del backend (Express + Prisma)
- Módulo POS
- Gestión de inventario
- Autenticación y roles
- Reportes y estadísticas
- Sistema de proveedores
- Exportación de datos

## 📝 Scripts Disponibles

```bash
npm run dev          # Ejecutar frontend en modo desarrollo
npm run build        # Construir para producción
npm run preview      # Vista previa de producción
npm run lint         # Ejecutar linter
```

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT.

## Autor

**Manuel Aguirre**
- GitHub: [@manuel-aguirre-developer](https://github.com/manuel-aguirre-developer)
- LinkedIn: [@manuel-aguirre-developer](https://linkedin.com/in/manuel-aguirre-developer)

---

> Proyecto creado como parte del portafolio profesional. Diseñado para resolver necesidades reales de comercios minoristas.