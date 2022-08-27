import React from "react";
import { Card, Button } from "flowbite-react";

function CustomerCard({ customer }) {
  return (
    <Card href={`/superadmin/customers/${customer.id}`}>
      <h5 className="text-base font-bold tracking-tight text-gray-900 dark:text-white text-ellipsis overflow-hidden">
        {customer.name}
      </h5>
      <p className="font-normal text-sm text-gray-700 dark:text-gray-400 text-ellipsis overflow-hidden">
        {customer.email}
      </p>
      <p className="font-normal text-sm text-gray-700 dark:text-gray-400">
        {customer.phone_number}
      </p>
    </Card>
  );
}

export default CustomerCard;
