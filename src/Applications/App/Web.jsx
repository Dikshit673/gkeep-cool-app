// 8. Google Keep Notes App
import React, { useState } from "react";
import "./Style.css";

const getItemFromLS = () => {
    let list = localStorage.getItem("gKeep")

    if (list) {
        return JSON.parse(list);
    }
    else {
        return [];
    }
}

const Web = () => {
    const [obj1, setObj1] = useState(
        {
            id: "",
            messageHeading: "",
            messageBody: ""
        }
    );
    const [notes, setNotes] = useState(getItemFromLS);

    React.useEffect(() => {
        localStorage.setItem("gKeep", JSON.stringify(notes))
    }, [notes])

    const gkeepEvents = (e) => {
        const { name, value } = e.target;
        let timestamp = new Date().getTime().toString();

        // console.log(name, " : ", value)

        setObj1((preValue) => {
            return { ...preValue, [name]: value, id: timestamp }
        });
    };
    // console.log("obj1: ", obj1);

    const buttonSubmits = () => {
        setNotes((preVal) => {
            return [...preVal, obj1];
        });
        setObj1({
            id: "",
            messageHeading: "",
            messageBody: ""
        });
    };
    // console.log("notes: ", notes);

    const deleteItem = (id) => {
        setNotes((oldData) => {
            return oldData.filter((oldVal) => {
                return oldVal.id !== id;
            });
        });
    };

    return (
        <>

            <section className="main-gkeep-section">

                {/* <div className="gkeeep-firstdiv">
                    <div className="container">
                        <h2>Google Keep</h2>
                    </div>
                </div> */}


                <div className="gkeep-seconddiv">
                    <div className="container">
                        <div className="row d-flex justify-content-center">
                            <div className="col-8 col-md-6 col-lg-4 gkeep-centerdiv">

                                {/* <br />
                                <h2 className=" gkeep-main-heading">Google-Keep</h2> */}

                                <div className="container gkeep-for-padd">

                                    <div className="row">
                                        <div className="col-12">
                                            <input name="messageHeading" type="text" placeholder="Title" onChange={gkeepEvents} value={obj1.messageHeading} className="w-100 gkeep-input-title" />
                                        </div>
                                    </div>

                                    <div className="row ">
                                        <div className=" col-12 ">
                                            <textarea name="messageBody" type="text" placeholder="Write a note..." onChange={gkeepEvents} value={obj1.messageBody} className="w-100 gkeep-input-body" />
                                        </div>
                                    </div>

                                    <div className="row d-flex justify-content-end align-items-end">
                                        <div className="col-12 gkeep-btn-div">
                                            <button className="gkeep-input-btn" onClick={buttonSubmits}>
                                                <div className="gkeep-btn-indiv">
                                                    <i className="fa-solid fa-plus"></i>
                                                </div>
                                            </button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="gkeep-thirddiv">
                    <div className="container">
                        <div className="row d-flex flex-wrap">

                            {notes.map((currData, index) => {
                                const { messageHeading, messageBody, id } = currData;
                                return (
                                    <div className="col-6 col-md-4 col-lg-3 mt-4" key={id}>
                                        <div className="gkeep-centerdiv">
                                            <div className="container">
                                                <div className="row">
                                                    <div className="col-12">
                                                        <h2>{messageHeading}</h2>
                                                    </div>
                                                </div>

                                                <div className="row ">
                                                    <div className=" col-12 ">
                                                        <p>{messageBody}</p>
                                                    </div>
                                                </div>

                                                <div className="row d-flex justify-content-end align-items-end">
                                                    <div className="col-12 gkeep-btn-div">
                                                        <button className="gkeep-input-btn" onClick={() => deleteItem(id)}>
                                                            <div className="gkeep-btn-indiv">
                                                                <i className="fa-solid fa-trash"></i>
                                                            </div>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}

                        </div>
                    </div>
                </div>

            </section>
        </>
    );
};

export default Web;
