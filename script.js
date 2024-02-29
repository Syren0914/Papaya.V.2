// Example


document.addEventListener('DOMContentLoaded', function () {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const photos = document.querySelectorAll('.photo');
  
    filterBtns.forEach(btn => {
      btn.addEventListener('click', function () {
        filterBtns.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
  
        const filterValue = this.getAttribute('data-filter');
  
        photos.forEach(photo => {
          photo.style.display = 'none';
          if (photo.classList.contains(filterValue) || filterValue === 'all') {
            photo.style.display = 'block';
          }
        });
      });
    });
  });














  //Projects
  const projects = [
    {
        image1: "https://images.unsplash.com/photo-1707343843437-caacff5cfa74?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        image2 : "https://plus.unsplash.com/premium_photo-1666788168194-38222845bf00?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        image3: "https://images.unsplash.com/photo-1707343843598-39755549ac9a?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        type: "web",
        transition: 'data-aos="fade-right"',
        name:"",
        description:"",
        url:""
    },
    {
        image1: "https://images.unsplash.com/photo-1631778890260-2be2609eb9ec?q=80&w=2009&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        image2: "https://plus.unsplash.com/premium_photo-1661894459977-73692d71bd14?q=80&w=1769&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        image3: "https://images.unsplash.com/photo-1440613905118-99b921706b5c?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        type: "logo",
        transition: 'data-aos="fade-down"',
        name:"",
        description:"",
        url:""
    },
    {
        image1: "https://images.unsplash.com/photo-1600517244515-c043b4c18415?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        image2 : "https://plus.unsplash.com/premium_photo-1666788168194-38222845bf00?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        image3: "https://images.unsplash.com/photo-1707343843598-39755549ac9a?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        type:"logo",
        transition: 'data-aos="fade-left"',
        name:"",
        description:"",
        url:""

    },
    
    // Add more project data as needed
];

// Function to generate HTML for project items
function generateProjectItem(project) {
    return `
        <div class="column" >
        
                <div class="photo ${project.type}" >
                    <img src="${project.image1} " alt="">
                    <div class="photo__content">
                        <p class="photo__title">${project.name}</p>
                        <p class="photo__description">${project.description}</p>
                        <a target="_blank" href="${project.url}"><i class="fa-solid fa-up-right-from-square"></i></a>
                    </div>
                    
                

                </div>
                <div class="photo ${project.type}" >
                    <img src="${project.image2}" alt="">
                    <div class="photo__content">
                        <p class="photo__title">${project.name}</p>
                        <p class="photo__description">${project.description}</p>
                        <a target="_blank" href="${project.url}"><i class="fa-solid fa-up-right-from-square"></i></a>
                    </div>
                    
                </div>
                <div class="photo ${project.type}" >
                    <img src="${project.image3}" alt="">
                    <div class="photo__content">
                        <p class="photo__title">${project.name}</p>
                        <p class="photo__description">${project.description}</p>
                        <a target="_blank" href="${project.url}"><i class="fa-solid fa-up-right-from-square"></i></a>
                    </div>
                </div>
        </div>
        
    `;
}

// Populate project gallery with dynamically generated project items
const projectGallery = document.getElementById('project-gallery');
projects.forEach(project => {
    const projectHTML = generateProjectItem(project);
    projectGallery.innerHTML += projectHTML;
});

