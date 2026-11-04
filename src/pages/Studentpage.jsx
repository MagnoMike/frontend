import HeaderContainer from "../components/HeaderContainer"
import StudentContainer from "../components/StudentContainer"
import ListContainer from "../components/ListContainer"

const studentpage = () => {
    const student = [
        { id: 1, name: "John Doe", program: "BSIT" },
        { id: 2, name: "Jane Smith", program: "BSIT" },
        { id: 3, name: "Bob Johnson", program: "BSIT" },
    ]
  return (
    <>
      <HeaderContainer />
      <StudentContainer />
      <ListContainer data={student} />
    </>
  )
}

export default studentpage;