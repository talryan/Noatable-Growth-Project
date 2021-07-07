
  document.addEventListener("DOMContentLoaded", () => {
  modalA() 

}) 


function modalA(){
  let modal = document.querySelector(".modal");
 
  modal.innerHTML =
  `
  <span class="modal-close"> X </span>
  <form> 
  <label class="label"> We want to make sure we offer relevant products</label> <br> <br>
  <Strong> Do you have any children? </Strong><br>
  <strong> Yes </strong>
  <input  type="radio" class="radio" id="modalAYes" name="radioA" value="yes">
  <strong> No </strong> 
  <input  type="radio" class="radio" id="modalANo" name="radioA" value="no"><br>
  <input type="submit" class="btn" value="Submit">
  </form>
  `;
 
  modal.addEventListener('submit', modalCheck)

}



function modalB(event){
  
  event.preventDefault();
  
  let modal = document.querySelector(".modal");
  modal.innerHTML =
  `
  <form> 
  <h5> Last Question</h5> 
  <Strong> Do you have any pets?</Strong><br>
  <strong> Yes </strong>
  <input  type="radio" id="modalBYes" name="radioB" value= "true"><br> 
  <strong> No </strong> 
  <input  type="radio" id="modalBNo" name="radioB" value= "false"><br>
  <input type="submit" class="btn" value="Submit">
  </form>

  `;
  modal.addEventListener("submit", modalSuccess)
}

function modalError(){
  let modalError = document.querySelector(".modal-error");
  modalError.innerHTML +=
  `
  You didn't select anything
  <button class= "btn-2"> Try Again </button>
  `
}

function modalSuccess(){

  let modalSuccess = document.querySelector(".modal");
  modalSuccess.innerHTML =
  `
 <label class ="test"> Thank you for sharing!</label> <br> <br>
 <button class= "btn-2"> Close </button>
  `
}


function modalCheck(e){
  e.preventDefault();
  document.getElementsByName('radioA')
      .forEach(radio => {
        if(radio.checked){
          modalB;
        }
      });


  // make "modal-a" default
  // make sure answer is selected
  // if/else: nothing selected ? modalError() : modalB
  // if/else nothing selected? modalError() : modalSuccess()

}

