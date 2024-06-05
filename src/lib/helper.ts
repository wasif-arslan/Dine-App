export const formatPrice = (amount: number, currencyCode?: string) => {
  const validCurrencyCodes = ['USD', 'EUR', 'GBP', 'JPY']; // Add more currency codes as needed
  const selectedCurrency = currencyCode && validCurrencyCodes.includes(currencyCode.toUpperCase()) ? currencyCode.toUpperCase() : 'USD'; // Default to USD if no valid currency code is provided
  
  const currencyFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: selectedCurrency,
  });

  return currencyFormatter.format(amount);
};
