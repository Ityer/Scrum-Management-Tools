//Story: title, body, dod, priority
//task: title, body, dod, priority,time,step,sprint
if (localStorage.getItem("projects") === null) {
	console.log("New");
	var projectOneStories = [["Story 1","Description of story 1","Definition of done1",1],["Story2","Description of story 2","Definition of done 2",2]];
	var projectTwoStories = [["Story 1","Description of story 1","Definition of done1",3],["Story2","Description of story 2","Definition of done 2",4]];
	var projectOneTasks = [["Task 1","Description of task 1","Definition of done 1",1,2,4,1],["Task 2","Description of task 2","Definition of done 2",1,3,3,1],["Task 3","Description of task 3","Definition of done 2",2,4,2,1],["Task 4","Description of task 4","Definition of done 4",3,5,1,1]];
	var projectTwoTasks = [["Task 1","Description of task 5","Definition of done 1",1,6,4,1],["Task 2","Description of task 6","Definition of done 2",1,3,3,1],["Task 3","Description of task 7","Definition of done 2",2,8,2,1],["Task 4","Description of task 8","Definition of done 4",3,9,1,1]];
	var listOfProjects = [["Project 1","Description of project 1",1,projectOneStories,projectOneTasks,1],["Project 2","Description of project 2",2,projectTwoStories,projectTwoTasks,1]];
	localStorage.setItem("projects",JSON.stringify(listOfProjects));
}
else{
	console.log("From Local");
	var listOfProjects = JSON.parse(localStorage.getItem('projects'))
}
var bgcolor = "white";
for (var i = 0; i < listOfProjects.length; i++) {
	switch( listOfProjects[i][2]) {
		case 1:
			bgcolor = "green";
			break;
		case 2:
			bgcolor = "red";
			break;
	}
	listProject = "<div id=\""+(i)+"\" class=\"project\" style = \"background-color: "+bgcolor+"\"><h2>" + listOfProjects[i][0] + "<\/h2><h3>" + listOfProjects[i][1] + "<\/h3><\/div>";
	document.write(listProject);
}
function openProject(item){
	localStorage.setItem("project",JSON.stringify(item));
	document.location.href ="test.html";
}
$(".project").click(function(){ openProject($(this).attr('id')); return false; });