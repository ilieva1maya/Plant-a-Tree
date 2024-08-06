import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import * as speciesService from '../../services/speciesService';

export default function Details() {
    const [tree, setTree] = useState({});
    const { id } = useParams();

    useEffect(() => {
        speciesService.getOne(id)
        .then(setTree)
    }, [id])

    return (
        <div className="container-fluid py-5">
            <div className="container mx-auto text-left mb-5" style={{ maxWidth: 800 }}>
                <h2 className="mb-4 text-secondary">Key <span className="text-primary text-uppercase">{tree.name}</span> facts</h2>
                <p className="details-page mb-4">Family – {tree.family}</p>
                <p className="details-page mb-4">Height – {tree.height}</p>
                <p className="details-page mb-4">Exposure – {tree.exposure}</p>
                <p className="details-page mb-4">Soil – {tree.soil}</p>
                <p className="details-page mb-4">Foliage: {tree.foliage}</p>
                <p className="details-page mb-4"> {tree.more}
                </p>
                <img src={tree.image} alt={tree.name} />
            </div>
        </div>
    )
}

