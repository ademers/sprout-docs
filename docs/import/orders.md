# Orders


::: code

``` craft3
[
  {
    "@model": "barrelstrength\\sproutimport\\importers\\elements\\Order",
    "attributes": {
      "currency": "USD",
      "billingAddressId": null,
      "shippingAddressId": null,
      "shippingMethodHandle": "freeShipping",
      "gatewayId": 1,
      "customerId": "customer@website.com",
      "orderStatusId": 1,
      "isCompleted": 1,
      "dateOrdered": "2016-05-21 01:08:38",
      "datePaid": "2016-05-21 01:09:38",
      "returnUrl": "/commerce/customer/order?number={number}",
      "cancelUrl": "/commerce/checkout/payment"
    },
    "content": {
      "title": "Order One",
      "fields": []
    },
    "lineItems": [
      {
        "sku": "shoes-sku-1",
        "qty": "3",
        "options": []
      },
      {
        "sku": "clothes-sku-1",
        "qty": "1",
        "options": []
      }
    ],
    "payments": {
      "firstName": "Boy",
      "lastName": "Sue",
      "number": "4929000000006",
      "month": "1",
      "year": "2020",
      "cvv": "123"
    },
    "transactions": {
      "status": "success",
      "reference": "ch_XXXXXX",
      "response": "{\"cardType\":\"visa\",\"cardExpiryMonth\":\"03\",\"cardExpiryYear\":\"2021\",\"gateway\":\"stripe\"}"
    },
    "addresses": {
      "billingAddress": {
        "firstName": "Boy",
        "lastName": "Sue",
        "countryCode": "GB",
        "state": "",
        "address1": "45 Fam Road",
        "city": "Partu",
        "zipCode": "NBH BNY"
      }
    }
  }
]
```

:::

