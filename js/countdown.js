let xmasMessage = [
  'My your Christmas sparkle with moments of love, laughter and goodwill. And may the year ahead be full of contentment and joy.',
  'May you have the spirit of christmas which is hope, and the heart of Christmas which is love.',
  'May this festive season sparkle and shine,may all of your wishes and dreams come true and may you feel this hapiness all year round. Merry Christmas.',
  'Christmas is a special time to enjoy with all your loved ones, spreading divinity and cheer around. Merry Christmas and happy new year.',
  'This festive season is so much more than Christmas parties and gift giving. May your Christmas be filled with the true miracles and meaning of this beautiful time.',
  'For your christmas time, I wish you many blessings and even more love I am grateful for you and your thoughtfulness','May the joy and peace of Christmas be with you all through the year. Wishing you a season of blessings from heaven above. Happy Christmas',
  'The true heart of Christmas is one of wonder and warmth. May any festive stress you feel fade away and be replaced with his Merry Christmas.',
  'I hope santa is Good to you this year cause you only deserve the best. Merry Christmas to you.',
  'May your world be filled with warmth and good cheer this Holy season and throughout the year.',
  'May all the sweet magic of Christmas conspire to gladdden your heart and fill every desire. Merry Christmas',
  'Let the spirit of love gently fill our hearts and homes. in the loveliest of celebrations may you find many reasons for hapiness.',
  'A silent night, a star above, a blessed gift of hope and love. A merry Christmas to you and your family.',
  'May your Christmas sparkle with moments of love, laughter and goodwill and may the year ahead be full of contentment and joy.',
  'Wishing you a joyous Christmas and a happy and prosperous New Year.',
  'Wish you all the best this holiday season and throughout the year,Merry Christmas!',
  'I wish this holiday season you would receive Love, peace and joy for the whole year,Merry Christmas!',
  'If I could tell Santa what to give you,It would be happiness and peace Not just this Christmas,but for the entire year.',
  'May this holiday season be full of surprises and cheers,simply because you deserved the best',
  'May your life be filled with the blessings of Christmas And may it always be yours.',
  'May this year’s Christmas be the best Christmas ever.Warmest wishes to you and your family.Have a great and wonderful Christmas and New Year!',
  'Celebrate this day with a heart Filled with happiness, cheer and love Share the blessings to others for that is the true meaning of Christmas Have a happy holiday!',
  'Listen to the whispers of the wind this Christmas. They carry a message of love, peace, hope and happiness for you. Wishing you a merry Christmas.',
  'I pray this season brings you unending bliss, Peace that transcends your soul and laughter for all your days. Merry Christmas.',
  'I pray this season brings to you the courage to brave new storms, Joy that numbs all pain and a love that envelops you forever. Best wishes and a very Merry Christmas to you',
  'This Christmas, I wish you all the best gifts in life – The gift of happiness The gift of love The gift of peaceMerry Christmas and Happy New Year!',
  'May you be blessed with gifts of hope, love and peace. Merry Christmas to you and your family.',
  'May this season of love be the beginning of a blessed and peaceful year ahead. Merry Christmas and Happy New Year.',
  'I wish you the unconditional love of God in all the dreams of your heart and your everyday prayers. Merry Christmas.',
  'I wish you nothing but the best of the joyous Christmas season. Embrace every blessing that will come your way. Merry Christmas!',
  'Amidst the cold weather and, misty atmosphere I send nothing but the warmest Christmas greetings this Yuletide season.Have a very merry Christmas!',
]
const random = Math.floor(Math.random() * xmasMessage.length);
const submitBtn = document.querySelector('button');
const nameInput = document.querySelector('.custom-name');
const customAlert = document.querySelector('.custom-alert');
const media = document.querySelector('audio');
const invalidInput = document.querySelector('.invalid-input');
//const playBtn = document.querySelector('.play')
//playBtn.style.display = 'none';

function updateTime(){
  var today = new Date();
  var endYear = new Date(2019,11,24,23,59,59,999);
  endYear.setFullYear(today.getFullYear());

  var msPerDay = 24*60*60*1000;
  var secsPerDay = 24*60*60*1000*24;
  var daysLeft = (endYear.getTime() - today.getTime())/msPerDay;
  var hoursLeft = daysLeft * 24;
  var minutesLeft  = hoursLeft * 60;
  var secondsLeft = minutesLeft * 60;
  let countdown = document.querySelector('.countdown-timer');
      countdown.innerHTML = Math.floor(daysLeft) + " days"+' <br> ' + "   "


  let[days,hours]=daysLeft.toString().split('.')
  let[parent,child] =  daysLeft.toString().split('.');
  let newHours = ('0.' + child) * 24;
  let[hour,minutes] = newHours.toString().split('.');
  minutes = ('0.' + minutes) * 60;
  let [minute,seconds] = minutes.toString().split('.');
  seconds = ('0.' + seconds) * 60;
       
  countdown.innerHTML += Math.floor(('0.' + child) * 24) + ' hours';
  countdown.innerHTML += ' <br> ' + Math.floor(minutes) + ' minutes';
  countdown.innerHTML += ' <br> ' + Math.floor(seconds) + ' seconds';
  countdown.innerHTML += '<br> To Christmas.';
         
}
updateTime();

setInterval(updateTime,1000);

function displayXmasMsg(){
      let sliceName = nameInput.value.slice(0,1)
      let newInput = nameInput.value.replace(sliceName,sliceName.toUpperCase());
  if(nameInput.value === ""){
      invalidInput.textContent = "Enter a valid name";
      
  }else{
  //playBtn.style.display = 'block'
  customAlert.innerHTML =`<p> ${newInput}, <br> ${xmasMessage[random]}</p>`;
  customAlert.classList.add('add-font');
  
}
  
}

  function playMedia(e){
    if(media.paused){
      media.play();
    }else{media.pause()}
  }
  

//playBtn.addEventListener('click',playMedia);
submitBtn.addEventListener('click',displayXmasMsg);
window.addEventListener('mousedown',playMedia);

window.addEventListener('keyup',function(e){
  if(e.keyCode == '13' ){
    displayXmasMsg();
  }else{return;}
})