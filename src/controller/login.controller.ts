import { Request, Response } from 'express';
import loginService from '../service/login.service';

async function signIn(req: Request, res: Response) : Promise<Response> {
  try {
    const { username, password } = req.body; 
    const loginStatus = await loginService.signIn(username, password);
    if (loginStatus.error === 'missing credential') {
      return res.status(400)
        .json({ message: '"username" and "password" are required' });
    }
    if (loginStatus.error === 'Invalid credentials') {
      return res.status(401)
        .json({ message: 'Username or password invalid' });
    }
    return res.status(200).json({ token: loginStatus.token });
  } catch (err) {
    return res.status(500).json({ err });
  }
}

export default { signIn };
