# StockTrack 📦

Sistema de gestión de inventario y ventas para ferreterías y comercios minoristas.

## 🚀 Características

### Módulos Principales

- **Punto de Venta (POS)**: Interfaz rápida para registrar ventas en tiempo real
- **Gestión de Inventario**: Control completo de productos y stock
- **Reportes y Estadísticas**: Análisis de ventas, productos más vendidos y métricas de negocio
- **Multi-usuario**: Sistema de roles (Empleado/Gerente)

### Funcionalidades Destacadas

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
- **Supabase** - Base de datos PostgreSQL + Autenticación + Storage

## 📋 Requisitos Previos

- Node.js >= 18.0.0
- npm o yarn

## 🔧 Instalación

1. Clonar el repositorio:
```bash
git clone https://github.com/tu-usuario/stock-track.git
cd stock-track
```

2. Instalar dependencias:
```bash
npm install
```

3. Configurar variables de entorno:
```bash
cp .env.example .env
```

4. Ejecutar en desarrollo:
```bash
npm run dev
```

## 📁 Estructura del Proyecto
```
src/
├── components/        # Componentes reutilizables
│   ├── Layout/       # Sidebar y estructura principal
│   ├── POS/          # Componentes del punto de venta
│   ├── Inventario/   # Componentes de gestión de productos
│   └── Reportes/     # Componentes de visualización de datos
├── pages/            # Páginas principales
├── store/            # Estado global (Zustand)
├── utils/            # Funciones auxiliares
└── App.jsx           # Componente raíz
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

## 🚧 Estado del Proyecto

🔨 **En desarrollo activo**

### Completado
- [ ] Configuración inicial
- [ ] Diseño de base de datos
- [ ] Autenticación

### En progreso
- [ ] Módulo POS
- [ ] Gestión de inventario

### Próximamente
- [ ] Reportes y estadísticas
- [ ] Sistema de proveedores
- [ ] Exportación de datos

## 📝 Scripts Disponibles
```bash
npm run dev          # Ejecutar en modo desarrollo
npm run build        # Construir para producción
npm run preview      # Vista previa de producción
npm run lint         # Ejecutar linter
```

## 🤝 Contribuir

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

## 👨‍💻 Autor

**Tu Nombre**
- GitHub: [@manuel-aguirre-developer](https://github.com/manuel-aguirre-developer)
- LinkedIn: [@manuel-aguirre-developer](https://linkedin.com/in/manuel-aguirre-developer)

## 🙏 Agradecimientos

- Proyecto creado como parte del portafolio profesional
- Diseñado para resolver necesidades reales de comercios minoristas

---

⭐️ Si te gusta este proyecto, dale una estrella en GitHub