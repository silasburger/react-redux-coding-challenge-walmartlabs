const purchaseData = {
  pricing: {
    subtotal: 102.96,
    previousPrice: 120.99,
    savings: 0.00,
    tax: 3.49,
    zip: 94702,
    total: 108.95,
  }, 
  itemDetails: {
    itemName: 'OFM Essentials Racecar-Style Leather Gaming Chair, Green',
    quantity: 1,
  }
}

export const getPurchaseData = (delay=5000) => {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve(purchaseData)
    }, delay);
    });
  });
}