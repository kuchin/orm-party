SELECT
  name, amount,
  ROW_NUMBER() OVER (
    ORDER BY amount DESC
  ) AS rank
FROM orders;
