const menus = [
    {
        name: "Chicken Egg Roll (4)",
        price: "$4.95",
        description: "Mixed vegetables and minced chicken in spring roll wrapper, deep fried served with our special dip.",
        type: "appetizer"
    },
    {
        name: "Shrimp Egg Roll (4)",
        price: "$5.95",
        description: "Mixed vegetables and shrimp in spring roll wrapper, deep fried served with our special dip.",
        type: "appetizer"
    },
    {
        name: "Taro Roll (5)",
        price: "$6.95",
        description: "Taro Roots in spring roll wrapper, deep fried served with our special dip. ",
        type: "appetizer"
    },
    {
        name: "Satay (4)",
        price: "$6.95",
        description: "Skewers of marinated chicken served with peanut sauce.",
        type: "appetizer"
    },
    {
        name: "Tod Mun (Fish Cake)",
        price: "$6.95",
        description: "Fried curry fish cake served with sweet and sour sauce, cucumbers and crushed peanuts.",
        type: "appetizer"
    },
    {
        name: "Fried Tofu",
        price: "$6.95",
        description: "Crispy tofu served with sweet and sour sauce and crushed peanuts",
        type: "appetizer"
    }
    ,
    {
        name: "Steamed Dumplings (Kanom Jeep) ",
        price: "$6.95",
        description: "Steamed minced chicken, shrimp wrapped with wonton skin served with special sauce.",
        type: "appetizer"
    }
    ,
    {
        name: "Golden Cream Cheese (6)",
        price: "$6.95",
        description: "Steamed crab meat mix cheese wrapped with wonton skin served with special dip.",
        type: "appetizer"
    }
    ,
    {
        name: "Shrimp Blanket (4)",
        price: "$6.95",
        description: "Shrimps wrapped in spring roll wrapper, deep fired and served with special dip.",
        type: "appetizer"
    }
    ,
    {
        name: "Fresh Spring Rolls (2)🌶️",
        price: ' ',
        description: "-Chicken or Vegetable or Tofu - $5.95<br> – Shrimp or Imitate Crab meat - $6.95",
        type: "appetizer"
    }
    ,{
        name: "Garlic",
        price: " ",
        description: "Choice of meat Stir-fried with fresh garlic, black pepper and cilantro in a delicious sauce on the top of Romaine Lettuce",
        type: "entree"
    }
    ,{
        name: "Kapow🌶️",
        price: " ",
        description: "Choice of meat Stir-fried with bell pepper, white onions and hot basil leaves in a delicious sauce.<br>(Basil with Hot Chili Peppers)",
        type: "entree"
    }
    ,{
        name: "Eggplant with Basil ",
        price: " ",
        description: "Choice of meat Stir-fried with eggplants, bell peppers, white onions and fresh basil leaves in chili & garlic sauce. ",
        type: "entree"
    }
    ,{
        name: "Pad Khing Sod <br> (Ginger Perfect)🌶️🌶️",
        price: " ",
        description: "Choice of meat sautéed with fresh ginger mushrooms, carrots, white onions and green onions in black bean sauce.",
        type: "entree"
    }
    ,{
        name: "Bamboo Basil ",
        price: " ",
        description: "Choice of meat sautéed with bamboo shoots, bell peppers and basil leaves in basil sauces.",
        type: "entree"
    }
    ,{
        name: "Pad Ped",
        price: " ",
        description: "Choice of meat sautéed with bamboo shoots, bell peppers and basil leaves with red chili curry sauce.",
        type: "entree"
    }
    ,{
        name: "Fried Fish",
        price: " ",
        description: "Crispy fried Tilapia Fish topped with bell peppers, white onions, green onions and basil leaves with spicy three-flavored sauce.",
        type: "entree"
    }
    ,{
        name: "Sweet and Sour",
        price: " ",
        description: "Choice of meat sautéed with pineapples, white onions, mushroom, cucumbers, carrots, mushroom, bell peppers, green onions and tomatoes in sweet and sour sauce.",
        type: "entree"
    }
    ,{
        name: "Stir Fries Vegetable ",
        price: " ",
        description: "Choice of meat stir-fried with white onions, bell peppers, broccoli and carrots in garlic sauce.",
        type: "entree"
    }
    ,{
        name: "Cashew Nuts",
        price: " ",
        description: "Choice of meat stir-fried with mushrooms, carrots, bell peppers, green onions, white onions and roasted cashew nuts in a savory brown sauce.",
        type: "entree"
    }
    ,{
        name: "Pepper Steak",
        price: " ",
        description: "Sautéed beefs, white onions, green onions and bell peppers in a savory brown sauce.   ",
        type: "entree"
    }
    ,{
        name: "Broccoli Delight",
        price: " ",
        description: "Choice of meat stir-fried with broccoli and carrots in garlic sauce.",
        type: "entree"
    }
    ,{
        name: "Som Tum <br>(Papaya Salad)🌶️",
        price: "$9.95",
        description: "Shredded green papaya mixed with   tomatoes, garlic, chili pepper, fish sauce and lime juice.",
        type: "salad"
    }
    ,{
        name: "Larb",
        price: "$12.95",
        description: "(Chicken, Pork or Beef) Minced meat seasoned with Thai herbs, green onions, white onions and cilantro in spicy lime dressing.",
        type: "salad"
    },{
        name: "Yum (Salad)🌶️",
        price: "$12.95",
        description: "(Chicken or Pork) Sliced of meat mixed with white onions, cucumbers, green onions and cilantro with Thai herbs in spicy lime dressing.",
        type: "salad"
    }
    ,{
        name: "Beef Salad🌶️",
        price: "$12.95",
        description: "Sliced of beef mixed with white onions, cucumbers, green onions and cilantro with Thai herbs in spicy lime dressing. ",
        type: "salad"
    },{
        name: "Bean Thread Salad ",
        price: "$14.95",
        description: "Bean thread noodle mixed with shrimp, minced chicken, white onions, green onions, cilantro and peanuts with Thai herbs in spicy lime dressing. ",
        type: "salad"
    }
    ,{
        name: "Bean Thread Salad ",
        price: "$14.95",
        description: "Bean thread noodle mixed with shrimp, minced chicken, white onions, green onions, cilantro and peanuts with Thai herbs in spicy lime dressing. ",
        type: "salad"
    },{
        name: "Tom Yum🌶️",
        price: " ",
        description: "Choice of meat with lemon grass, galanga, mushrooms, white onions, tomatoes, green onions, cilantro, chili pepper and lime juice in hot and sour soup. <br>(Tom Yum Swai Fish  $14.95 (no small size))",
        type: "soup"
    }
    ,{
        name: "Tom Kra",
        price: " ",
        description: "Choice of meat with lemon grass, galanga, mushrooms, white onions, tomatoes, green onions, cilantro and chili pepper and lime juice in coconut milk soup.",
        type: "soup"
    },
    {
        name: "Chicken and Tofu Soup",
        price: " ",
        description: "Soft tofu and minced chicken with green onions, celery, napa cabbage and cilantro in chicken broth.",
        type: "soup"
    },
    {
        name: "Kua Teaw (Thai Rice Noodle) <br>(without rice)",
        price: "",
        description: "- Rice noodle with meatball and sliced beef in beef soup.	  $12.95 <br> - Rice noodle with Choice of meat (Chicken or Pork) in chicken broth. $12.95 <br>- Rice noodle with Duck meat in duck soups. $14.95",
        type: "soup"
    },
    {
        name: "Sukee-Ya-Kee <br> (Soup or Stir Fried) ",
        price: " ",
        description: "Choice of meat with Napa cabbage, celery and green onions with sukee-ya-kee sauce. (Without rice)",
        type: "soup"

    },
    {
        name: "Tom Yum Swai Fish ",
        price: "14.95",
        description: "",
        type: "soup"

    }
    ,{
        name: "Green Curry🌶️🌶️",
        price: "",
        description: "- Choice of meat combined with spicy green curry sauce, green peas, bell peppers, bamboo shoots and fresh basil leaves.",
        type: "curries"
    }
    ,{
        name: "Red Curry🌶️🌶️",
        price: "",
        description: "Choice of meat combined with spicy red curry sauce, bamboo shoots, bell peppers and fresh basil leaves.",
        type: "curries"
    }
    ,{
        name: "Panang Curry🌶️🌶️",
        price: "",
        description: "Choice of meat combined with spicy panang curry sauce, kaffir lime leaves and bell peppers.",
        type: "curries"
    }
    
    ,{
        name: "Massaman Curry🌶️",
        price: "",
        description: "Choice of meat combined with massaman curry sauce, potatoes, white onions and roasted peanut.",
        type: "curries"
    }
    ,{
        name: "Thai Pumpkin Red Curry🌶️🌶️",
        price: "",
        description: "Choice of meat with Napa cabbage, celery and green onions with sukee-ya-kee sauce. (Without rice)",
        type: "curries"
    }
    ,{
        name: "Pineapple Red Curry🌶️🌶️",
        price: "",
        description: "Choice of meat combined with spicy red curry sauce, carrots, tomatoes, pineapple and fresh basil leaves.",
        type: "curries"
    }
    ,{
        name: "Roasted Duck Curry",
        price: "",
        description: "Duck meat combined with spicy red curry sauce, bell peppers, tomatoes, pineapples, kaffir lime leaves and fresh basil leaves. ",
        type: "curries"
    },{
        name: "Pad Thai <br> (Thai national noodle dish)",
        price: "",
        description: "Choice of meat Stir-fried with thin rice noodles, egg, bean sprouts, green onions and crushed peanuts in authentic Thai sauce. <br>(We use minced chicken for chicken order) ",
        type: "noodles"
    }
    ,{
        name: "Drunken Noodles🌶️",
        price: "",
        description: "Choice of meat Stir-fried with flat rice noodles, bell peppers, tomatoes, white onions, mushrooms and bamboo shoots with fresh chili garlic and fresh basil leaves.",
        type: "noodles"
    }
    ,{
        name: "Pad Kua Teaw",
        price: "",
        description: "Choice of meat Stir-fried with thin rice noodles, egg, bean sprouts and green onions with brown sauce.",
        type: "noodles"
    },{
        name: "Pad See Eaw",
        price: "",
        description: "Choice of meat Stir-fried with flat rice noodles, egg, broccoli and black sweet soy sauce.",
        type: "noodles"
    }
    ,{
        name: "Lad Na ",
        price: "",
        description: "Choice of meat with flat rice noodles and broccoli in a light gravy sauce.	",
        type: "noodles"
    },{
        name: "Pad Woon Sen ",
        price: "",
        description: "Choice of meat Stir-fried with bean thread noodles, mushrooms, egg, bean sprouts, white onions, carrots, celery, napa cabbage and green onions with brown sauce.",
        type: "noodles"
    }
    ,{
        name: "Khow Pad <br> (Thai Fried Rice)",
        price: " ",
        description: "Choice of meat in fried rice with white onions, tomatoes, egg and green onions with chef’s special sauce topped with cilantro and cucumbers.	",
        type: "rice"
    },{
        name: "Combination Fried Rice ",
        price: "$15.95",
        description: "Chicken, Pork, Beef and Shrimp in fried rice with white onions, tomatoes, egg and green onions with chef’s special sauce topped with cilantro and cucumbers.",
        type: "rice"
    },{
        name: "Basil Fried Rice🌶️ ",
        price: " ",
        description: "Choice of meat in fried rice with bell peppers, white onions and basil leaves in a delicious sauce. 	",
        type: "rice"
    },{
        name: "Pineapple Fried Rice ",
        price: " ",
        description: "Choice of meat in fried rice with onion, carrot, corn, pea, raisin, pineapple, cashew nut, egg and green onion with chef’s special sauce.",
        type: "rice"
    }
    ,{
        name: "Thai Ice Tea",
        price: "$3.95",
        description: "",
        type: "drink"
    },{
        name: "Thai Coffee(Oling)",
        price: "$3.95",
        description: "",
        type: "drink"
    },{
        name: "Hot Tea",
        price: "$3.95",
        description: "",
        type: "drink"
    }
    ,{
        name: "Sweet  Tea / Lemonade",
        price: "$3.95",
        description: "",
        type: "drink"
    },{
        name: "Mistic Juice Drink",
        price: "$3.95",
        description: "",
        type: "drink"
    },{
        name: "Ice Tea (unsweet)",
        price: "$3.95",
        description: "",
        type: "drink"
    }
    ,{
        name: "Sodas",
        price: "$1.95",
        description: "Pepsi, Diet Pepsi, Coke, Diet Coke, Dr.Pepper, Mountain Dew, Sunkist, Ginger Ale, Bottle Water and More Please Ask",
        type: "drink"
    }
    ,{
        name: "Sweet Sticky <br> rice with mango",
        price: "$3.95",
        description: "",
        type: "dessert"
    }
    // Add more menu items as needed
];

// Function to generate HTML for menu items
function generateMenuItem(menu, index) {
    const itemNumber = index + 1;
    return `
    <div class="item left-aligned-code" data-aos="fade-up">
        <h5 class="left-aligned-code">${itemNumber}. ${menu.name}&nbsp &nbsp &nbsp &nbsp &nbsp${menu.price}</h5>
        <p>${menu.description}</p>

    </div>
    `;
}

// Populate menu gallery with dynamically generated menu items
document.addEventListener("DOMContentLoaded", function() {
    const appetizerMenuGallery = document.getElementById('appetizer-item');
    const entreeMenuGallery = document.getElementById('entree-item');
    const soupMenuGallery = document.getElementById('soup-item');
    const drinkMenuGallery = document.getElementById('drink-item');
    const saladMenuGallery = document.getElementById('salad-item');
    const curriesMenuGallery = document.getElementById('curries-item');
    const noodlesMenuGallery = document.getElementById('noodles-item');
    const riceMenuGallery = document.getElementById('rice-item');
    const dessertMenuGallery = document.getElementById('dessert-item');



    
    menus.forEach((menu, index) => {
        const menuHTML = generateMenuItem(menu, index);
        if (menu.type === 'appetizer') {
            appetizerMenuGallery.innerHTML += menuHTML;
        } else if (menu.type === 'entree') {
            entreeMenuGallery.innerHTML += menuHTML;
        } else if (menu.type === 'soup') {
            soupMenuGallery.innerHTML += menuHTML;
        } else if (menu.type ==='drink') {
            drinkMenuGallery.innerHTML += menuHTML;
        } else if (menu.type ==='salad') {
            saladMenuGallery.innerHTML += menuHTML;
        } else if (menu.type ==='curries') {
            curriesMenuGallery.innerHTML += menuHTML;
        }else if (menu.type ==='noodles') {
            noodlesMenuGallery.innerHTML += menuHTML;
        }else if (menu.type ==='rice') {
            riceMenuGallery.innerHTML += menuHTML;
        }else if (menu.type ==='dessert') {
            dessertMenuGallery.innerHTML += menuHTML;
        }
    });
});


