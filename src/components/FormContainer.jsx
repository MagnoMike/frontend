import { React } from "react";

    const FormContainer = () =>{
    const [name, setName] = React.useState('');
    const [srcode, setSrcode] = React.useState('');
    const [program, setProgram] = React.useState('');

    const handleSubmit = async (e) =>{
        e.preventDefault();

        const student = { name, srcode, program };
        
        try {
            const response = await fetch('http://127.0.0.1:3000/student', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(student)
            });

            if (!response.ok) {
                throw new Error(response.status);
            }
            if (response.ok) {
                setName('');
                setSrcode('');
                setProgram('');
            }
    }catch (e){
        console.log(e.message);
    }
};
    return (
        <>
    <section id="FormContainer">
        <form id="studentForm" onSubmit={handleSubmit}>
            <div className="input-field">
                <label htmlFor="name">Student Name</label>
                <input 
                type="Text"
                 name="name"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
            </div>

            <div className="input-field">
    <label htmlFor="srcode">SR Code</label>
    <input
        type="text"
        name="srcode"
        id="srcode"
        value={srcode}
        onChange={(e) => setSrcode(e.target.value)}
    />
</div>

            <div className="input-field">
                 <label htmlFor="name">Program</label>
                  <input
                   type="Text" 
                   name="program" 
                   id="program"
                   value={program}
                   onChange={(e) => setProgram(e.target.value)}
                  />
            </div>
            <div>
                <button>Add Student</button>
            </div>
        </form>
    </section>
        </>
    )
}
export default FormContainer;