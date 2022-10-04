const router = require('express').Router();
const { Comment } = require('../../models');

//GET; findAll comments
Comment.findAll(
    {
        attributes: [
            'id',
            'comment_text',
            'post_id',
            'user_id'
        ]
    }
)
    .then(dbCommentsData => res.json(dbCommentsData))
    .catch(err=>{
        console.log(err);
        res.status(400).json(err);
})

//POST; create comment

//PUT; update comment by id

//DELETE; destroy comment by id

module.exports = router;