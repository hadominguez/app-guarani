import type { NextApiRequest, NextApiResponse } from 'next'
import {myFetch} from '../../../utils/myFetch';

type Data = {};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    const query = req.query;
    const { id } = query;

    let result = await myFetch('responsable_academica/' + id, 'GET', null, null);
    res.status(200).send(result);
}
