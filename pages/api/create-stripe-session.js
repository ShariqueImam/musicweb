const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

async function CreateStripeSession(req, res) {
  const { item } = req.body;
  const redirectURL =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://mymodelcar.com";

  const transformedItem = {
    price_data: {
      currency: "bgn",
      product_data: {
        images: [item.image],
        name: item.name,
        description: item.description,
      },
      unit_amount: item.price * 100,
    },

    quantity: item.quantity,
  };

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [transformedItem],
    mode: "payment",
    success_url: redirectURL + "/thank-you",
    cancel_url: redirectURL,
    metadata: {
      images: item.image,
    },
  });

  res.json({ id: session.id });
}

export default CreateStripeSession;


