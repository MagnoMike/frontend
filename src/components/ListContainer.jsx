
const ListContainer = ({ data, handleClick}) => {
    return (
        <section id="ListContainer">
            {data.map((student) => (
                <article className="list-item" key={student.id}>
                    <h2>{student.name}</h2>
                    <p>{student.program}</p>

                    <button onClick={() => handleClick(student.id)}>Delete </button>
                </article>
            ))}
        </section>
    );
};

export default ListContainer;
