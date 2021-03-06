const purchaseData = {
  pricing: {
    subtotal: 102.96,
    previousPrice: 120.99,
    savings: 3.85,
    discount: 0.0,
    tax: 8.92,
    total: 108.95,
    zip: 94702
  },
  itemDetails: {
    itemName: 'OFM Essentials Racecar-Style Leather Gaming Chair, Green',
    pictureURL: 
    "https://i5.walmartimages.com/asr/79916c35-3293-48ff-acff-be325b2e4c84_2.ef5b1bd1451de6b63a7c20d2485d56c6.jpeg?odnHeight=100&odnWidth=100&odnBg=FFFFFF",
    quantity: 1,
    price: 99.11,
    prevPrice: 102.96,
  }
};

export const getPurchaseData = (delay = 1000) => {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve(purchaseData);
    }, delay);
  });
};
