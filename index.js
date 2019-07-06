// JavaScript Document
var json = {
    surveyId: '7a0a5970-00bf-4828-bb64-3c418561e4a3'
};

window.survey = new Survey.Model(json);

survey
    .onComplete
    .add(function (result) {
        document
            .querySelector('#surveyResult')
            .textContent = "Result JSON:\n" + JSON.stringify(result.data, null, 3);
    });

$("#surveyElement").Survey({model: survey});;
var survey = new Survey.Survey(json);
  survey.surveyPostId = "5aaecdfd-2ba8-481f-936e-828ba6f3cc11";
  //Optionally, show saving progress and show an error and "Save Again" button if the results can't be stored.
  survey.surveyShowDataSaving = true;

var lis=document.getElementsByTagName("li");
var ul=document.getElementsByTagName("ul")[0];
var btns=document.getElementsByTagName("i");
var sum=0;
var num=0;
var cont=0;
var x=0;
var i=0;
var j=0;

		
sum=(lis[0].offsetWidth*lis.length)+(lis.length*4)+210;
num=Math.ceil(sum/650);
console.log(num)
ul.style.width=sum+"px";
   btns[1].onclick=function(){
		if(x<num-1){
			x++;
			cont=-656*x;
			ul.style.transform="translateX("+cont+"px)";
					
		}
		i++;
		document.getElementById("rgt").innerHTML="click_right_btn:"+i;
	}
	btns[0].onclick=function(){
		if(cont!=0){
			x--;
			cont+=656;
			ul.style.transform="translateX("+cont+"px)";
					
		}
		j++;
		document.getElementById("lft").innerHTML="click_left_btn:"+j;
	}