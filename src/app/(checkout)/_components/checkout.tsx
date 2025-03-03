"use client";

import { IGroup } from "@/@types/models";
import usePaddle from "@/hooks/use-paddle";
import { APP_DOMAIN } from "@/lib/env";
import { RiLoader3Fill } from "@remixicon/react";
import { useEffect, useState } from "react";

const Checkout = ({
  group,
  anonymousKey,
}: {
  group: IGroup;
  anonymousKey: string;
}) => {
  const paddle = usePaddle();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    paddle?.Checkout.open({
      settings: {
        displayMode: "overlay",
        theme: "light",
        locale: "en",
        successUrl: `${APP_DOMAIN}/thank-you/${anonymousKey}`,
      },
      items: [
        {
          priceId: group.price_id,
          quantity: 1,
        },
      ],
      customData: {
        entityType: "subscription",
        anonymousKey,
        group: {
          id: group._id,
          owner: group.owner,
          entityType: "group",
          amount: group.price,
          priceId: group.price_id,
        },
      },
    });
    setIsLoading(false);
  }, [paddle]);

  return (
    <div className="w-screen h-screen">
      {isLoading && <RiLoader3Fill className="animate-spin" />}
    </div>
  );
};

export default Checkout;
