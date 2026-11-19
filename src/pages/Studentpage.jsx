import FormContainer from '../components/FormContainer';
import HeaderContainer from '../components/HeaderContainer';
import ListContainer from '../components/ListContainer';
import { useState } from 'react';

const Studentpage = () => {
    const [students, setStudents] = useState([]);

    const getData = async () =>{
        const response = await fetch('http://127.0.0.1:3000/student');
        if (!response.ok) {
            throw new Error('Unable to fetch data');
        }
        const data = await response.json();
    return data;
    }
    getData().then((result) => {
        setStudents(result);
    }).catch((e) =>{
        console.log(e.message);
    })

    const deleteStudent = async (id) => {
       try {
         const response = await fetch(`http://127.0.0.1:3000/student/${id}`, {
            method: 'DELETE'
        });
         if (!response.ok) {
            throw new Error('Unable to delete student');
        }
        if (response.ok) {
         console.log('student deleted');
        }
       }catch (e) {
        console.log(e.message);
       }
    }

return (
    <>
    <HeaderContainer />
    <FormContainer />
    <ListContainer data={students} handleClick={deleteStudent} />
    </>
)   
}
export default Studentpage;