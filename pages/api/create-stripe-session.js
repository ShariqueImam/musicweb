const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

async function CreateStripeSession(req, res) {
  const { item } = req.body;
  const redirectURL =
    process.env.NODE_ENV === "development"
      ? "https://www.mysteriousmusic.co.uk"
      : "https://www.mysteriousmusic.co.uk";

  const transformedItem = {
    price_data: {
      currency: "gbp",
      unit_amount: item.price*100,
      product_data: {
        // images: [item.image],
        name: item.name,
        description: item.description,
      },
    },
    quantity: item.quantity,
  };

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [transformedItem],
    mode: "payment",
    success_url: redirectURL + "/",
    cancel_url: redirectURL,
    metadata: {
      // images: item.image,
    },
  });

  res.json({ id: session.id });
}

export default CreateStripeSession;
