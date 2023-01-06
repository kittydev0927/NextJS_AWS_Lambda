import type { PlaidLinkOnSuccess } from 'react-plaid-link';

export interface IPlaidLinkProps {
  linkText?: string;
  onSuccess?: PlaidLinkOnSuccess;
}
