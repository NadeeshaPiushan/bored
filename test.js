//this code is to test how promises work in js using 

const newDiv = document.getElementById("container");
async function getActivity() {

	try {
		let response = await axios.get('https://www.boredapi.com/api/activity/')
		newDiv.textContent = 'You could ' + response.data.activity
	} catch (error) {
		console.error(error)
		newDiv.textContent = error;
		//httpstat.us/500
		////www.boredapi.com/api/activity/
	}
}

getActivity()

const button = document.getElementById('btn').addEventListener('click', getActivity)


