const getAllUsers = async (req, res) => {
    try {
      const users = [
          {
              "id": 1,
              "name": "user 1"
          },
          {
            "id": 2,
            "name": "user 2"
          }
      ];
      return res.status(200).json({ users });
    } catch (error) {
      return res.status(500).send(error.message);
    }
};

const getUserById = async (req, res) => {
    try {
        const { userId } = req.params;
        const user = {
            "id": userId,
            "name": "user 1"
        };
        if (user) {
            return res.status(200).json({ user });
        }
        return res.status(404).send("User with the specified ID does not exists");
    } catch (error) {
        return res.status(500).send(error.message);
    }
};

module.exports = {
    getAllUsers,
    getUserById
};