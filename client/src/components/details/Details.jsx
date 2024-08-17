import { useContext, useEffect, useReducer, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import * as speciesService from '../../services/speciesService';
import * as commentService from '../../services/commentService';
import Path from "../../paths";
import { pathToUrl } from "../../utils/pathUtils";
import AuthContext from "../../contexts/authContext";
import reducer from "./commentReducer";
import useForm from "../../hooks/useForm";

export default function Details() {
    const { email, userId } = useContext(AuthContext);
    const [tree, setTree] = useState({});
    const [comments, dispatch] = useReducer(reducer, []);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        speciesService.getOne(id)
            .then(setTree);

        commentService.getAll(id)
            .then((result) => {
                dispatch({
                    type: 'GET_ALL__COMMENTS',
                    payload: result,
                });
            });
    }, [id]);

    const addCommentHandler = async (values) => {

        if (values.comment) {
            const newComment = await commentService.create(
                id,
                values.comment,
            );
    
            newComment.owner = { email };
    
            dispatch({
                type: 'ADD_COMMENT',
                payload: newComment
            });
    
            values.comment = '';
        } else {
            alert("You cannot submit empty comment!")
        }
    };

    const deleteButtonHandler = async () => {
        const hasConfirmed = confirm(`Are you sure you want to delete ${tree.name}?`);

        if (hasConfirmed) {
            await speciesService.remove(id);
            navigate(Path.Catalog);
        }
    };

    const { values, onChange, onSubmit } = useForm(addCommentHandler, {
        comment: '',
    });

    const isOwner = userId === tree._ownerId;

    return (
        <div className="container-fluid about pt-5">
            <div className="container">
                <div className="row gx-5">
                    <div className="col-lg-6 mb-5 mb-lg-0">
                        <div className="d-flex h-100">
                            <img className="img-fluid mt-0 mx-auto" src={tree.image} alt={tree.name} />
                        </div>
                    </div>

                    <div className="col-lg-6 pb-5 h-100 p-5">
                        <div className="col-lg-12 mb-5 mb-lg-0" style={{ maxWidth: 800 }}>
                            <h2 className="mb-4 text-secondary">Key <span className="text-primary text-uppercase">{tree.name}</span> facts</h2>
                            <p className="details-page mb-4">Height – {tree.height}</p>
                            <p className="details-page mb-4">Exposure – {tree.exposure}</p>
                            <p className="details-page mb-4">Soil – {tree.soil}</p>
                            <p className="details-page mb-4">Needs – {tree.needs}</p>
                            <p className="details-page mb-4"> {tree.more}
                            </p>
                        </div>

                        {isOwner && (
                            <div className="buttons d-flex justify-content-center">
                                <Link to={pathToUrl(Path.Edit, { id })} className="btn bg-primary py-2 px-5" style={{ color: "black", margin: '2em' }}>Edit</Link>                               
                                <button className="btn bg-secondary py-2 px-5 " style={{ color: "black", margin: '2em' }} onClick={deleteButtonHandler}>Delete</button>
                            </div>
                        )}

                    </div>
                </div>

                <div className="container-fluid py-3">
                    <h2>Comments:</h2>
                    <ul>                       
                        {comments.map(({ _id, text, owner: { email } }) => (
                            <li key={_id} className="comment">
                                <p>{email}: {text}</p>
                            </li>
                        ))}
                    </ul>

                    {comments.length === 0 && (
                        <p className="no-comment">No comments.</p>
                    )}
                </div>

                <div className="container mx-auto text-left mb-5 container-login100 wrap-login100" style={{ maxWidth: 800 }}>
                    <label className="comment-form-title bg-primary">Add comment</label>
                    <form className="login100-form validate-form p-l-55 p-r-55 p-t-70" onSubmit={onSubmit}>
                        <textarea name="comment" value={values.comment} onChange={onChange} placeholder="Share your opinion......" style={{ width: 400 }} ></textarea>
                        <input className="input100 bg-secondary" type="submit" disabled={!values.comment} value="Add Comment" />
                    </form>
                </div>

            </div>
        </div>
    )
}
