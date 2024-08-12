import * as speciesService from "../../services/speciesService";
import { useNavigate } from "react-router-dom";

export default function AddSpecies() {
    const navigate = useNavigate();
    const addSpeciesSubmitHandler = async (e) => {
        e.preventDefault();

        const speciesData = Object.fromEntries(new FormData(e.currentTarget));

        try {
            await speciesService.create(speciesData);
            navigate('/catalog');
        } catch (error) {
            // в последствие някаква логика, нотификация за грешки
            console.log(`Error from create.jsx: ${error}`);
        }
    }

    return (
        // <div className="container-fluid about pt-5">
        //     <div className="container mb-3">
        //         <div className="row gx-5">

        //             <div className="col-lg-6 mb-5 mb-lg-0">
        //                 <div className="d-flex h-100">
        //                     <img className="img-fluid mt-0 mx-auto" src="img/types-of-trees_all.jpg" />
        //                 </div>
        //             </div>
        //             <div className="col-lg-6">
        //                 <div className="row gx-5" id="create-page" >
        //                     <form onSubmit={addSpeciesSubmitHandler}>
        //                         <div className="container-add">

        //                             <label htmlFor="name" className="txt4">Species Name:</label>
        //                             <input className="input100" type="text" name="name" placeholder="Name" />

        //                             <label htmlFor="height" className="txt4">Height:</label>
        //                             <input className="input100" type="text" name="height" placeholder="Height" />

        //                             <label htmlFor="exposure" className="txt4">Exposure:</label>
        //                             <input className="input100" type="text" name="exposure" placeholder="Exposure" />

        //                             <label htmlFor="soil" className="txt4">Soil:</label>
        //                             <input className="input100" type="text" name="soil" placeholder="Soil" />

        //                             <label htmlFor="imageUrl" className="txt4">Image:</label>
        //                             <input className="input100" type="text" name="image" placeholder="Image" />

        //                             <label htmlFor="more" className="txt4">More:</label>
        //                             <input className="input100" type="text" name="more" placeholder="Tell us something interesting..." />

        //                             <button className="login100-form-btn">
        //                                 Add Species
        //                             </button>

        //                         </div>
        //                     </form>
        //                 </div>
        //             </div>

        //         </div>
        //     </div>
        // </div>

        <div className="container-fluid about pt-5">
            <div className="container">
                <div className="mx-auto text-center mb-5" style={{ maxWidth: 500 }}>
                    <h3 className="text-primary text-uppercase">Add Tree</h3>
                </div>
                <div className="row gx-5 mb-5">

                    <div className="col-lg-6 mb-5 mb-lg-0">
                        <div className="d-flex h-100">
                            <img className="img-fluid mt-0 mx-auto" src="img/types-of-trees_all.jpg" />
                        </div>
                    </div>

                    <div className="col-lg-6 pb-5 bg-primary h-100 p-5">
                        <form onSubmit={addSpeciesSubmitHandler}>
                            <div className="row g-3">
                                <div className="col-12">
                                    <label htmlFor="name" className="txt4 text-secondary">Species Name:</label>
                                    <input type="text" name="name" className="form-control bg-light border-0 px-4" placeholder="Name" style={{ height: 55 }} />
                                </div>
                                <div className="col-12">
                                    <label htmlFor="height" className="txt4 text-secondary">Height:</label>
                                    <input type="text" name="height" className="form-control bg-light border-0 px-4" placeholder="Height" style={{ height: 55 }} />
                                </div>
                                <div className="col-12">
                                    <label htmlFor="exposure" className="txt4 text-secondary">Exposure:</label>
                                    <input type="text" name="exposure" className="form-control bg-light border-0 px-4" placeholder="Exposure" style={{ height: 55 }} />
                                </div>
                                <div className="col-12">
                                    <label htmlFor="soil" className="txt4 text-secondary">Soil:</label>
                                    <input type="text" name="soil" className="form-control bg-light border-0 px-4" placeholder="Soil" style={{ height: 55 }} />
                                </div>
                                <div className="col-12">
                                    <label htmlFor="imageUrl" className="txt4 text-secondary">Image:</label>
                                    <input type="text" name="image" className="form-control bg-light border-0 px-4" placeholder="Image" style={{ height: 55 }} />
                                </div>
                                <div className="col-12">
                                    <label htmlFor="more" className="txt4 text-secondary">More:</label>
                                    <input type="text" name="more" className="form-control bg-light border-0 px-4" placeholder="More" style={{ height: 55 }} />
                                </div>
                                <div className="col-12">
                                    <button className="btn btn-secondary w-100 py-3" type="submit">Add Species</button>
                                </div>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    )
}


