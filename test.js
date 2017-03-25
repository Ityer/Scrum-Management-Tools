var x = JSON.parse(localStorage.getItem('project'))
var listOfProjects = JSON.parse(localStorage.getItem('projects'))
project = {title:listOfProjects[x][0], description:listOfProjects[x][1], state:listOfProjects[x][2], stories:listOfProjects[x][3], tasks:listOfProjects[x][4], sprint:listOfProjects[x][5]};
function printStories(){
	for (var i = 0; i < project.stories.length; i++) {
		document.write("<div class=\"item\"><div><button class=\"editBtn\">⚙️<\/button><h2>"+project.stories[i][0]+"<\/h2><h5>Priority: "+project.stories[i][3]+"<\/h5><\/div><p><b>Description:<\/b> "+project.stories[i][1]+"<\/p><p><b>Definition of done:<\/b> "+project.stories[i][2]+"<\/p><\/div>");
	}
}
function printTasks(step,sprint){
	for (var i = 0; i < project.tasks.length; i++) {
		if ((project.tasks[i][5]==step)&&(project.tasks[i][6]==sprint)){
			document.write("<div class=\"item\"><div><button class=\"editBtn\">⚙️<\/button><h2>"+project.tasks[i][0]+"<\/h2><h5>Priority: "+project.tasks[i][3]+"<\/h5><h5>Length: "+project.tasks[i][4]+"<\/h5><\/div><p><b>Description:<\/b> "+project.tasks[i][1]+"<\/p><p><b>Definition of done:<\/b> "+project.tasks[i][2]+"<\/p><\/div>");
		}
	}
}

function saveExit(){
	listOfProjects[x][0] = project.title;
	listOfProjects[x][1] = project.description;
	listOfProjects[x][2] = project.state;
	listOfProjects[x][3] = project.stories;
	listOfProjects[x][4] = project.tasks;
	listOfProjects[x][5] = project.sprint;
	localStorage.setItem('projects',JSON.stringify(listOfProjects));
	document.location.href ='index.html';
}

function strip(html)
{
   var tmp = document.createElement("DIV");
   tmp.innerHTML = html;
   return tmp.textContent || tmp.innerText || "";
}