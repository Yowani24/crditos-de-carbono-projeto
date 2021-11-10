require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

const PORT = 4000;

const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY);

app.post("/payment", async (req, res) => {
  const { items } = req.body;
  const paymentMethod = items.map((item) => item.paymentMethod);

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: paymentMethod,
      mode: "payment",
      line_items: items.map((item) => {
        return {
          price_data: {
            currency: "brl",
            product_data: {
              name: item.name,
              images: [item.image],
            },
            unit_amount: parseInt(item.price) * 100,
          },
          quantity: item.quantidade,
          description: item.description,
        };
      }),

      success_url: `${process.env.CLIENT_URL}`,
      cancel_url: `${process.env.CLIENT_URL}`,
    });
    res.json({ url: session.url });
  } catch (error) {
    res.status(500).json({ error: e.message });
  }
});

app.listen(PORT, () => console.log("Listening on PORT: 4000"));
