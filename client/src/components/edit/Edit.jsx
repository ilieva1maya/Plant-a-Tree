import Path from "../../paths";

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as speciesService from '../../services/speciesService'
import { pathToUrl } from "../../utils/pathUtils";

export default function Edit() {

    const navigate = useNavigate();
    const { id } = useParams();
    const [tree, setTree] = useState({
        name: '',
        height: '',
        exposure: '',
        soil: '',
        needs: '',
        image: '',
        more: '',
    });

    useEffect(() => {
        speciesService.getOne(id)
            .then(result => {
                setTree(result);
            });
    }, [id]);

    const editTreeSubmitHandler = async (e) => {
        e.preventDefault();

        const values = Object.fromEntries(new FormData(e.currentTarget))
        const newPath = pathToUrl(Path.Details, { id })
        
        try {
            await speciesService.edit(id, values);
            navigate(newPath);
        } catch (error) {
            console.log(`Error from edit.jsx: ${error}`);
        }
    }

    const onChange = (e) => {
        setTree(state => ({
            ...state,
            [e.target.name]: e.target.value,
        }))
    }

    return(
        <div className="container-fluid about pt-5">
        <div className="container">  
            <div className="row gx-5 mb-5">

                <div className="col-lg-6 mb-5 mb-lg-0">
                    <div className="d-flex h-100">
                        <img className="img-fluid mt-0 mx-auto" src={tree.image} onChange={onChange} />
                    </div>
                </div>

                <div className="col-lg-6 pb-5 h-100 p-5">
                    <form onSubmit={editTreeSubmitHandler}>
                        <div className="row g-3">
                            <div className="col-12">
                                <label htmlFor="name" className="txt4 text-primary">Species Name:</label>
                                <input type="text" name="name" className="form-control bg-light border-0 px-4" placeholder="Name" style={{ height: 55 }} value={tree.name} onChange={onChange}/>
                            </div>
                            <div className="col-12">
                                <label htmlFor="height" className="txt4 text-primary">Height:</label>
                                <input type="text" name="height" className="form-control bg-light border-0 px-4" placeholder="Height" style={{ height: 55 }} value={tree.height} onChange={onChange}/>
                            </div>
                            <div className="col-12">
                                <label htmlFor="exposure" className="txt4 text-primary">Exposure:</label>
                                <input type="text" name="exposure" className="form-control bg-light border-0 px-4" placeholder="Exposure" style={{ height: 55 }} value={tree.exposure} onChange={onChange}/>
                            </div>
                            <div className="col-12">
                                <label htmlFor="soil" className="txt4 text-primary">Soil:</label>
                                <input type="text" name="soil" className="form-control bg-light border-0 px-4" placeholder="Soil" style={{ height: 55 }} value={tree.soil} onChange={onChange}/>
                            </div>
                            <div className="col-12">
                                <label htmlFor="soil" className="txt4 text-primary">Needs:</label>
                                <input type="text" name="needs" className="form-control bg-light border-0 px-4" placeholder="Needs" style={{ height: 55 }} value={tree.needs} onChange={onChange}/>
                            </div>
                            <div className="col-12">
                                <label htmlFor="image" className="txt4 text-primary">Image:</label>
                                <input type="text" name="image" className="form-control bg-light border-0 px-4" placeholder="Image" style={{ height: 55 }} value={tree.image} onChange={onChange}/>                                
                            </div>
                            <div className="col-12">
                                <label htmlFor="more" className="txt4 text-primary">More:</label>
                                <input type="text" name="more" className="form-control bg-light border-0 px-4" placeholder="More" style={{ height: 55 }} value={tree.more} onChange={onChange}/>
                            </div>
                            <div className="col-12">                           
                                <button className="btn btn-secondary w-100 py-3" type="submit">Update</button>
                            </div>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    </div>
    )
}