// previous code
// (function(){

//   // Data for contacts
//   const contacts = [
//     {
//       name: "علیرضا",
//       img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_01.jpg",
//       status: "online"
//     },
//     {
//       name: "هومان",
//       img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_02.jpg",
//       status: "left 7 mins ago"
//     },
//     {
//       name: "صدرا",
//       img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_03.jpg",
//       status: "online"
//     },
//     {
//       name: "Erica Hughes",
//       img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_04.jpg",
//       status: "online"
//     },
//     {
//       name: "Ginger Johnston",
//       img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_05.jpg",
//       status: "online"
//     },
//     {
//       name: "Tracy Carpenter",
//       img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_06.jpg",
//       status: "left 30 mins ago"
//     },
//     {
//       name: "Christian Kelly",
//       img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_07.jpg",
//       status: "left 10 hours ago"
//     },
//     {
//       name: "Monica Ward",
//       img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_08.jpg",
//       status: "online"
//     },
//     {
//       name: "Dean Henry",
//       img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_09.jpg",
//       status: "offline since Oct 28"
//     },
//     {
//       name: "Peyton Mckinney",
//       img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_10.jpg",
//       status: "online"
//     }
//   ];

//   var searchFilter = {
//     options: { valueNames: ['name'] },
//     init: function() {
//       var userList = new List('people-list', this.options);
//       var noItems = $('<li id="no-items-found">No items found</li>');
      
//       userList.on('updated', function(list) {
//         if (list.matchingItems.length === 0) {
//           $(list.list).append(noItems);
//         } else {
//           noItems.detach();
//         }
//       });
//     }
//   };

//   var chat = {
//     messageToSend: '',
//     messageResponses: [
//       'Why did the web developer leave the restaurant? Because of the table layout.',
//       'How do you comfort a JavaScript bug? You console it.',
//       'An SQL query enters a bar, approaches two tables and asks: "May I join you?"',
//       'What is the most used language in programming? Profanity.',
//       'What is the object-oriented way to become wealthy? Inheritance.',
//       'An SEO expert walks into a bar, bars, pub, tavern, public house, Irish pub, drinks, beer, alcohol'
//     ],
//     init: function() {
//       this.cacheDOM();
//       this.bindEvents();
//       this.render();
//       this.loadContacts();  // Load contacts into the contact list
//     },
//     cacheDOM: function() {
//       this.$chatHistory = $('.chat-history');
//       this.$button = $('button');
//       this.$textarea = $('#message-to-send');
//       this.$chatHistoryList =  this.$chatHistory.find('ul');
//       this.$contactsList = $('.list');
//     },
//     bindEvents: function() {
//       this.$button.on('click', this.addMessage.bind(this));
//       this.$textarea.on('keyup', this.addMessageEnter.bind(this));
//     },
//     render: function() {
//       this.scrollToBottom();
//       if (this.messageToSend.trim() !== '') {
//         var template = Handlebars.compile($("#message-template").html());
//         var context = { 
//           messageOutput: this.messageToSend,
//           time: this.getCurrentTime()
//         };

//         this.$chatHistoryList.append(template(context));
//         this.scrollToBottom();
//         this.$textarea.val('');
        
//         // responses
//         var templateResponse = Handlebars.compile($("#message-response-template").html());
//         var contextResponse = { 
//           response: this.getRandomItem(this.messageResponses),
//           time: this.getCurrentTime()
//         };
        
//         setTimeout(function() {
//           this.$chatHistoryList.append(templateResponse(contextResponse));
//           this.scrollToBottom();
//         }.bind(this), 1500);
        
//       }
      
//     },
    
//     addMessage: function() {
//       this.messageToSend = this.$textarea.val();
//       this.render();         
//     },
//     addMessageEnter: function(event) {
//       // enter was pressed
//       if (event.keyCode === 13) {
//         this.addMessage();
//       }
//     },
//     scrollToBottom: function() {
//        this.$chatHistory.scrollTop(this.$chatHistory[0].scrollHeight);
//     },
//     getCurrentTime: function() {
//       return new Date().toLocaleTimeString().
//               replace(/([\d]+:[\d]{2})(:[\d]{2})(.*)/, "$1$3");
//     },
//     getRandomItem: function(arr) {
//       return arr[Math.floor(Math.random()*arr.length)];
//     },
//     loadContacts: function() {
//       const contactTemplate = (contact) => `
//         <li class="clearfix">
//           <img src="${contact.img}" alt="avatar" />
//           <div class="about">
//             <div class="name">${contact.name}</div>
//             <div class="status">
//               <i class="fa fa-circle ${contact.status.includes('online') ? 'online' : 'offline'}"></i> ${contact.status}
//             </div>
//           </div>
//         </li>
//       `;

//       // Clear the existing contacts
//       this.$contactsList.html('');

//       // Add each contact
//       contacts.forEach(contact => {
//         this.$contactsList.append(contactTemplate(contact));
//       });

//       // Initialize the search filter
//       searchFilter.init();
//     }
//   };
  
//   chat.init();
  
  
  
// })();

(function(){

  // Data for contacts
  const contacts = [
      { name: "علیرضا", img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_01.jpg", status: "online" },
      { name: "هومان", img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_02.jpg", status: "left 7 mins ago" },
      { name: "صدرا", img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_03.jpg", status: "online" },
      { name: "Erica Hughes", img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_04.jpg", status: "online" },
      { name: "Ginger Johnston", img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_05.jpg", status: "online" },
      { name: "Tracy Carpenter", img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_06.jpg", status: "left 30 mins ago" },
      { name: "Christian Kelly", img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_07.jpg", status: "left 10 hours ago" },
      { name: "Monica Ward", img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_08.jpg", status: "online" },
      { name: "Dean Henry", img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_09.jpg", status: "offline since Oct 28" },
      { name: "Peyton Mckinney", img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_10.jpg", status: "online" }
  ];

  // Data for chat messages per contact
  const messages = {
      "علیرضا": [
          { sender: 'Olia', message: 'Hey, علیرضا! How are you?', time: '10:30 AM', type: 'outgoing' },
          { sender: 'علیرضا', message: 'I\'m good, thanks for asking!', time: '10:32 AM', type: 'incoming' },
          { sender: 'Olia', message: 'Glad to hear that.', time: '10:34 AM', type: 'outgoing' }
      ],
      "هومان": [
          { sender: 'Olia', message: 'Hello هومان! What\'s up?', time: '11:00 AM', type: 'outgoing' },
          { sender: 'هومان', message: 'Not much, just working on some projects.', time: '11:05 AM', type: 'incoming' }
      ],
      // Add more messages for other contacts as needed
  };

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

  var chat = {
      selectedContact: '',
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
          this.loadContacts();  // Load contacts into the contact list
      },
      cacheDOM: function() {
          this.$chatHistory = $('.chat-history');
          this.$button = $('button');
          this.$textarea = $('#message-to-send');
          this.$chatHistoryList = this.$chatHistory.find('ul');
          this.$contactsList = $('.list');
      },
      bindEvents: function() {
          this.$button.on('click', this.addMessage.bind(this));
          this.$textarea.on('keyup', this.addMessageEnter.bind(this));
          this.$contactsList.on('click', 'li', this.handleContactClick.bind(this));
      },
      render: function() {
          this.scrollToBottom();
          if (this.messageToSend.trim() !== '') {
              var template = Handlebars.compile($("#message-template").html());
              var context = { 
                  messageOutput: this.messageToSend,
                  time: this.getCurrentTime()
              };

              this.$chatHistoryList.append(template(context));
              this.scrollToBottom();
              this.$textarea.val('');

              // responses
              var templateResponse = Handlebars.compile($("#message-response-template").html());
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
          this.messageToSend = this.$textarea.val();
          this.render();
      },
      addMessageEnter: function(event) {
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
      },
      loadContacts: function() {
          const contactTemplate = (contact) => `
              <li class="clearfix">
                  <img src="${contact.img}" alt="avatar" />
                  <div class="about">
                      <div class="name">${contact.name}</div>
                      <div class="status">
                          <i class="fa fa-circle ${contact.status.includes('online') ? 'online' : 'offline'}"></i> ${contact.status}
                      </div>
                  </div>
              </li>
          `;

          this.$contactsList.html('');

          contacts.forEach(contact => {
              this.$contactsList.append(contactTemplate(contact));
          });

          searchFilter.init();
      },
      loadMessages: function(contactName) {
          this.selectedContact = contactName;

          const contactMessages = messages[contactName] || [];
          this.$chatHistoryList.html(''); // Clear previous messages

          contactMessages.forEach(msg => {
              const context = {
                  messageOutput: msg.message,
                  time: msg.time
              };

              if (msg.type === 'outgoing') {
                  this.$chatHistoryList.append(Handlebars.compile($("#message-template").html())(context));
              } else if (msg.type === 'incoming') {
                  this.$chatHistoryList.append(Handlebars.compile($("#message-response-template").html())({ response: msg.message, time: msg.time }));
              }
          });

          this.scrollToBottom();
      },
      handleContactClick: function(event) {
          const contactName = $(event.currentTarget).find('.name').text();
          this.loadMessages(contactName);
      }
  };

  chat.init();

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
