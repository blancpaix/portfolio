const eventSelector = () => {
  let scrolledLevel = Math.floor(scrollY * 3 / window.innerHeight);
  // 뒤에거에서 -1 해주면 값 낭낭하게 잘 들어감
  console.log('scrollKLevel', scrolledLevel, scrollY / window.innerHeight);

  if (scrolledLevel < 18) {
    return 'INTRO_ACITON'
  } else if (scrolledLevel >= 18 && scrolledLevel < 30) {
    return 'SECOND_ACTION';
  } else if (scrolledLevel >= 36 && scrolledLevel < 39) {
    return 'SECOND_2_ACTION';
  } else if (scrolledLevel >= 42 && scrolledLevel < 45) {
    return 'THIRD_1_ACTION';
  } else if (scrolledLevel >= 45 && scrolledLevel < 54) {
    return 'THIRD_2_ACTION';
  } else if (scrolledLevel >= 66 && scrolledLevel < 81) {
    return 'FIFTH_ACTION';
  } else {
    return 'NORMAL'
  }
};

const eventCaller = (scrollIndex, scrollY) => {
  switch (scrollIndex) {
    case 'INTRO_ACITON':
      return firstAction(scrollY);
    case 'SECOND_ACTION':
      return secondAction(scrollY);
    case 'SECOND_2_ACTION':
      return second2Action(scrollY);
    case 'THIRD_1_ACTION':
      return thirdAction();
    case 'THIRD_2_ACTION':
      return third2Action(scrollY);
    case 'FIFTH_ACTION':
      return fifthAction(scrollY);
    default:
      return;
  }
};

window.addEventListener('resize', () => {
  canvasHeight = thirdCanvas1.getBoundingClientRect().height;
  canvasWidth = thirdCanvas1.getBoundingClientRect().width;
  document.querySelectorAll('.image-added').forEach(el => {
    el.remove();
  })
  let counter = 0;
})
window.addEventListener('scroll', () => {
  let eventName = eventSelector();
  eventCaller(eventName, scrollY);

});


const title1 = document.querySelector('#title1');
const title2 = document.querySelector('#title2');
const subTitle1 = document.querySelector('#sub-title1');
const firstTitleBox = document.querySelector('#first-title-box');
const secondTitleBox = document.querySelector('#second-title-box');
let activatedText1 = false;
let activatedTitle2 = false;

const firstAction = (scrollY) => {
  const scrollPercent = scrollY / (window.innerHeight * 5) * 100;
  console.log('이건 뭐녀??', scrollPercent);
  if (scrollPercent < 10) {
    title1.classList.replace('disabled', 'active');
    subTitle1.style.opacity = 0;
  } else if (scrollPercent >= 10 && scrollPercent < 40) {
    subTitle1.classList.replace('ready', 'active');
    subTitle1.style.opacity = scrollY * 30 / window.innerHeight;
    title1.classList.remove('disabled');
    title2.classList.replace('active', 'ready');
  } else if (scrollPercent >= 40 && scrollPercent < 70) {
    title1.classList.add('disabled');
    title2.classList.replace('ready', 'active');
    firstTitleBox.classList.remove('disabled')
    secondTitleBox.classList.replace('active', 'ready');
  } else if (scrollPercent >= 70) {
    firstTitleBox.classList.add('disabled')
    secondTitleBox.classList.replace('ready', 'active');
  }

  return;
}


const onAirSlider = document.querySelector('#onair-slider');
const onAirOverlay = document.querySelector('#onair-overlay');
const onAirSpan1 = document.querySelector('#onair-span-1');
const onAirSpan2 = document.querySelector('#onair-span-2');
const onAirSpan3 = document.querySelector('#onair-span-3');

let isActiveOnairSpan1 = false;
let isActiveOnairSpan2 = false;
let isActiveOnairSpan3 = false;

const secondAction = (scrollY) => {
  let relativeScroll = scrollY - window.innerHeight * 6;
  let scrollPercent = relativeScroll / (window.innerHeight * 4) * 100;
  console.log('이건 뭐녀??', scrollPercent);

  if (scrollPercent > 30) {
    onAirSlider.classList.add('dimmer');
    onAirOverlay.classList.replace('ready', 'active');
  }
  onAirSlider.style.transform = `translateX(-${relativeScroll * 1}px)`;
  if (scrollPercent > 50 && !isActiveOnairSpan1) {
    onAirSpan1.classList.replace('ready', 'active');
    onAirSpan1.style.fontSize = '6rem';
  }
  if (scrollPercent > 60 && !isActiveOnairSpan2) {
    onAirSpan2.classList.replace('ready', 'active');
    onAirSpan2.style.fontSize = '6rem';
  }
  if (scrollPercent > 70 && !isActiveOnairSpan3) {
    onAirSpan3.classList.replace('ready', 'active');
    onAirSpan3.style.fontSize = '6rem';
  }
  return;
}



const secondLiners = document.querySelectorAll('.white-liner-animate');
const cronTitle2 = document.querySelector('#cron-title-2');
const cronTitle3 = document.querySelector('#cron-title-3');

const second2Action = (scrollY) => {
  let relativeScroll = scrollY - window.innerHeight * 12;
  let scrollPercent = relativeScroll / (innerHeight) * 100;

  if (scrollPercent < 50) {
    secondLiners.forEach((el, idx) => {
      el.style.height = `${scrollPercent}vh`
    })
  } else if (scrollPercent >= 50 && scrollPercent < 65) {
    cronTitle2.classList.replace('hidden', 'active');
  } else if (scrollPercent >= 75 && scrollPercent < 100) {
    cronTitle3.classList.replace('hidden', 'active');
  }
  return;
}


const thirdTitle1 = document.querySelector('#third-title-1');

let isMagnified = false;

const thirdAction = () => {
  console.log('이게 세번째임??');
  if (!isMagnified) thirdTitle1.style.fontSize = '6rem';
}


const thirdCanvas1 = document.querySelector('#third-canvas-1');
const thirdCanvas2 = document.querySelector('#third-canvas-2');
let canvasHeight = thirdCanvas1.getBoundingClientRect().height;
let canvasWidth = thirdCanvas1.getBoundingClientRect().width;
const imgWidth = 200;
const imgHeight = 125;
let counter = 0;
const countLimiter = 18;

const addImage = () => {
  if (counter > countLimiter) return;
  randomHeigth = Math.abs(Math.floor(Math.random() * canvasHeight - imgHeight));
  randomWidth = Math.abs(Math.floor(Math.random() * canvasWidth - imgWidth));
  const addImage1 = document.createElement("img");
  addImage1.classList.add('image-added');
  addImage1.src = "images/msg.png";
  addImage1.style.top = `${randomHeigth}px`;
  addImage1.style.left = `${randomWidth}px`;
  addImage1.style.zIndex = 1;
  thirdCanvas1.appendChild(addImage1);

  const addImage2 = document.createElement("img");
  addImage2.classList.add('image-added');

  addImage2.src = "images/action.png";
  addImage2.style.top = `${randomHeigth}px`;
  addImage2.style.left = `${randomWidth}px`;
  addImage2.style.zIndex = 1;
  thirdCanvas2.appendChild(addImage2);
  counter++;
  console.log(counter);
}

const thirdImgBox1 = document.querySelector('#third-canvas-1');
const thirdImgBox3 = document.querySelector('#third-canvas-3');
const thirdImgBox2 = document.querySelector('#third-canvas-2');
const thirdImgBox4 = document.querySelector('#third-canvas-4');
let isAlerted = false;
const thirdAlerted = document.querySelector('#third-alerted');
const thirdSolved = document.querySelector('#third-solved');

const third2Action = (scrollY) => {
  const relativeScroll = scrollY - innerHeight * 15;
  const scrollPercent = relativeScroll / (innerHeight * 2) * 100;
  console.log('scrollPer', scrollPercent);

  if (scrollPercent < 10) {
    document.querySelectorAll('.image-added').forEach(el => {
      el.remove();
    })
    counter = 0;
    thirdImgBox1.classList.replace('disabled', 'active');
    thirdImgBox3.classList.replace('active', 'disabled');
    thirdImgBox2.classList.replace('disabled', 'active');
    thirdImgBox4.classList.replace('active', 'disabled');
    thirdAlerted.classList.replace('disabled', 'ready');
    thirdSolved.classList.replace('active', 'disabled');
  } else if (scrollPercent >= 10 && scrollPercent < 30) {
    addImage();
    if (!isAlerted) thirdAlerted.classList.replace('active', 'ready');
  } else if (scrollPercent >= 30 && scrollPercent < 50) {
    if (!isAlerted) thirdAlerted.classList.replace('ready', 'active');
  } else if (scrollPercent >= 50) {
    thirdImgBox1.classList.replace('active', 'disabled');
    thirdImgBox3.classList.replace('disabled', 'active');
    thirdImgBox2.classList.replace('active', 'disabled');
    thirdImgBox4.classList.replace('disabled', 'active');
    thirdAlerted.classList.replace('active', 'disabled');
    thirdSolved.classList.replace('disabled', 'active');
  }
  return;
}


const coverLetter1 = document.querySelector('#cover-letter-1');
const coverLetter2 = document.querySelector('#cover-letter-2');
const coverLetter3 = document.querySelector('#cover-letter-3');
const coverLetter4 = document.querySelector('#cover-letter-4');
const hiddenCover1 = document.querySelector('#hidden-cover-title-1');
const hiddenCover2 = document.querySelector('#hidden-cover-title-2');
const hiddenCover3 = document.querySelector('#hidden-cover-title-3');
const hiddenCover4 = document.querySelector('#hidden-cover-title-4');
const hiddenName = document.querySelector('#sixth-name-box');

const fifthAction = (scrollY) => {
  let relativeScroll = scrollY - window.innerHeight * 22;
  let scrollPercent = relativeScroll / (window.innerHeight * 5) * 100;
  console.log('이건 뭐녀??', scrollPercent);

  if (scrollPercent < 10) {
    coverLetter1.classList.remove('open');
    coverLetter2.classList.remove('open');
    coverLetter3.classList.remove('open');
    coverLetter4.classList.remove('open');
  } else if (scrollPercent >= 10 && scrollPercent < 30) {
    coverLetter1.classList.add('open');
    coverLetter2.classList.remove('open');
  } else if (scrollPercent >= 30 && scrollPercent < 50) {
    hiddenCover1.classList.remove('hidden')
    coverLetter1.classList.remove('open');
    coverLetter2.classList.add('open');
    coverLetter3.classList.remove('open');
  } else if (scrollPercent >= 50 && scrollPercent < 70) {
    hiddenCover2.classList.remove('hidden');
    coverLetter2.classList.remove('open');
    coverLetter3.classList.add('open');
    coverLetter4.classList.remove('open');
    hiddenName.classList.replace('active', 'hidden');
  } else if (scrollPercent >= 70 && scrollPercent < 90) {
    hiddenCover3.classList.remove('hidden');
    coverLetter3.classList.remove('open');
    coverLetter4.classList.add('open');
    hiddenName.classList.replace('active', 'hidden');
  } else if (scrollPercent >= 90) {
    hiddenCover4.classList.remove('hidden');
    coverLetter1.classList.remove('open');
    coverLetter2.classList.remove('open');
    coverLetter3.classList.remove('open');
    coverLetter4.classList.remove('open');
    hiddenName.classList.replace('hidden', 'active');
  }
  return;
}