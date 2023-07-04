import bcrypt from 'bcryptjs';
import UserModel from '../database/models/user.model';
import jwtToken from '../utils/JWT';
import { User } from '../types/User';

type LoginReturn = {
  error?: string | undefined, token?: string | undefined
};

function verifyCredentials(password: string, user: User | undefined) : boolean {
  if (!user?.username) return false;
  const passwordMatch = bcrypt.compareSync(password, user?.password);
  if (!passwordMatch) return false;
  return true;
}

// eslint-disable-next-line complexity
async function signIn(username: string | undefined, password: string | undefined) 
  : Promise<LoginReturn> {
  if (!username || !password) return { error: 'missing credential' };
  try {
    const login = await UserModel.findOne({ where: { username } });
    const credentials = verifyCredentials(password, login?.dataValues);
    if (!credentials) return { error: 'Invalid credentials' };
    const token = jwtToken.createToken({ username });
    return { token }; 
  } catch (err) {
    throw new Error();
  }
}

export default { signIn };
