export default function getListStudentIds(student) {
	let st_id = [];
	if (student instanceof Array){
		st_id = student.map(student=>student.id);}
	return st_id;
}
