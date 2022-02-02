import { Handler } from '@netlify/functions';

/**
 *
 */
export const handler: Handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({ paymentUrl: process.env.PAYMENT_URL }),
  };
};
