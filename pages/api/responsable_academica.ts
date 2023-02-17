import type { NextApiRequest, NextApiResponse } from 'next'
import {myFetch} from '../../utils/myFetch';

type Data = {};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    let result = await myFetch('responsable_academica', 'GET', null, null);
    res.status(200).send(result);
}
