import jwt from 'jsonwebtoken';

const TOKEN_SECRET = process.env.JWT_SECRET || 'secretJWT';

const createToken = (payload: { username: string }): string =>
  jwt.sign(payload, TOKEN_SECRET);

export default {
  createToken,
};