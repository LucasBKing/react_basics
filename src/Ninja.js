import React from 'react';

const Ninjas = ({ninjas}) => {
    //this.props.ninjas
    //let { ninjas } = props;
    // first kind of conditional output
    // let ninjaList = ninjas.map(ninja => {
    //     if( ninja.age < 13) {
    //         return (
    //             <div className="ninja" key={ninja.id}>
    //                 <div>Name: { ninja.name }</div>
    //                 <div>Age: { ninja.age }</div>
    //                 <div>Belt: { ninja.belt }</div>
    //             </div>
    //         );
    //     } else {
    //         return null;
    //     }
        
    // });

    let ninjaList = ninjas.map(ninja => {
        // condition ? (if true) : (if false)
        return ninja.age > 13 ? (
            <div className="ninja" key={ninja.id}>
                <div>Name: { ninja.name }</div>
                <div>Age: { ninja.age }</div>
                <div>Belt: { ninja.belt }</div>
            </div>
        ) : null;
    });

    return(
        <div className="ninja-list">
            { ninjaList }
        </div>
    )
}

export default Ninjas;