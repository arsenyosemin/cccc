let today = new Date();
let currentYear = today.getFullYear();
let currentWeek = Math.floor(((today.getTime()-(new Date(today.getFullYear(),0)).getTime())/(1000*3600*24))/7);
let selectYear = document.getElementById("year");
let selectWeek = document.getElementById("week");
let familyNumber = 5;
let weekdayOnly = true;
let context = 'Availability';

let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
let days = ["sun","mon","tue","wed","thu","fri","sat"];

let families = [['family1','btn1','pink'],
['family2','btn2','blue'],
['family3','btn3','green'],
['family4','btn4','yellow'],
['family5','btn5','orange'],
['family6','btn6','purple'],
['family7','btn7','red']]

let currentFamily = 0;

let unavailabilities = [[],[],[],[],[],[],[]];
let schedule = [[],[],[],[],[],[],[]];
let familyNames = ['family 1','family 2','family 3','family 4','family 5','family 6','family 7'];

// listener for family edit buttons
document.addEventListener('click', function(event){
  for(let i = 0;i<7;i++){
    if(event.target.matches('#'+days[i])){
      daySelect(i);
    }
    if(event.target.matches('#o'+days[i])){
      daySelect(i);
    }
    if(event.target.matches('#'+families[i][1])){
      familySelect(i);
    }
  }
}, false);

// listener for family name changes
document.addEventListener('keyup',function(event){
  for (let i = 0; i < families.length; i++) {
    if(event.target.matches('#'+families[i][0])){
      familyNames[i]=document.getElementById(families[i][0]).value
    }
  }
},);

let monthAndYear = document.getElementById("monthAndYear");
loadCalendar();

//load a calendar based on url parameters
function loadCalendar(){
  let av = false;
  let sch = false;
  let queryString = window.location.search;
  let urlParams = new URLSearchParams(queryString);
  if(urlParams.has('familyNumber')){
    av = [[],[],[],[],[],[],[]];
    sch = [[],[],[],[],[],[],[]];
    familyNumber = urlParams.get('familyNumber');
    for(let i=0;i<familyNumber;i++){
      if(urlParams.has('name'+(i+1))){
        familyNames[i]=urlParams.get('name'+(i+1));
        document.getElementById("family"+(i+1)).value=urlParams.get('name'+(i+1));
      }
      if(urlParams.has('family'+(i+1))){
        av[i]=urlParams.get('family'+(i+1)).split(',');
      }if(urlParams.has('sfamily'+(i+1))){
        sch[i]=urlParams.get('sfamily'+(i+1)).split(',');
      }
    }
    currentYear = urlParams.get('year');
    currentWeek = urlParams.get('week');
    weekdayOnly = (urlParams.get('weekday')=='true');
    document.getElementById("year").value=currentYear;
    createWeekOptions(currentYear);
    document.getElementById("week").value=currentWeek;
    document.getElementById("familyNumber").value=familyNumber;
  }
  familyText();
  showCalendar(currentWeek, currentYear,true,av,sch,2);
  if(!weekdayOnly){
    document.getElementById('toggleWeekdays').innerHTML='Only Weekdays';
  }
  if(urlParams.get('context')=="Schedule"){
    toggleSchedule();
  }
}

function resetCalendar(){
  showCalendar(currentWeek, currentYear,true,false,false,2);
  toggleSchedule();
}

function exportCalendar(){
  let url = location.protocol + '//' + location.host + location.pathname;
  url += '?familyNumber='+familyNumber+'&year='+currentYear+'&week='+currentWeek+'&weekday='+weekdayOnly+'&context='+context;
  for(let i=0;i<familyNumber;i++){
    url += '&name'+(i+1)+'='+familyNames[i];
    if(unavailabilities[i].length>0){
      url += '&family'+(i+1)+'='+unavailabilities[i][0];
      for(let j=1;j<unavailabilities[i].length;j++){
        url += ','+unavailabilities[i][j];
      }
    }if(schedule[i].length>0){
      url += '&sfamily'+(i+1)+'='+schedule[i][0];
      for(let j=1;j<schedule[i].length;j++){
        url += ','+schedule[i][j];
      }
    }
  }
  let uri = url.replace("%20"," ");
  uri = encodeURI(uri);
  document.getElementById('exporturl').setAttribute('value',uri);
  document.getElementById('exporturl').removeAttribute('hidden');

  /* Get the text field */
  let copyText = document.getElementById("exporturl");

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /*For mobile devices*/

  /* Copy the text inside the text field */
  document.execCommand("copy");

  /* Alert the copied text */
  document.getElementById('copied').setAttribute('style','display:none');
  $('#copied').fadeIn();

}

function familySelect(i) {
    let element = document.getElementById(families[i][1]);
    let prevelement = document.getElementById(families[currentFamily][1]);
    prevelement.toggleAttribute('clicked');
    element.toggleAttribute('clicked');
    currentFamily = i;
    prevelement.removeAttribute('style');
    element.style.background=families[currentFamily][2];
}

// selects multiple days (logic for this is a bit wonky I admit)
function daySelect(i) {
  let id = i;
  if(context=="Schedule"){
    id="o"+i;
  }
  let element = document.getElementById(id);
  select(element,context=="Availability");
  for(let j=1;j<4;j++){
    id = i+(7*j)
    if(context=="Schedule"){
      id="o"+id;
    }
    element = document.getElementById(id);
    select(element,context=="Availability");
  }

}

// selecting dates
function select(element,input=true) {
    let day = element.id;
    if(weekdayOnly){
      if(day%7==0 || day%7==6){
        return;
      }
    }
    let clicked = false;
    if(input){
      clicked = element.toggleAttribute(families[currentFamily][0]);
    }else{clicked = element.toggleAttribute("o"+families[currentFamily][0]);}
    let color = 'linear-gradient(to bottom';
    let count = 0;
    let lastColor='';
    for(let h=0;h<families.length;h++){
      let bool = false;
      if(input){
        bool = element.hasAttribute(families[h][0]);
      }else {bool = element.hasAttribute("o"+families[h][0]);}
      if(bool){
        color += ", "+families[h][2]+" "+(count*14.28)+"% "+((count+1)*14.28)+"%";
        count++;
      }
    }
    color += ",white "+(count*14.28)+"% 100%)";
    if(count>0){
      element.style.background=color;
    }else{element.removeAttribute('style');}
    if(input){
      if(clicked){
        unavailabilities[currentFamily].push(day);
      }
      else{
        let tmp = [];
        for(let i=0;i<unavailabilities[currentFamily].length;i++)
          if(unavailabilities[currentFamily][i]!=day){
            tmp.push(unavailabilities[currentFamily][i]);
        }
        unavailabilities[currentFamily]=tmp;
      }
    }else{
      let n = day.substring(1)
      if(clicked){
        schedule[currentFamily].push(n);
      }
      else{
        let tmp = [];
        for(let i=0;i<schedule[currentFamily].length;i++)
          if(schedule[currentFamily][i]!=n){
            tmp.push(schedule[currentFamily][i]);
        }
        schedule[currentFamily]=tmp;
      }
    }
}

function next() {
    currentYear = (currentWeek === 51) ? currentYear + 1 : currentYear;
    currentWeek = (currentWeek + 1) % 52;
    showCalendar(currentWeek, currentYear,true,false,false,0);
}

function previous() {
    currentYear = (currentWeek === 0) ? currentYear - 1 : currentYear;
    currentWeek = (currentWeek === 0) ? 51 : currentWeek - 1;
    showCalendar(currentWeek, currentYear,true,false,false,0);
}

function jump() {
    currentYear = parseInt(selectYear.value);
    currentWeek = parseInt(selectWeek.value);

    showCalendar(currentWeek, currentYear,true,false,false,0);
}

function createWeekOptions(year){
  document.getElementById("week").innerHTML='';

  let firstMonday = new Date(year,0).getDay();
  if(firstMonday<=1){firstMonday=2-firstMonday;}
  else{firstMonday=9-firstMonday;}
  let monday = new Date(year,0,firstMonday);

  for(let i = 0;i<52;i++){
    let option = document.createElement("option");
    option.value = i;
    let d = monday.toDateString()
    let text = document.createTextNode(d.substring(0,d.length-5));
    monday.setDate(monday.getDate()+7)
    option.appendChild(text);
    document.getElementById("week").appendChild(option);
  }
}

//clear 0 = reset top calendar, clear 1 = reset bottom, clear 2 = reset both
function showCalendar(week, year, reset,av=false,sch=false,clear=2) {
    //get the date of the starting monday
    createWeekOptions(year);
    if(reset==true){
      unavailabilities=[[],[],[],[],[],[],[]];
    }
    // find the first monday of the year
    let firstMonday = new Date(year,0).getDay();
    if(firstMonday<=1){firstMonday=2-firstMonday;}
    else{firstMonday=9-firstMonday;}
    //get the date of the starting monday
    let startMonday = new Date(year,0,firstMonday);
    startMonday.setDate(startMonday.getDate()+(week*7));

    selectYear.value = year;
    selectWeek.value = week;

    let twice=1;
    if(clear==2){
      twice = 2;
      clear--;
    }
    for(let t=0;t<twice;t++){
      let month=startMonday.getMonth();

      let firstDay = startMonday.getDate();
      let daysInMonth = 32 - new Date(year, month, 32).getDate();
      let tbl = document.getElementById("calendar-body");
      if(clear==1){
        tbl = document.getElementById("ocalendar-body");
      } // body of the calendar}

      // clearing all previous cells
      tbl.innerHTML = "";

      // creating all cells
      let date = firstDay-1;
      for (let i = 0; i < 4; i++) {
          // creates a table row
          let row = document.createElement("tr");

          //creating individual cells, filling them up with data.
          for (let j = 0; j < 7; j++) {
              let cell = document.createElement("td");
              if(date>daysInMonth){
                if(month==11){
                  month = 0;
                }else{
                month++;}
                date=1;
              }
              let cellText = document.createTextNode((month+1)+"/"+date);
              cell.setAttribute('class','')
              if(clear==0){
                cell.setAttribute('id',(j+(i*7)));
              }else{
                cell.setAttribute('id',"o"+(j+(i*7)));
                cell.classList.add('crossed')
              }
              cell.classList.add('on');
              if(weekdayOnly){
                if(j==0||j==6){
                  cell.removeAttribute('class');
                  cell.setAttribute('style','background-color:LightGrey');
                }
              }
              if(clear==1){
                cell.addEventListener('click',function(){select(cell,false)});
              }else {cell.addEventListener('click',function(){select(cell)});}
              cell.appendChild(cellText);
              row.appendChild(cell);
              date++;
          }

          tbl.appendChild(row); // appending each row into calendar body.
          let sun = 'sun';
          let sat = 'sat';
          if(clear==1){
            sun='osun';
            sat='osat';
          }
          if(weekdayOnly){
            document.getElementById(sun).setAttribute('style','background-color:LightGrey');
            document.getElementById(sat).setAttribute('style','background-color:LightGrey');
          }
      }
      clear--;
    }

    if(av!=false){
      for(let i=0;i<familyNumber;i++){
        for(let j=0;j<av[i].length;j++){
          let element = document.getElementById(av[i][j]);
          currentFamily = i;
          select(element);
        }
      }
      currentFamily=0;
    }if(sch!=false){
      for(let i=0;i<familyNumber;i++){
        for(let j=0;j<sch[i].length;j++){
          let element = document.getElementById("o"+sch[i][j]);
          currentFamily = i;
          select(element);
        }
      }
      currentFamily=0;
    }

}

function toggleSchedule(schedule){
  if(!(schedule && !document.getElementById('ocalendar').hasAttribute('hidden'))){
    let hidden = document.getElementById('ocalendar').toggleAttribute('hidden');
    document.getElementById('year').toggleAttribute('disabled');
    document.getElementById('week').toggleAttribute('disabled');
    document.getElementById('previous').toggleAttribute('disabled');
    document.getElementById('next').toggleAttribute('disabled');
    document.getElementById('calendar').toggleAttribute('hidden');
    if(hidden){
      context = 'Availability';
      document.getElementById('toggleSchedule').innerHTML='Show Schedule';
    }else {
      document.getElementById('toggleSchedule').innerHTML='Change Availabilities';
        context = 'Schedule';
      }
  }
}

function toggleWeekdays(){
  if(weekdayOnly==true){
    weekdayOnly= false;
    document.getElementById('sun').setAttribute('class','on');
    document.getElementById('sat').setAttribute('class','on');
    document.getElementById('sun').removeAttribute('style');
    document.getElementById('sat').removeAttribute('style');
    document.getElementById('osun').classList.add(...['crossed','on']);
    document.getElementById('osat').classList.add(...['crossed','on']);
    document.getElementById('osun').removeAttribute('style');
    document.getElementById('osat').removeAttribute('style');
    for(let i=0;i<4;i++){
      document.getElementById(0+(7*i)).removeAttribute('style');
      document.getElementById(6+(7*i)).removeAttribute('style');
      document.getElementById(0+(7*i)).setAttribute('class','on');
      document.getElementById(6+(7*i)).setAttribute('class','on');
      document.getElementById("o"+(0+(7*i))).removeAttribute('style');
      document.getElementById("o"+(6+(7*i))).removeAttribute('style');
      document.getElementById("o"+(0+(7*i))).classList.add(...['crossed','on']);
      document.getElementById("o"+(6+(7*i))).classList.add(...['crossed','on']);
    }
    document.getElementById('toggleWeekdays').innerHTML='Weekends ON';
  }else{
    weekdayOnly = true;
    document.getElementById('sun').setAttribute('style','background-color:LightGrey');
    document.getElementById('sat').setAttribute('style','background-color:LightGrey');
    document.getElementById('sun').removeAttribute('class');
    document.getElementById('sat').removeAttribute('class');
    document.getElementById('osun').setAttribute('style','background-color:LightGrey');
    document.getElementById('osat').setAttribute('style','background-color:LightGrey');
    document.getElementById('osun').removeAttribute('class');
    document.getElementById('osat').removeAttribute('class');
    for(let i=0;i<4;i++){
      for(let f=0;f<families.length;f++){
        document.getElementById(0+(7*i)).removeAttribute('family'+(f+1));
        document.getElementById(6+(7*i)).removeAttribute('family'+(f+1));
        document.getElementById("o"+(0+(7*i))).removeAttribute('ofamily'+(f+1));
        document.getElementById("o"+(6+(7*i))).removeAttribute('ofamily'+(f+1));
      }
      document.getElementById(0+(7*i)).setAttribute('style','background-color:LightGrey');
      document.getElementById(6+(7*i)).setAttribute('style','background-color:LightGrey');
      document.getElementById(0+(7*i)).removeAttribute('class');
      document.getElementById(6+(7*i)).removeAttribute('class');
      document.getElementById("o"+(0+(7*i))).setAttribute('style','background-color:LightGrey');
      document.getElementById("o"+(6+(7*i))).setAttribute('style','background-color:LightGrey');
      document.getElementById("o"+(0+(7*i))).removeAttribute('class');
      document.getElementById("o"+(6+(7*i))).removeAttribute('class');
    }
    for(let f=0;f<unavailabilities.length;f++){
      let tmp = [];
      for(let a=0;a<unavailabilities[f].length;a++){
        if(((unavailabilities[f][a]%7)!=0)&&((unavailabilities[f][a]%7)!=6)){
          tmp.push(unavailabilities[f][a]);
        }
      }
      unavailabilities[f]=tmp;
    }
    document.getElementById('toggleWeekdays').innerHTML='Weekends OFF';
  }
}

function familyText(){
  familyNumber = parseInt(document.getElementById('familyNumber').value);
  if(isNaN(familyNumber)){
    document.getElementById('familyNumber').value = 5;
    familyNumber = 5;
  }
  else if(familyNumber<2){
    document.getElementById('familyNumber').value = 2;
    familyNumber = 2;
  }
  else if(familyNumber>7){
    document.getElementById('familyNumber').value = 7;
    familyNumber = 7;
  }
  for(let i =0;i<familyNumber;i++){
    document.getElementById('family'+(i+1)).removeAttribute("hidden");
    document.getElementById('btn'+(i+1)).removeAttribute("hidden");
  }
  for(let i=familyNumber;i<7;i++){
    document.getElementById('family'+(i+1)).setAttribute('hidden','');
    document.getElementById('btn'+(i+1)).setAttribute('hidden','');
  }
}

//calculates the schedule
function submit(){
  schedule = [[],[],[],[],[],[],[]];
  let availabilities = [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];
  if(!weekdayOnly){
    availabilities.push([],[],[],[],[],[],[],[]);
  }
  let n = 0;
  for(let i=0;i<28;i++){
    n=i;
    if(weekdayOnly){
      if(i%7!=0 && i%7!=6){
        n = (Math.floor(i/7)*5)+(i%7)-1;
      }else{continue;}
    }
    for(let f=0;f<familyNumber;f++){
      if(!unavailabilities[f].includes(`${i}`)){
        availabilities[n].push(f);
      }
    }
  }

//uncomment when alg is ready
  let toggleList = [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1];

  let algResult = computeSchedule(familyNumber,availabilities);

  if(weekdayOnly){
    for(let i=0;i<algResult[0].length;i++){
      toggleList[((Math.floor(i/5)*7)+(i%5)+1)]=algResult[0][i];
    }
  } else {toggleList = algResult[0];}

  // let toggleList = alg(); //comment out for new alg
  showCalendar(currentWeek, currentYear,false,false,false,1);

  let oldFamily = currentFamily;
  for(let i=0;i<toggleList.length;i++){
    if(toggleList[i]!=-1){
      let element = document.getElementById("o"+i);
      currentFamily = toggleList[i];
      select(element,false);
    }
  }
  currentFamily=oldFamily;
  toggleSchedule(true);
}

function downloadSchedule(){
  let toggleList = [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];
  for(let f =0;f<familyNumber;f++){
    for(let a=0;a<schedule[f].length;a++){
      toggleList[parseInt(schedule[f][a])].push(f);
    }
  }
  let monthday = document.getElementById('o1').textContent;
  if(!weekdayOnly){
    monthday = document.getElementById('o0').textContent;
  }
  let date = new Date(Date.parse(monthday+'/'+currentYear));
  var text = `<div class="calendar"><span class="day-name">Sun</span><span class="day-name">Mon</span><span class="day-name">Tue</span><span class="day-name">Wed</span><span class="day-name">Thu</span><span class="day-name">Fri</span><span class="day-name">Sat</span>`

  for(let i =0;i<28;i++){
      let day = date.getMonth()+"/"+date.getDate();
      text += `<div class="day`;
      let families = '';
      if(toggleList[i].length>0){
        for(let a=0;a<toggleList[i].length;a++){
            if(weekdayOnly & (i%7!=0 && i%7!=6)){
              families+=`
              ${familyNames[toggleList[i][a]]}`;
            }else{
              families+=`
              ${familyNames[toggleList[i][a]]}`;
            }
          }
          text+=`">${day}${families}</div>`
        }else if((i%7!=0 && i%7!=6)){text+=` crossed">${day}</div>`;}
        else{text+=` greyed">${day}</div>`}
      date.setDate(date.getDate()+1);
  }
  text+=`</div>
  <style>
  html,
  body {
    width: 100%;
    height: 100%;
  }

  body {
    background: #f5f7fa;
    padding: 40px 0;
    box-sizing: border-box;
    font-family: Montserrat, "sans-serif";
    color: #51565d;
  }

  .calendar {
    display: grid;
    width: 100%;
    grid-template-columns: repeat(7, minmax(120px, 1fr));
    grid-template-rows: 50px;
    grid-auto-rows: 120px;
    overflow: auto;
  }

  .day {
    white-space: pre;
    border-bottom: 1px solid rgba(166, 168, 179, 0.12);
    border-right: 1px solid rgba(166, 168, 179, 0.12);
    text-align: right;
    padding: 14px 20px;
    letter-spacing: 1px;
    font-size: 12px;
    box-sizing: border-box;
    color: #98a0a6;
    position: relative;
    pointer-events: none;
    z-index: 1;
  }
  .crossed{
    background-image: linear-gradient(to bottom right,  transparent calc(50% - 1px), red, transparent calc(50% + 1px));
  }
  .greyed{
    background-color: lightGrey;
  }
  </style>
  `;
  var data = new Blob([text], {type: 'text/plain'});

  var url = window.URL.createObjectURL(data);

  document.getElementById('download_link').href = url;
}

//logic for generating toggleList fairly
//creates a list of days and the unavailabilities of those days, then sorts it so the least available days are first
//sorts the families from most to least available
//loops through the list of days from least availble first, and then loops through families starting at least available, and the first family found
//that can take the day is assigned it. If a family has already been assigned the ideal number of days (total days/number of families) it tries to find another.
//It increases the count of days assigned them by 1, then "decreases" the unavailabilities by 1 for all families that had that day unavailable, and re-sorts unavailabilities
// the logic here: try to sort the least available families first, and try to fit them in the least available days if possible, so that very available days and very available families
// are last to assign and are likely to be fillable. The unavailability count of the other unavailable families is decreased by 1 each time a family is assigned in order to spread out the distribution more evenly
// a very unavailable family will still be first in the queue multiple times before it evens out and they begin alternating assignments
function alg(){
  let toggleList = [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1];
  let fDaysAv = [];
  let found = false;
  let idealDays = Math.floor(20/familyNumber);
  if(!weekdayOnly){
    idealDays = Math.floor(28/familyNumber);
  }

  let calAv = [[0],[1],[2],[3],[4],[5],[6],[7],[8],[9],[10],[11],[12],[13],[14],[15],[16],[17],[18],[19],[20],[21],[22],[23],[24],[25],[26],[27]];
  for(let i =0;i<familyNumber;i++){
    fDaysAv.push([i,0,unavailabilities[i].length]);
    for(let j=0;j<unavailabilities[i].length;j++){
      calAv[unavailabilities[i][j]].push(i);
    }
  }
  calAv.sort(function(a,b){
    return b.length - a.length;
  });
  fDaysAv.sort(function(a,b){
    return b[2] - a[2];
  });
  let day = 0;
  let av = [];
  for(let i=0;i<calAv.length;i++){
    found=false;
    day = calAv[i][0]
    if(!(weekdayOnly & (day%7==0||day%7==6))){
      av = calAv[i].slice(1);
      //idmod is for multiple passes on attempts to insert values. "idealDays" is the ideal number of days a person should have in the schedule, and idmod modifies that
      for(let idmod=0;idmod<2;idmod++){
        for(let f=0;f<fDaysAv.length;f++){
          if(fDaysAv[f][1]<(idealDays+idmod)){
            if(!av.includes(fDaysAv[f][0])){
              toggleList[day]=fDaysAv[f][0];
              fDaysAv[f][1]++;
              for(let f=0;f<fDaysAv.length;f++){
                if(av.includes(fDaysAv[f][0])){
                  fDaysAv[f][2]--;
                }
              }
              fDaysAv.sort(function(a,b){
                return b[2] - a[2];
              });
              found = true;
              break;
            }
          }
        }
        if(found==true){
          break;
        }
      }
    }
  }

  return toggleList;
}

function shuffle(a) {
        var j, x, i;
        for (i = a.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = a[i];
            a[i] = a[j];
            a[j] = x;
        }
        return a;
    }

    function computeSchedule(nworkers, workerAvailability) {
        var JSLACK_MAX = 7;

        /* construct a model to be solved later */
        var model = {
            "optimize": "unfairness", // objective is to minimize unfairness
            "opType": "min",
            "constraints": {},
            "variables": {},
            "ints": {}
        };

        var ardays = []
        for (iday = 0; iday < workerAvailability.length; iday += 1) {
            ardays.push(iday);
        }
        shuffle(ardays); //shuffle for better randomization

        var ndays = 0; // tracks total days currently entered in optimization problem, increments each time a new day is added
                       // note that days with no availability for any worker will not be added into the solver
        for (iday of ardays) {
            day = workerAvailability[iday]
            day = shuffle(day); //shuffle the workers in the days
            for (var iworker=0; iworker<day.length; iworker++) {
                availableWorker = day[iworker]
                //create a variable like 'assignedp2d13' which will be 1 if the parent is assigned that day, 0 otherwsie
                let vn = "assignedw" + availableWorker + "d" + iday; // 'assignedp2d13'
                let vns = "aw" + availableWorker + "d" + iday; // a short name of the variable, used to constrain it to be non-negative
                let vw_min = "mintotalw" + availableWorker; // a  max constraint for the total work done by this worker
                let vw_max = "maxtotalw" + availableWorker; // a min constraint for the total work done by this worker
                let vd = "totald" + iday; // a constraint for the total number of workers that work this day

                // add variables to model
                model.variables[vn] = {};
                model.variables[vn][vns] = 1;
                model.variables[vn][vw_max] = 1; //will set relevant constraint later
                model.variables[vn][vw_min] = 1; //will set relevant constraint later
                model.variables[vn][vd] = 1;
                model.constraints[vns] = {"min": 0}; // constrain that this work variable is non-negative
                model.ints[vn] = 1; // specify that this variable should be an integer

                if (!(model.constraints.hasOwnProperty(vd))) { // if we haven't seen this day yet
                    model.constraints[vd] = {"equal": 1}; // constrain that the number of workers that work this day is exactly 1
                    ndays += 1; // and add 1 to our counter for the total number of days in the problem

                }
            }
        }

        let fairalloc = ndays/nworkers;
        let fairallocround = Math.round(fairalloc);

        /* for each worker */
        minmaxar = ["min", "max"]
        for (c of minmaxar) {
            for (iworker = 0; iworker < nworkers; iworker += 1) {
                let vw =  c + "totalw" + iworker;
                for (var jslack=0; jslack<JSLACK_MAX; jslack+=1) {
                    let sw =  c + "slackw" + iworker + "index" + jslack; // a "slack" variable for the worker
                    let sw_max =  c + "swmax" + iworker + "index" + jslack; //constraint variable for max on slack var
                    let sw_min =  c + "swmin" + iworker + "index" + jslack; //min

                    model.variables[sw] = {}; // add the slack variable
                    model.variables[sw][sw_max] = 1;
                    model.variables[sw][sw_min] = 1;

                    if (c == "min") {
                        model.variables[sw][vw] = 1; // constrain that the total days worked
                    } else {
                        model.variables[sw][vw] = -1; // constrain that the total days worked
                    }

                    if (c == "max") {
                        model.variables[sw]["unfairness"] = Math.pow(fairallocround + jslack + 1 - fairalloc, 2) - Math.pow(fairallocround + jslack - fairalloc, 2);
                    } else {
                        model.variables[sw]["unfairness"] = Math.pow(fairallocround - jslack - 1 - fairalloc,2) - Math.pow(fairallocround - jslack - fairalloc,2);
                    }
                    if (jslack != JSLACK_MAX-1) {
                        model.constraints[sw_max] = {"max": 1}; //constrain to less (or equal to) than 1
                    }
                    model.constraints[sw_min] = {"min": 0};  //constrain to more (or equal to) than 0
               }
               if (c == "min") {
                    model.constraints[vw] = {"min": fairallocround};
               } else {
                    model.constraints[vw] = {"max": fairallocround};
               }
            }
        }

        /* log some stuff to the console, for debugging */
        console.log("model:", model);

        /* solve the problem */
        var results = solver.Solve(model);
        console.log("solved: ", results);

        let outputs = []
        for (iday = 0; iday<workerAvailability.length; iday+=1) {
            outputs[iday] = -1; //initialize assignment to 0
        }
        if (results.feasible) {
            /* for each day, assign it the appropriate classes for its assignment */
            for (iday = 0; iday < workerAvailability.length; iday += 1) {
                for (iworker = 0; iworker <nworkers; iworker+=1 ) {
                    let vn = "assignedw" + iworker + "d" + iday;
                    if (results[vn] == 1) {
                        outputs[iday] = iworker;
                        break;
                    }
                }
            }
            console.log("assignments: ", outputs);
        } else {
            console.log("No assignment possible due to solver error.")
            return [null, 0];
        }
        return [outputs, results.result];
    }
