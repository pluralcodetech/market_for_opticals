import React from "react";
import { Card, Button } from "flowbite-react";

function MerchantCard({ merchant }) {
  return (
    <Card href={`/superadmin/merchants/${merchant.id}`}>
      <h5 className="text-base font-bold tracking-tight text-gray-900 dark:text-white text-ellipsis overflow-hidden">
        {merchant.company_name}
      </h5>
      <p className="font-normal text-sm text-gray-700 dark:text-gray-400 text-ellipsis overflow-hidden">
        {merchant.email}
      </p>
      <p className="font-normal text-sm text-gray-700 dark:text-gray-400">
        {merchant.company_phone_number}
      </p>
    </Card>
  );
}

export default MerchantCard;
