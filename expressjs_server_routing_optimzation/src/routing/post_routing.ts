
import express from 'express';

const postRouting = express.Router();

postRouting.get('/getPost', (request: express.Request, response: express.Response,) => {


    let postid = request.query.id;
    console.log('postId', postid);
    response.status(200).send(`<h1>postId : ${postid}</h1>`);
});

export default postRouting;