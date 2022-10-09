import React from 'react';
import Special from '../Special/Special';

const Myself = ({house}) => {
    return (
        <div>
            <h2>Myself</h2>
            <p><small>House: {house}</small></p>
            <section>
                <Special house={house}></Special>
            </section>
        </div>
    );
};

export default Myself;