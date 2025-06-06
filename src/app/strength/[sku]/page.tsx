import Image from "next/image";
import { Button } from "@/components/ui/button";
import { allProducts, Product } from "@/lib/product"; // Assuming your product data is in src/lib/product.ts
import { NextPage } from 'next';

interface PageParams {
  sku: string;
}

interface PageProps {
  params: PageParams;
}

const ProductDetailPage: NextPage<PageProps> = ({ params }) => {
  const { sku } = params;
  const product: Product | undefined = allProducts.find((item) => item.sku === sku);

  if (!product) {
    return (
      <div className="w-full flex items-center justify-center min-h-[calc(100vh-88px)]">
        <p>Product not found for SKU: {sku}</p>
      </div>
    );
  }

  return (
    <div className="w-full flex items-center justify-center">
      <main className="grid mt-12 grid-cols-1 md:grid-cols-2 w-full max-w-7xl">
        {/* Product Image */}
        <div className="relative h-[60vh] md:h-auto flex items-center justify-center p-8">
          <div className="relative w-full max-w-md h-full">
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name || "Product image"}
              fill
              className="object-contain"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* Product Info */}
        <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center relative">
          <div className="max-w-lg">
            <span className="text-sm uppercase tracking-wider text-gray-600">
              {product.category}
            </span>

            <h1 className="text-2xl md:text-4xl lg:text-5xl mt-4 mb-10">
              {product.name}
            </h1>

            {/* Product Description */}
            <div className="mb-10">
              <p className="text-gray-700 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Get expert advice button */}
            <div className="flex items-center">
              <a
                href={`https://wa.me/919311771888?text=Hi, I'm interested in the ${encodeURIComponent(
                  product.name
                )} with SKU: ${product.sku}.`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-black hover:bg-gray-800 text-white rounded-full px-8 py-6">
                  Get expert advice
                </Button>
              </a>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute bottom-4 right-4 opacity-20">
            <div className="w-4 h-4 rounded-full bg-[#e8f3f3] mb-2" />
            <div className="w-4 h-4 rounded-full bg-[#e8f3f3] mb-2" />
            <div className="w-4 h-4 rounded-full bg-[#e8f3f3]" />
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductDetailPage;