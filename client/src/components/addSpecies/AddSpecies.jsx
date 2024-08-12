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
        <div className="container-fluid about pt-5">
            <div className="container">  
                <div className="row gx-5 mb-5">

                    <div className="col-lg-6 mb-5 mb-lg-0">
                        <div className="d-flex h-100">
                            <img className="img-fluid mt-0 mx-auto" src="img/types-of-trees_all.jpg" />
                        </div>
                    </div>

                    <div className="col-lg-6 pb-5 h-100 p-5">
                        <form onSubmit={addSpeciesSubmitHandler}>
                            <div className="row g-3">
                                <div className="col-12">
                                    <label htmlFor="name" className="txt4 text-primary">Species Name:</label>
                                    <input type="text" name="name" className="form-control bg-light border-0 px-4" placeholder="Name" style={{ height: 55 }} />
                                </div>
                                <div className="col-12">
                                    <label htmlFor="height" className="txt4 text-primary">Height:</label>
                                    <input type="text" name="height" className="form-control bg-light border-0 px-4" placeholder="Height" style={{ height: 55 }} />
                                </div>
                                <div className="col-12">
                                    <label htmlFor="exposure" className="txt4 text-primary">Exposure:</label>
                                    <input type="text" name="exposure" className="form-control bg-light border-0 px-4" placeholder="Exposure" style={{ height: 55 }} />
                                </div>
                                <div className="col-12">
                                    <label htmlFor="soil" className="txt4 text-primary">Soil:</label>
                                    <input type="text" name="soil" className="form-control bg-light border-0 px-4" placeholder="Soil" style={{ height: 55 }} />
                                </div>
                                <div className="col-12">
                                    <label htmlFor="needs" className="txt4 text-primary">Needs:</label>
                                    <input type="text" name="needs" className="form-control bg-light border-0 px-4" placeholder="Needs" style={{ height: 55 }} />
                                </div>
                                <div className="col-12">
                                    <label htmlFor="image" className="txt4 text-primary">Image:</label>
                                    <input type="text" name="image" className="form-control bg-light border-0 px-4" placeholder="Image" style={{ height: 55 }} />
                                </div>
                                <div className="col-12">
                                    <label htmlFor="more" className="txt4 text-primary">More:</label>
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


