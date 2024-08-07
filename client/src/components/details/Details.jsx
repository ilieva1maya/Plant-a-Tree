import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import * as speciesService from '../../services/speciesService';
import * as commentService from '../../services/commentService';

export default function Details() {
    const [tree, setTree] = useState({});
    const [comments, setComments] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        speciesService.getOne(id)
            .then(setTree)

        commentService.getAll()
            .then(setComments)
    }, [id])

    const addCommentHandler = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const newComment = await commentService.create(
            id,
            formData.get('comment'),
        );

        console.log(newComment);

        // const newComment = await commentService.create(
        //     id,
        //     values.comment,
        // );

        //     newComment.owner = { email };

        //     // setComments(state => [...state, { ...newComment, author: { email } }]);
        //     dispatch({
        //         type: 'ADD_COMMENT',
        //         payload: newComment
        //     });
    };

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

            <div className="container mx-auto text-left mb-5 container-login100 wrap-login100" style={{ maxWidth: 800 }}>
                <label className="comment-form-title">Add comment</label>
                <form className="login100-form validate-form p-l-55 p-r-55 p-t-150" onSubmit={addCommentHandler}>
                    <textarea name="comment" placeholder="Share your opinion......" style={{ width: 400 }} ></textarea>
                    <input className="input100" type="submit" value="Add Comment" />
                </form>
            </div>

        </div>
    )
}

