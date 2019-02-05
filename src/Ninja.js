import React from 'react';

const Ninjas = ({ninjas, deleteNinja}) => {
    
    // Delete Ninja will be only invoked when 'somebody' calls it
    return(
        <div className="ninja-list">
            {
                ninjas.map(ninja => {
                    return ninja.age < 13 ? (
                        <div className="ninja" key={ninja.id}>
                            <div>Name: { ninja.name }</div>
                            <div>Age: { ninja.age }</div>
                            <div>Belt: { ninja.belt }</div>
                            <button onClick={() => {deleteNinja(ninja.id)}}>Delete Ninja</button>
                        </div>
                    ) : null;
                })
            }
        </div>
    )

}

export default Ninjas;