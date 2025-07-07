const products = [
  {
    id: "1",
    name: "Leche corporal hidratante",
    description: "Leche corporal hidratante con ingredientes naturales. Deja tu piel suave y nutrida durante todo el día.",
    stock: 50,
    price: 12000,
    category: "Cuerpo",
    img: "/body-milk.jpg",
  },
  {
    id: "2",
    name: "Acondicionador capilar",
    description: "Acondicionador hidratante que suaviza y desenreda tu cabello al instante. Ideal para todo tipo de cabello.",
    stock: 30,
    price: 7200,
    category: "Cabello",
    img: "/conditioner-green.jpg",
  },
  {
    id: "3",
    name: "Jabón en crema",
    description: "Jabón en crema suave con ingredientes naturales que limpia sin resecar, dejando una sensación fresca y cómoda.",
    stock: 20,
    price: 3800,
    category: "Cuerpo",
    img: "/cream-soap.jpg",
  },
  {
    id: "4",
    name: "Crema para peinar rizos",
    description: "Define y nutre tus rizos con esta crema enriquecida con ingredientes naturales. Hidratación y definición sin frizz.",
    stock: 25,
    price: 5750,
    category: "Cabello",
    img: "/curl-cream.jpg",
  },
  {
    id: "5",
    name: "Serum contorno de ojos",
    description: "Serum para el contorno de ojos con ingredientes naturales que reduce ojeras e hinchazón, dejando tu mirada más fresca y luminosa.",
    stock: 40,
    price: 19320,
    category: "Rostro",
    img: "/eye-conteour-serum.jpg",
  },
  {
    id: "6",
    name: "Bálsamo corporal",
    description: "Bálsamo corporal nutritivo con ingredientes naturales que hidrata intensamente y suaviza la piel desde la primera aplicación.",
    stock: 15,
    price: 9690,
    category: "Cuerpo",
    img: "/forest-body-balm.jpg",
  },
  {
    id: "7",
    name: "Mascarilla capilar",
    description: "Mascarilla reparadora con ingredientes naturales que nutre en profundidad y repara el cabello dañado dejándolo suave y brillante.",
    stock: 35,
    price: 6590,
    category: "Cabello",
    img: "/hair-mask.jpg",
  },
  {
    id: "8",
    name: "Loción de manos",
    description: "Loción humectante con ingredientes naturales que protege y suaviza tus manos, dejándolas hidratadas durante horas.",
    stock: 10,
    price: 8250,
    category: "Ofertas",
    img: "/hand-lotion.jpg",
  },
  {
    id: "9",
    name: "Shampoo hidratante",
    description: "Shampoo hidratante con ingredientes naturales que limpia suavemente y aporta nutrición, dejando tu cabello sedoso y brillante.",
    stock: 25,
    price: 4500,
    category: "Cabello",
    img: "/hydrating-shampoo.jpg",
  },
  {
    id: "10",
    name: "Jabón de manos lavanda",
    description: "Jabón líquido con esencia de lavanda que limpia y refresca tus manos, dejándolas con un aroma relajante.",
    stock: 20,
    price: 11200,
    category: "Cuerpo",
    img: "/lavender-hand-wash.jpg",
  },
  {
    id: "11",
    name: "Exfoliante labial",
    description: "Exfoliante labial con ingredientes naturales que elimina células muertas y deja tus labios suaves y renovados.",
    stock: 30,
    price: 15500,
    category: "Ofertas",
    img: "/lip-scrub.jpg",
  },
  {
    id: "12",
    name: "Serum niacinamida",
    description: "Serum con niacinamida e ingredientes naturales que reduce la apariencia de poros y mejora la textura de la piel.",
    stock: 18,
    price: 10000,
    category: "Ofertas",
    img: "/niacinamide-serum.jpg",
  },
   {
    id: "13",
    name: "Serum de noche",
    description: "Serum de noche con ingredientes naturales que revitaliza y repara la piel mientras duermes, dejándola suave y luminosa al despertar.",
    stock: 20,
    price: 14500,
    category: "Rostro",
    img: "/night-serum.jpg",
  },
  {
    id: "14",
    name: "Aceite perfumado",
    description: "Aceite perfumado con esencias naturales que aporta un aroma duradero y sofisticado, ideal para usar durante el día o la noche.",
    stock: 25,
    price: 12500,
    category: "Ofertas",
    img: "/perfume-oil.jpg",
  },
  {
    id: "15",
    name: "Pre shampoo",
    description: "Tratamiento pre-shampoo con ingredientes naturales que protege, hidrata y prepara tu cabello para un lavado más efectivo y menos agresivo.",
    stock: 30,
    price: 8900,
    category: "Cabello",
    img: "/pre-shampoo.jpg",
  },
  {
    id: "16",
    name: "Agua de rosas",
    description: "Agua de rosas pura con propiedades calmantes e hidratantes. Refresca y equilibra la piel, ideal para usar como tónico facial.",
    stock: 40,
    price: 7500,
    category: "Rostro",
    img: "/rose-water.jpg",
  },
  {
    id: "17",
    name: "Aceite de rosa mosqueta",
    description: "Aceite de rosa mosqueta 100% natural, rico en vitaminas y antioxidantes. Ayuda a regenerar la piel, atenuar cicatrices y mejorar la elasticidad.",
    stock: 18,
    price: 13500,
    category: "Ofertas",
    img: "/rosehip-oil.jpg",
  },
  {
    id: "18",
    name: "Serum con vitamina C",
    description: "Serum con vitamina C pura que ilumina la piel, unifica el tono y protege contra los radicales libres para un rostro más radiante y saludable.",
    stock: 22,
    price: 15800,
    category: "Rostro",
    img: "/vitaminc-serum.jpg",
  },
];


export const getProducts = () => {
    let error= false;
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            if (error) {
                reject("Error al cargar los productos");
            }else {
            resolve(products);
            }
        }, 3000);
    });
}

