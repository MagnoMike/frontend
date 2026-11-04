const FormContainer = () => {
     return (
        <>
        <section id = "formContainer">
        <form id="studentForm">

            <div className= "input-field">
                <label htmlfor="name">Student Name:</label>
                <input type="text" name="name" id="name"/>          
            </div>

            <div className="input-field">
                <label htmlfor="program">Program:</label>
                <input type="text" name="program" id="program"/>
            </div>
            <div>
                <button>ADD STUDENT</button>
            </div>
        </form>
    </section>
</>
    )
}
   export default FormContainer;