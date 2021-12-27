console.log("The system is working");

// creating a json data
const plannetData = [
  {
    planetName: "Sun",
    tilt: "0",
    day: "~600 hours",
    year: "0 days",
    className: "card--sun",
  },
  {
    planetName: "Mercury",
    tilt: "0.034",
    day: "1,407 hours",
    year: "88 days",
    className: "card--mercury",
  },
  {
    planetName: "Venus",
    tilt: "177.3",
    day: "5,832 hours",
    year: "224.7 days",
    className: "card--venus",
  },
  {
    planetName: "Earth",
    tilt: "23.26",
    day: "23.9 hours",
    year: "365.2 days",
    className: "card--earth",
  },
  {
    planetName: "Mars",
    tilt: "25.2",
    day: "24.6 hours",
    year: "687 days",
    className: "card--mars",
  },
  {
    planetName: "Jupiter",
    tilt: "3.1",
    day: "9.9 hours",
    year: "4,331 days",
    className: "card--jupiter",
  },
  {
    planetName: "Saturn",
    tilt: "26.7",
    day: "10.7 hours",
    year: "10,747 days",
    className: "card--saturn",
  },
  {
    planetName: "Uranus",
    tilt: "97.8",
    day: "17.2 hours",
    year: "30,589 days",
    className: "card--uranus",
  },
  {
    planetName: "Neptune",
    tilt: "28.3",
    day: "16.1 hours",
    year: "59,800 days",
    className: "card--neptune",
  },
  {
    planetName: "Pluto",
    tilt: "122.5",
    day: "153.3 hours",
    year: "90,560 days",
    className: "card--pluto",
  },
];

const infoTitle = document.querySelector(".info__title");
const infoDegree = document.querySelector(".info__degree");
const infoHours = document.querySelector(".info__hours");
const infoDays = document.querySelector(".info__days");
const cards = document.querySelector(".card");
const body = document.body;

let i = -1;

// next planet function
function nextPlanet() {
  //  delete it's previous class
  // add the next className
  i++;
  i = i % plannetData.length;
  // when the function initailly starts , then mercury will be added
  if (i == 0) {
    cards.classList.add(`${plannetData[i].className}`);
    // console.log()
    cards.classList.remove(`${plannetData[plannetData.length - 1].className}`);
  } else {
    // cards.classList.remove()
    cards.classList.remove(`${plannetData[i - 1].className}`);
    cards.classList.add(`${plannetData[i].className}`);
  }

  infoTitle.textContent = `${plannetData[i].planetName}`;
  infoDegree.textContent = `${plannetData[i].tilt}`;
  infoHours.textContent = `${plannetData[i].day}`;
  infoDays.textContent = `${plannetData[i].year}`;
}

// preious planet function
function previousPlanet() {
  // delete the next planet className
  // add it's previous planet className

  if (i == 0) {
    cards.classList.remove(`${plannetData[i].className}`);
    // console.log()
    cards.classList.add(`${plannetData[plannetData.length - 1].className}`);

    i = plannetData.length - 1;
  } else {
    cards.classList.add(`${plannetData[i - 1].className}`);
    cards.classList.remove(`${plannetData[i].className}`);
    i--;
  }

  infoTitle.textContent = `${plannetData[i].planetName}`;
  infoDegree.textContent = `${plannetData[i].tilt}`;
  infoHours.textContent = `${plannetData[i].day}`;
  infoDays.textContent = `${plannetData[i].year}`;
}

nextPlanet();

body.addEventListener("keydown", function (e) {
  switch (e.keyCode) {
    case 39:
      nextPlanet();
      break;
    case 37:
      previousPlanet();
      break;
  }
});

// progress bar
const innerEle = document.querySelector(".inner");

const data = [
  {
    move: "100px",
  },
  {
    move: "200px",
  },
  {
    move: "300px",
  },
  {
    move: "400px",
  },
  {
    move: "600px",
  },
  {
    move: "800px",
  },
  {
    move: "1000px",
  },
  {
    move: "1200px",
  },
  {
    move: "1495px",
  },
  {
    move: "0px",
  },
];

const body1 = document;

console.log(body1);

let j = -1;

function changeWidth() {
  innerEle.style.width = data[j].move;
}

body1.addEventListener("keydown", function (e) {
  console.log(e.keyCode);
  switch (e.keyCode) {
    case 39:
      j++;
      if (j >= data.length) j = 0;
      changeWidth();
      break;
    case 37:
      j--;
      if (j < 0) j = data.length - 1;
      changeWidth();
      break;
  }
});

// making the data of the progress bar responsive

// const outerBar = document.querySelector('.outer')

// // console.log(outerBar.style)

// // outerBar.addEventListener)

// window.addEventListener('resize', function() {
//     console.log(this.window.innerWidth)
//     outerBar.clientWidth = this.window.innerWidth

// })
