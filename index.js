//Story: title, body, dod, sprint, priority, difficulty
var listOfStories = [["Story1","Description of story1","Definition of done1",1,2,3],["Story2","Description of story2","Definition of done2",4,5,6]];
var arrayLength = listOfStories.length;
for (var i = 0; i < arrayLength; i++) {
	var newStory = "story"+(i+1);
    window[newStory] = {title:listOfStories[i][0], body:listOfStories[i][1], dod:listOfStories[i][2], sprint:listOfStories[i][3], priority:listOfStories[i][4], difficulty:listOfStories[i][5]};
	//console.log(window[newStory]);
	}
console.log(window["story1"]);
console.log(story2);