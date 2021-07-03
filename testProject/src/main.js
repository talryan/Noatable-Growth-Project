
  document.addEventListener("DOMContentLoaded", () => {
  modalA()
}) 

function modalA(){
  modalError();
}



function addRadioToModalA(){
  let modalA = document.querySelector(".modal-a");
  modalA.innerHTML +=
  `
  <form> 
  <h5> We want to make sure we offer relevant products</h5> 
  <Strong> Do you have any children? </Strong><br>
  <label> Yes </label>
  <input  type="radio" id="modalAYes" name = "yes" value= "true"><br> 
  <label> No </label> 
  <input  type="radio" id="modalANo" name = "no" value= "false"><br>
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
  <label> Yes </label>
  <input  type="radio" id="modalBYes" name = "yes" value= "true"><br> 
  <label> No </label> 
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
 Thank you for sharing!<br> 
 <button class= "btn-2"> Close </button>
  `
}