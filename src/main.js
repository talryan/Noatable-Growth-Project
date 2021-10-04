
document.addEventListener("DOMContentLoaded", () => {
  document.querySelector('.modal-x').addEventListener('click', startSurvey)
startSurvey();
}) 


function startSurvey(){
  alert("Clearing local storage and starting survey")
  window.localStorage.clear();
  childrenModal();
}

function childrenModal(){
  let modal = document.querySelector(".modal-body");
 
  modal.innerHTML =
  `
  <form> 
  <div class="modal-content"> 
  <label class="title"> We want to make sure we offer relevant products</label> 
  <Strong> Do you have any children? </Strong><br>
  <div class="radio-strong">
  <strong class="radio-label"> Yes </strong>
  <strong class="radio-label"> No </strong> 
  </div>
  <div class="radio-buttons">
  <span class="faux-radio" data-radio="yes" data-radio-name="radioChildren"></span>
  <span class="faux-radio" data-radio="no" data-radio-name="radioChildren"></span>
  <input  type="radio" class="radio" id="childrenModalYes" name="radioChildren" value="yes">
  <input  type="radio" class="radio" id="childrenModalNo" name="radioChildren" value="no">

  </div>
  </div>
  <input type="submit" class="btn" value="Submit">
  </form>
  `;
 
  modal.addEventListener('submit',validateChildrenQuestion)
  document.querySelectorAll('span[data-radio-name="radioChildren"]')
  .forEach(element => element.addEventListener('click',function(){
    console.log(this.getAttribute('data-radio'))
    document.querySelectorAll('span[data-radio-name="radioChildren"]')
    .forEach(e => e.classList.remove("selected"))
    this.classList.add("selected")
    const getAttribute = this.getAttribute('data-radio')
    document.querySelectorAll(`input[name="radioChildren"]`)
    .forEach(x => x.removeAttribute("checked"))
    document.querySelector(`input[name="radioChildren"][value="${getAttribute}"]`)
    .setAttribute("checked", "checked")
  }));

}

function validateChildrenQuestion(e){
  e.preventDefault();
  let modal = document.querySelector(".modal-body");
  modal.removeEventListener('submit',validateChildrenQuestion)
  const radioChildren =document.getElementsByName('radioChildren')
  let isValid = false
  let answer = {}
  for (var i = 0, length = radioChildren.length; i < length; i++) {
    if (radioChildren[i].checked) {
      answer = {hasChildren:radioChildren[i].value === "yes"}
        radioInputA= radioChildren[i].value
        isValid = true
        break
    }
  }
    if (isValid){
      saveResponse(answer,subscriptionModal);
    }
    else {
      modalError();
    }
    
}


function subscriptionModal(){
  let modal = document.querySelector(".modal-body");
 
  modal.innerHTML =
  `
  <form> 
  <div class="modal-content"> 
  <Strong> Would you like products delivered to you the same time each month? </Strong><br>
  <div class="radio-strong">
  <strong class="radio-label"> Yes </strong>
  <strong class="radio-label"> No </strong> 
  </div>
  <div class="radio-buttons">
  <span class="faux-radio" data-radio="yes" data-radio-name="radioSubscription"></span>
  <span class="faux-radio" data-radio="no" data-radio-name="radioSubscription"></span>
  <input  type="radio" class="radio" id="subscriptionModalYes" name="radioSubscription" value="yes">
  <input  type="radio" class="radio" id="subscriptionModalNo" name="radioSubscription" value="no">

  </div>
  </div>
  <input type="submit" class="btn" value="Submit">
  </form>
  `;
 
  modal.addEventListener('submit',validateSubscriptionQuestion)
  document.querySelectorAll('span[data-radio-name="radioSubscription"]')
  .forEach(element => element.addEventListener('click',function(){
    console.log(this.getAttribute('data-radio'))
    document.querySelectorAll('span[data-radio-name="radioSubscription"]')
    .forEach(e => e.classList.remove("selected"))
    this.classList.add("selected")
    const getAttribute = this.getAttribute('data-radio')
    document.querySelectorAll(`input[name="radioSubscription"]`)
    .forEach(x => x.removeAttribute("checked"))
    document.querySelector(`input[name="radioSubscription"][value="${getAttribute}"]`)
    .setAttribute("checked", "checked")
  }));

}

function validateSubscriptionQuestion(e){
  e.preventDefault();
  let modal = document.querySelector(".modal-body");
  modal.removeEventListener('submit',validateSubscriptionQuestion)
  const radioSubscription =document.getElementsByName('radioSubscription')
  let isValid = false
  let answer = {}
  for (var i = 0, length = radioSubscription.length; i < length; i++) {
    if (radioSubscription[i].checked) {
      answer = {hasSubscription:radioSubscription[i].value === "yes"}
        radioInputA= radioSubscription[i].value
        isValid = true
        break
    }
  }
  console.log(saveResponse);
    if (isValid){
      saveResponse(answer,refillModal);
    }
    else {
      modalError();
    }

    
}
function refillModal(){
  let modal = document.querySelector(".modal-body");
 
  modal.innerHTML =
  `
  <form> 
  <div class="modal-content"> 
  <Strong> Would you participate in our recycling program? </Strong><br>
  <label>We will provide sustainable containers and refill them!</label>
  <div class="radio-strong">
  <strong class="radio-label"> Yes </strong>
  <strong class="radio-label"> No </strong> 
  </div>
  <div class="radio-buttons">
  <span class="faux-radio" data-radio="yes" data-radio-name="radioRefill"></span>
  <span class="faux-radio" data-radio="no" data-radio-name="radioRefill"></span>
  <input  type="radio" class="radio" id="refillModalYes" name="radioRefill" value="yes">
  <input  type="radio" class="radio" id="refillModalNo" name="radioRefill" value="no">

  </div>
  </div>
  <input type="submit" class="btn" value="Submit">
  </form>
  `;
 
  modal.addEventListener('submit',validateRefillQuestion)
  document.querySelectorAll('span[data-radio-name="radioRefill"]')
  .forEach(element => element.addEventListener('click',function(){
    console.log(this.getAttribute('data-radio'))
    document.querySelectorAll('span[data-radio-name="radioRefill"]')
    .forEach(e => e.classList.remove("selected"))
    this.classList.add("selected")
    const getAttribute = this.getAttribute('data-radio')
    document.querySelectorAll(`input[name="radioRefill"]`)
    .forEach(x => x.removeAttribute("checked"))
    document.querySelector(`input[name="radioRefill"][value="${getAttribute}"]`)
    .setAttribute("checked", "checked")
  }));

}

function validateRefillQuestion(e){
  e.preventDefault();
  let modal = document.querySelector(".modal-body");
  modal.removeEventListener('submit',validateRefillQuestion)
  const radioRefill =document.getElementsByName('radioRefill')
  let isValid = false
  let answer = {}
  for (var i = 0, length = radioRefill.length; i < length; i++) {
    if (radioRefill[i].checked) {
      answer = {hasRefill:radioRefill[i].value === "yes"}
        radioInputA= radioRefill[i].value
        isValid = true
        break
    }
  }
    if (isValid){
      saveResponse(answer,petModal);
    }
    else {
      modalError();
    }
    
}


function petModal(){
  let modal = document.querySelector(".modal-body");
  modal.innerHTML =
  `
  <form> 
  <div class="modal-content"> 
  <label class= "title"> Last Question </label> 
  <Strong> Do you have any pets?</Strong> <br>
  <div class="radio-strong">
  <strong class="radio-label"> Yes </strong>
  <strong class="radio-label"> No </strong> 
  </div>
  <div class="radio-buttons">
  <span class="faux-radio" data-radio="yes" data-radio-name="radioPets"></span>
  <span class="faux-radio" data-radio="no" data-radio-name="radioPets"></span>
  <input  type="radio" class="radio" id="petModalYes" name="radioPets" value="yes">
  <input  type="radio"  class="radio" id="petModalNo" name="radioPets" value="no"><br>
  </div>
  </div>
  <input type="submit" class="btn" value="Submit">
  </form>

  `;
  modal.addEventListener('submit', validatePetQuestion)
  document.querySelectorAll('span[data-radio-name="radioPets"]')
  .forEach(element => element.addEventListener('click',function(){
    console.log(this.getAttribute('data-radio'))
    document.querySelectorAll('span[data-radio-name="radioPets"]')
    .forEach(e => e.classList.remove("selected"))
    this.classList.add("selected")
    const getAttribute = this.getAttribute('data-radio')
    document.querySelectorAll(`input[name="radioPets"]`)
    .forEach(x => x.removeAttribute("checked"))
    document.querySelector(`input[name="radioPets"][value="${getAttribute}"]`)
    .setAttribute("checked", "checked")
  }));
}

function validatePetQuestion(e){
  e.preventDefault();
  let modal = document.querySelector(".modal-body");
  modal.removeEventListener('submit',validatePetQuestion)
  const radioPets = document.getElementsByName('radioPets')
  let isValid = false;
  let answer = {};
  for (var i = 0, length = radioPets.length; i < length; i++) {;
    if (radioPets[i].checked) {;
      answer = {hasPets:radioPets[i].value === "yes"};
        isValid = true;
        break;
    };
  };
    if (isValid){;
      saveResponse(answer,modalSuccess);
    }
    else {
      modalError();
    }
    
}

function modalError() {
  let modalError = document.querySelector(".modal-body");
  modalError.innerHTML =
  `
  <div class="modal-content">
  <label class = "error"> You didn't select anything</label> 
  </div>
  <button class= "btn btn-restart"> Try Again </button>
  `
  const targetModal = getFailedQuestionModal();
  document.querySelector(".btn-restart").addEventListener('click', targetModal)
}

function getFailedQuestionModal(){
  const key = "response"
  let responseStr = window.localStorage.getItem(key);
  let response = responseStr ? JSON.parse(responseStr) : {};
  return response.hasOwnProperty('hasChildren') ? petModal : childrenModal; 
}

function modalSuccess(){

  let modalSuccess = document.querySelector(".modal-body");
  modalSuccess.innerHTML =
  `
  <div class="modal-content">
 <label class ="thank-you"> Thank you for sharing!</label> <br> <br>
 </div>
 <button class= "btn btn-close"> Close </button>
  `
  document.querySelector(".btn-close").addEventListener('click', startSurvey)
}


function saveResponse(answer,callback){
  const key = "response"
  let responseStr = window.localStorage.getItem(key);
  let response = responseStr ? JSON.parse(responseStr) : {};
  response = Object.assign(response, answer);
  window.localStorage.setItem('response', JSON.stringify(response));

    callback();

}