import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    let result = await fetch("http://192.168.1.243:3000/api/mail_enviado");
    const allPostsData = await result.json();
    res.status(200).send(allPostsData);
}
