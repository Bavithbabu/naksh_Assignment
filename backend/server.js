const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());


let products = [
   {
        id:1,
        name:"Iphone 16",
        price:"₹79,999",
        category: "Mobiles",
        images:[
            "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone16-digitalmat-gallery-3-202409?wid=728&hei=666&fmt=p-jpg&qlt=95&.v=Y2tBd1RqSzMrd3hScm1lN290ZENDQnlVUVRHTkd5alQ5aFd0OWdSZUk0SXlLZ0xXbFByV2Vvak9rWndaamlPU3cvMldkdDlIc0lud2tjcDJ3djFCUkV2dGpWUjV5VzZtaGp2QjBiUXR3RUFJWFM4ekI5ZC9uRFBQN3lzOXp4dnA",
            "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone16-digitalmat-gallery-6-202409?wid=728&hei=666&fmt=p-jpg&qlt=95&.v=Y2tBd1RqSzMrd3hScm1lN290ZENDQjY1T2VXZTl3cWJzcHczUW5SZHNEWXlLZ0xXbFByV2Vvak9rWndaamlPU3cvMldkdDlIc0lud2tjcDJ3djFCUkV2dGpWUjV5VzZtaGp2QjBiUXR3RUJSYVFBd2NJTU9FWTUxUWtDeSszQkg",
            "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone16-digitalmat-gallery-4-202409?wid=728&hei=666&fmt=p-jpg&qlt=95&.v=Y2tBd1RqSzMrd3hScm1lN290ZENDT21WVFhyY3phSHE0c0dmYXl5WVVRd3lLZ0xXbFByV2Vvak9rWndaamlPU3cvMldkdDlIc0lud2tjcDJ3djFCUkV2dGpWUjV5VzZtaGp2QjBiUXR3RUQzSmhDWEMwK2dTTElJb2VMenpvQVc",
        ]
    },
    {
        id:2,
        name:"Google pixel 9",
        price:"₹74,999",
        category: "Mobiles",
        images:["https://hips.hearstapps.com/hmg-prod/images/google-pixel-9-review-lead-66c8a74805258.jpg?crop=0.669xw:1.00xh;0.166xw,0&resize=1200:*",
        "https://lh3.googleusercontent.com/KVCiEVSL7_Sdx0jjJObN1sOfseAf6vlj2V7vj824TiY_8nkCbAbrfnJsQtVmzHuZPm4_dfQsXGmn7Ep9mAvrwomIbgl9kdhCpYM=s6000-w6000-e365-rw-v0-nu",
        "https://lh3.googleusercontent.com/8-bceT0hS4QQbTJz24A0dTm_y8KZBa3lP558meYlMiigr407OZiSu-LyaDCbEH8Mi2WDjIeGvnwDT8-3qp8mqE4-Moj-nY9Kt0q8=s6000-w6000-e365-rw-v0-nu",
        ]
    },
    {
        id:3,
        name:"Samsung S25 Ultra",
        price:"₹1,12,471",
        category: "Mobiles",
        images:["https://image-us.samsung.com/us/smartphones/galaxy-s25/Gallery/PA3/PA3-01-TitaniumBlue-1600x1200.jpg?$product-details-jpg$",
        "https://image-us.samsung.com/us/smartphones/galaxy-s25/Gallery/PA3/PA3-03-TitaniumBlue-1600x1200.jpg?$product-details-jpg$",
        "https://image-us.samsung.com/us/smartphones/galaxy-s25-ultra/gallery/images/SCOMPARA-188-BuyPage-S25Ultra-Single-ExclusiveColors-Jetblack-800x600.jpg?$product-details-jpg$",
        ]
    },
    // laptop -->
  {
    id: 101,
    name: "macbook 13 pro",
    price: "₹1,29,787",
    category: "Laptops",
    images: [
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/mbp-14-digitalmat-gallery-6-202410?wid=728&hei=666&fmt=png-alpha&.v=dmVFbEEyUXJ6Q0hEd1FjMFY3bE5FbVVTZzQyYVd1eHBXdm1yMDR0VzJaOFZYRUFzTnU5dXpMeUpXTHdIdkp5VDRob044alBIMUhjRGJwTW1yRE1oUG9oQ20zUjdkYWFQM0VDcG9EZ0J2dDJIaWV5SG1KWWRSb1RMSkNqUDJYZHY",
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/mbp-14-digitalmat-gallery-1-202410?wid=728&hei=666&fmt=png-alpha&.v=dmVFbEEyUXJ6Q0hEd1FjMFY3bE5FczNWK01TMHBhR0pZcm42OHQ2ODBjVVZYRUFzTnU5dXpMeUpXTHdIdkp5VDRob044alBIMUhjRGJwTW1yRE1oUG9oQ20zUjdkYWFQM0VDcG9EZ0J2dDMrNmVjbmk5c1V4VVk2VEt3TGcxekg",
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/mbp-14-digitalmat-gallery-2-202410?wid=728&hei=666&fmt=png-alpha&.v=dmVFbEEyUXJ6Q0hEd1FjMFY3bE5FdEpmeWNYQkQwQTRPUlZXTkRqOVh1QVZYRUFzTnU5dXpMeUpXTHdIdkp5VDRob044alBIMUhjRGJwTW1yRE1oUHZqTUNjYTN3eVR3RE1RaFZVMUEyckFXZEdHNUFPR0hYUU12cjI0VlFzM1A",
    ],
  },
  {
    id: 102,
    name: "HP Omen Max ",
    price: "₹1,59,990",
    category: "Laptops",
    images: [
      "https://in-media.apjonlinecdn.com/catalog/product/cache/74c1057f7991b4edb2bc7bdaa94de933/B/9/B90KQPA-1_T1741316146.png",
      "https://in-media.apjonlinecdn.com/catalog/product/cache/74c1057f7991b4edb2bc7bdaa94de933/h/p/hp-omen-16-dojo-left.png",
      "https://in-media.apjonlinecdn.com/catalog/product/cache/74c1057f7991b4edb2bc7bdaa94de933/B/9/B90KQPA-6_T1741316162.png",
    ],
  },
  {
    id: 103,
    name: "ROG ZEPHYRUS G14",
    price: "₹1,84,990",
    category: "Laptops",
    images: [
      "https://i.ytimg.com/vi/Qr0Xvw9cjCU/maxresdefault.jpg",
      "https://media.assettype.com/evoindia/2023-05/eb975555-2edc-4a2b-9426-20f41ba0df00/asus_rog_zephyrus_g1.jpg",
      "https://www.jagatreview.com/wp-content/uploads/2022/04/ASUS-ROG-Zephyrus-G14-2022-13.jpg",
    ],
  },

  // Watch
  {
    id: 11,
    name: "Apple Watch Series 9 ",
    price: "₹46,900",
    category: "watch",
    images: [
      "https://m.media-amazon.com/images/I/81mHRsWENaL._SX569_.jpg",
      "https://m.media-amazon.com/images/I/71g1YS5s+KL._SX569_.jpg",
      "https://m.media-amazon.com/images/I/81ujc3rj2iL._SX569_.jpg",
    ],
  },
  {
    id: 12,
    name: "Samsung Galaxy Watch6",
    price: "₹24,999",
    category: "watch",
    images: [
      "https://m.media-amazon.com/images/I/71sRBqqrOpL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/71HKLAmV6SL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/811RIOYTm0L._SL1500_.jpg",
    ],
  },
  {
    id: 13,
    name: "Google Pixel Watch 2",
    price: "₹39,900",
    category: "watch",
    images: [
      "https://m.media-amazon.com/images/I/41kfzFxtXbL._SX300_SY300_QL70_FMwebp_.jpg",
      "https://m.media-amazon.com/images/I/71Ec8ci+0WL._SX569_.jpg",
      "https://m.media-amazon.com/images/I/314ePaMJq0L._SX300_SY300_QL70_FMwebp_.jpg",
    ],
  },

];

// GET all products
app.get("/api/products", (req, res) => {
  res.json(products);
});

// POST a new product
app.post("/api/products", (req, res) => {
  const { name, price, imageUrl } = req.body;
  const newProduct = {
    id: Date.now(),
    name,
    price,
    imageUrl,
  };
  products.push(newProduct);
  res.status(201).json(newProduct);
});

// DELETE a product by ID
app.delete("/api/products/:id", (req, res) => {
  const id = parseInt(req.params.id);
  products = products.filter((p) => p.id !== id);
  res.json({ message: "Product deleted", id });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
