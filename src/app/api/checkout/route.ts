import { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

    const { priceId } = req.body;

    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method not allowed." });
    }

    if (!priceId) {
        return res.status(400).json({ error: 'Price not found.' });
    }

    const successUrl = `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`;
    const cancelUrl = `${process.env.NEXT_URL}/`;

    const checkoutSession = await stripe.checkout.sessions.create({
        success_url: successUrl,
        cancel_url: cancelUrl,
        mode: 'payment',
        line_items: [
        {
            price: priceId,
            quantity: 1,
        }
        ]
    })

  return res.status(201).json({
    checkoutUrl: checkoutSession.url
  })
}