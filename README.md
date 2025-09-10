# JS-FULLSTACK - Book Management System

Una aplicación fullstack de gestión de libros desarrollada con JavaScript, Node.js, Express, MongoDB y Webpack.

## 📋 Descripción

Esta aplicación permite gestionar una biblioteca personal donde puedes agregar, visualizar y eliminar libros. Cada libro puede incluir título, autor, ISBN e imagen de portada.

> 📚 **Proyecto Educativo**: Este proyecto fue desarrollado siguiendo el tutorial **"Javascript FullStack"** del canal [FaztCode](https://www.youtube.com/@FaztCode) en YouTube. Es ideal para aprender desarrollo fullstack con JavaScript desde cero.

## 🚀 Características

- **Frontend**: Vanilla JavaScript con Webpack para bundling
- **Backend**: Node.js con Express
- **Base de datos**: MongoDB con Mongoose
- **Subida de archivos**: Multer para manejo de imágenes
- **Bundling**: Webpack con CSS y JS optimizados
- **Desarrollo**: Hot reload con webpack-dev-server y nodemon

## 📁 Estructura del Proyecto

```
js-fullstack/
├── backend/
│   ├── database.js          # Configuración de MongoDB
│   ├── index.js            # Servidor Express principal
│   ├── models/
│   │   └── Book.js         # Modelo de datos de libro
│   ├── routes/
│   │   └── books.js        # Rutas API para libros
│   └── public/             # Archivos estáticos servidos
│       ├── index.html
│       ├── css/
│       ├── js/
│       └── uploads/        # Imágenes subidas
├── frontend/
│   ├── app.js              # Punto de entrada del frontend
│   ├── index.html          # Template HTML
│   ├── UI.js               # Lógica de interfaz de usuario
│   ├── services/
│   │   └── BookService.js  # Servicios API
│   └── styles/
│       └── app.css         # Estilos CSS
├── package.json
├── webpack.config.js       # Configuración de Webpack
└── README.md
```

## 🛠️ Tecnologías Utilizadas

### Backend
- **Node.js** - Runtime de JavaScript
- **Express.js** - Framework web
- **MongoDB** - Base de datos NoSQL
- **Mongoose** - ODM para MongoDB
- **Multer** - Middleware para subida de archivos
- **Morgan** - Logger HTTP
- **CORS** - Cross-Origin Resource Sharing

### Frontend
- **Vanilla JavaScript** - Sin frameworks
- **CSS3** - Estilos
- **Webpack** - Module bundler
- **HTML5** - Estructura

### Herramientas de Desarrollo
- **Nodemon** - Auto-restart del servidor
- **Webpack Dev Server** - Servidor de desarrollo
- **Cross-env** - Variables de entorno multiplataforma

## 📦 Instalación

### Prerrequisitos
- Node.js (v14 o superior)
- MongoDB (local o MongoDB Atlas)
- npm o yarn

### Pasos de instalación

1. **Clonar el repositorio**
   ```bash
   git clone <url-del-repositorio>
   cd js-fullstack
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Configurar variables de entorno**
   Crear un archivo `.env` en la raíz del proyecto:
   ```env
   PORT=3000
   MONGODB_URI=mongodb://localhost:27017/bookstore
   NODE_ENV=development
   ```

4. **Iniciar MongoDB**
   Asegúrate de que MongoDB esté ejecutándose en tu sistema.

## 🚀 Uso

### Modo Desarrollo

**Opción 1: Desarrollo completo con webpack-dev-server**
```bash
npm run server:dev
```
Esto iniciará el servidor de desarrollo de Webpack en el puerto 8080.

**Opción 2: Backend con nodemon**
```bash
npm run dev
```
Esto iniciará el servidor backend con auto-reload en el puerto 3000.

### Modo Producción

1. **Construir el proyecto**
   ```bash
   npm run build
   ```

2. **Iniciar el servidor**
   ```bash
   npm start
   ```

## 📡 API Endpoints

### Libros

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET    | `/api/books` | Obtener todos los libros |
| POST   | `/api/books` | Crear un nuevo libro |
| GET    | `/api/books/:id` | Obtener un libro por ID |
| PUT    | `/api/books/:id` | Actualizar un libro |
| DELETE | `/api/books/:id` | Eliminar un libro |

### Ejemplo de petición POST
```javascript
const formData = new FormData();
formData.append('title', 'El Quijote');
formData.append('author', 'Miguel de Cervantes');
formData.append('isbn', '978-84-376-0494-7');
formData.append('image', imageFile);

fetch('/api/books', {
  method: 'POST',
  body: formData
});
```

## 📊 Modelo de Datos

### Book Schema
```javascript
{
  title: String (requerido),
  author: String (requerido),
  isbn: String (requerido, único),
  imagePath: String (opcional),
  created_at: Date (automático)
}
```

## 🔧 Scripts Disponibles

- `npm run dev` - Inicia el servidor backend en modo desarrollo
- `npm start` - Inicia el servidor en modo producción
- `npm run build` - Construye el proyecto para producción
- `npm run server:dev` - Inicia webpack-dev-server
- `npm test` - Ejecuta las pruebas (aún no implementado)

## 📂 Archivos de Configuración

### webpack.config.js
- Configura Webpack para bundling de JavaScript y CSS
- Extrae CSS en archivos separados en producción
- Genera HTML automáticamente

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Notas de Desarrollo

- Las imágenes se almacenan en `backend/public/uploads/`
- El frontend se compila automáticamente a `backend/public/`
- Se utiliza CORS para permitir peticiones cross-origin en desarrollo
- Multer maneja la subida de archivos con timestamps únicos
