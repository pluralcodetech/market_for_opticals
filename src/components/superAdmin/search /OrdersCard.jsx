import React from "react";
import { Card, Button, Badge } from "flowbite-react";

function OrdersCard({ customer }) {
  return (
    <Card
      href={`/superadmin/order-list/${customer.customer_id}/${customer.date}/${customer.time}`}
    >
      <h5 className="text-base font-bold tracking-tight text-gray-900 dark:text-white text-ellipsis overflow-hidden">
        Order by : {customer.customer_name}
      </h5>
      <Badge
        color={customer.delivery_status === "pending" ? "warning" : "success"}
      >
        status : {customer.delivery_status}
      </Badge>

      <p className="font-normal text-sm text-gray-700 dark:text-gray-400">
        {customer.date} -- {customer.time}
      </p>
    </Card>
  );
}

export default OrdersCard;
