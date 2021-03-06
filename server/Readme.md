### RESTful API
---

#### Mobile app
---
##### POST /login --> test done
###### login
- Request body:
```
{
	"email": <email>,
	"password": <password>
}
```

- Response (200):
```
{
  "access_token": <access_token>
}
```

##### POST /register --> test done
###### register
- Request body:
```
{
	"no_ktp": <no_ktp>,
	"name":<name>,
	"email":<email>,
	"address":<address>,
	"phone": <phone>,
	"password": <password>
}
```

- Response (201):
```
{
  "access_token": <access_token>
}
```

##### GET /user --> test done
###### get user detail
- Response(200):
```
{
  "no_ktp": <no_ktp>,
  "name": <name>,
  "email": <email>,
  "address": <address>,
  "status": <status>,
  "phone": <phone>
}
``` 

##### PUT /user --> test done
###### edit user detail
- Request body:
```
{
	"name": <name>,
	"address": <address>,
	"phone": <phone>
}
```

- Response (200):
```
{
    "message": "profile has been updated"
}
```

##### POST /hotplace --> test done
###### create hotplace and generate barcode
- Request body:
```
{
	"name": "gojek amir",
	"address": "jalan asik",
	"type": "transport",
	"phone": "0812393",
  "barcode_url": "url gambar si barcode"
}
```

- Response (200):
```
{
  "id": 86,
  "name": "gojek amir",
  "barcode_url": "url gambar si barcode",
  "HotplaceId": 86,
  "updatedAt": "2020-05-31T21:19:32.169Z",
  "createdAt": "2020-05-31T21:19:32.169Z"
}
```

##### GET /hotplace --> test done
###### get user hotplaces
- Response (200):
```
[
  {
      "id": 128,
      "name": "gojek amir",
      "type": "transport",
      "address": "jalan asik",
      "phone": "0812393"
  },
  {
      "id": 129,
      "name": "gojek amir",
      "type": "transport",
      "address": "jalan asik",
      "phone": "0812393"
  }
]
```


##### GET /hotplace/:id --> test done
###### get qr of the hotplace
- Response(200):
```
{
  "id": 128,
  "name": "gojek amir",
  "barcode_url": "url gambar si barcode",
  "HotplaceId": 128,
  "createdAt": "2020-06-01T11:29:58.231Z",
  "updatedAt": "2020-06-01T11:29:58.231Z"
}
```

##### DELETE /hotplace/:id --> test done
###### delete hotplace detail
- Response (200):
```
{
  "message": "hotplace has been deleted"
}
```

##### GET /download/:id --> test done
###### download the qr


##### POST /checkin --> test done
###### scan barcode to check in
- Request body:
```
  id: <barcode id>
```

- Response (201):
```
{
  "id": 1,
  "checkin": "2020-06-01T12:19:00.644Z",
  "checkout": "2020-06-01T12:19:00.644Z",
  "BarcodeId": 175,
  "UserId": 514,
  "updatedAt": "2020-06-01T12:19:00.646Z",
  "createdAt": "2020-06-01T12:19:00.646Z"
}
```

##### PUT /checkout/:id -- test done
###### scan barcode to check out
- Request params:
```
  id: <barcode id>
```

- Response (200):
```
{
  "id": 1,
  "checkin": "2020-06-01T12:19:00.644Z",
  "checkout": "2020-06-01T12:25:09.685Z",
  "BarcodeId": 175,
  "UserId": 514,
  "createdAt": "2020-06-01T12:19:00.646Z",
  "updatedAt": "2020-06-01T12:25:09.686Z"
}
```

#### Web app
---
##### POST /loginadmin --> test done
###### login as admin
- Request body:
```
{
	"email": <email>,
	"password": <password>
}
```

- Response (200):
```
{
  "access_token": <access_token>
}
```

##### GET /users --> test done
###### get all user data
- Response (200):
```
[
  {
    "id": 1093,
    "no_ktp": "12345678",
    "name": "asdf",
    "email": "asdf@mail.com",
    "address": "jakarta",
    "status": "negatif",
    "phone": "0122233333"
  },
  {
    "id": 1094,
    "no_ktp": "12345672348",
    "name": "asddddf",
    "email": "asssdf@mail.com",
    "address": "jakarta",
    "status": "negatif",
    "phone": "012223335533"
  }
]
```

##### GET /users/:id --> test done
###### get user by id
- Response (200):
```
{
  "no_ktp": "23423423",
  "name": "ail",
  "email": "ail@mail.com",
  "address": "jln durean",
  "status": "negatif",
  "phone": "081231412",
  "UserBarcodes": [
      {
          "checkin": "2020-06-01T16:13:37.482Z",
          "checkout": "2020-06-01T16:13:37.482Z",
          "Barcode": {
              "name": "gojek amir",
              "barcode_url": "url gambar si barcode",
              "Hotplace": {
                  "name": "gojek amir",
                  "type": "transport",
                  "address": "jalan asik",
                  "phone": "0812393"
              }
          }
      }
  ]
}
```

##### PUT /users/:id --> test done
###### update status user
- Request body:
```
  "status": <status>
```

- Response (200):
```
{
  "message": "all user has been updated"
}
```


##### GET /reghotplace --> test done
###### get all hotplace data
- Response (200):
```
[
  {
    "id": 438,
    "name": "gojek amir",
    "type": "transport",
    "address": "jalan asik",
    "phone": "0812393",
    "User": {
        "id": 1233,
        "name": "ail",
        "email": "ail@mail.com",
        "address": "jln durean",
        "phone": "081231412"
    }
  }
]
```

##### GET /reghotplace/:id --> test done
###### get hotplace by id
```
{
  "id": 438,
  "name": "gojek amir",
  "type": "transport",
  "address": "jalan asik",
  "phone": "0812393",
  "Barcode": {
      "name": "gojek amir",
      "barcode_url": "url gambar si barcode",
      "UserBarcodes": [
          {
              "checkin": "2020-06-01T16:13:37.482Z",
              "checkout": "2020-06-01T16:13:37.482Z",
              "User": {
                  "name": "ail",
                  "email": "ail@mail.com",
                  "address": "jln durean",
                  "phone": "081231412",
                  "no_ktp": "23423423"
              }
          }
      ]
  }
}
```


