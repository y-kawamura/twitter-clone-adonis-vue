'use strict'

const User = use("App/Model/User");

class UserController {
  async signup ({ request, auth, response }) {
    // get user data from signup form
    const userData = request.only(['name', 'username', 'email', 'password']);
  
    try {
      // save user to database
      const user = await User.create(userData);
      // generate JWT token for user
      const taken = await auth.generate(user);
  
      return response.json({
        status: 'success',
        data: token
      });
    } catch (error) {
      return response.status(400).json({
        status: 'error',
        message: 'There was a problem creating the user, please try again later.'
      });
    }
  };
}

module.exports = UserController
