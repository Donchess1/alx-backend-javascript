export default function getStudentsByLocation(st, loc){
	let st_loc = [];
	st_loc = st.filter(st=>st.location===loc)

	return st_loc
}
