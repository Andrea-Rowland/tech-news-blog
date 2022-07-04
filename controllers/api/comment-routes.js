const router = require('express').Router();
const { Comment } = require('../../models');

// router.get('/', (req, res) => {
//     Comment.findAll({
//         attributes: ['id', 'comment_text', 'user_id', 'post_id'],
//         include: [
//             {
//                 model: User,
//                 attributes: ['user_id']
//             },
//             {
//                 model: Post,
//                 attributes: ['post_id']
//             }
//         ]
//     })
//     .then(dbCommentData => res.json(dbCommentData))
//     .catch(err => {
//         console.log(err);
//         res.status(400).json(err);
//     });
// });

router.post('/', (req, res) => {
    console.log('I am here.');
    Comment.create({
        comment_text: req.body.comment_text
      })
        .then(dbCommentData => res.json(dbCommentData))
        .catch(err => {
          console.log(err);
          res.status(400).json(err);
        });
});

router.delete('/:id', (req, res) => {

});

module.exports = router;