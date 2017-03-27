//Story: title, body, dod, priority
//task: title, body, dod, priority,time,step,sprint
if (localStorage.getItem("projects") === null) { // if project files don't exist
	var projectOneStories = [["Story 1","Description of story 1","Definition of done1",1],["Story2","Description of story 2","Definition of done 2",2]]; //sets up default stories
	var projectTwoStories = [["Story 1","Description of story 1","Definition of done1",3],["Story2","Description of story 2","Definition of done 2",4]]; //sets up default stories
	var projectOneTasks = [["Task 1","Description of task 1","Definition of done 1",1,2,4,1],["Task 2","Description of task 2","Definition of done 2",1,3,3,1],["Task 3","Description of task 3","Definition of done 2",2,4,2,1],["Task 4","Description of task 4","Definition of done 4",3,5,1,1]];//sets up default tasks
	var projectTwoTasks = [["Task 1","Description of task 5","Definition of done 1",1,6,4,1],["Task 2","Description of task 6","Definition of done 2",1,3,3,1],["Task 3","Description of task 7","Definition of done 2",2,8,2,1],["Task 4","Description of task 8","Definition of done 4",3,9,1,1]];//sets up default tasks
	var listOfProjects = [["Project 1","Description of project 1",1,projectOneStories,projectOneTasks,1],["Project 2","Description of project 2",2,projectTwoStories,projectTwoTasks,1]];//sets up default projects
	localStorage.setItem("projects",JSON.stringify(listOfProjects)); //save default projects to localstorage. While not entirely dependable, localstorage will persist between sessions.
}
else{//if projects already exist
	var listOfProjects = JSON.parse(localStorage.getItem('projects'))//load projects]
}
var bgcolor = "white"; //default colour
for (var i = 0; i < listOfProjects.length; i++) { //cycle through projects
	switch( listOfProjects[i][2]) { //check if ontime or behind
		case 1:
			bgcolor = "green"; //green for ontime
			break;
		case 2:
			bgcolor = "red"; //red for behind
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