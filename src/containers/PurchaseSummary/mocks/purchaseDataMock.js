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
    quantity: 1
  }
};

export const getPurchaseData = (delay = 1000) => {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve(purchaseData);
    }, delay);
  });
};
