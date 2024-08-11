document.addEventListener('DOMContentLoaded', (event) => {
    let HomeReturnButton=document.getElementsByClassName('HomeReturnButton')[0];
    if(HomeReturnButton){
        HomeReturnButton.onclick = function() {
            window.history.back();
        };
    }
});

// ----------------------------
// home page
document.addEventListener('DOMContentLoaded', (event) => {
    const checkbox=document.getElementById("switch");
    const openbutton = document.getElementsByClassName("LoginSignUpButton")[0];
    const loginContainer=document.getElementsByClassName("loginContainer")[0];
    const loginButton = document.getElementsByClassName("loginButton")[0];
    const signUpButton = document.getElementsByClassName("signUpButton")[0];
    const closeButton = document.getElementsByClassName("closeButton")[0];
    const LoginSignUpForm = document.getElementsByClassName("popUpContainer")[0];
    const UserLoginTypeSection=document.getElementsByClassName("UserLoginTypeSection")[0];
    const UserSignUpTypeSection=document.getElementsByClassName("UserSignUpTypeSection")[0];
    const SignUpContainer=document.getElementsByClassName("SignUpContainer")[0];

    

    
    
    // openbutton.addEventListener('click', () => {
        //     LoginSignUpForm.style.display="block";
        //     checkbox.checked=true;
        
        // });
    if(loginButton || signUpButton || closeButton){
    loginButton.addEventListener('click', () => {
        loginContainer.style.display="block";
        SignUpContainer.style.display="none"
        UserLoginTypeSection.style.display="block"
        UserSignUpTypeSection.style.display="none"
        LoginSignUpForm.style.display="block";
        checkbox.checked=false;

    });
    signUpButton.addEventListener('click', () => {
        loginContainer.style.display="none";
        SignUpContainer.style.display="block"
        UserSignUpTypeSection.style.display="block"
        UserLoginTypeSection.style.display="none"
        LoginSignUpForm.style.display="block";
        checkbox.checked=true;


    });
    closeButton.addEventListener('click', () => {
        LoginSignUpForm.style.display="none";
    });
}
});

document.addEventListener('DOMContentLoaded', (event) => {
    const navbarSideBarButton = document.getElementsByClassName("navbarCollapseButton")[0];
    const checkbox = document.getElementById('navBarSidBarCheckBox');
    const navBarSideBar = document.getElementsByClassName('navBarSideBar')[0];
    navbarSideBarButton.addEventListener('click', () => {
        checkbox.checked = !checkbox.checked;
        if(checkbox.checked){
            navBarSideBar.style.transform="translateX(100%)";
        }else{
            navBarSideBar.style.transform="translateX(0)";
            
        }

    });
});



function handleToggle(){
    const checkbox=document.getElementById("switch");
    const loginContainer=document.getElementsByClassName("loginContainer")[0];
    const SignUpContainer=document.getElementsByClassName("SignUpContainer")[0];
    const UserLoginTypeSection=document.getElementsByClassName("UserLoginTypeSection")[0];
    const UserSignUpTypeSection=document.getElementsByClassName("UserSignUpTypeSection")[0];
    
    UserLoginTypeSection.style.display="none"
    UserSignUpTypeSection.style.display="none"

    if(checkbox.checked){
        loginContainer.style.display="none";
        SignUpContainer.style.display="block"
        UserSignUpTypeSection.style.display="block"
    }else{
        loginContainer.style.display="block";
        SignUpContainer.style.display="none"
        UserLoginTypeSection.style.display="block"
    }
}

function handleLoginUserTypeChange(userType){
    const UserLoginTypeSection=document.getElementsByClassName("UserLoginTypeSection")[0];
    const customerLogin=document.getElementsByClassName("customerLogin")[0];
    const companyLogin=document.getElementsByClassName("companyLogin")[0];
    
    UserLoginTypeSection.style.display="none";

    if(userType==="customer"){
        customerLogin.style.display="block";
        companyLogin.style.display="none";
    }else{
        customerLogin.style.display="none";
        companyLogin.style.display="block";
    }
}
function handleSignUpUserTypeChange(userType){
    const UserSignUpTypeSection=document.getElementsByClassName("UserSignUpTypeSection")[0];
    const customerSignUp=document.getElementsByClassName("customerSignUp")[0];
    const companySignUp=document.getElementsByClassName("companySignUp")[0];
    
    UserSignUpTypeSection.style.display="none";

    if(userType==="customer"){
        customerSignUp.style.display="block";
        companySignUp.style.display="none";
    }else{
        customerSignUp.style.display="none";
        companySignUp.style.display="block";
    }
}

// ----------------------------
// customer profile


document.addEventListener('DOMContentLoaded', (event) => {
    const openProfileMenubutton = document.getElementsByClassName("profileButton")[0];
    const closeProfileMenubutton = document.getElementsByClassName("profilePopUpMenuCloseButton")[0];
    const profilePopUpMenu = document.getElementsByClassName("profilePopUpMenu")[0];
    


    if (openProfileMenubutton || closeProfileMenubutton){
        openProfileMenubutton.addEventListener('click', () => {
            profilePopUpMenu.style.transform="translateX(0)";
        });
        closeProfileMenubutton.addEventListener('click', () => {
            profilePopUpMenu.style.transform="translateX(100%)";
        });
    }
});

// ------------------------
// company profile


document.addEventListener('DOMContentLoaded', (event) => {
    const openProfileMenubutton = document.getElementsByClassName("profileButton")[0];
    const closeProfileMenubutton = document.getElementsByClassName("profilePopUpMenuCloseButton")[0];
    const profilePopUpMenu = document.getElementsByClassName("profilePopUpMenu")[0];
    


    
    openProfileMenubutton.addEventListener('click', () => {
        profilePopUpMenu.style.transform="translateX(0)";
    });
    closeProfileMenubutton.addEventListener('click', () => {
        profilePopUpMenu.style.transform="translateX(100%)";
    });
});

// -------------------------
// tourCreating
// Select elements for both image inputs
const profileImageInput = document.getElementById('profileImageUpload');
const profileImageList = document.getElementById('profileImageList');
const imageInput = document.getElementById('imageUpload');
const imageList = document.getElementById('imageList');
const uploadForm = document.getElementById('uploadForm');

let profileImageArray = [];
let imageArray = [];
const maxImages = 4;

if (profileImageInput || profileImageList || imageInput || imageList || uploadForm) {
    // Add event listener for profile image upload
    profileImageInput.addEventListener('change', handleProfileImageSelect);

    // Add event listener for general image upload
    imageInput.addEventListener('change', handleImageSelect);

    // Handle removal of images from the list
    profileImageList.addEventListener('click', handleFileRemove);
    imageList.addEventListener('click', handleFileRemove);

    // Function to handle profile image selection
    function handleProfileImageSelect(event) {
        const files = Array.from(event.target.files);

        // Ensure only one profile image can be added
        if (files.length > 0) {
            profileImageArray = [files[0]]; // Keep only the latest selected image
            renderFileList(profileImageArray, profileImageList, 'profileImage');
        }
    }

    // Function to handle general image selection
    function handleImageSelect(event) {
        const files = Array.from(event.target.files);

        if (imageArray.length + files.length > maxImages) {
            alert(`شما می توانید تا سقف ${maxImages} تصویر آپلود کنید.`);
            return; // Prevent adding more than the allowed number of images
        }

        imageArray = imageArray.concat(files);
        renderFileList(imageArray, imageList, 'image');
    }

    // Function to handle file removal from the list
    function handleFileRemove(event) {
        if (event.target.tagName === 'BUTTON') {
            const index = event.target.getAttribute('data-index');
            const type = event.target.getAttribute('data-type');

            if (type === 'profileImage') {
                profileImageArray.splice(index, 1);
                renderFileList(profileImageArray, profileImageList, 'profileImage');
            } else if (type === 'image') {
                imageArray.splice(index, 1);
                renderFileList(imageArray, imageList, 'image');
            }
        }
    }

    // Function to render the list of selected files
    function renderFileList(fileArray, fileList, type) {
        fileList.innerHTML = '';
        fileArray.forEach((file, index) => {
            const listItem = document.createElement('li');
            listItem.classList.add('file-item');

            const filePreview = document.createElement('img');
            filePreview.src = URL.createObjectURL(file);

            listItem.innerHTML = `
                <span>${file.name}</span>
                <button type="button" data-index="${index}" data-type="${type}"><i class="bi bi-x-lg"></i></button>
            `;
            listItem.insertBefore(filePreview, listItem.firstChild);
            fileList.appendChild(listItem);
        });
    }

    // Handle form submission
    uploadForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const formData = new FormData(uploadForm);

        profileImageArray.forEach(file => {
            formData.append('profile_image', file);
        });

        imageArray.forEach(file => {
            formData.append('images[]', file);
        });

        fetch('upload.php', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            alert('Files uploaded successfully!');
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });
}


// --------------------
// tour showing

// (function() {
//     let slideIndex = 0;
//     const slidesData = [
//         { src: "elantra-ogi.webp", caption: "Caption Text 1" },
//         { src: "MjE1MjEx92nX.jpg", caption: "Caption Text 2" },
//         { src: "villa-1-1280x720.jpg", caption: "Caption Text 3" }
//     ];

//     // Generate slides dynamically
//     const slideshowContainer = document.querySelector('.slideshow-container');
//     slidesData.forEach((slide, index) => {
//         const slideDiv = document.createElement('div');
//         slideDiv.className = 'mySlides fade';
        
//         const numberTextDiv = document.createElement('div');
//         numberTextDiv.className = 'numbertext';
//         numberTextDiv.textContent = `${index + 1} / ${slidesData.length}`;
        
//         const img = document.createElement('img');
//         img.src = slide.src;
//         img.style.width = '100%';
        
//         const textDiv = document.createElement('div');
//         textDiv.className = 'text';
//         textDiv.textContent = slide.caption;
        
//         slideDiv.appendChild(numberTextDiv);
//         slideDiv.appendChild(img);
//         slideDiv.appendChild(textDiv);
//         slideshowContainer.appendChild(slideDiv);
//     });

//     let slides = document.getElementsByClassName("mySlides");

//     function showSlides() {
//         let i;
//         for (i = 0; i < slides.length; i++) {
//             slides[i].style.display = "none";
//         }
//         slides[slideIndex].style.display = "block";
//     }

//     function plusSlides() {
//         slideIndex += 1;
//         if (slideIndex >= slides.length) {
//             slideIndex = slides.length - 1;
//             return;
//         } else {
//             showSlides();
//         }
//     }

//     function minusSlides() {
//         slideIndex -= 1;
//         if (slideIndex < 0) {
//             slideIndex = 0;
//             return;
//         }
//         showSlides();
//     }

//     function currentSlide(n) {
//         slideIndex = n - 1;
//         showSlides();
//     }

//     // Initial display of the first slide
//     showSlides();

//     // Expose functions to the global scope if needed
//     window.plusSlides = plusSlides;
//     window.minusSlides = minusSlides;
//     window.currentSlide = currentSlide;
// })();
// Array of images and the total number of slides
const images = [
    'https://via.placeholder.com/800x400?text=Slide+1',
    'https://via.placeholder.com/800x400?text=Slide+2',
    'https://via.placeholder.com/800x400?text=Slide+3',
    'https://via.placeholder.com/800x400?text=Slide+4'
];
const numberOfSlides = images.length;

let currentSlide = 0;

const slideshow = document.querySelector('.slideshow');
const slideshowContainer = document.querySelector('.slideshow-container');
if(slideshow || slideshowContainer){
// Inject slides into the slideshow
function createSlides() {
    images.forEach((src, index) => {
        const slide = document.createElement('div');
        slide.classList.add('slide');
        slide.innerHTML = `<img src="${src}" alt="Slide ${index + 1}">`;
        slideshow.appendChild(slide);
    });
}


// Inject dots into the dots container
function createDots() {
    const dotsContainer = document.querySelector('.dots-container');
    for (let i = 0; i < numberOfSlides; i++) {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        dot.setAttribute('onclick', `currentSlide=${i}; showSlide();`);
        dotsContainer.appendChild(dot);
    }
}

// Show the current slide
function showSlide() {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');

    if (currentSlide >= numberOfSlides) {
        currentSlide = 0;
    }
    if (currentSlide < 0) {
        currentSlide = numberOfSlides - 1;
    }

    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(-${currentSlide * 100}%)`;
    });

    dots.forEach((dot, index) => {
        dot.classList.remove('active');
    });

    dots[currentSlide].classList.add('active');
}

// Change slide when clicking on the next/prev buttons
function changeSlide(step) {
    currentSlide += step;
    showSlide();
}

// Initialize the slideshow
function initSlideshow() {
    createSlides();
    createDots();
    showSlide();
}

// Run the slideshow initialization
if(numberOfSlides!=0){
    initSlideshow();
}else{
    slideshowContainer.style.display="none";
}
}

// ---------------------
// orders list
let orderStatus = document.getElementsByClassName("orderStatus")[0];

if (orderStatus) {
    let value=orderStatus.innerHTML;
    console.log(typeof value)
    switch (value) {
        case 'در حال انجام':
            orderStatus.style.color="yellow"
            console.log("yellow")
            // Additional code for 'in process' status
            break;
            
        case 'انجام شده':
        orderStatus.style.color="greenyellow"
        break;
            
        case 'لغو شده':
        orderStatus.style.color="red"
        break;
    
        default:
            console.log("else")
            break;
    }
    // Additional code that depends on the existence of orderStatus
}