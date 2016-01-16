

//Bai 1

/**
 *  Tinh binh phuong mot so 
 *   @param {number} x so can tinh binh phuong
 *   @return (number)   binh phuong so truyen vao
 */
function binhPhuong(x) {
  return x * x;
}


//Bai 2
/**
 *  Tinh tong binh phuong cua mot phep toan ba so 
 *   @param {number} x tham so thu nhat
 *   @param {number} y tham so thu hai
 *   @param {number} z tham so thu ba
 *   @return (number)  
 */

function tongBaSo(x, y, z) {
  var temp = 3 * x + 2 * y + z; //Decrale temp , give it calculate (x,y,z)
  return binhPhuong(temp); //Tinh binh phuong temp
}
//Bai 3

/**
 *  Cat lay 10 ky tu dau tien cua xau
 *   @param {string} strInput Xau dau vao can cat
 *   @return (string)   xau sau khi duoc cat  
 */
function splitString(strInput) {
  if (!(typeof strInput == 'string') || strInput.length <= 100) //Kiem tra xau dau vao co hop le khong, neu khong tra ve null
  {
    alert("Input values does not valid");
    return null;
  } else {
    var tenFirstOfInput = strInput.slice(0, 10); // Lay ra xau gom 10 ky tu dau tien trong xau dau vao va gan cho bien tenFirstOfInput
    return tenFirstOfInput + "...";
  }

}

//Bai 4

/**
 *  Bien ky tu dau tien cua xau thanh chu hoa
 *   @param {string} strInput Xau dau vao 
 *   @return (string)   xau sau khi chuyen chu dau tien thanh chu hoa 
 */
function capitalizeString(strInput) {
  if (!(strInput.length > 0 && (typeof strInput == 'string'))) // Kiem tra dau vao hop le hay khong
  {
    alert("Input values does not valid");
    return null;
  } else {
    var fristLetter = strInput.charAt(0).toUpperCase(); // Bien ky tu dau tien thanh chu hoa
    var secondStr = strInput.slice(1); // Lay xau cat ra tu xau dau vao , bo qua ky tu dau tien
    return fristLetter + secondStr; // Ghep xau duoc ket qua tra ve
  }

}

//Bai 5


/**
 *  Tra ve gia tri nho nhat cua mang so
 *   @param {Array.<number>}  arrayInput Mang dau vao
 *   @return (number)  so nho nhat trong mang 
 */
function minNumberInArray(arrayInput) {
  var sortArray = arrayInput.sort(); // Sap xep lai xau
  return sortArray[0];
}

//Bai 6;
/**
 *  In mot mang duoc sap xep
 *   @param {Array.<string>}  arrayInput Mang dau vao
 *   @return (Array.<string>)  mang tra ve duoc sap xep ten theo thu tu bang chu cai 
 */
function printOrderString(arrayInput) {
  var arrayOutPut = arrayInput.sort(); // Sap xep xau
  for (var i = 0; i < arrayOutPut.length; i++) // Duyet va in
  {
    document.write(arrayOutPut[i] + "\n");

  }
}

//Bai 7;

var firstName = "";
var lastName = "";
var age = 0;

function aboutMe() //Print introduct myself by firstname, lastName, age
{
  return "Xin chào, tên của tôi là " + this.firstName + " " + this.lastName + ". Năm nay tôi " + this.age + " tuổi";
}
var teacher = {
  firstName: "Nguyen",
  lastName: "Đình Anh ",
  age: 40,
  say: function() {}
}
var parrent = {
  firstName: "Lê",
  lastName: "Hữu Cần ",
  age: 50,
  say: function() {}
}
var student = {
  firstName: "Lê",
  lastName: "Thanh Tùng ",
  age: 16,
  say: function() {}
}

teacher.say = aboutMe;
parrent.say = aboutMe;
student.say = aboutMe;
