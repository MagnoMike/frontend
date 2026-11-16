
const ListContainer = ({ data, onDeleteStudent }) => {
    return (
        <section id="listContainer">
            {data.map((student) => (
                <article key={student.id}>
                    <h1>{student.name}</h1>
                    <p>{student.course}</p>

                    <button onClick={() => onDeleteStudent(student.id)}>
                        Delete
                    </button>
                </article>
            ))}
        </section>
    );
};

export default ListContainer;
