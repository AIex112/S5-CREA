function Card( {name, job, image } ) {
    return (
        <>
        <img className="w-16 h-16 rounded-full" src={image} alt={name} />
        <h2>{name}</h2>
        <p>{job}</p>
        <img src="https://i.imgur.com/yXOvdOSs.jpg" alt="tchat" />
        </>
    );
}

export default Card;
