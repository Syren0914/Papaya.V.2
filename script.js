

  const menus = [
    {
        name: "Grilled Chicken Skewers",
        price: "$10",
        description: "4 Grilled tender pieces of skewered chicken served with peanut sauce, cucumber sauce",
    },
    {
        name: "Grilled Chicken Skewers",
        price: "$10",
        description: "4 Grilled tender pieces of skewered chicken served with peanut sauce, cucumber sauce",
    },
    {
        name: "Grilled Chicken Skewers",
        price: "$10",
        description: "4 Grilled tender pieces of skewered chicken served with peanut sauce, cucumber sauce",
    },
    {
        name: "Grilled Chicken Skewers",
        price: "$10",
        description: "4 Grilled tender pieces of skewered chicken served with peanut sauce, cucumber sauce",
    }
    ,
    {
        name: "Grilled Chicken Skewers",
        price: "$10",
        description: "4 Grilled tender pieces of skewered chicken served with peanut sauce, cucumber sauce",
    }
    ,
    {
        name: "Grilled Chicken Skewers",
        price: "$10",
        description: "4 Grilled tender pieces of skewered chicken served with peanut sauce, cucumber sauce",
    },
    {
        name: "Grilled Chicken Skewers",
        price: "$10",
        description: "4 Grilled tender pieces of skewered chicken served with peanut sauce, cucumber sauce",
    },
    {
        name: "Grilled Chicken Skewers",
        price: "$10",
        description: "4 Grilled tender pieces of skewered chicken served with peanut sauce, cucumber sauce",
    }
    ,
    {
        name: "Grilled Chicken Skewers",
        price: "$10",
        description: "4 Grilled tender pieces of skewered chicken served with peanut sauce, cucumber sauce",
    }
    ,
    {
        name: "Grilled Chicken Skewers",
        price: "$10",
        description: "4 Grilled tender pieces of skewered chicken served with peanut sauce, cucumber sauce",
    },
    {
        name: "Grilled Chicken Skewers",
        price: "$10",
        description: "4 Grilled tender pieces of skewered chicken served with peanut sauce, cucumber sauce",
    },
    {
        name: "Grilled Chicken Skewers",
        price: "$10",
        description: "4 Grilled tender pieces of skewered chicken served with peanut sauce, cucumber sauce",
    }
    ,
    {
        name: "Grilled Chicken Skewers",
        price: "$10",
        description: "4 Grilled tender pieces of skewered chicken served with peanut sauce, cucumber sauce",
    }
    ,
    {
        name: "Grilled Chicken Skewers",
        price: "$10",
        description: "4 Grilled tender pieces of skewered chicken served with peanut sauce, cucumber sauce",
    },
    {
        name: "Grilled Chicken Skewers",
        price: "$10",
        description: "4 Grilled tender pieces of skewered chicken served with peanut sauce, cucumber sauce",
    },
    {
        name: "Grilled Chicken Skewers",
        price: "$10",
        description: "4 Grilled tender pieces of skewered chicken served with peanut sauce, cucumber sauce",
    }
    ,
    {
        name: "Grilled Chicken Skewers",
        price: "$10",
        description: "4 Grilled tender pieces of skewered chicken served with peanut sauce, cucumber sauce",
    }
    ,
    {
        name: "Grilled Chicken Skewers",
        price: "$10",
        description: "4 Grilled tender pieces of skewered chicken served with peanut sauce, cucumber sauce",
    },
    {
        name: "Grilled Chicken Skewers",
        price: "$10",
        description: "4 Grilled tender pieces of skewered chicken served with peanut sauce, cucumber sauce",
    },
    {
        name: "Grilled Chicken Skewers",
        price: "$10",
        description: "4 Grilled tender pieces of skewered chicken served with peanut sauce, cucumber sauce",
    }
    ,
    {
        name: "Grilled Chicken Skewers",
        price: "$10",
        description: "4 Grilled tender pieces of skewered chicken served with peanut sauce, cucumber sauce",
    }
    ,
    {
        name: "Grilled Chicken Skewers",
        price: "$10",
        description: "4 Grilled tender pieces of skewered chicken served with peanut sauce, cucumber sauce",
    },
    {
        name: "Grilled Chicken Skewers",
        price: "$10",
        description: "4 Grilled tender pieces of skewered chicken served with peanut sauce, cucumber sauce",
    },
    {
        name: "Grilled Chicken Skewers",
        price: "$10",
        description: "4 Grilled tender pieces of skewered chicken served with peanut sauce, cucumber sauce",
    }
    ,
    {
        name: "Grilled Chicken Skewers",
        price: "$10",
        description: "4 Grilled tender pieces of skewered chicken served with peanut sauce, cucumber sauce",
    }
    
    // Add more menu items as needed
];

// Function to generate HTML for menu items
function generateMenuItem(menu, index) {
    const itemNumber = index + 1;
    return `
    <div class="item left-aligned-code"  data-aos="fade-up">
        <h5 class="left-aligned-code">${itemNumber}.${menu.name} (4)&nbsp &nbsp &nbsp &nbsp &nbsp${menu.price}</h5>
        <p>${menu.description}</p>
    </div>
    `;
}

// Populate menu gallery with dynamically generated menu items
document.addEventListener("DOMContentLoaded", function() {
    const menuGallery = document.getElementById('menu-item');
    menus.forEach((menu, index) => {
        const menuHTML = generateMenuItem(menu, index);
        menuGallery.innerHTML += menuHTML;
    });
});
