const weatherForm = document.querySelector('form') 

const getUserSearch = document.querySelector('input')

const messageOne = document.querySelector('#message-1') /* querying by id */

const message2 = document.querySelector('#message-2')

const message3 = document.querySelector('#message-3')


weatherForm.addEventListener('submit',(e)=>{       
    e.preventDefault()                      
    
    const input = getUserSearch.value

    message3.textContent = 'Fetching Data ...'

    fetch('http://localhost:3000/Weather?adress='+input).then((response)=>{
    response.json().then((data)=>{

        if(data.error)
        {
              message2.textContent= data.error
              messageOne.textContent = " "
              message3.textContent = " "
        }
        else{
        
            messageOne.textContent = data.location  + " " +  data.forecast
            message2.textContent = " "
            message3.textContent = " "
        }
        
    })
})


})
