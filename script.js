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
        image1: "/assets/img/projects/web1.jpg",
        image2 : "/assets/img/projects/Marketing1.jpg",
        image3: "/assets/img/projects/Logo1.png",
        image4:"",
        image5:"",
        image5:"",
        image5:"",
        image5:"",
        type1: "web",
        type2: "ads",
        type3: "logo",
        name1:"Saithong Para Thai",
        name2:"ADS",
        name3:"Logo Design",
        description1:"Minimal Website design",
        description2:"",
        description3:"",
        url1:"http://www.saithongparathai.com",
        url2:"",
        url3:""
    },
    {
        image1: "/assets/img/projects/web2.jpg",
        image2 : "/assets/img/projects/Marketing3.jpg",
        image3: "/assets/img/projects/Logo3.png",
        type1: "web",
        type2: "ads",
        type3: "logo",
        name1:"",
        name2:"ADS",
        name3:"Logo Design",
        description1:"Minimal Website design",
        description2:"",
        description3:"",
        url1:"",
        url2:"",
        url3:""

    },
    {
        image1: "/assets/img/projects/web2.jpg",
        image2: "/assets/img/projects/Marketing2.png",
        image3: "/assets/img/projects/Logo2.png",
        type1: "web",
        type2: "ads",
        type3: "logo",
        name1:"Thai Love & Afterwork",
        name2:"ADS",
        name3:"Logo Design",
        description1:"Minimal Website design",
        description2:"",
        description3:"",
        url1:"http://www.thailove-afterwork.com",
        url2:"",
        url3:""
    },
    
    
    
    // Add more project data as needed
];

// Function to generate HTML for project items
function generateProjectItem(project) {
    return `
        <div class="column" >
        
                <div class="photo ${project.type1}" >
                    <img src="${project.image1} " alt="">
                    <div class="photo__content">
                        <p class="photo__title">${project.name1}</p>
                        <p class="photo__description">${project.description1}</p>
                        <a target="_blank" href="${project.url1}"><i class="fa-solid fa-up-right-from-square"></i></a>
                    </div>
                    
                

                </div>
                <div class="photo ${project.type2}" >
                    <img src="${project.image2}" alt="">
                    <div class="photo__content">
                        <p class="photo__title">${project.name2}</p>
                        <p class="photo__description">${project.description2}</p>
                        <a target="_blank" href="${project.url2}"><i class="fa-solid fa-up-right-from-square"></i></a>
                    </div>
                    
                </div>
                <div class="photo ${project.type3}" >
                    <img src="${project.image3}" alt="">
                    <div class="photo__content">
                        <p class="photo__title">${project.name3}</p>
                        <p class="photo__description">${project.description3}</p>
                        <a target="_blank" href="${project.url3}"><i class="fa-solid fa-up-right-from-square"></i></a>
                    </div>
                </div>
                <div class="photo ${project.type4}" >
                    <img src="${project.image4}" alt="">
                    <div class="photo__content">
                        <p class="photo__title">${project.name4}</p>
                        <p class="photo__description">${project.description4}</p>
                        <a target="_blank" href="${project.url4}"><i class="fa-solid fa-up-right-from-square"></i></a>
                    </div>
                </div>
                <div class="photo ${project.type5}" >
                    <img src="${project.image5}" alt="">
                    <div class="photo__content">
                        <p class="photo__title">${project.name5}</p>
                        <p class="photo__description">${project.description5}</p>
                        <a target="_blank" href="${project.url5}"><i class="fa-solid fa-up-right-from-square"></i></a>
                    </div>
                </div>
                <div class="photo ${project.type6}" >
                    <img src="${project.image6}" alt="">
                    <div class="photo__content">
                        <p class="photo__title">${project.name6}</p>
                        <p class="photo__description">${project.description6}</p>
                        <a target="_blank" href="${project.url6}"><i class="fa-solid fa-up-right-from-square"></i></a>
                    </div>
                </div>
                <div class="photo ${project.type7}" >
                    <img src="${project.image7}" alt="">
                    <div class="photo__content">
                        <p class="photo__title">${project.name7}</p>
                        <p class="photo__description">${project.description7}</p>
                        <a target="_blank" href="${project.url7}"><i class="fa-solid fa-up-right-from-square"></i></a>
                    </div>
                </div>
                <div class="photo ${project.type8}" >
                    <img src="${project.image8}" alt="">
                    <div class="photo__content">
                        <p class="photo__title">${project.name8}</p>
                        <p class="photo__description">${project.description8}</p>
                        <a target="_blank" href="${project.url8}"><i class="fa-solid fa-up-right-from-square"></i></a>
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

