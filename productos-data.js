const productos = [
  {
    id: 1,
    nombre: 'iPhone 14 Pro Max',
    categoria: 'Tecnología',
    marca: 'Apple',
    descripcion: 'Smartphone de alta gama con pantalla Super Retina XDR, chip A16 Bionic y cámara Pro avanzada.',
    precio: 1299000,
    precioOriginal: 1499000,
    descuento: 13,
    stock: 24,
    rating: 4.9,
    reviews: 1240,
    imagen: 'https://images.unsplash.com/photo-1709178295038-acbeec786fcf?q=80&w=327&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    colores: ['Azul profundo', 'Plateado', 'Oro'],
    destacado: true,
    envioGratis: true,
    cuotas: 12,
    categoriaSlug: 'tecnologia'
  },
  {
    id: 2,
    nombre: 'Silla Ergonómica',
    categoria: 'Hogar',
    marca: 'ErgoPlus',
    descripcion: 'Silla de oficina con soporte lumbar, materiales premium y diseño ergonómico para mayor comodidad.',
    precio: 149900,
    precioOriginal: 199900,
    descuento: 25,
    stock: 18,
    rating: 4.8,
    reviews: 640,
    imagen: 'https://images.unsplash.com/photo-1612011213721-3936d387f318?q=80&w=338&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    colores: ['Negro', 'Gris', 'Blanco'],
    destacado: true,
    envioGratis: false,
    cuotas: 6,
    categoriaSlug: 'hogar'
  },
  {
    id: 3,
    nombre: 'Zapatillas Running',
    categoria: 'Moda',
    marca: 'Nike',
    descripcion: 'Zapatillas deportivas ligeras, transpirables y con excelente amortiguación para correr o usar diariamente.',
    precio: 89900,
    precioOriginal: 119900,
    descuento: 25,
    stock: 41,
    rating: 4.7,
    reviews: 890,
    imagen: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80',
    colores: ['Rojo', 'Blanco', 'Negro'],
    destacado: true,
    envioGratis: true,
    cuotas: 6,
    categoriaSlug: 'moda'
  },
  {
    id: 4,
    nombre: 'Auriculares Bluetooth',
    categoria: 'Tecnología',
    marca: 'SoundMax',
    descripcion: 'Auriculares inalámbricos con sonido envolvente, micrófono y batería de larga duración.',
    precio: 69900,
    precioOriginal: 99900,
    descuento: 30,
    stock: 52,
    rating: 4.6,
    reviews: 780,
    imagen: 'https://images.unsplash.com/photo-1545127398-14699f92334b?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    colores: ['Negro', 'Blanco'],
    destacado: true,
    envioGratis: false,
    cuotas: 6,
    categoriaSlug: 'tecnologia'
  },
  {
    id: 5,
    nombre: 'Set de Cocina Essential',
    categoria: 'Hogar',
    marca: 'HomeCraft',
    descripcion: 'Juego de utensilios de cocina esenciales con materiales resistentes y diseño funcional para uso diario.',
    precio: 189900,
    precioOriginal: 220000,
    descuento: 14,
    stock: 12,
    rating: 4.5,
    reviews: 310,
    imagen: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=900&q=80',
    colores: ['Gris', 'Blanco'],
    destacado: false,
    envioGratis: true,
    cuotas: 12,
    categoriaSlug: 'hogar'
  },
  {
    id: 6,
    nombre: 'Smartwatch X',
    categoria: 'Tecnología',
    marca: 'Samsung',
    descripcion: 'Reloj inteligente con seguimiento de actividad, resistencia al agua y notificaciones sincronizadas.',
    precio: 109900,
    precioOriginal: 139900,
    descuento: 21,
    stock: 33,
    rating: 4.7,
    reviews: 540,
    imagen: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80',
    colores: ['Negro', 'Azul', 'Blanco'],
    destacado: false,
    envioGratis: true,
    cuotas: 6,
    categoriaSlug: 'tecnologia'
  },
  {
    id: 7,
    nombre: 'Campera Urbana',
    categoria: 'Moda',
    marca: 'UrbanStyle',
    descripcion: 'Campera moderna y abrigada, ideal para uso diario con un corte elegante y cálido.',
    precio: 92000,
    precioOriginal: 102000,
    descuento: 10,
    stock: 22,
    rating: 4.4,
    reviews: 420,
    imagen: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80',
    colores: ['Negro', 'Beige', 'Verde'],
    destacado: false,
    envioGratis: true,
    cuotas: 6,
    categoriaSlug: 'moda'
  },
  {
    id: 8,
    nombre: 'Fragancia Elite',
    categoria: 'Belleza',
    marca: 'Luna Beauty',
    descripcion: 'Perfume con aroma floral y cítrico, elegante y duradero para uso diario o especial.',
    precio: 45900,
    precioOriginal: 59900,
    descuento: 23,
    stock: 63,
    rating: 4.8,
    reviews: 920,
    imagen: 'https://images.unsplash.com/photo-1458538977777-0549b2370168?q=80&w=874&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    colores: ['Rosado', 'Dorado'],
    destacado: true,
    envioGratis: false,
    cuotas: 3,
    categoriaSlug: 'belleza'
  },
  {
    id: 9,
    nombre: 'Lámpara LED Smart',
    categoria: 'Hogar',
    marca: 'Lumina',
    descripcion: 'Lámpara inteligente con regulación de intensidad, control por app y estilo moderno para tu hogar.',
    precio: 67900,
    precioOriginal: 89000,
    descuento: 24,
    stock: 29,
    rating: 4.6,
    reviews: 510,
    imagen: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80',
    colores: ['Blanco', 'Neón'],
    destacado: false,
    envioGratis: true,
    cuotas: 6,
    categoriaSlug: 'hogar'
  },
  {
    id: 10,
    nombre: 'Cámara Instax Mini',
    categoria: 'Tecnología',
    marca: 'Fujifilm',
    descripcion: 'Cámara instantánea compacta para capturar recuerdos con estilo retro y calidad instantánea.',
    precio: 119900,
    precioOriginal: 149900,
    descuento: 20,
    stock: 17,
    rating: 4.7,
    reviews: 370,
    imagen: 'https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=900&q=80',
    colores: ['Rosa', 'Azul', 'Blanco'],
    destacado: false,
    envioGratis: true,
    cuotas: 6,
    categoriaSlug: 'tecnologia'
  },
  {
    id: 11,
    nombre: 'Cuaderno Creativo',
    categoria: 'Libros',
    marca: 'Lectura Viva',
    descripcion: 'Cuaderno de tapa dura con hojas de calidad para escribir, estudiar o dibujar.',
    precio: 12900,
    precioOriginal: 16900,
    descuento: 24,
    stock: 80,
    rating: 4.6,
    reviews: 120,
    imagen: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=900&q=80',
    colores: ['Azul', 'Rojo'],
    destacado: false,
    envioGratis: false,
    cuotas: 3,
    categoriaSlug: 'libros'
  },
  {
    id: 12,
    nombre: 'Maceta Mini Cerámica',
    categoria: 'Jardinería',
    marca: 'GreenLife',
    descripcion: 'Maceta compacta de cerámica para decorar escritorios y espacios pequeños.',
    precio: 18900,
    precioOriginal: 24900,
    descuento: 24,
    stock: 36,
    rating: 4.7,
    reviews: 95,
    imagen: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=900&q=80',
    colores: ['Blanco', 'Verde'],
    destacado: false,
    envioGratis: false,
    cuotas: 3,
    categoriaSlug: 'jardineria'
  },
  {
    id: 13,
    nombre: 'Lámpara de Lectura',
    categoria: 'Hogar',
    marca: 'Lumina',
    descripcion: 'Lámpara LED flexible para lectura y trabajo con luz cálida de bajo consumo.',
    precio: 34900,
    precioOriginal: 44900,
    descuento: 22,
    stock: 28,
    rating: 4.5,
    reviews: 140,
    imagen: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=900&q=80',
    colores: ['Negro', 'Blanco'],
    destacado: false,
    envioGratis: false,
    cuotas: 3,
    categoriaSlug: 'hogar'
  }
];

const catalogoAdicional = [
  {
    categoria: 'Tecnología',
    marca: 'NexaTech',
    categoriaSlug: 'tecnologia',
    imagen: 'https://images.unsplash.com/photo-1726033589589-c4628bbba368?q=80&w=629&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    imagenes: {
      'Teclado Mecánico RGB': 'https://images.unsplash.com/photo-1627827964356-a9c2f262fd64?q=80&w=845&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'Mouse Inalámbrico Silent': 'https://images.unsplash.com/photo-1629121291243-7b5e885cce9b?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'Parlante Portátil Beat': 'https://images.unsplash.com/photo-1589256469067-ea99122bbdc4?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3https://images.unsplash.com/photo-1623949556303-b0d17d198863?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'Webcam Full HD': 'https://images.unsplash.com/photo-1623949556303-b0d17d198863?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'Tablet View 10': 'https://images.unsplash.com/photo-1610841200290-39a95cf2c16a?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'Powerbank 20.000 mAh': 'https://images.unsplash.com/photo-1585995603413-eb35b5f4a50b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'Monitor UltraView 27': 'https://images.unsplash.com/photo-1547658718-1cdaa0852790?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'Cargador Rápido USB-C': 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'Router WiFi 6': 'https://images.unsplash.com/photo-1726033589589-c4628bbba368?q=80&w=629&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'Disco SSD 1TB': 'https://images.unsplash.com/photo-1628557118391-56cd62c9f2cb?q=80&w=465&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    nombres: ['Teclado Mecánico RGB', 'Mouse Inalámbrico Silent', 'Parlante Portátil Beat', 'Webcam Full HD', 'Tablet View 10', 'Powerbank 20.000 mAh', 'Monitor UltraView 27', 'Cargador Rápido USB-C', 'Router WiFi 6', 'Disco SSD 1TB']
  },
  {
    categoria: 'Hogar',
    marca: 'HomeCraft',
    categoriaSlug: 'hogar',
    imagen: 'https://images.unsplash.com/photo-1598535746036-87d13382f6a6?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    imagenes: {
      'Organizador Multiuso': 'https://images.unsplash.com/photo-1650229068182-6931ccb389c2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'Aspiradora Compacta': 'https://images.unsplash.com/photo-1746645297698-306ef29852ca?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'Espejo Decorativo': 'https://images.unsplash.com/photo-1598535746036-87d13382f6a6?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'Manta Suave Premium': 'https://images.unsplash.com/photo-1602891867080-1d56348202a3?q=80&w=813&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'Estante Modular': 'https://plus.unsplash.com/premium_photo-1682402663900-a4dc2c200933?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZXN0YW50ZSUyMG1vZHVsYXJ8ZW58MHx8MHx8fDA%3D%3D',
      'Difusor de Aromas': 'https://images.unsplash.com/photo-1625479968533-de325eb299a4?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'Reloj de Pared Minimal': 'https://images.unsplash.com/photo-1558603655-491ecfa8324f?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'Set de Vasos': 'https://images.unsplash.com/photo-1549127024-5f213d45604a?q=80&w=874&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'Cafetera Express': 'https://images.unsplash.com/photo-1707241358597-bafcc8a8e73d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'Almohada Viscoelástica': 'https://images.unsplash.com/photo-1598535746036-87d13382f6a6?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    nombres: ['Organizador Multiuso', 'Aspiradora Compacta', 'Espejo Decorativo', 'Manta Suave Premium', 'Estante Modular', 'Difusor de Aromas', 'Reloj de Pared Minimal', 'Set de Vasos', 'Cafetera Express', 'Almohada Viscoelástica']
  },
  {
    categoria: 'Moda',
    marca: 'UrbanStyle',
    categoriaSlug: 'moda',
    imagen: 'https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=900&q=80',
    imagenes: {'Remera Essential': 'https://images.unsplash.com/photo-1622445272461-c6580cab8755?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
       'Jean Slim Fit': 'https://images.unsplash.com/photo-1598554747436-c9293d6a588f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGFudGFsb24lMjBqZWFufGVufDB8fDB8fHww%3D%3D',
        'Buzo Oversize': 'https://images.unsplash.com/photo-1565693413579-8ff3fdc1b03b?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'Camisa Casual': 'https://images.unsplash.com/photo-1740711152088-88a009e877bb?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'Pantalón Cargo': 'https://images.unsplash.com/photo-1700676195086-81b936390de4?q=80&w=465&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'Vestido Midi': 'https://plus.unsplash.com/premium_photo-1673384389447-5a4364e7c93b?q=80&w=388&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'Gorra Street': 'https://images.unsplash.com/photo-1620743364195-6915419c6dc6?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'Mochila Urbana': 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'Sweater Tejido': 'https://images.unsplash.com/photo-1610901157620-340856d0a50f?q=80&w=465&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'Short de Verano': 'https://images.unsplash.com/photo-1691315909393-c5c91e22760f?q=80&w=386&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      },
    nombres: ['Remera Essential', 'Jean Slim Fit', 'Buzo Oversize', 'Camisa Casual', 'Pantalón Cargo', 'Vestido Midi', 'Gorra Street', 'Mochila Urbana', 'Sweater Tejido', 'Short de Verano']
  },
  {
    categoria: 'Belleza',
    marca: 'Luna Beauty',
    categoriaSlug: 'belleza',
    imagen: 'https://images.unsplash.com/photo-1580870069867-74c57ee1bb07?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fH  x8fA%3D%3D',
    imagenes: {
      'Kit Skincare Glow': 'https://images.unsplash.com/photo-1580870069867-74c57ee1bb07?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'Crema Hidratante Facial': 'https://images.unsplash.com/photo-1615900119312-2acd3a71f3aa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNyZW1hJTIwaGlkcmF0YW50ZXxlbnwwfHwwfHx8MA%3D%3D',
      'Serum Vitamina C': 'https://plus.unsplash.com/premium_photo-1674739375749-7efe56fc8bbb?q=80&w=386&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'Paleta de Sombras Nude': 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'Máscara de Pestañas': 'https://images.unsplash.com/photo-1650664370914-f026578ec2a4?q=80&w=469&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'Set de Brochas Pro': 'https://images.unsplash.com/photo-1620464003286-a5b0d79f32c2?q=80&w=436&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'Bálsamo Labial Natural': 'https://images.unsplash.com/photo-1695634503987-f6f18706708e?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'Shampoo Reparación': 'https://images.unsplash.com/photo-1701992678972-d5a053ad0fb0?q=80&w=357&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'Acondicionador Nutritivo': 'https://images.unsplash.com/photo-1700709678003-01941f72fb92?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'Protector Solar Facial': 'https://images.unsplash.com/photo-1623676714504-edd78728155e?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    nombres: ['Kit Skincare Glow', 'Crema Hidratante Facial', 'Serum Vitamina C', 'Paleta de Sombras Nude', 'Máscara de Pestañas', 'Set de Brochas Pro', 'Bálsamo Labial Natural', 'Shampoo Reparación', 'Acondicionador Nutritivo', 'Protector Solar Facial']
  },
  {
    categoria: 'Jardinería',
    marca: 'GreenLife',
    categoriaSlug: 'jardineria',
    imagen: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=900&q=80',
    imagenes: {
      'Set de Jardinería': 'https://images.unsplash.com/photo-1649959738550-81aa768f8c88?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'Monstera Natural': 'https://plus.unsplash.com/premium_photo-1663962158789-0ab624c4f17d?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'Maceta Cerámica': 'https://images.unsplash.com/photo-1585533337541-1549f1274711?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'Regadera Metálica': 'https://images.unsplash.com/photo-1645111094156-fc33bbf48b2e?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'Kit de Semillas': 'https://images.unsplash.com/photo-1599320092708-8a9dde49fc2c?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'Tijera de Podar': 'https://images.unsplash.com/photo-1680124744737-03fb697f303d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'Fertilizante Orgánico': 'https://plus.unsplash.com/premium_photo-1680125265832-ffaf364a8aca?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'Pack de Suculentas': 'https://images.unsplash.com/photo-1560244691-c59cfcc671fc?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'Guantes de Jardín': 'https://images.unsplash.com/photo-1582586131076-6c308a437385?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'Lámpara Solar': 'https://plus.unsplash.com/premium_photo-1677208511612-6bafc659d740?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    nombres: ['Set de Jardinería', 'Monstera Natural', 'Maceta Cerámica', 'Regadera Metálica', 'Kit de Semillas', 'Tijera de Podar', 'Fertilizante Orgánico', 'Pack de Suculentas', 'Guantes de Jardín', 'Lámpara Solar']
  },
  {
    categoria: 'Deportes',
    marca: 'MovePro',
    categoriaSlug: 'deportes',
    imagen: 'https://images.unsplash.com/photo-1703668984128-b506579acdd2?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    imagenes: {
      'Pelota de Fútbol Champion': 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'Mat de Yoga Premium': 'https://images.unsplash.com/photo-1637157216470-d92cd2edb2e8?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'Mancuernas Ajustables': 'https://images.unsplash.com/photo-1703668984128-b506579acdd2?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'Banda Elástica Fitness': 'https://plus.unsplash.com/premium_photo-1666736569032-8480d5009e70?q=80&w=896&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'Botella Deportiva': 'https://plus.unsplash.com/premium_photo-1666736570191-62380de9d39e?q=80&w=388&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'Bolso Gym Training': 'https://images.unsplash.com/photo-1708622833152-924c6e364138?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'Guantes de Entrenamiento': 'https://images.unsplash.com/photo-1557127972-1c446ea89ea5?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'Cuerda para Saltar': 'https://images.unsplash.com/photo-1589953856582-c9b3cb2f14b3?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'Short Deportivo': 'https://images.unsplash.com/photo-1682241337590-08e22aee854a?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'Bicicleta Urbana': 'https://images.unsplash.com/photo-1626947926675-9ac09f3e26d3?q=80&w=465&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    nombres: ['Pelota de Fútbol Champion', 'Mat de Yoga Premium', 'Mancuernas Ajustables', 'Banda Elástica Fitness', 'Botella Deportiva', 'Bolso Gym Training', 'Guantes de Entrenamiento', 'Cuerda para Saltar', 'Short Deportivo', 'Bicicleta Urbana']
  },
  {
    categoria: 'Herramientas',
    marca: 'BuildMax',
    categoriaSlug: 'herramientas',
    imagen: 'https://images.unsplash.com/photo-1617571607645-dd7dd3bf7f6b?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    imagenes: {
      'Maletín Pro': 'https://images.unsplash.com/photo-1672659605632-895c18f09563?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'Taladro Inalámbrico': 'https://images.unsplash.com/photo-1622044939413-0b829c342434?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'Martillo Reforzado': 'https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'Sierra Circular': 'https://images.unsplash.com/photo-1617571607645-dd7dd3bf7f6b?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'Cinta Métrica 8 m': 'https://images.unsplash.com/photo-1559647746-9b2f216d2dc3?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'Caja Organizadora': 'https://plus.unsplash.com/premium_photo-1683140705462-11ed388653cf?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'Destornilladores de Precisión': 'https://images.unsplash.com/photo-1524224313114-ebd9c49dde82?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'Pinza Multiuso': 'https://images.unsplash.com/photo-1707185312114-16837728e5fb?q=80&w=876&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'Nivel Profesional': 'https://plus.unsplash.com/premium_photo-1786657761416-2ed3f0ad4c4e?q=80&w=868&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'Llave Criquet': 'https://images.unsplash.com/photo-1586187543455-28dd1d0210a6?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    nombres: ['Maletín Pro', 'Taladro Inalámbrico', 'Martillo Reforzado', 'Sierra Circular', 'Cinta Métrica 8 m', 'Caja Organizadora', 'Destornilladores de Precisión', 'Pinza Multiuso', 'Nivel Profesional', 'Llave Criquet']
  },
  {
    categoria: 'Calzados',
    marca: 'MoveStyle',
    categoriaSlug: 'calzados',
    imagen: 'https://images.unsplash.com/photo-1608256246200-53e635b5b65f?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    imagenes: {
      'Botas de Cuero': 'https://images.unsplash.com/photo-1608256246200-53e635b5b65f?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'Sandalias Comfort': 'https://images.unsplash.com/photo-1603487742131-4160ec999306?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'Mocasines Classic': 'https://images.unsplash.com/photo-1616406432452-07bc5938759d?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'Zapatillas Running': 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'Alpargatas de Lona': 'https://images.unsplash.com/photo-1559504344-33abd17324d5?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'Zapatillas Training': 'https://images.unsplash.com/photo-1605408499391-6368c628ef42?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'Botines Casual': 'https://images.unsplash.com/photo-1605732440685-d0654d81aa30?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'Ojotas de Verano': 'https://images.unsplash.com/photo-1601946771183-2e0659c5ae69?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    nombres: ['Botas de Cuero', 'Sandalias Comfort', 'Mocasines Classic', 'Zapatillas Running', 'Alpargatas de Lona', 'Zapatillas Training', 'Botines Casual', 'Ojotas de Verano']
  },
  {
    categoria: 'Juguetes',
    marca: 'PlayFun',
    categoriaSlug: 'juguetes',
    imagen: 'https://images.unsplash.com/photo-1572635196184-84e35138cf62?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    imagenes: {
      'Bloques Creativos': 'https://images.unsplash.com/photo-1633469924738-52101af51d87?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'Oso Abrazable': 'https://images.unsplash.com/photo-1602734846297-9299fc2d4703?q=80&w=436&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'Muñeca Aventuras': 'https://images.unsplash.com/photo-1545724149-1d8de3baa55c?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'Consola Retro': 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'Rompecabezas 1000': 'https://images.unsplash.com/photo-1588591795084-1770cb3be374?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'Auto Turbo': 'https://images.unsplash.com/photo-1609708536965-6e5b915b195b?q=80&w=465&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'Cocina Mini Chef': 'https://images.unsplash.com/photo-1624895674105-6c63a2b0ce96?q=80&w=386&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'Kit Pequeño Artista': 'https://images.unsplash.com/photo-1677064731430-53b894e7816d?q=80&w=917&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'Safari en Miniatura': 'https://plus.unsplash.com/premium_photo-1722100465381-a6b9ad3cb996?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'Juego de Construcción': 'https://images.unsplash.com/photo-1586333237928-8b46d9d784bf?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    nombres: ['Bloques Creativos', 'Oso Abrazable', 'Muñeca Aventuras', 'Consola Retro', 'Rompecabezas 1000', 'Auto Turbo', 'Cocina Mini Chef', 'Kit Pequeño Artista', 'Safari en Miniatura', 'Juego de Construcción']
  },
  {
    categoria: 'Accesorios',
    marca: 'TrendLab',
    categoriaSlug: 'accesorios',
    imagen: 'https://plus.unsplash.com/premium_photo-1709033404514-c3953af680b4?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    imagenes: {
      'Anteojos Urbanos': 'https://images.unsplash.com/photo-1524255684952-d7185b509571?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'Reloj Classic': 'https://images.unsplash.com/photo-1620625515032-6ed0c1790c75?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'Cartera Crossbody': 'https://images.unsplash.com/photo-1681747685985-a401c271156c?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'Billetera Compacta': 'https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'Cinturón de Cuero': 'https://images.unsplash.com/photo-1664285612706-b32633c95820?q=80&w=658&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'Bufanda Tejida': 'https://images.unsplash.com/photo-1609803384069-19f3e5a70e75?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'Set de Pulseras': 'https://plus.unsplash.com/premium_photo-1709033404514-c3953af680b4?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'Collar Minimal': 'https://images.unsplash.com/photo-1610694955371-d4a3e0ce4b52?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'Paraguas Compacto': 'https://plus.unsplash.com/premium_photo-1697612943583-3d1cbbb4c5bf?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'Llavero Multifunción': 'https://images.unsplash.com/photo-1714631281605-a849ba8e90b5?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    nombres: ['Anteojos Urbanos', 'Reloj Classic', 'Cartera Crossbody', 'Billetera Compacta', 'Cinturón de Cuero', 'Bufanda Tejida', 'Set de Pulseras', 'Collar Minimal', 'Paraguas Compacto', 'Llavero Multifunción']
  },
  {
    categoria: 'Libros',
    marca: 'Lectura Viva',
    categoriaSlug: 'libros',
    imagen: 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=900&q=80',
    imagenes: {
      'Novela de Aventuras': 'https://images.unsplash.com/photo-1604413690901-792b8a44302e?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'Cocina Fácil en Casa': 'https://images.unsplash.com/photo-1542010589005-d1eacc3918f2?q=80&w=892&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'Guía de Viajes': 'https://images.unsplash.com/photo-1748016276313-7f9b25de7376?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'Historias Inspiradoras': 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'Introducción a la Fotografía': 'https://images.unsplash.com/photo-1535954741680-a2e24eb05418?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'Manual de Jardinería': 'https://images.unsplash.com/photo-1775330179751-b2928883b51e?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'Clásicos de la Literatura': 'https://images.unsplash.com/photo-1590412701565-55de7fad7cab?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'Libro para Colorear': 'https://plus.unsplash.com/premium_photo-1669589658880-4737858a638e?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'Cuentos para Dormir': 'https://images.unsplash.com/photo-1604940293595-be295d67ad9e?q=80&w=812&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'Agenda Creativa': 'https://images.unsplash.com/photo-1529651737248-dad5e287768e?q=80&w=465&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    nombres: ['Novela de Aventuras', 'Cocina Fácil en Casa', 'Guía de Viajes', 'Historias Inspiradoras', 'Introducción a la Fotografía', 'Manual de Jardinería', 'Clásicos de la Literatura', 'Libro para Colorear', 'Cuentos para Dormir', 'Agenda Creativa']
  },
  {
    categoria: 'Mascotas',
    marca: 'PetCare',
    categoriaSlug: 'mascotas',
    imagen: 'https://plus.unsplash.com/premium_photo-1678697845070-9880a26c0905?q=80&w=380&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    imagenes: {
      'Cama para Mascotas': 'https://images.unsplash.com/photo-1581888475780-27b6b0bc3690?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'Correa Resistente': 'https://images.unsplash.com/photo-1708062270869-ebfffca22b03?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'Comedero Antideslizante': 'https://images.unsplash.com/photo-1714068691210-073dc52c6c1d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'Juguete Interactivo': 'https://images.unsplash.com/photo-1587203915986-228a25ea2b7e?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'Rascador para Gatos': 'https://plus.unsplash.com/premium_photo-1664371206120-5c0e25855074?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'Collar Ajustable': 'https://images.unsplash.com/photo-1667716705760-233650f8f3fe?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'Transportadora Compacta': 'https://images.unsplash.com/photo-1608060434411-0c3fa9049e7b?q=80&w=388&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'Pelota Mordedora': 'https://images.unsplash.com/photo-1760530675678-4221135a2bd3?q=80&w=436&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'Cepillo de Cuidado': 'https://plus.unsplash.com/premium_photo-1678697845070-9880a26c0905?q=80&w=380&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'Bebedero Automático': 'https://images.unsplash.com/photo-1739804820262-2e1e7f412ceb?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    nombres: ['Cama para Mascotas', 'Correa Resistente', 'Comedero Antideslizante', 'Juguete Interactivo', 'Rascador para Gatos', 'Collar Ajustable', 'Transportadora Compacta', 'Pelota Mordedora', 'Cepillo de Cuidado', 'Bebedero Automático']
  }
];

catalogoAdicional.forEach((categoria, categoriaIndex) => {
  categoria.nombres.forEach((nombre, productoIndex) => {
    const id = productos.length + 1;
    const precioOriginal = 18000 + (categoriaIndex * 10 + productoIndex + 1) * 6800;
    const descuento = 10 + ((categoriaIndex + productoIndex) % 4) * 5;

    productos.push({
      id,
      nombre,
      categoria: categoria.categoria,
      marca: categoria.marca,
      descripcion: `${nombre} de ${categoria.categoria.toLowerCase()} con diseño moderno, materiales confiables y excelente relación calidad-precio.`,
      precio: Math.round(precioOriginal * (1 - descuento / 100)),
      precioOriginal,
      descuento,
      stock: 10 + ((id * 7) % 50),
      rating: Number((4 + ((id + 3) % 10) / 10).toFixed(1)),
      reviews: 45 + id * 19,
      imagen: categoria.imagenes[nombre]
        || `https://placehold.co/900x700/f0f2ff/1c1d21?text=${encodeURIComponent(nombre)}`,
      colores: ['Negro', 'Blanco', 'Azul'],
      destacado: id % 11 === 0,
      envioGratis: id % 3 !== 0,
      cuotas: id % 2 === 0 ? 6 : 12,
      categoriaSlug: categoria.categoriaSlug
    });
  });
});

try {
  const productosGuardados = JSON.parse(localStorage.getItem("customProducts") || "[]");
  if (Array.isArray(productosGuardados)) {
    productosGuardados.forEach((producto) => {
      if (!productos.some((item) => item.id === producto.id)) {
        productos.push(producto);
      }
    });
  }
} catch {
  localStorage.removeItem("customProducts");
}

console.log(`Catálogo cargado: ${productos.length} productos`);