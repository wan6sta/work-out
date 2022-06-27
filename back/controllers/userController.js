// @desc    Get user profile
// @route   GET /api/users/profile
// @access  Private
export const getUserProfile = (req, res) => {
  const user = {
    name: 'Vanek',
    age: 19,
    job: 'react developer'
  }

  res.json(user)
}