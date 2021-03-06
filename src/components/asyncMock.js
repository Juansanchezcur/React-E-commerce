const productos=[
    
    { id:"1",
    nombre: "Burger House  ",
    ingredientes:"Pan de queso, blend de carne de 160gr, cheddar, panceta, cebolla morada, rúcula, tomate, cebolla caramelizada y pepinillos",
    precio: "340", 
    tipo: "Hamburguesa",
    imagen: "https://media.istockphoto.com/photos/hamburger-with-cheese-and-french-fries-picture-id1188412964?k=20&m=1188412964&s=612x612&w=0&h=Ow-uMeygg90_1sxoCz-vh60SQDssmjP06uGXcZ2MzPY="
    },
    {
    id:"2",
    nombre: "Crispy Onion  ",
    ingredientes:"Pan de queso, blend de carne de 100gr x2, aros de cebolla, panceta x2, cheddar x2, salsa barbacoa y morrón al vinagre",
    precio: "360", 
    tipo: "Hamburguesa",
    imagen:"https://st2.depositphotos.com/3957801/5642/i/950/depositphotos_56423065-stock-photo-bacon-burger.jpg"
    },
    {
    id:"3",
    nombre: "Doble Smash   ",
    ingredientes:"Pan de papa, blend de carne de 90gr x2, panceta x2, cheddar x2, salsa barbacoa, cebolla caramelizada y pepinillos",
    precio: "300", 
    tipo: "Hamburguesa",
    imagen:"https://www.recetasparavivirmejor.com/wp-content/uploads/2021/03/recetas_para_vivir_mejor_carne_de_hamburguesa_saludables_2021-1-1024x570.jpg"
    },
    {
    id:"4",
    nombre: "Simple Burger ",
    ingredientes:"Pan de semilla, blend de carne de 120gr, panceta, muzarella, huevo a la plancha, tomate y lechuga crespa",
    precio: "280", 
    tipo: "Hamburguesa",
    imagen:"https://images.aws.nestle.recipes/original/8689e8d974203563ddcc9bbff91323c2_MG_CHORIZOBURGER_Main-880x660.png"
    },
    {
    id:"5",
    nombre: "Simple Cheddar",
    ingredientes:"Pan de papa, blend de carne de 120gr, cheddar, panceta y salsa de la casa",
    precio: "260", 
    tipo: "Hamburguesa",
    imagen:"https://images.aws.nestle.recipes/original/bdac88d2b4d50e34c11b0e4c156c492b_Hamburguesa_con_queso.jpg"
    },
    {
    id:"6",
    nombre: "Margarita     ",
    ingredientes:"Muzzarella en bola y albahaca",
    precio:  "300", 
    tipo: "Pizza",
    imagen:"https://www.recetatop.com/wp-content/uploads/pizza-de-albahaca-y-ajo-1.jpg"
    },
    {
    id:"7",
    nombre: "Fugazza       ",
    ingredientes:"Muzzarella, cebolla blanca y orégano",
    precio:  "220", 
    tipo: "Pizza",
    imagen:"https://placeralplato.com/files/2015/07/fugazza-640x480.jpg?width=1200&enable=upscale"
    },
    {
    id:"8",
    nombre: "Serrana       ",
    ingredientes:"Muzzarella, jamón crudo, rúcula y lascas de parmesano  ",
    precio:  "290", 
    tipo: "Pizza",
    imagen:"https://pizzasargentinas.com/wp-content/uploads/2020/12/rucula-y-jamon-crudo-731x411.jpg"
    },
    {
    id:"9",
    nombre: "Cuatro Quesos ",
    ingredientes:"Muzzarella, parmesano, queso azul y cheddar",
    precio:  "280", 
    tipo: "Pizza",
    imagen:"https://imag.bonviveur.com/foto-portada-pizza-cuatro-quesos.jpg" 
    },
    {
    id:"10",
    nombre: "La Carolina   ",
    ingredientes:"Muzzarella, cheddar, panceta",
    precio:  "250", 
    tipo: "Pizza",
    imagen:"https://i.pinimg.com/736x/e0/3d/d8/e03dd84760bee5818c1089666e210188.jpg"
    }

]


export const getProducts= ()=>{

    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve (productos)
        }, 2000)
})
}

