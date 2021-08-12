import type { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '../../src/utils/db';
import User from '../../src/models/user';

type Data = {
  name: string;
  email: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data[]>) {
  await dbConnect();
  const user = await User.find();
  res.status(200).json(user);
}
