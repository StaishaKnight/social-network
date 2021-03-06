const router = require('express').Router();

const {
    getAllUser,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend
  } = require('../../controllers/user-controller');

// get - post users
router
  .route('/')
  .get(getAllUser)
  .post(createUser);

// get - put - delete user
router
  .route('/:id')
  .get(getUserById)
  .put(updateUser)
  .delete(deleteUser);


router
  .route('/:userId/friends/:friendId')
  .post(addFriend)
  .delete(deleteFriend);

module.exports = router;