const ListContainer = ({ data }) => {
    return (
        <>
         <section id = "listContainer">
            {data.map((student) => (
                <article>
                    <h1> {student.name}</h1>
                    <p> {student.program}</p>
                    <button>Delete</button>
                    </article>
            ))}
         </section>
         </>
    )
}

export default ListContainer;