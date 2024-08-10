(function(){
  
  var chat = {
    messageToSend: '',
    messageResponses: [
      'Why did the web developer leave the restaurant? Because of the table layout.',
      'How do you comfort a JavaScript bug? You console it.',
      'An SQL query enters a bar, approaches two tables and asks: "May I join you?"',
      'What is the most used language in programming? Profanity.',
      'What is the object-oriented way to become wealthy? Inheritance.',
      'An SEO expert walks into a bar, bars, pub, tavern, public house, Irish pub, drinks, beer, alcohol'
    ],
    init: function() {
      this.cacheDOM();
      this.bindEvents();
      this.render();
    },
    cacheDOM: function() {
      this.$chatHistory = $('.chat-history');
      this.$button = $('button');
      this.$textarea = $('#message-to-send');
      this.$chatHistoryList =  this.$chatHistory.find('ul');
    },
    bindEvents: function() {
      this.$button.on('click', this.addMessage.bind(this));
      this.$textarea.on('keyup', this.addMessageEnter.bind(this));
    },
    render: function() {
      this.scrollToBottom();
      if (this.messageToSend.trim() !== '') {
        var template = Handlebars.compile( $("#message-template").html());
        var context = { 
          messageOutput: this.messageToSend,
          time: this.getCurrentTime()
        };

        this.$chatHistoryList.append(template(context));
        this.scrollToBottom();
        this.$textarea.val('');
        
        // responses
        var templateResponse = Handlebars.compile( $("#message-response-template").html());
        var contextResponse = { 
          response: this.getRandomItem(this.messageResponses),
          time: this.getCurrentTime()
        };
        
        setTimeout(function() {
          this.$chatHistoryList.append(templateResponse(contextResponse));
          this.scrollToBottom();
        }.bind(this), 1500);
        
      }
      
    },
    
    addMessage: function() {
      this.messageToSend = this.$textarea.val()
      this.render();         
    },
    addMessageEnter: function(event) {
        // enter was pressed
        if (event.keyCode === 13) {
          this.addMessage();
        }
    },
    scrollToBottom: function() {
       this.$chatHistory.scrollTop(this.$chatHistory[0].scrollHeight);
    },
    getCurrentTime: function() {
      return new Date().toLocaleTimeString().
              replace(/([\d]+:[\d]{2})(:[\d]{2})(.*)/, "$1$3");
    },
    getRandomItem: function(arr) {
      return arr[Math.floor(Math.random()*arr.length)];
    }
    
  };
  
  chat.init();
  
  var searchFilter = {
    options: { valueNames: ['name'] },
    init: function() {
      var userList = new List('people-list', this.options);
      var noItems = $('<li id="no-items-found">No items found</li>');
      
      userList.on('updated', function(list) {
        if (list.matchingItems.length === 0) {
          $(list.list).append(noItems);
        } else {
          noItems.detach();
        }
      });
    }
  };
  
  searchFilter.init();
  
})();

// -----------------------
// image upload code

// document.getElementById('ChatImageUpload').addEventListener('click', function() {
//   document.getElementById('imageInput').click();
// });

document.getElementById('ChatImageUpload').addEventListener('change', function(event) {
  const file = event.target.files[0];
  if (file) {
      const reader = new FileReader();
      reader.onload = function(e) {
          document.getElementById('imagePreview').src = e.target.result;
          document.getElementById('imageModal').style.display = "flex";
      };
      reader.readAsDataURL(file);
  }
});
let closeButton=document.querySelector('.close');
if (closeButton){
closeButton.addEventListener('click', function() {
  closeModal();
});
}
document.getElementById('cancelButton').addEventListener('click', function() {
  closeModal();
  document.getElementById('imageInput').value = null;
  document.getElementById('imagePreview').src = "";
});

document.getElementById('submitButton').addEventListener('click', function() {
  const fileInput = document.getElementById('imageInput');
  const formInput = document.getElementById('imageFile');
  formInput.files = fileInput.files;
  document.getElementById('imageForm').submit();
});

function closeModal() {
  document.getElementById('imageModal').style.display = "none";
}



document.addEventListener('DOMContentLoaded', (event) => {
  const peopleListCollapseButton = document.getElementsByClassName("people-List-CollapseButton")[0];
  const checkbox = document.getElementById('people-List-SidBarCheckBox');
  const peopleList = document.getElementsByClassName('people-list')[0];
  

  peopleListCollapseButton.addEventListener('click', () => {
      checkbox.checked = !checkbox.checked;
      if(checkbox.checked){
        peopleList.style.transform="translateX(0)";
      }else{
        peopleList.style.transform="translateX(-100%)";
          
      }

  });
  // Function to check the width and apply/remove the class
  function checkWidth() {
    if (window.innerWidth < 700) {
      peopleList.style.width="260px";
      // peopleList.classList.add('peopleListSideBar'); // Add the class if width < 400px
      // console.log("added")
    } else {
      peopleList.style.width="40%";
      peopleList.style.transform="translateX(0)";
      // peopleList.classList.remove('peopleListSideBar'); // Remove the class if width >= 400px
      // console.log("removed")
    }
  }
  
  // Check the width initially in case the page loads at a smaller size
  checkWidth();
  
  // Add the event listener to check on window resize
  window.addEventListener('resize', checkWidth);
});
