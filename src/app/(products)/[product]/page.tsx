import AllProductsCard from "@/components/AllProductsCard";
import { client } from "@/src/lib/sanityClient";
import { IProduct } from "@/src/types/product";

// Function to fetch product data based on the category
const femaleData = async (product: string): Promise<IProduct[]> => {
  try {
    let query = `*[_type == "products"]{
      name,
      price,
      _id,
      images,
      tags -> { tags },
      slug,
      category -> { category },
    }`;

    if (product !== "products") {
      query = `*[_type == "products" && category ->category == $product]{
        name,
        price,
        _id,
        images,
        tags -> { tags },
        slug,
        category -> { category },
      }`;
    }

    const res = await client.fetch(query, { product });
    return res;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
};

// Page component to display products based on the category from params
export default async function Page({ params }: { params: { product: string } }) {
  const category = params.product;
  const data: IProduct[] = await femaleData(category);

  if (data.length === 0) {
    return (
      <p className="text-4xl text-center mx-auto text-black-300">
        We will come-up with this product next time, stay tuned!
      </p>
    );
  }

  return (
    <>
      <AllProductsCard data={data} />
    </>
  );
}















