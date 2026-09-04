# Sabores Andinos Mistura 🍲🔥

> Sitio web interactivo para el recreo campestre y restaurante tradicional **Sabores Andinos Mistura**. Especialistas en carnes al palo, chancho a la caja china, pachamanca, truchas vivas y celebraciones familiares en Apurímac y Ayacucho. Prototipado y diseñado con **Google Stitch** y optimizado para producción.

---

## 🌟 Características Principales

1. **Header & Barra de Estado en Vivo:**
   - Indicador dinámico de estado del fogón activo y turnos de cocina.
   - Navegación responsive con scroll suave (*smooth scroll*).
   - Selector interactivo de sedes (Andahuaylas Matriz, Pacucha, Abancay, Chincheros, Ayacucho).
   - Contador en tiempo real de artículos agregados a la comanda.

2. **Inicio & Selector de Antojos del Día:**
   - Selector interactivo en vivo (*Chancho al palo*, *Cordero al palo*, *Caja china*, *Lechón*).
   - Indicador de espadas al fuego y tiempos de preparación.
   - Métricas y datos de satisfacción del establecimiento.

3. **Carta Digital Interactiva & Carrito de Pedidos:**
   - Filtros por categoría (*Al Palo*, *Caja China*, *Fuentes Familiares*, *Guarniciones*, *Bebidas*).
   - Selector de porciones dinámicas (*1/4 kg*, *1/2 kg*, *1 kg*) con actualización instantánea de precios.
   - Selector de cremas artesanales (*Uchucuta molida en batán*, *Ocopa de huacatay*).
   - **Bandeja de Pedido:** Alterna entre modalidad *En Mi Mesa* o *Delivery*, cálculo automático de subtotales, empaque y botón de confirmación directa a **WhatsApp**.

4. **Experiencia Recreo Campestre:**
   - Pestañas interactivas de áreas verdes, música y danza tradicional, seguridad y estacionamiento propio.
   - Historia y legado del fundador Don Efraín Cusi Velasque.

5. **Cotizador de Encargos & Eventos Familiares:**
   - Selección de tipo de celebración (Cumpleaños, Boda campestre, Bautizo, Corporativo, etc.).
   - Slider interactivo de comensales (10 a 250+ personas).
   - Controles `+` y `−` para lechones y corderos enteros con cálculo de costo por persona.
   - Opción para contratar Maestro Brasero y show de fuego en vivo.
   - Exportación de cotización detallada directo a WhatsApp.

6. **Reservas & Cotizador de Chancho Entero:**
   - Formulario de reserva de mesas sin esperas.
   - Cotizador de piezas enteras para agasajos grandes.

---

## 🛠️ Tecnologías Utilizadas

- **HTML5 Semántico:** Marcado accesible y optimizado para SEO local.
- **Tailwind CSS (CDN):** Estilos modernos, diseño responsive *mobile-first* y paleta andina personalizada.
- **Vanilla JavaScript:** Lógica interactiva del carrito de compras, cotizador de carnes, tabs y conexión con la API de WhatsApp.
- **Google Fonts & Material Symbols:** Tipografías *Outfit* y *Plus Jakarta Sans*, e iconografía SVG de Material Symbols.

---

## 📂 Estructura de Páginas

El proyecto cuenta con 3 páginas completas e interconectadas:

1. **`index.html` (Inicio & Experiencia Recreo):**
   - Presentación de la marca y legado culinario.
   - Selector interactivo de antojos en tiempo real.
   - Platos estrella y tabs de la experiencia campestre (áreas verdes, música, estacionamiento).
   - Sección de reservas de mesa y cotizador rápido de chancho entero.

2. **`carta.html` (Nuestra Carta Digital Interactiva):**
   - Filtros dinámicos por categorías culinarias.
   - Selectores de peso / porción (1/4 kg, 1/2 kg, 1 kg) y cremas tradicionales.
   - Carrito sticky lateral con cálculo de empaque y opción "En Mesa" vs "Delivery".
   - Despacho automático de la comanda con detalle a WhatsApp.

3. **`eventos.html` (Cotizador de Encargos & Eventos):**
   - Simulador interactivo de banquetes y celebraciones (cumpleaños, bodas, corporativos).
   - Slider de invitados (10 a 250+ comensales) y recomendaciones inteligentes.
   - Controles `+` / `−` de piezas enteras de carne (lechón, cordero al palo).
   - Opcional de Maestro Brasero en vivo y resumen presupuestario exportable a WhatsApp.

---

## 🚀 Cómo Ejecutar el Proyecto Localmente

1. Clona este repositorio:
   ```bash
   git clone https://github.com/luisllocclla27-del/SaboresAndinosMistura.git
   ```
2. Ingresa a la carpeta del proyecto:
   ```bash
   cd SaboresAndinosMistura
   ```
3. Abre cualquiera de las páginas en tu navegador favorito:
   - En Windows (PowerShell):
     ```powershell
     start index.html
     ```
   - También puedes navegar directamente a `carta.html` o `eventos.html`.

---

## 📄 Licencia

Este proyecto está bajo la licencia MIT. Diseñado con orgullo para difundir la gastronomía andina peruana.
