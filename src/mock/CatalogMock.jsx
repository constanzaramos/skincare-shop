const products = [
    {
        id:"1",
        name: "Body milk",
        description: "Moisturizing body milk with natural ingredients. Perfect for daily use.",
        stock: 50,
        price: 12.000,
        category: "Cuerpo",
        img: "public/body-milk.jpg",
    },
    {
        id:"2",
        name: "Hair conditioner",
        description: "Hydrating hair conditioner for soft and manageable hair. Ideal for all hair types.",
        stock: 30,
        price: 7.200,
        category: "Cabello",
        img: "public/conditioner-green.jpg",
    },
    {
        id:"3",
        name: "Cream soap",
        description: "Gentle cream soap with natural ingredients for a refreshing cleanse. Suitable for all skin types.",
        stock: 20,
        price: 3.800,
        category: "Cuerpo",
        img: "public/cream-soap.jpg",   
    },
    {
        id:"4",
        name: "Crema para peinar rizos",
        description: "Cream for defining curls with natural ingredients. Provides hydration and definition for curly hair.",
        stock: 25,
        price: 5.750,
        category: "Cabello",
        img: "public/curl-cream.jpg",
    },
    {
        id:"5",
        name: "Serum contorno de ojos",
        description: "Eye contour serum with natural ingredients. Reduces dark circles and puffiness for a fresh look.",
        stock: 40,
        price: 19.320,
        category: "Rostro",
        img: "public/eye-conteour-serum.jpg",
    },
    {
        id:"6",
        name: "Body balm",
        description: "Nourishing body balm with natural ingredients. Provides deep hydration and softness to the skin.",
        stock: 15,
        price: 9.690,
        category: "Cuerpo",
        img: "public/forest-body-balm.jpg",
    },
    {
        id:"7",
        name: "Mascarilla capilar",
        description:"Hair mask with natural ingredients. Deeply nourishes and repairs damaged hair.",
        stock: 35,
        price: 6.590,
        category: "Cabello",
        img: "public/hair-mask.jpg",
    },
    {
        id:"8",
        name: "Hand lotion",
        description:"Moisturizing hand lotion with natural ingredients. Keeps hands soft and hydrated.",
        stock: 10,
        price: 8.250,
        category: "Ofertas",
        img: "public/hand-lotion.jpg",
    },
    {
        id:"9",
        name: "Hydrating shampoo",
        description: "Hydrating shampoo with natural ingredients. Cleanses and nourishes hair, leaving it soft and shiny.",
        stock: 25,
        price: 4.500,
        category: "Cabello",
        img: "public/hydrating-shampoo.jpg",
    },
    {
        id:"10",
        name: "Lavender hand wash",
        description: "Gentle hand wash with lavender essence. Cleanses and refreshes hands with a soothing aroma.",
        stock: 20,
        price: 11.200,
        category: "Cuerpo",
        img: "public/lavender-hand-wash.jpg",
    },
    {
        id:"11",
        name: "Lip scrub",
        description: "Exfoliating lip scrub with natural ingredients. Removes dead skin cells and leaves lips soft and smooth.",
        stock: 30,
        price: 15.500,
        category: "Ofertas",
        img: "public/lip-scrub.jpg",
    },
    {
        id:"12",
        name: "Serum niacinamida",
        description: "Niacinamide serum with natural ingredients. Helps reduce pores and improve skin texture.",
        stock: 18,
        price: 10.000,
        category: "Ofertas",
        img: "public/niacinamide-serum.jpg",
    }
   
]
let error= false;

export const getProducts = () => {
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

