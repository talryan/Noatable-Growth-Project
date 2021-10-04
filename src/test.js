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