
import React from 'react';
import Title from "../components/Title";
import Major from "../components/Major";
import MAJORS from "../data/data.json";


const HomePage = () => {

    return (
        <div>

            <Title />

            <div className="flex flex-wrap gap-2 justify-center">

                {Object.keys(MAJORS).map((label) => (
                    <Major key={label} label={label}/>
                ))}

            </div>

        </div>
    );
}

export default HomePage;