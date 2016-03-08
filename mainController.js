$(document).ready(function(){
    
	twoMarks = ["Who am i?","Where am i?","How am I?","Are these stupid questions?","Are you smart?","what are you?","Who are you?","where is it ?",
	"what is this?","How si this?"];
	fiveMarks = ["First five marks","Second five marks","Third five mrks","Fourth five mrks","Fifth five mrks"];
	
	$("#generate").click(function(){
			count =0;
			$("#twoMarkQuestions").empty();
			$("#fiveMarkQuestions").empty();
			nq2 = parseInt($("#twomarks").val());
			nq5 = parseInt($("#fivemarks").val());
			used2 = new Array();
			used5 = new Array();
			heading2 = document.createElement('h2');
			heading5 = document.createElement('h2');
			$(heading2).append("Two marks questions!")
			$(heading5).append("Five marks questions!")
			$(heading2).appendTo($("#twoMarkQuestions"));
			while(nq2>0)
			{
				num=Math.floor((Math.random() * 10) + 1);
				if(used2.indexOf(num)<=-1)
				{
					para = document.createElement('p');
					$(para).append(twoMarks[num-1]);
					$(para).appendTo($("#twoMarkQuestions"));
					used2.push(num);
					nq2--;
				}
			}
			$(heading5).appendTo($("#fiveMarkQuestions"));
			while(nq5>0)
			{
				num=Math.floor((Math.random() * 5) + 1);
				if(used5.indexOf(num)<=-1)
				{
					para = document.createElement('p');
					$(para).append(fiveMarks[num-1]);
					$(para).appendTo($("#fiveMarkQuestions"));
					used5.push(num);
					nq5--;
				}
			}
    });
	
	
});