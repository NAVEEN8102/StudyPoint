import data from '../assets/Data'


function Table() {
    return (
        <>
            {data.map(data =>
                <div className="container" >
                    <h3 className="ms-3 mt-5 mb-3">{data.id} . {data.heading}</h3>
                    <div className="container-fluid shadow-lg rounded">
                        <div id="remove" className="row m-0">
                            <div className="col-lg p-3 text-center"><h5>TAG</h5></div>
                            <div className="col-lg p-3 text-center"><h5>Description</h5></div>
                            <div className="col-lg p-3 text-center"><h5>Attributes</h5></div>
                            <div className="col-lg p-3 text-center"><h5>Attributes Description</h5></div>
                        </div>
                        <hr id="remove" />
                        {data.tags.map((item, idx) =>
                            <div className="row m-0 justify-content-evenly" key={idx}>
                                <div title="TAG" className="col-lg p-3 d-flex flex-column justify-content-lg-center align-items-lg-center">
                                    <h5><blockquote id="add"><q>Tag-Name:</q></blockquote></h5>
                                    <p>&lt;{item["tag-name"]}&gt;</p>
                                </div>
                                <hr id="add" />
                                <div title="Description" className="col-lg d-flex flex-column justify-content-lg-center align-items-lg-center">
                                    <h5><blockquote id="add"><q>Description</q></blockquote></h5>
                                    <p className="p-2">{item["tag-des"]}</p>
                                </div>
                                <hr id="add" />
                                <div className="col-lg p-3 d-flex flex-column justify-content-lg-center align-items-lg-center">
                                    <h5><blockquote title="Attributes" id="add"><q>Attributes</q></blockquote></h5>
                                    <p>{item.atribute.map(attr => attr["atr-name"].join(' , '))}</p>
                                </div>
                                <hr id="add" />
                                <div className="col-lg p-3 d-flex flex-column justify-content-lg-center align-items-lg-center">
                                    <h5><blockquote title="Attributes-Description" id="add"><q>Attributes-Description</q></blockquote></h5>
                                    <p>{item.atribute.map(attr => attr["atr-des"])}</p>
                                </div>
                                <hr id="remove" />
                                <hr className="border border-danger border-3 opacity-25" id="add" />
                            </div>)}
                    </div>
                </div >
            )}
        </>
    );
}

export default Table;



