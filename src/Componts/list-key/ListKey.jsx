import React from 'react'; 
import '../list-key/ListKey.css';

const ListKey = () => {
    // Updated array with a new item
    const objDetails = [
        {
            name: "ankur",
            age: 17,
            skill: "web developer",
        },
        {
            name: "jay",
            age: 20,
            skill: "front end developer"
        },
        {
            name: "sara",
            age: 25,
            skill: "back end developer"
        }
    ];

    return (
        <div>
            <h1 className='t-center'>hello</h1>

            <div className="container">
                <div className="row">
                    <div className="col-3">
                        <div className="main-item">
                            {objDetails.map((detail, index) => (
                                <div key={index}>
                                    <p>Name: {detail.name}</p>
                                    <p>Age: {detail.age}</p>
                                    <p>Skill: {detail.skill}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="col-3">
                        <div className="main-item">
                            {objDetails.map((detail, index) => (
                                <div key={index}>
                                    <p>Name: {detail.name}</p>
                                    <p>Age: {detail.age}</p>
                                    <p>Skill: {detail.skill}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="col-3">
                        <div className="main-item">
                            {objDetails.map((detail, index) => (
                                <div key={index}>
                                    <p>Name: {detail.name}</p>
                                    <p>Age: {detail.age}</p>
                                    <p>Skill: {detail.skill}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="col-3">
                        <div className="main-item">
                            {objDetails.map((detail, index) => (
                                <div key={index}>
                                    <p>Name: {detail.name}</p>
                                    <p>Age: {detail.age}</p>
                                    <p>Skill: {detail.skill}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ListKey;
