# ReactProject

Proyecto de ReactJs creado para el curso de CoderHouse

## Instalación
***
Clonar el repositorio y dentro de él, ejecutar en la terminal:

$ npm install

y luego:

$ npm start

## Navegación

'/'  En esta ruta tenemos el listado completo de los productos, es lo que se muestra por defecto, corresponde al ItemlistContainer y sus componentes, también se puede volver a acceder haciendo click en el botón "Todos los productos" del Nabvar.

'/category/:categoryId' En esta ruta se muestran los productos filtrados por tipo, para acceder se tiene que clickear en los botones del navbar "Pizzas" y "Hamburguesas", ahí tomará el "categoryId" correspondiente y mostrará el ItemListContainer con solamente los datos del tipo seleccionado.

'/detail/:productId' A esta ruta se accede clickeando en el botón "ver detalle" que hay en cada Item de las listas de productos, este botón le proporcionará al ItemDetailContainer el "ID" del producto seleccionado, así este mostrará la información detallada del producto y nos permitirá agregar, si lo desean, este producto al carrito.

### Aclaración

El comportamiento del componente ItemListContainer depende de la existencia o no de el parámetro de la URL "categoryId", de este existir, muestra solamente la categoría seleccionada, si no, muestra el listado completo de productos.