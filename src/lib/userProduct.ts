import { client } from "./sanityClient";

async function vercelProduct() {
  const res = await fetch(`http://localhost:3000/`, {
    cache: "no-store",
  });
  try {
    if (res.status === 200) {
      const result = await res.json();
      return result;
    } else {
      console.log("Your cart is empty");
      return null;
    }
  } catch (error) {
    console.error("Original error:", error);
  }
}
const sanityProduct = async (product_id: string) => {
  const res = await client.fetch(
    `*[_type == "products" && _id == $product_id] {
      name,
      price,
      description,
      care,
      _id,
      images,
      tags -> {
        tags
      },
      slug,
      category -> {
        category
      }
    }`,
    {
      product_id,
    }
  );
  return res;
};
export { sanityProduct, vercelProduct };
