import { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";


const query = groq`*[_type=="product"]{
    ...
  } | order(_createdAt asc)`;

type Data = {
    products: [Products]
}
export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    const products = await sanityClient.fetch(query)
    res.status(200).json({ products })
}
