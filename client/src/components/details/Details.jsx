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

        commentService.getAll(id)
            .then(setComments)
    }, [id])

    const addCommentHandler = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const newComment = await commentService.create(
            id,
            formData.get('comment'),
        );

        setComments(state => [...state, { ...newComment, author: { id } }]);

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

        // <div className="container-fluid py-5">
        //     <div className="container">
        //         <div className="mx-auto text-center mb-5" style={{ maxWidth: 800 }}>
        //             <h2 className="mb-4 text-secondary">Key <span className="text-primary text-uppercase">{tree.name}</span> facts</h2>
        //         </div>
        //         <div className="row gx-5 mb-5">
        //             <div className="col-lg-6 mb-5 mb-lg-0" style={{ maxWidth: 800 }}>
        //                 <p className="details-page mb-4">Height – {tree.height}</p>
        //                 <p className="details-page mb-4">Exposure – {tree.exposure}</p>
        //                 <p className="details-page mb-4">Soil – {tree.soil}</p>
        //                 <p className="details-page mb-4"> {tree.more}
        //                 </p>
        //             </div>
        //             <div>
        //                 <div className="col-lg-6 mb-5 mb-lg-0" style={{ maxWidth: 800 }}>
        //                 <div className="d-flex h-100">
        //                     <img src={tree.image} alt={tree.name} />
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>

        //         <div className="container-fluid py-5">
        //             <h2>Comments:</h2>
        //             <ul>
        //                 {/* <!-- list all comments for current game (If any) --> */}

        //                 {comments.map(({ _id, text }) => (
        //                     <li key={_id} className="comment">
        //                         <p>{_id}: {text}</p>
        //                     </li>
        //                 ))}

        //             </ul>
        //             {/* <!-- Display paragraph: If there are no games in the database --> */}

        //             {comments.length === 0 && (
        //                 <p className="no-comment">No comments.</p>
        //             )}

        //         </div>

        //         <div className="container mx-auto text-left mb-5 container-login100 wrap-login100" style={{ maxWidth: 800 }}>
        //             <label className="comment-form-title">Add comment</label>
        //             <form className="login100-form validate-form p-l-55 p-r-55 p-t-150" onSubmit={addCommentHandler}>
        //                 <textarea name="comment" placeholder="Share your opinion......" style={{ width: 400 }} ></textarea>
        //                 <input className="input100" type="submit" value="Add Comment" />
        //             </form>
        //         </div>

        //     </div>
        // </div>

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
                            <p className="details-page mb-4"> {tree.more}
                            </p>
                        </div> 
                                                
                        <a className="btn bg-primary py-2 px-3" style={{ color: "black" }} href=""><i className="bi bi-tree text-white"></i>Plant</a>
                        {/* <Link to={`${Path.Catalog}/${_id}`} className="btn bg-secondary py-2 px-3" style={{ color: "black" }}><i className="bi bi-tree text-white"></i>Plant</Link> */}
                    </div>

                </div>

                <div className="container-fluid py-3">
                    <h2>Comments:</h2>
                    <ul>
                        {/* <!-- list all comments for current game (If any) --> */}

                        {comments.map(({ _id, text }) => (
                            <li key={_id} className="comment">
                                <p>{_id}: {text}</p>
                            </li>
                        ))}
                    </ul>
                    {/* <!-- Display paragraph: If there are no games in the database --> */}

                    {comments.length === 0 && (
                        <p className="no-comment">No comments.</p>
                    )}

                </div>

                <div className="container mx-auto text-left mb-5 container-login100 wrap-login100" style={{ maxWidth: 800 }}>
                    <label className="comment-form-title bg-primary">Add comment</label>
                    <form className="login100-form validate-form p-l-55 p-r-55 p-t-70" onSubmit={addCommentHandler}>
                        <textarea name="comment" placeholder="Share your opinion......" style={{ width: 400 }} ></textarea>
                        <input className="input100 bg-secondary" type="submit" value="Add Comment" />
                    </form>
                </div>

            </div>
        </div>
    )
}

