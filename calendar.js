const calendarArray = [
  null, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const monthArray = [
  null,
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
class Calendar {
  constructor(elem, offset=0) {
    this.offset = offset;
    this.prototype = document.createElement('div');
    this.monthName = document.createElement('p');
    this.monthName.classList.add('month-name');
    this.monthNameIdx = new Date().getMonth() + this.offset+1;
    if (this.monthNameIdx >= 13) {
      this.monthNameIdx = this.monthNameIdx - 12;
    };
    this.monthName.innerHTML = `${monthArray[this.monthNameIdx]}`;
    this.prototype.appendChild(this.monthName);
    if (this.monthStart() > 4) {
      this.prototype.style.gridTemplateRows += ' 1fr';
    };
    this.prototype.classList.add('calendar');
    for (let i of ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"]) {
      let day = document.createElement('div');
      day.classList.add('calendar-top');
      day.innerHTML = `<p>${i}</p>`
      this.prototype.appendChild(day);
    };
    for (let i=0; i < this.monthStart(); i++) {
      let day = this.createDay(0);
      day.classList.add('empty');
      day.innerHTML = '';
      this.prototype.appendChild(day);
    };
    for (let i=1; i < this.daysInMonth()+1; i++) {
      let day = this.createDay(i);
      this.prototype.appendChild(day);
    };
    elem.appendChild(this.prototype);
    this.markToday();
  };
  createDay(num) {
    let div = document.createElement('div');
    div.classList.add('calendar-day');
    div.innerHTML = `<p>${num.toString()}</p>`;
    return div;
  };
  daysInMonth() {
    let date = new Date();
    let dateSelect = [date.getFullYear(), date.getMonth() + this.offset + 1];
    if (dateSelect[1] >= 13) {
      dateSelect = [dateSelect[0] + 1, dateSelect[1] - 12]
    };
    if (dateSelect[1] === 2 && dateSelect[0] % 4 === 0) {
      return 29;
    }
    else {
      return calendarArray[dateSelect[1]];
    }
  };
  markToday() {
    let date = new Date();
    let monthSelect = date.getMonth()+1;
    let daySelect = date.getDate();
    
    if (this.monthNameIdx === monthSelect) {
      for (let i of document.querySelectorAll('.calendar-day p')) {
        if (i.innerHTML == daySelect) {
          i.parentElement.classList.add('today');
        };
      };
    };
  };
  monthStart() {
    let date = new Date();
    let dateSelect = [date.getFullYear(), date.getMonth() + this.offset];
    if (dateSelect[1] >= 13) {
      dateSelect = [dateSelect[0] + 1, dateSelect[1] - 12]
    };
    return new Date(...dateSelect, 1).getDay();
  };
  removeSelf() {
    document.body.removeChild(this.prototype);
  }
};

function toggleScreen(screen) {
  screen.classList.toggle('on');
  if (screen.classList.contains('on')) {
    screen.style.display = 'block';
    setTimeout(() => {
      screen.style.opacity = 1;
    }, 50);
  }
  else {
    screen.style.opacity = 0;
    setTimeout(() => {
      screen.style.display = 1;
    }, 150);
  };
};


for (let i=0; i<12; i++) {
  new Calendar(document.body, i);
}