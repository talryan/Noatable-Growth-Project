
  document.addEventListener("DOMContentLoaded", () => {
  modalA()
}) 

function modalA(){
  addRadioToModalA();
}



function addRadioToModalA(){
  let modalA = document.querySelector(".modal-a");
  modalA.innerHTML +=
  `
  <form> 
  <h6> We want to make sure we offer relevant products</h6> 
  <Strong> Do you have any children? </Strong><br>
  <strong> Yes </strong>
  <input  type="radio" class="radio" id="modalAYes" name = "yes" value= "true">
  <strong> No </strong> 
  <input  type="radio" class="radio" id="modalANo" name = "no" value= "false"><br>
  <input type="submit" class="btn" value="Submit">
  </form>

  `;
}

function addRadioToModalB(){
  let modalB = document.querySelector(".modal-b");
  modalB.innerHTML +=
  `
  <form> 
  <h5> Last Question</h5> 
  <Strong> Do you have any pets?</Strong><br>
  <strong> Yes </strong>
  <input  type="radio" id="modalBYes" name = "yes" value= "true"><br> 
  <strong> No </strong> 
  <input  type="radio" id="modalBNo" name = "no" value= "false"><br>
  <input type="submit" class="btn" value="Submit">
  </form>

  `;
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
  let modalSuccess = document.querySelector(".modal-success");
  modalSuccess.innerHTML +=
  `
 Thank you for sharing!<br> <br>
 <button class= "btn-2"> Close </button>
  `
}