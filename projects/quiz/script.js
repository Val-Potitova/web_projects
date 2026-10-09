const tasks = [
    {
        riddle:"Всё валяется в квартире:</br>Тапок – шесть, носков – четыре.</br>Их <i>сложи</i> и убери.</br>(И на полках пыль протри!)",
        answers:["10","десять", "Десять"],
        hint:"Иногда самые страшные тайны оказываются совсем простыми. 6 + 4 = ?"
    },
    {
        riddle:"Бандиты в сад решили лезть:</br>Два вора там, два вора здесь.</br>Их увидали сторожа</br>И не сидели, рук сложа:</br>Тихонько окружили,</br>Связали и <i>сложили</i>!",
        answers:["4","четыре", "Четыре"],
        hint:"Сколько незваных гостей повязали сторожа?"
    },
    {
        riddle:"У Васи было 13 конфет, а у Пети на три конфеты больше. При этом у Вовочки было столько же, сколько у Пети и Васи вместе взятых! Сколько всего было конфет у ребят?",
        answers:["58","пятьдесят восемь", "Пятьдесят восемь"],
        hint:"Конфетная бухгалтерия не терпит ошибок. Сначала узнай запас Пети, затем выясни, сколько сладостей спрятал Вовочка, и только потом собери всё воедино."
    },
    {
        riddle:"В пирог вонзилась пара вилок:</br>Два на четыре – сколько дырок?",
        answers:["8","восемь", "Восемь"],
        hint:"На кухне орудуют две вилки, оставляя следы на месте преступления. Сколько проколов сделают обе, если на ней по четыре зубца?"
    },
    {
        riddle:"Какое следующее число последовательности?</br><strong>3 4 6 10 ...</strong>",
        answers:["18","восемнадцать", "Восемнадцать"],
        hint:"Кто-то любит вычитыть и умножать... Например, отнять один и удвоить."
    },
    {
        riddle:"Было три четырёхугольных стола. У каждого отпилили по одному углу. Сколько углов теперь у всех столов вместе?",
        answers:["15","пятнадцать", "Пятнадцать"],
        hint:"Пила скрипнула трижды, и по одному углу исчезло с каждого стола. Но не спеши вычитать всё подряд: сколько углов стало у каждого стола после отпиливания?"
    },
    {
        riddle:"Из-за какого числа образуются дырки?",
        answers:["3","три", "Три"],
        hint:"Некоторые числа умеют оставлять следы. Особенно когда долго трёшь..."
    },
];

const good = [
  "НЕТ! ТОЛЬКО НЕ ПАУТИНА!",
  "Я это запомню.",
  "ЭЙ! ТАК НЕЧЕСТНО!",
  "Какой же ты всё-таки гадкий!",
  "Мне паутина дороже сундука!",
  "ЕЩЁ 5 МИНУТ И Я ПРИДУ В ЯРОСТЬ!",
  "ЕЩЁ ОДНА?! Мои нервы!",
  "Я ТРЕБУЮ ПАУЗУ!",
  "МОЯ ПАУТИНА! МОЙ СУНДУК! МОЁ ЗОЛОТО!",
  "Я устал. Я мухожук.",
  "ПОЖАЛУЙСТА, ХОТЬ ОДНУ НИТКУ ОСТАВЬ!",
  "Я начинаю плакать...",
];

const bad = [
  "Как неожиданно, и как приятно!..",
  "Может, ещё разок?",
  "Я знал, что ты не справишься!",
  "Паук одобряет этот ответ.",
  "Ты точно хочешь продолжать?",
  "Я бы на твоём месте пересчитал.",
  "Мда, неловко вышло...",
  "Хихихи",
  "Испанский стыд...",
  "Покажите, на что вы способны!",
  "Не волнуйся, я подожду",
  "Почти! Ну ладно, не почти)",
  "Как же я горяч!",
  "Не смеши мою паутинку!"
];

const clickLines = [
  "ЭЙ! Руки прочь от моих лапок!",
  "Ты сейчас серьёзно?",
  "Не трогай паука.",
  "Я вообще-то занят охраной!",
  "Ещё раз ткнёшь — укушу!",
  "У меня вообще-то важная работа!",
  "Прекрати меня трогать!",
  'Не трогай меня за лапки!',
  'Я вообще-то страшный злодей!',
  'Не отвлекай меня от злодейства!',
  'У меня восемь лапок, и я ими горжусь.',
  'Хватит на меня смотреть! Я начинаю смущаться...'
];

const $ = id => document.getElementById(id);

const spider = $("spider");
const speech = $("speech");
const webLayer = $("webLayer");
const webFlash = $("webFlash");

let cur = 0;
let attempts = 0;
let speechTimer = null;
let emotionTimer = null;

const webSlots = [
  {
    x:"7%",
    y:"15%",
    size:"300px",
    height:"260px",
    cls:"corner top",
    flyX:"-170px",
    flyY:"-130px",
    rot:"-110deg"
  },
  // {
  //   x:"94%",
  //   y:"13%",
  //   size:"300px",
  //   height:"240px",
  //   cls:"corner top",
  //   flyX:"180px",
  //   flyY:"-110px",
  //   rot:"120deg"
  // },
  {
    x:"3%",
    y:"48%",
    size:"220px",
    height:"210px",
    cls:"corner",
    flyX:"-190px",
    flyY:"20px",
    rot:"-95deg"
  },
  // {
  //   x:"97%",
  //   y:"47%",
  //   size:"370px",
  //   height:"330px",
  //   cls:"corner",
  //   flyX:"190px",
  //   flyY:"40px",
  //   rot:"105deg"
  // },
  // {
  //   x:"9%",
  //   y:"82%",
  //   size:"280px",
  //   height:"280px",
  //   cls:"corner",
  //   flyX:"-170px",
  //   flyY:"150px",
  //   rot:"-120deg"
  // },
  {
    x:"91%",
    y:"82%",
    size:"360px",
    height:"310px",
    cls:"corner",
    flyX:"180px",
    flyY:"140px",
    rot:"125deg"
  },
  {
    x:"23%",
    y:"38%",
    size:"300px",
    height:"270px",
    cls:"question-web",
    flyX:"-140px",
    flyY:"-90px",
    rot:"-90deg"
  },
  {
    x:"77%",
    y:"38%",
    size:"180px",
    height:"200px",
    cls:"question-web",
    flyX:"145px",
    flyY:"-90px",
    rot:"100deg"
  },
  // {
  //   x:"17%",
  //   y:"65%",
  //   size:"330px",
  //   height:"290px",
  //   cls:"question-web",
  //   flyX:"-150px",
  //   flyY:"110px",
  //   rot:"-125deg"
  // },
  {
    x:"31%",
    y:"87%",
    size:"370px",
    height:"320px",
    cls:"chest-web",
    flyX:"-150px",
    flyY:"150px",
    rot:"-110deg"
  },
  // {
  //   x:"69%",
  //   y:"87%",
  //   size:"390px",
  //   height:"330px",
  //   cls:"chest-web",
  //   flyX:"155px",
  //   flyY:"145px",
  //   rot:"115deg"
  // },
  {
    x:"50%",
    y:"74%",
    size:"480px",
    height:"390px",
    cls:"chest-web",
    flyX:"30px",
    flyY:"170px",
    rot:"180deg"
  },
  // {
  //   x:"50%",
  //   y:"91%",
  //   size:"430px",
  //   height:"360px",
  //   cls:"chest-web",
  //   flyX:"20px",
  //   flyY:"190px",
  //   rot:"-170deg"
  // }
];


function createWebFragment(slot,index){

  const web = document.createElement("div");
  web.className = "web-fragment " + slot.cls;
  web.dataset.index = index;

  web.style.setProperty("--x",slot.x);
  web.style.setProperty("--y",slot.y);
  web.style.setProperty("--size",slot.size);
  web.style.setProperty("--height",slot.height);
  web.style.setProperty("--fly-x",slot.flyX);
  web.style.setProperty("--fly-y",slot.flyY);
  web.style.setProperty("--rot",slot.rot);

  for(let i=0;i<12;i++){
    const ray = document.createElement("span");
    ray.className = "ray";
    web.appendChild(ray);
  }

  for(let i=1;i<=5;i++){
    const loop = document.createElement("span");
    loop.className = "loop " + (
      i===1 ? "one" :
      i===2 ? "two" :
      i===3 ? "three" :
      i===4 ? "four" :
      "five"
    );
    web.appendChild(loop);
  }

  for(let i=1;i<=6;i++){
    const thread = document.createElement("span");
    thread.className = "thread t" + i;
    web.appendChild(thread);
  }

  webLayer.appendChild(web);
  return web;
}

const webFragments = webSlots.map(createWebFragment);

function clearEmotion(){
  spider.classList.remove(
    "evil",
    "mock",
    "horror",
    "suffer",
    "angry",
    "clicked"
  );
}

function setEmotion(type,duration=5000){
  clearTimeout(emotionTimer);
  clearEmotion();
  if(type){
    spider.classList.add(type);
  }
  if(duration){
    emotionTimer = setTimeout(()=>{
      clearEmotion();
    },duration);
  }
}


function say(text,type=null,duration=5000){

  clearTimeout(speechTimer);
  speech.textContent = text;
  speech.classList.add("show");
  if(type){
    setEmotion(type,duration);
  }
  speechTimer = setTimeout(()=>{
    speech.classList.remove("show");
    if(type){
      clearEmotion();
    }
  },duration);

}

function clearAnswerState(){
  $("answer").classList.remove("answer-correct","answer-wrong");
}

function moveSpider(){
  const isMobile = window.innerWidth <= 700;
  const isTablet = window.innerWidth <= 900;
  const spiderContainer = document.getElementById("spiderContainer");

  let positions;

  if(isMobile){
    positions = [
      ["auto","105px","8px"],
      ["auto","150px","8px"],
      ["auto","205px","8px"],
      ["auto","250px","8px"],
      ["auto","305px","8px"],
      ["auto","350px","50px"],
      ["auto","405px","90px"],
      ["auto","450px","130px"]
    ];
  }else if(isTablet){
    positions = [
      ["auto","120px","18px"],
      ["auto","205px","18px"],
      ["auto","290px","18px"],
      ["auto","375px","18px"],
      ["auto","460px","18px"],
      ["auto","545px","18px"],
      ["auto","630px","18px"],
      ["auto","715px","18px"]
    ];
  }else{
    positions = [
      ["calc(50% + 285px)","155px",null],
      ["calc(50% - 395px)","110px",null],
      ["calc(50% + 310px)","315px",null],
      ["calc(50% - 455px)","390px",null],
      ["calc(50% + 295px)","565px",null],
      ["calc(50% - 390px)","510px",null],
      ["calc(50% + 310px)","585px",null],
      ["calc(50% - 400px)","625px",null]
    ];
  }

  const p = positions[cur % positions.length];

  if(p[0] === "auto"){
    spiderContainer.style.left = "auto";
    spiderContainer.style.right = p[2];
  }else{
    spiderContainer.style.right = "auto";
    spiderContainer.style.left = p[0];
  }

  spiderContainer.style.top = p[1];

  if(window.innerWidth > 900){
    spiderContainer.style.pointerEvents = "auto";
  }
}

function progress(){
  $("progress").innerHTML = "";
  for(let i=0;i<tasks.length;i++){
    const dot = document.createElement("span");
    if(i<cur){
      dot.classList.add("done");
    }
    if(i===cur){
      dot.classList.add("current");
    }
    $("progress").appendChild(dot);
  }
}

function norm(value){
  return value
    .toLowerCase()
    .trim()
    .replace(/ё/g,"е")
    .replace(/\s+/g," ");
}

function render(){
  if(cur>=tasks.length){
    finish();
    return;
  }
  const task = tasks[cur];
  $("num").textContent =
    `Испытание ${cur+1} из ${tasks.length}`;
  $("riddle").innerHTML = task.riddle;
  $("answer").value = "";
  clearAnswerState();
  $("hintText").textContent = task.hint;
  $("hintText").classList.remove("show");
  $("check").disabled = false;
  progress();
  moveSpider();
}

function destroyWeb(index){
  const web = webFragments[index];
  if(!web) return;
  webFlash.classList.remove("show");
  void webFlash.offsetWidth;
  webFlash.classList.add("show");
  web.classList.add("burn");
    const emotion =
      Math.random()>.7 ? "horror" : Math.random()>.4 ? "angry" : "suffer";
    setEmotion(emotion,1800);
}

function check(){
  const value = norm($("answer").value);
  const task = tasks[cur];

  if(task.answers.includes(value)){
      if (cur === 0) {
    const subtitle = document.querySelector(".subtitle");

    if (subtitle) {
      subtitle.classList.add("hidden");

      setTimeout(() => {
        subtitle.style.display = "none";
      }, 400);
    }
  }

    $("answer").classList.remove("answer-wrong");
    $("answer").classList.add("answer-correct");
    $("check").disabled = true;

    say(
      good[cur],
      "angry",
      3000
    );

    destroyWeb(cur);
    setTimeout(()=>{
      cur++;
      attempts = 0;
      if(cur<tasks.length){
        render();
      }else{
        finish();
      }
    },1250);

  }else{
    $("answer").classList.remove("answer-correct");
    $("answer").classList.add("answer-wrong");
    attempts++;
    const emotion =
      Math.random()>.5 ? "evil" : "mock";

    say(
      bad[Math.floor(Math.random()*bad.length)],
      emotion,
      3000
    );

    if(attempts>=1){
      $("hintText").classList.add("show");
    }
  }
}

$("answer").addEventListener("keydown",e=>{
  if(e.key==="Enter"){
    check();
  }
});
$("check").onclick = check;

spider.onclick = ()=>{

  const line =
    clickLines[
      Math.floor(Math.random()*clickLines.length)
    ];

  say(
    line,
    "clicked",
    3200
  );

};

spider.addEventListener("click",()=>{
  say(
    clickLines[Math.floor(Math.random()*clickLines.length)],
    "clicked",
    3200
  );

  spider.classList.remove("clicked");
  void spider.offsetWidth;
  spider.classList.add("clicked");
  setTimeout(()=>{
    spider.classList.remove("clicked");
  },500);
});

function finish() {
  $("game").style.display = "none";

  const chestArea = document.querySelector(".chest-area");
  const chest = $("chest");
  const scroll = $("scroll");
  const finalCard = $("final");
  chestArea.classList.add("final-open");
  spider.style.left = "25%";
  spider.style.right = "auto";
  spider.style.top = "60%";
  spider.style.transform = "translateX(-50%)";

  setTimeout(()=>{
    say(
      "НЕТ!!! МОЙ СУНДУК!!! АААААААА",
      "horror",
      5200
    );
  },250);

  setTimeout(() => {
    chest.classList.add("open");
  }, 700);

  setTimeout(() => {
    scroll.classList.add("rise");
    confetti();
  }, 1300);

  setTimeout(() => {
    scroll.style.opacity = "0";
    finalCard.classList.add("show");
    finalCard.style.display = "block";
  }, 2400);
}

function confetti(){
  for(let i=0;i<55;i++){
    const piece = document.createElement("i");
    piece.className = "confetti";
    piece.style.setProperty(
      "--x",
      Math.random()
    );
    piece.style.setProperty(
      "--y",
      Math.random()
    );
    piece.style.left = "50%";
    piece.style.top = "45%";
    piece.style.transform =
      `rotate(${Math.random()*360}deg)`;
    document.body.appendChild(piece);
    setTimeout(()=>piece.remove(),1900);
  }
}

render();
setTimeout(()=>{
  say(
    "Ну что, смертный... попробуй добраться до сундука!",
    "evil",
    5000
  );
},700);
