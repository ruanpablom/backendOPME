import axios from 'axios';

class RepoController {
  async index(req, res){
    const { params } = req;

    try{
      const githubRequest = await axios(`https://api.github.com/users/${params.username}/repos`);

      return res.json(githubRequest.data)
    }catch(err){
      return res.status(400).send({error: 'Bad request'})
    }
  }
}

export default new RepoController();