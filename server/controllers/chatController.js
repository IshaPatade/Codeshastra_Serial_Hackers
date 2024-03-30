const axios = require("axios");

// const CHAT_ENGINE_PROJECT_ID = "66ddbed2-3e7f-4879-948d-bac98c267505";
const CHAT_ENGINE_PROJECT_ID = "afc60120-a6e3-4a9c-a39e-0571aaf3b40f";
// const CHAT_ENGINE_PRIVATE_KEY = "4dfb76e0-d1de-494a-be04-fb1ea3ce70b3";
const CHAT_ENGINE_PRIVATE_KEY = "c45cf5e0-ca6d-4ec5-ad51-0a3e829922ea";

const signup = async (req, res) => {
  const { username, secret, email, first_name, last_name } = req.body;

  // Store a user-copy on Chat Engine!
  // Docs at rest.chatengine.io
  try {
    const r = await axios.post(
      "https://api.chatengine.io/users/",
      { username, secret, email, first_name, last_name },
      { headers: { "Private-Key": CHAT_ENGINE_PRIVATE_KEY } }
    );
    return res.status(r.status).json(r.data);
  } catch (e) {
    return res.status(e.response.status).json(e.response.data);
  }
}

const login = async (req, res) => {
  const { username, secret } = req.body;

  // Fetch this user from Chat Engine in this project!
  // Docs at rest.chatengine.io
  try {
    const r = await axios.get("https://api.chatengine.io/users/me/", {
      headers: {
        "Project-ID": CHAT_ENGINE_PROJECT_ID,
        "User-Name": username,
        "User-secret": secret,
      },
    });
    return res.status(r.status).json(r.data);
  } catch (e) {
    return res.status(e.response.status).json(e.response.data);
  }
};

module.exports = { login, signup };
