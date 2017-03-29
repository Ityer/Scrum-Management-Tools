if (localStorage.getItem("projects") === null) {document.location.href ='index.html';} //redirects to index if projects don't exist in localstorage

var x = JSON.parse(localStorage.getItem('project')) //gets project id from local storage
var listOfProjects = JSON.parse(localStorage.getItem('projects')) //gets all project data from local storage
project = {title:listOfProjects[x][0], description:listOfProjects[x][1], state:listOfProjects[x][2], stories:listOfProjects[x][3], tasks:listOfProjects[x][4], sprint:listOfProjects[x][5]}; //puts active project into object for better readability
project.tasks.sort(sortFunction); //sorts task in order of priority
function sortFunction(a, b) {//function used by the sort function. It uses the priority attribute within a task to choose what order to list them in.
    if (a[3] === b[3]) {
        return 0; //returns 0 if priority of and b are identical
    }
    else {
        return (a[3] < b[3]) ? -1 : 1; //returns stuff  
    }
}



function printStories(){
	for (var i = 0; i < project.stories.length; i++) { //for every story, write story
		document.write("<div class=\"item\"><div><button class=\"editBtn\">⚙️<\/button><h2>"+project.stories[i][0]+"<\/h2><h5>Priority: "+project.stories[i][3]+"<\/h5><\/div><p><b>Description:<\/b> "+project.stories[i][1]+"<\/p><p><b>Definition of done:<\/b> "+project.stories[i][2]+"<\/p><\/div>");//custom div using story data
	}
}
function printTasks(step,sprint){
	for (var i = 0; i < project.tasks.length; i++) { //for eery task
		if ((project.tasks[i][5]==step)&&(project.tasks[i][6]==sprint)){ //if correct step and sprint
			if(step != 4){ //if not last row, include next button
				var next = "<button onclick=\"next(project.tasks["+i+"])\" class=\"editBtn\">➡️<\/button>";
			}else{var next="";}//make blank to avoid not defined error
			if(step != 1){ //if not first row, include last button
				var but = "<button onclick=\"last(project.tasks["+i+"])\" class=\"editBtn\">⬅️<\/button>";
			}else{var but="";}//make blank to avoid not defined error
			document.write("<div class=\"item\"><div id=\""+i+"\">"+next+but+"<h2>"+project.tasks[i][0]+"<\/h2><h5>Priority: "+project.tasks[i][3]+"<\/h5><h5>Length: "+project.tasks[i][4]+"<\/h5><\/div><p><b>Description:<\/b> "+project.tasks[i][1]+"<\/p><p><b>Definition of done:<\/b> "+project.tasks[i][2]+"<\/p><\/div>");//custom div using task data
			}
	}
}
function save(){
	listOfProjects[x][0] = project.title;//take data from object and overwtire originaly stored data
	listOfProjects[x][1] = project.description;//take data from object and overwtire originaly stored data
	listOfProjects[x][2] = project.state;//take data from object and overwtire originaly stored data
	listOfProjects[x][3] = project.stories;//take data from object and overwtire originaly stored data
	listOfProjects[x][4] = project.tasks;//take data from object and overwtire originaly stored data
	listOfProjects[x][5] = project.sprint;//take data from object and overwtire originaly stored data
	localStorage.setItem('projects',JSON.stringify(listOfProjects));//save all projects in local storage
}
function saveExit(){ //when user clicks save and exit
	save(); //runs save
	document.location.href ='index.html';//changes page to index
}

function strip(html){//returns string with any html tags removed
   var tmp = document.createElement("DIV");
   tmp.innerHTML = html;
   return tmp.textContent || tmp.innerText || "";
}

function next(item){//increases step by one, but not above 4. Saves and reloads to update on page
	if (item[5] < 4){
		item[5]+=1;
		save();
		location.reload();
	}
}
function last(item){//decreases step by one, but not below 1. Saves and reloads to update on page
	if (item[5] > 1){
		item[5]-=1;
		save();
		location.reload();
	}
}

function RemoveTest(){//removes last task
	if (project.tasks.length > 0){ //if a task exits
		project.tasks.splice(project.tasks.length-1, 1);
		save();
		location.reload();
	}	
}

function AddTest(){
	if (project.tasks.length > 0){
		project.tasks.push(["Task "+(project.tasks.length+1)+"","Description of task "+(project.tasks.length+1)+"","Definition of done "+(project.tasks.length+1)+"",(project.tasks.length+1),5,1,1]);
	}
	else{
		project.tasks.push(["Task 1","Description of task 1","Definition of done 1",(project.tasks.length+1),2,1,1]);
	}
	save();
	location.reload();
}
