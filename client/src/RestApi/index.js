import axios from 'axios'

function getData(courseApi, setData) {
      axios.get(courseApi)
            .then((res) => {
                  setData(res.data);
            })
            .catch((error) => {
                  console.log(error.message);
            })
}

function addData(courseApi, newData) {
      axios.post(courseApi, newData)
            .then(() => {
                  console.log("them thanh cong!");
            })
            .catch((error) => {
                  console.log(error.message);
            })
}

function delData(courseApi, id) {
      axios.delete(courseApi + "/" + id)
            .then(() => {
                  console.log("xoa thanh cong!");
            })
            .catch((error) => {
                  console.log(error.message);
            })
}

export default getData
export { addData, delData }
