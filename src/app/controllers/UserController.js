import axios from 'axios';
import 'dotenv/config';
import parseLinkHeder from 'parse-link-header';

class UserController {
  async index(req, res){
    const { query } = req
    
    try{
      const githubRequest = await axios(`https://api.github.com/users?since=${query.since}`);
      const nextSince = parseLinkHeder(githubRequest.headers.link).next.since;

      return res
      .status(200)
      .send({data: githubRequest.data, next: `${process.env.APP_BASE_URL}/users?since=${nextSince}`})
    }catch (err){
      return res.status(400).send({error: 'Error to get data'})
    }
  }

  async show(req, res){
    const { params } = req;

    try{
      const githubRequest = await axios(`https://api.github.com/users/${params.username}`);

      return res.json(githubRequest.data)
    }catch(err){
      return res.status(400).send({error: 'Error to get data'})
    }
  }
}

export default new UserController();