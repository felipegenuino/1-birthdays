import React from 'react';

const List = ({ people }) => {
    return (
        <> {
            console.log('datax', people)

        }
            <h2>list component</h2>

            {people.map((person) => {
                const { id, name, age, image } = person;
                return <article key={id} className="person">
                    <img src={image} alt={name} />
                    <h3>{name}</h3>
                    <p>{age} years</p>
                </article>
            })}

        </>
    );
};

export default List;
