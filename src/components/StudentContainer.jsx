
const FormContainer = ({ onAddStudent }) => {
    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const course = form.program.value;

        if (!name.trim() || !course.trim()) {
            alert("Please complete all fields.");
            return;
        }

        onAddStudent({ name, course });
        form.reset();
    };

    return (
        <section id="formContainer">
            <form id="studentForm" onSubmit={handleSubmit}>

                <div className="input-field">
                    <label htmlFor="name">Student Name:</label>
                    <input type="text" name="name" id="name" />
                </div>

                <div className="input-field">
                    <label htmlFor="program">Program:</label>
                    <input type="text" name="program" id="program" />
                </div>

                <div>
                    <button type="submit">ADD STUDENT</button>
                </div>

            </form>
        </section>
    );
};

export default FormContainer;
