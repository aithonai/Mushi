export default function setTitle(newTitle) { 
	newTitle === 'default' 
	? document.title = 'Mushi - Online Web Shop'
	: document.title = `Mushi - ${newTitle}` 
}