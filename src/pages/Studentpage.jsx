
import { useState, useEffect } from "react";
import HeaderContainer from "../components/HeaderContainer";
import StudentContainer from "../components/StudentContainer";
import ListContainer from "../components/ListContainer";

const Studentpage = () => {
    const [students, setStudents] = useState([]);

    const API_URL = "http://localhost:3000/student";

    const fetchStudents = async () => {
        try {
            const response = await fetch(`${API_URL}/all`);
            const result = await response.json();

            setStudents(result);
        } catch (error) {
            console.log("Error fetching students:", error);
        }
    };

    useEffect(() => {
        fetchStudents();
    }, []);

    const handleAddStudent = async (student) => {
        try {
            const response = await fetch(API_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(student)
            });

            if (!response.ok) {
                throw new Error("Failed to add student");
            }

            fetchStudents();
        } catch (error) {
            console.log("Error adding student:", error);
        }
    };

    const handleDeleteStudent = async (id) => {
        try {
            const response = await fetch(`${API_URL}/${id}`, {
                method: "DELETE"
            });

            if (!response.ok) {
                throw new Error("Failed to delete student");
            }

            fetchStudents();
        } catch (error) {
            console.log("Error deleting student:", error);
        }
    };

    return (
        <>
            <HeaderContainer />
            <StudentContainer onAddStudent={handleAddStudent} />
            <ListContainer
                data={students}
                onDeleteStudent={handleDeleteStudent}
            />
        </>
    );
};

export default Studentpage;