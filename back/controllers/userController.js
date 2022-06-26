export const getUserProfile = (req, res) => {
  const user = {
    name: 'Vanek',
    age: 19
  }

  res.json(user)
}