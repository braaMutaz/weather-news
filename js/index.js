var getDay = new Date()
var findDay = getDay.getDay()

var getmonth = getDay.getMonth()
var current =[]
var locat = []
var month = ['January','February','March','April','May','June','July','August','September','October','November','December',]
var day = ['Sunday' , 'Monday' , 'Tuesday' , 'Wednesday' , 'Thursday' , 'Friday' ,'Saturday' ]
var today= day[findDay]
var themonth = month[getmonth]
var day2 =[]
var day3 =[]
var nextday = findDay+1
var nextdayx = day[nextday]
var nextday1 = findDay+2
if(nextday1 == 7)
{
  nextday1=0
}


var dnum = getDay.getDate()
console.log(dnum);
var nextdayx1 = day[nextday1]
function myxmlhttp(con)
{
  var myhttp = new XMLHttpRequest()
myhttp.open('GET',`https://api.weatherapi.com/v1/forecast.json?key=572e08fb1d7547f58d8151525211205&q=${con}&days=3`)
myhttp.send()
myhttp.addEventListener('readystatechange',function(){
    if(myhttp.readyState==4)
    {
        current   = JSON.parse(myhttp.response).current
        locat = JSON.parse(myhttp.response).location
        forecast = JSON.parse(myhttp.response).forecast.forecastday
        day2 = JSON.parse(myhttp.response).forecast.forecastday[1]
        day3 = JSON.parse(myhttp.response).forecast.forecastday[2]
        console.log(myhttp.readyState);
        
     dispaly()
      console.log(myhttp);
      var error = document.getElementById('error')
       error.classList.replace('d-block' , 'd-none')
    }
    

})
}
 myxmlhttp('egypt helwan')

function dispaly()
{
    cartonna=``
  
        cartonna+=`
        <div class="container ">
        <br>

        <div class="row g-4">
          <div class="col-md-4">
            <div class="items wow">
                   <div class="bg-dark">
                   <div class="row">
                   <div class="col-md-6 ">
                   <div class="items   d-flex justify-content-center align-items-center">
                   <p class="pt-3">${today}</p>
                 </div>
               </div>
               <div class="col-md-6">
                 <div class="items   d-flex justify-content-center align-items-center">
                   <p class="pt-3">${dnum} ${themonth}</p>
                 </div>
                   </div>
                   </div>
              </div>
              <div class="items-info p-3 ms-2">
                <h5>${locat.name}</h5>
                <br>
                <div class="drga d-flex ">
                  <div class="drga-info d-flex">
                    <div class="six">
                      ${current.temp_c}
                    </div>
                    <div class="oo">
                      o
                    </div>
                    <div class="cc">
                      c
                    </div>
                    <div class="icon-info ms-5 d-flex align-items-center">
                      <img class=" logo" src="${current.condition.icon}" alt="">
                    </div>
                  </div>
                </div>
                <p>${current.condition.text}</p>
                <br>
                <div class="d-flex">
                  <div class="umpr">
                    <i class="fa-solid fa-umbrella fs-3"></i>  <span class="fw-bold ms-1">${forecast[0].day.daily_chance_of_rain}%</span>
                  </div>
                  <div class="winds ms-5">
                    <i class="fa-solid fa-wind fs-3"></i> <span class="fw-bold ms-1">${current.wind_kph}</span>
                  </div>
                  <div class="gauge ms-5">
                    <i class="fa-solid fa-gauge fs-3"></i> <span class="fw-bold ms-1">${current.wind_dir}</span>
                  </div>
                </div>

              </div>
            </div>
          </div>
          <!-- end -->
          <!-- start -->
          <div class="col-md-4">
            <div class="items wow">


              <div class="items   bg-dark d-flex justify-content-center align-items-center">
                <p class="pt-3">${nextdayx}</p>
              </div>
              <div>
                <div class="info  py-5 text-center  ">
                  <img class="w-25" src="${day2.day.condition.icon}" alt="">
                  <div class="drga d-flex   ">
                    <div class="drga-info  w-100 justify-content-center d-flex text-center ">
                      <div class="six2 ">
                        ${day2.day.maxtemp_c}
                      </div>
                      <div class="oo2">
                        o
                      </div>
                      <div class="cc2">
                        c
                      </div>
                    </div>
                  </div>
                  <div class="drga-info  w-100 justify-content-center d-flex text-center ">
                  <div class="six3 ">
                    ${day2.day.mintemp_c}
                  </div>
                  <div class="oo3">
                    o
                  </div>
                  <div class="cc3">
                    c
                  </div>
                </div>
                <br>
                  <p class="text-primary">${day2.day.condition.text}</p>
                </div>
              </div>

            </div>
          </div>
                      <!-- end -->
          <!-- start -->
          <div class="col-md-4">
            <div class="items wow">


              <div class="items   bg-dark d-flex justify-content-center align-items-center">
                <p class="pt-3">${nextdayx1}</p>
              </div>
              <div>
                <div class="info  py-5 text-center  ">
                  <img class="w-25" src=" ${day3.day.condition.icon}" alt="">
                  <div class="drga d-flex   ">
                    <div class="drga-info  w-100 justify-content-center d-flex text-center ">
                      <div class="six2 ">
                      ${day3.day.maxtemp_c}
                      </div>
                      <div class="oo2">
                        o
                      </div>
                      <div class="cc2">
                        c
                      </div>
                    </div>
                  </div>
                  <div class="drga-info  w-100 justify-content-center d-flex text-center ">
                  <div class="six3 ">
                    ${day3.day.mintemp_c}
                  </div>
                  <div class="oo3">
                    o
                  </div>
                  <div class="cc3">
                    c
                  </div>
                </div>
                <br>
                  <p  class="text-primary">${day3.day.condition.text}</p>
                </div>
              </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
        `
        
 
    document.getElementById('demo').innerHTML=cartonna
   
    
}

