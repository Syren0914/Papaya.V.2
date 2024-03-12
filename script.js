const menus = [
    {
        name: "Grilled Chicken Skewers",
        price: "$10",
        description: "4 Grilled tender pieces of skewered chicken served with peanut sauce, cucumber sauce",
        type: "appetizer"
    },
    {
        name: "Grilled Chicken Skewers",
        price: "$10",
        description: "4 Grilled tender pieces of skewered chicken served with peanut sauce, cucumber sauce",
        type: "appetizer"
    },
    {
        name: "Grilled Chicken Skewers",
        price: "$10",
        description: "4 Grilled tender pieces of skewered chicken served with peanut sauce, cucumber sauce",
        type: "appetizer"
    },
    {
        name: "Grilled Chicken Skewers",
        price: "$10",
        description: "4 Grilled tender pieces of skewered chicken served with peanut sauce, cucumber sauce",
        type: "appetizer"
    },
    {
        name: "Steak",
        price: "$20",
        description: "Juicy grilled steak served with mashed potatoes and sautéed vegetables",
        type: "entree"
    },
    {
        name: "Tomato Soup",
        price: "$8",
        description: "Classic tomato soup served with garlic bread",
        type: "soup"
    }
    ,
    {
        name: "Tomato Soup",
        price: "$8",
        description: "Classic tomato soup served with garlic bread",
        type: "soup"
    }
    ,
    {
        name: "Tomato Soup",
        price: "$8",
        description: "Classic tomato soup served with garlic bread",
        type: "soup"
    }
    ,
    {
        name: "Tomato Soup",
        price: "$8",
        description: "Classic tomato soup served with garlic bread",
        type: "soup"
    }
    ,
    {
        name: "Tomato Soup",
        price: "$8",
        description: "Classic tomato soup served with garlic bread",
        type: "soup"
    }
    ,{
        name: "Steak",
        price: "$20",
        description: "Juicy grilled steak served with mashed potatoes and sautéed vegetables",
        type: "entree"
    }
    ,{
        name: "Steak",
        price: "$20",
        description: "Juicy grilled steak served with mashed potatoes and sautéed vegetables",
        type: "entree"
    }
    ,{
        name: "Steak",
        price: "$20",
        description: "Juicy grilled steak served with mashed potatoes and sautéed vegetables",
        type: "entree"
    }
    ,{
        name: "Steak",
        price: "$20",
        description: "Juicy grilled steak served with mashed potatoes and sautéed vegetables",
        type: "entree"
    }
    // Add more menu items as needed
];

// Function to generate HTML for menu items
function generateMenuItem(menu, index) {
    const itemNumber = index + 1;
    return `
    <div class="item left-aligned-code" data-aos="fade-up">
        <h5 class="left-aligned-code">${itemNumber}.${menu.name} (4)&nbsp &nbsp &nbsp &nbsp &nbsp${menu.price}</h5>
        <p>${menu.description}</p>
    </div>
    `;
}

// Populate menu gallery with dynamically generated menu items
document.addEventListener("DOMContentLoaded", function() {
    const appetizerMenuGallery = document.getElementById('appetizer-item');
    const entreeMenuGallery = document.getElementById('entree-item');
    const soupMenuGallery = document.getElementById('soup-item');
    
    menus.forEach((menu, index) => {
        const menuHTML = generateMenuItem(menu, index);
        if (menu.type === 'appetizer') {
            appetizerMenuGallery.innerHTML += menuHTML;
        } else if (menu.type === 'entree') {
            entreeMenuGallery.innerHTML += menuHTML;
        } else if (menu.type === 'soup') {
            soupMenuGallery.innerHTML += menuHTML;
        }
    });
});


