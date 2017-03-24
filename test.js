var project = JSON.parse(localStorage.getItem('project'))
console.log(project);

var bgcolor = "white";
switch( project.state) {
	case 1:
		bgcolor = "green";
		break;
	case 2:
		bgcolor = "red";
		break;
	default:
		bgcolor = "white";
}
listProject = "<div id=\"0\" class=\"project\" style = \"background-color: "+bgcolor+"\"><h2>" + project.title + "<\/h2><h3>" + project.description + "<\/h3><\/div>";
document.write(listProject);
