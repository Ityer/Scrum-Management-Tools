if (localStorage.getItem("projects") === null) {document.location.href ='index.html';} //redirects to index if projects don't exist in localstorage

var x = JSON.parse(localStorage.getItem('project'))
var listOfProjects = JSON.parse(localStorage.getItem('projects'))
project = {title:listOfProjects[x][0], description:listOfProjects[x][1], state:listOfProjects[x][2], stories:listOfProjects[x][3], tasks:listOfProjects[x][4], sprint:listOfProjects[x][5]};
project.tasks.sort(sortFunction);
function sortFunction(a, b) {
    if (a[3] === b[3]) {
        return 0;
    }
    else {
        return (a[3] < b[3]) ? -1 : 1;
    }
}



function printStories(){
	for (var i = 0; i < project.stories.length; i++) {
		document.write("<div class=\"item\"><div><button class=\"editBtn\">⚙️<\/button><h2>"+project.stories[i][0]+"<\/h2><h5>Priority: "+project.stories[i][3]+"<\/h5><\/div><p><b>Description:<\/b> "+project.stories[i][1]+"<\/p><p><b>Definition of done:<\/b> "+project.stories[i][2]+"<\/p><\/div>");
	}
}
function printTasks(step,sprint){
	for (var i = 0; i < project.tasks.length; i++) {
		if ((project.tasks[i][5]==step)&&(project.tasks[i][6]==sprint)){
			if(step != 4){
				var next = "<button onclick=\"next(project.tasks["+i+"])\" class=\"editBtn\">➡️<\/button>";
			}else{var next="";}
			if(step != 1){
				var but = "<button onclick=\"last(project.tasks["+i+"])\" class=\"editBtn\">⬅️<\/button>";
			}else{var but="";}
			document.write("<div class=\"item\"><div id=\""+i+"\">"+next+but+"<h2>"+project.tasks[i][0]+"<\/h2><h5>Priority: "+project.tasks[i][3]+"<\/h5><h5>Length: "+project.tasks[i][4]+"<\/h5><\/div><p><b>Description:<\/b> "+project.tasks[i][1]+"<\/p><p><b>Definition of done:<\/b> "+project.tasks[i][2]+"<\/p><\/div>");
			}
	}
}
function save(){
	listOfProjects[x][0] = project.title;
	listOfProjects[x][1] = project.description;
	listOfProjects[x][2] = project.state;
	listOfProjects[x][3] = project.stories;
	listOfProjects[x][4] = project.tasks;
	listOfProjects[x][5] = project.sprint;
	localStorage.setItem('projects',JSON.stringify(listOfProjects));
}
function saveExit(){
	save()
	document.location.href ='index.html';
}

function strip(html)
{
   var tmp = document.createElement("DIV");
   tmp.innerHTML = html;
   return tmp.textContent || tmp.innerText || "";
}

function next(item){
	if (item[5] < 4){
		item[5]+=1;
		save()
		location.reload();
	}
}
function last(item){
	if (item[5] > 1){
		item[5]-=1;
		save()
		location.reload();
	}
}

