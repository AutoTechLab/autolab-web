import { UseToastReturn } from '@/hooks/use-toast/types';
import { useToastContext } from '@/hooks/use-toast/use-toast-context/useToastContext';

const useToast = (): UseToastReturn => {
  const { showToast } = useToastContext();
  return {
    error: (title, description, timer, variant) =>
      showToast({ title, description, type: 'error', timer, variant }),
    warning: (title, description, timer, variant) =>
      showToast({ title, description, type: 'warning', timer, variant }),
    info: (title, description, timer, variant) =>
      showToast({ title, description, type: 'info', timer, variant }),
    success: (title, description, timer, variant) =>
      showToast({ title, description, type: 'success', timer, variant }),
  };
};

export default useToast;
