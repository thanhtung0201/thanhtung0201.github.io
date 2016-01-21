//Khai bao mang cac cau hoi 

var quest1 = {
    ask : "Người ta thường nói thừa nước đục thả gì ?",
    answer :  [{key:"A. Câu", value:true},
     {key : "B. Bom",value : false},
     {key : "C. Cá", value: false},
     {key : "D. Vàng",value : false}],
    level : "ease"
 
}
var quest2 = {
    ask : "Điền vào chỗ ba chấm ? Thuyền về có nhớ bến chăng <br> Bến thì một dạ khăng khăng .... thuyền ?",
    answer : [{key : "A. Mong",value : false},
             { key : "B. Trông",value : false},
             {key : "C. Chờ",value : false},
             {key : "D. Đợi",value : true}],
    level : "ease"

}
var quest3 = {
    ask : "Đâu là một câu chuyện cổ tích ?",
    answer : [{key : "A. Công chúa bong bóng",value : false},
             { key : "B. Công chúa tóc mây",value : true } ,
              { key : "C. Công chúa thơm phức",value : false},
              { key : "D. Công chúa mất ngủ",value : false}],
    level : "ease"
}
var quest4 = {
    ask : "Đâu không phải từ Hán việt trong các từ sau ? ",
    answer : [{ key : "A. Tương tư",value : true},
             { key : "B. Ca nhi",value : false},
              { key : "C. Du dương",value : false},
             { key : "D. Quả phụ", value : false}],
    level : "ease"
}
var quest5 = {
    ask : "Câu nào sau đây chỉ người ở trạng thái mê man, không biết gì? ",
    answer : [{key : "A. Bất đắc kỷ tử",value : false},
               {key : "B. Bất khả xâm phạm",value : false},
              {key : "C. Bất tỉnh nhân sự",value : true},
               {key : "D. Bất di bất dịch",value : false}],
    level : "ease"
}
var quest6 = {
    ask : "Sông nào là nhánh của sông mê kông ?",
    answer : [{key : "A. Sông thao",value : false},
              {key : "B. Sông lô",value : false},
              {key : "C. Sông cửu long",value : true},
              {key : "D. Sông đà",value : false}],
    level : "medium"
}
var quest7 = {
    ask : "Đâu là một sáng tác của nhạc sĩ Trịnh công sơn",
    answer :  [{key : "A. Em là bông hồng nhỏ",value : true},
               {key : "B. Em đi tới trường",value : false},
               {key : "C. Em là chú chim nhỏ",value : false},
               {key : "D. Em là tất cả",value : false}],
    level : "medium"
}
var quest8 = {
    ask : "Paracetamol thuộc nhóm thuốc nào sau đây?",
    answer : [{key : "A. Thuốc an thần",value : false},
              {key : "B. Thuốc giảm đau",value : true},
              {key : "C. Thuốc lợi tiểu",value : false},
              {key : "D. Thuốc ho",value : false}],
    level : "medium"
}
var quest9 = {
    ask : "Đảo Ti Tốp ở Vịnh Hạ Long đã được đặt theo tên một phi công người nước nào ?",
    answer : [{key : "A. Nga",value :  true},
              {key : "B. Pháp",value : false},
              {key : "C. Anh",value : false},
              {key : "D. Mỹ",value : false}],
    level : "medium"
}
var quest10 = {
    ask : "Bác Hồ viết 'Lời kêu gọi toàn quốc kháng chiến tại đâu' ? ",
    answer  : [{key : "A. Làng Vạn Phúc",value : true},
               {key : "B. Làng Bát Tràng",value : false},
               {key : "C. Làng Hương Trà",value : false},
               {key : "D. Làng Mỹ Khánh",value : false}],
    level : "medium"
}
var quest11 = {
    ask : "'Roti gluay' - món ăn nổi tiếng của Thái Lan có nguyên liệu chính là gì ?",
    answer : [{key : "A. Thịt đỏ và tiêu đen",value : false},
              {key : "B. Chuối và trứng",value : true},
              {key : "C. Khoai tây và cốt dừa ",value : false},
              {key : "D. Nộm đu đủ",value : false}],
    level : "difficult"
}
var quest12 = {
    ask : "Khu di tích quốc gia đặc biệt rừng Trần Hưng Đạo thuộc huyện nào của tỉnh Cao Bằng?",
    answer : [{key : "A. Hòa An",value : false},
              {key : "B. Trùng Khánh",value : false},
              {key : "C. Nguyên Bình",value : true},
              {key : "D. Quảng Uyên",value : false}],
    level : "difficult"
}
var quest13 = {
    ask : "Tay vợt nào vô địch nội dung đơn nữ giải Tennis Indian Wells 2015?",
    answer  : [{key : "A. Simona Halep",value : false},
               {key : "B. Jelena Jankovic",value : false},
               {key : "C. Serena williams",value : true},
               {key : "D. Ana Ivanovic",value :  false}],
    level : "difficult"
}
var quest14 = {
    ask : "Phim trường Bollywood có trụ sở tại đâu?",
    answer  : [{key : "A. Mumbai",value : true},
               {key : "B. Rajasthan",value :  false},
               {key : "C. Delhi",value : false},
               {key : "D. Agra",value : false}],
    level : "difficult"
}
var quest15 = {
    ask : "Đại sứ thiện chí đầu tiên của quỹ nhi đồng liên hiệp quốc là ai?",
    answer  : [{key : "A. Leon Lai",value : true},
               {key : "B. Danny kaye",value : false},
               {key : "C. Audrey Hepburn",value : true},
               {key : "D. Judy Collins",value : false}],
    level : "difficult"
}
var no = ["CÂU I", "CÂU II", "CÂU III", "CÂU IV", "CÂU V"
          , "CÂU VI", "CÂU VII", "CÂU VIII", "CÂU IX", 
          "CÂU X", "CÂU XI", "CÂU XII", "CÂU XIII", "CÂU XIV", "CÂU XV"];
var icon = document.getElementById("icon");
var next = document.getElementById("continue");
var sadIcon = ["img/failed-quest1.png","img/failed-quest2.png","img/failed-quest3.png"];
var smileIcon = ["img/win-quest1.png","img/win-quest2.png","img/win-quest3.png"];
var keysAnswer = document.getElementsByClassName("key");
var titleNum = document.getElementById("title1");
var titleAnswer = document.getElementById("title2");
var question = [quest1,quest2,quest3,quest4,quest5,
                quest6,quest7,quest8,quest9,quest10,
                quest11,quest12,quest13,quest14,quest15];

var questionTarget = [];
randomSplitInput(question);            
var arrayCorrect;                
var level;
var audio = document.getElementById("audio");
var audio1 = document.getElementById("audio1");
audio.play();

var i = 0;
loadData(questionTarget[i]);
document.getElementById("title1").innerHTML = no[i];
    checkOnclick(0);
    checkOnclick(1);
    checkOnclick(2);
    checkOnclick(3);
    next.onclick = function(e)
    {
        i++;
        loadData(questionTarget[i]);
        document.getElementById("title1").innerHTML = no[i];
        resetState();
    }

function checkOnclick(i)
{

  keysAnswer[i].onclick = function(e)
    {    
        audio.pause();
        next.style.display = "block";
        if(arrayCorrect[i][this.innerHTML] == true)
        {
            this.style.color = "#00ff00";
            audio1.src = 'audio/pass.wav';
            audio1.play();
            icon.src  = smileIcon[Math.floor( Math.random() * 3 )];
        }
        else
        {

            this.style.color = "red";
            audio1.src = 'audio/failed.wav';
            audio1.play();
            icon.src  = sadIcon[Math.floor( Math.random() * 3 )];
        }
         keysAnswer[0].style.pointerEvents = "none";
         keysAnswer[1].style.pointerEvents = "none";
         keysAnswer[2].style.pointerEvents = "none";
         keysAnswer[3].style.pointerEvents = "none";

    }
}
function loadData(questObj)
{    
    document.getElementById("title2").innerHTML = questObj['ask'];
    document.getElementsByClassName("key")[0].innerHTML = questObj['answer'][0]['key'];
    document.getElementsByClassName("key")[1].innerHTML = questObj['answer'][1]['key'];
    document.getElementsByClassName("key")[2].innerHTML = questObj['answer'][2]['key'];
    document.getElementsByClassName("key")[3].innerHTML = questObj['answer'][3]['key'];
    level = questObj['level'];

  arrayCorrect = questObj['answer'].map(function(obj){ 
       var rObj = {};
       rObj[obj.key] = obj.value;
       return rObj;
    });
}
function resetState(){
    if(questionTarget[i]['level'] == "ease")
    {
    document.getElementsByClassName("key")[0].style.color = "#ffffff";
    document.getElementsByClassName("key")[1].style.color = "#ffffff";
    document.getElementsByClassName("key")[2].style.color = "#ffffff";
    document.getElementsByClassName("key")[3].style.color = "#ffffff";
    document.getElementsByClassName("key")[0].style.backgroundColor = "#0059b3";
    document.getElementsByClassName("key")[1].style.backgroundColor = "#0059b3";
    document.getElementsByClassName("key")[2].style.backgroundColor = "#0059b3";
    document.getElementsByClassName("key")[3].style.backgroundColor = "#0059b3";
    document.getElementById("question").style.color = "blue";
    document.getElementById("wrap").style.backgroundImage = "url('img/ease.jpg')";
    audio.src = 'audio/ingame.mp3';
    audio.play();
    }
    else if(questionTarget[i]['level'] == "medium")
    {
    document.getElementsByClassName("key")[0].style.color = "#007fff";
    document.getElementsByClassName("key")[1].style.color = "#007fff";
    document.getElementsByClassName("key")[2].style.color = "#007fff";
    document.getElementsByClassName("key")[3].style.color = "#007fff";
    document.getElementsByClassName("key")[0].style.backgroundColor = "#ffeecc";
    document.getElementsByClassName("key")[1].style.backgroundColor = "#ffeecc";
    document.getElementsByClassName("key")[2].style.backgroundColor = "#ffeecc";
    document.getElementsByClassName("key")[3].style.backgroundColor = "#ffeecc";
    document.getElementById("question").style.color = " #ffffff";
    document.getElementById("wrap").style.backgroundImage = "url('img/medium.png')";
    audio.src = 'audio/ingame1.mp3';
    audio.play();
    }
    else
    {
    document.getElementsByClassName("key")[0].style.color = "#e5faff";
    document.getElementsByClassName("key")[1].style.color = "#e5faff";
    document.getElementsByClassName("key")[2].style.color = "#e5faff";
    document.getElementsByClassName("key")[3].style.color = "#e5faff";
    document.getElementsByClassName("key")[0].style.backgroundColor = "#005266";
    document.getElementsByClassName("key")[1].style.backgroundColor = "#005266";
    document.getElementsByClassName("key")[2].style.backgroundColor = "#005266";
    document.getElementsByClassName("key")[3].style.backgroundColor = "#005266";
    document.getElementById("wrap").style.backgroundImage = "url('img/difficult.jpg')";
    document.getElementById("question").style.color = "#66ccff";
    audio.src = 'audio/ingame2.mp3';
    audio.play();
    }
    next.style.display = "none";
    icon.src = "img/question-icon.png";
   
    keysAnswer[0].style.pointerEvents = "visible";
    keysAnswer[1].style.pointerEvents = "visible";
    keysAnswer[2].style.pointerEvents = "visible";
    keysAnswer[3].style.pointerEvents = "visible";
}

function randomSplitInput(quest)
{
  var questionEase = [];
  var questionMedium = [];
  var questionDifficult = [];
  for(var k = 0 ; k < quest.length ; k++)
 {
    if(quest[k]['level'] == "ease")
    {
        questionEase.push(quest[k]);
    }
    else if(quest[k]['level'] == "medium")
    {
        questionMedium.push(quest[k]);
    }
    else if(quest[k]['level'] == "difficult")
    {
        questionDifficult.push(quest[k]);
    }
 }

 pushRandomArrayToArray(questionEase);
 pushRandomArrayToArray(questionMedium);
 pushRandomArrayToArray(questionDifficult);
}
function pushRandomArrayToArray(input)
{
       var i = 0;
          while(i < input.length)
          {
            var temp = input[Math.floor( Math.random() * (input.length-i) )];
            questionTarget.push(temp);
            removeArrayItem(input,temp);
          }                    
}

function removeArrayItem(array, itemToRemove) {
    // Count of removed items
    var removeCounter = 0;

    for (var index = 0; index < array.length; index++) {
        if (array[index] === itemToRemove) {
            // Remove array item at current index
            array.splice(index, 1);

            removeCounter++;
            index--;
        }
    }
    return removeCounter;
}
