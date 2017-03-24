//Story: title, body, dod, sprint, priority, difficulty

//var listOfProjects = [["Story1","Description of story1","Definition of done1",1,2,3],["Story2","Description of story2","Definition of done2",4,5,6]];
var listOfProjects = [["Project 1","Description of project 1",1,[["Story1","Description of story1","Definition of done1",1,2,3],["Story2","Description of story2","Definition of done2",4,5,6]]],["Project 2","Description of project 2",2,[["Story1","Description of story1","Definition of done1",1,2,3],["Story2","Description of story2","Definition of done2",4,5,6]]]];
var arrayLength = listOfProjects.length;
for (var i = 0; i < arrayLength; i++) {
	var newProject = "project"+(i+1);
    window[newProject] = {title:listOfProjects[i][0], description:listOfProjects[i][1], state:listOfProjects[i][2]};
	//console.log(window[newProject]);
	}
console.log(window["project1"]);
console.log(project2);
var bgcolor = "white";
for (var i = 0; i < arrayLength; i++) {
	newProject = "project"+(i+1);
	switch( window[newProject].state) {
		case 1:
			bgcolor = "green";
			break;
		case 2:
			bgcolor = "red";
			break;
		default:
			bgcolor = "white";
	}
	listProject = "<div id=\""+(i+1)+"\" class=\"project\" style = \"background-color: "+bgcolor+"\"><h2>" + window[newProject].title + "<\/h2><h3>" + window[newProject].description + "<\/h3><\/div>";
	document.write(listProject);
}
function openProject(item){
	var x = $(item).attr('id');
	var pr = "project"+(x);
	localStorage.setItem("project",JSON.stringify(window[pr]));
	window.location.replace("test.html");
}
$(".project").click(function(){ openProject(this); return false; });