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
        name: "Fresh Spring Rolls (2)",
        price: "$5.95",
        description: "-Chicken or Vegetable or Tofu <br> – Shrimp or Imitate Crab meat",
        type: "appetizer"
    }
    ,{
        name: "Garlic",
        price: "$11.95",
        description: "Choice of meat Stir-fried with fresh garlic, black pepper and cilantro in a delicious sauce on the top of Romaine Lettuce",
        type: "entree"
    }
    ,{
        name: "Kapow (Basil with Hot Chili Peppers)",
        price: "$11.95",
        description: "Choice of meat Stir-fried with bell pepper, white onions and hot basil leaves in a delicious sauce.",
        type: "entree"
    }
    ,{
        name: "Eggplant with Basil ",
        price: "$11.95",
        description: "Choice of meat Stir-fried with eggplants, bell peppers, white onions and fresh basil leaves in chili & garlic sauce. ",
        type: "entree"
    }
    ,{
        name: "Pad Khing Sod (Ginger Perfect)",
        price: "$11.95",
        description: "Choice of meat sautéed with fresh ginger mushrooms, carrots, white onions and green onions in black bean sauce.",
        type: "entree"
    }
    ,{
        name: "Bamboo Basil ",
        price: "$11.95",
        description: "Choice of meat sautéed with bamboo shoots, bell peppers and basil leaves in basil sauces.",
        type: "entree"
    }
    ,{
        name: "Pad Ped",
        price: "$11.95",
        description: "Choice of meat sautéed with bamboo shoots, bell peppers and basil leaves with red chili curry sauce.",
        type: "entree"
    }
    ,{
        name: "Fried Fish",
        price: "$14.95",
        description: "Crispy fried Tilapia Fish topped with bell peppers, white onions, green onions and basil leaves with spicy three-flavored sauce.",
        type: "entree"
    }
    ,{
        name: "Sweet and Sour",
        price: "$11.95",
        description: "Choice of meat sautéed with pineapples, white onions, mushroom, cucumbers, carrots, mushroom, bell peppers, green onions and tomatoes in sweet and sour sauce.",
        type: "entree"
    }
    ,{
        name: "Stir Fries Vegetable ",
        price: "$11.95",
        description: "Choice of meat stir-fried with white onions, bell peppers, broccoli and carrots in garlic sauce.",
        type: "entree"
    }
    ,{
        name: "Cashew Nuts",
        price: "$11.95",
        description: "Choice of meat stir-fried with mushrooms, carrots, bell peppers, green onions, white onions and roasted cashew nuts in a savory brown sauce.",
        type: "entree"
    }
    ,{
        name: "Pepper Steak",
        price: "$11.95",
        description: "Sautéed beefs, white onions, green onions and bell peppers in a savory brown sauce.   ",
        type: "entree"
    }
    ,{
        name: "Broccoli Delight",
        price: "$11.95",
        description: "Choice of meat stir-fried with broccoli and carrots in garlic sauce.",
        type: "entree"
    }
    ,{
        name: "Som Tum (Papaya Salad)",
        price: "$9.95",
        description: "Shredded green papaya mixed with   tomatoes, garlic, chili pepper, fish sauce and lime juice.",
        type: "salad"
    }
    ,{
        name: "Larb",
        price: "$11.95",
        description: "(Chicken, Pork or Beef) Minced meat seasoned with Thai herbs, green onions, white onions and cilantro in spicy lime dressing.",
        type: "salad"
    },{
        name: "Yum (Salad)",
        price: "$11.95",
        description: "(Chicken or Pork) Sliced of meat mixed with white onions, cucumbers, green onions and cilantro with Thai herbs in spicy lime dressing.",
        type: "salad"
    }
    ,{
        name: "Beef Salad",
        price: "$11.95",
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
    }
    ,{
        name: "Tom Kra",
        price: "$11.95",
        description: "Choice of meat with lemon grass, galanga, mushrooms, white onions, tomatoes, green onions, cilantro and chili pepper and lime juice in coconut milk soup.",
        type: "soup"
    },{
        name: "Chicken and Tofu Soup",
        price: "$11.95",
        description: "Soft tofu and minced chicken with green onions, celery, napa cabbage and cilantro in chicken broth.",
        type: "soup"
    },{
        name: "Kua Teaw (Thai Rice Noodle) <br>(without rice)",
        price: "",
        description: "- Rice noodle with meatball and sliced beef in beef soup.	  $11.95 <br> - Rice noodle with Choice of meat (Chicken or Pork) in chicken broth. $11.95 <br>- Rice noodle with Duck meat in duck soups. $14.95",
        type: "soup"
    },{
        name: "Sukee-Ya-Kee (Soup or Stir Fried) ",
        price: "$11.95",
        description: "Choice of meat with Napa cabbage, celery and green onions with sukee-ya-kee sauce. (Without rice)",
        type: "soup"
    }
    // Add more menu items as needed
];

// Function to generate HTML for menu items
function generateMenuItem(menu, index) {
    const itemNumber = index + 1;
    return `
    <div class="item left-aligned-code" data-aos="fade-up">
        <h5 class="left-aligned-code">${itemNumber}.${menu.name}&nbsp &nbsp &nbsp &nbsp &nbsp${menu.price}</h5>
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
        }
    });
});


