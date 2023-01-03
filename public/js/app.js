const weatherForm = document.querySelector('form') /* ta naaml select lal form bel index.hbs */

const getUserSearch = document.querySelector('input')

const messageOne = document.querySelector('#message-1') /* querying by id syntax */

const message2 = document.querySelector('#message-2')

const message3 = document.querySelector('#message-3')


weatherForm.addEventListener('submit',(e)=>{        /* it listens when we press submit on the form */
    e.preventDefault()                      /* ntebih, 7et bel index.hbs ekhir chi <script src="/js/app.js"></script> la 7atta te2dar te2ra chu nkatab w rendered */
    
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