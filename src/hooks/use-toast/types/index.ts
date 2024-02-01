import { ToastTypes, ToastVariants } from '@/types/toast';

export interface ToastOptionsParams {
  title: string;
  description?: string;
  type: ToastTypes;
  timer?: number;
  variant?: ToastVariants;
}

export interface ToastParams extends ToastOptionsParams {
  open: boolean;
}

export type ToastFunction = (
  title: string,
  description?: string,
  timer?: number,
  variant?: ToastVariants,
) => void;

export type UseToastReturn = Record<ToastTypes, ToastFunction>;
