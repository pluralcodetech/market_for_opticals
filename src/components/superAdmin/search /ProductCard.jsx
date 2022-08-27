import React from "react";
import { Card, Badge, Button } from "flowbite-react";

function ProductCard({ product }) {
  return (
    <div className="max-w-sm">
      <Card
        imgSrc={`${product.product_image}`}
        href={`/superadmin/product/${product.id}`}
      >
        <h5 className="text-base font-bold tracking-tight text-gray-900 dark:text-white">
          {product.product_name}
        </h5>
        <Badge
          color={product.approved_status === "Approved" ? "success" : "warning"}
        >
          status : {product.approved_status}
        </Badge>
        <p className="font-normal text-sm text-gray-700 dark:text-gray-400">
          price : &#8358; {product.product_price}
        </p>
      </Card>
    </div>
  );
}

export default ProductCard;
