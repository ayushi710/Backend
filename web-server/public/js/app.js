const weatherForm = document.querySelector('form')

const search = document.querySelector('input')

const message1 = document.querySelector('#message1')

const message2 = document.querySelector('#message2')

message1.textContent = ''
message2.textContent = ''

weatherForm.addEventListener('submit', (e)=> {
    e.preventDefault();


message1.textContent = 'Loading...'
message2.textContent = ''
    const url = "http://api.weatherapi.com/v1/current.json?key=fc0f00473c37468cb0f63135241204&q="+ search.value+ "&aqi=no"
    fetch(url).then((res)=> {
        res.json().then((data)=> {
            if(data.error) {
                console.log(data.error) 
                message1.textContent = ''
                message2.textContent ="Error in location"
            }
               
            else {
               data = data.current
            message1.textContent= (data?.condition?.text+". It is currently "+ data?.temp_c+" degrees out and feels like "+data?.feelslike_c +" degree")

           
            }
        }).catch(err => console.log("Erroe :", err))
    })
    
})