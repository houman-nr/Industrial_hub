document.addEventListener('DOMContentLoaded', (event) => {
document.getElementsByClassName('HomeReturnButton')[0].onclick = function() {
    window.history.back();
};
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

const imageInput = document.getElementById('imageUpload');
const videoInput = document.getElementById('videoUpload');
const imageList = document.getElementById('imageList');
const videoList = document.getElementById('videoList');
const uploadForm = document.getElementById('uploadForm');

let imageArray = [];
let videoArray = [];

if (imageInput || videoInput || imageList || videoList || uploadForm ) {
imageInput.addEventListener('change', handleImageSelect);
videoInput.addEventListener('change', handleVideoSelect);
imageList.addEventListener('click', handleFileRemove);
videoList.addEventListener('click', handleFileRemove);

function handleImageSelect(event) {
    const files = Array.from(event.target.files);
    imageArray = imageArray.concat(files);
    renderFileList(imageArray, imageList, 'image');
}

function handleVideoSelect(event) {
    const files = Array.from(event.target.files);
    videoArray = videoArray.concat(files);
    renderFileList(videoArray, videoList, 'video');
}

function handleFileRemove(event) {
    if (event.target.tagName === 'BUTTON') {
        const index = event.target.getAttribute('data-index');
        const type = event.target.getAttribute('data-type');
        if (type === 'image') {
            imageArray.splice(index, 1);
            renderFileList(imageArray, imageList, 'image');
        } else if (type === 'video') {
            videoArray.splice(index, 1);
            renderFileList(videoArray, videoList, 'video');
        }
    }
}

function renderFileList(fileArray, fileList, type) {
    fileList.innerHTML = '';
    fileArray.forEach((file, index) => {
        const listItem = document.createElement('li');
        listItem.classList.add('file-item');

        const filePreview = document.createElement('img');
        if (type === 'image') {
            filePreview.src = URL.createObjectURL(file);
        } else if (type === 'video') {
            filePreview.src = 'path_to_static_video_thumbnail_image'; // Replace with the path to your static image
        }

        listItem.innerHTML = `
            <span>${file.name}</span>
            <button type="button" data-index="${index}" data-type="${type}">Remove</button>
        `;
        listItem.insertBefore(filePreview, listItem.firstChild);
        fileList.appendChild(listItem);
    });
}

uploadForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(uploadForm);
    imageArray.forEach(file => {
        formData.append('images[]', file);
    });
    videoArray.forEach(file => {
        formData.append('videos[]', file);
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

(function() {
    let slideIndex = 0;
    let slides = document.getElementsByClassName("mySlides");
    if(slides && slides.length!=0){
        showSlides();
    }
    function showSlides() {
      let i;
      let dots = document.getElementsByClassName("dot");
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      // slideIndex++;
      // if (slideIndex > slides.length) {slideIndex = 1}
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex].style.display = "block";
      slides[slideIndex].className += " show";
      dots[slideIndex].className += " active";
      // setTimeout(showSlides, 4000); // Change image every 4 seconds
    }
  
    function plusSlides() {
      slideIndex += 1;
      console.log(slideIndex);
      if (slideIndex == slides.length) {
        slideIndex -= 1;
        return;
      } else {
        showSlides();
      }
    }
  
    function minusSlides() {
      slideIndex -= 1;
      if (slideIndex == -1) {
        slideIndex = 0;
        return;
      }
      showSlides();
    }
  
    function currentSlide(n) {
      slideIndex = n - 1;
      showSlides();
    }
  
    // Expose functions to the global scope if needed
    window.plusSlides = plusSlides;
    window.minusSlides = minusSlides;
    window.currentSlide = currentSlide;
  })();
  

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