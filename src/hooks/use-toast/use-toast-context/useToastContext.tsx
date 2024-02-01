import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useState,
} from 'react';

import Toast from '@/components/common/ui/toast';
import { ToastOptionsParams, ToastParams } from '@/hooks/use-toast/types';

interface ToastContext {
  showToast: (options: ToastOptionsParams) => void;
}

export const ToastContext = createContext<ToastContext>({
  showToast: () => {},
});

export const useToastContext = () => useContext(ToastContext);

const ToastContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [options, setOptions] = useState<ToastParams>({
    open: false,
    title: '',
    description: '',
    type: 'error',
    variant: 'standard',
  });

  const hideToast = () => {
    setOptions((prev) => ({ ...prev, open: false }));
  };

  const showToast = (options: ToastOptionsParams) => {
    setOptions((prev) => ({ ...prev, ...options, open: true }));
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      <Toast
        open={options.open}
        onClose={hideToast}
        title={options.title}
        type={options.type}
        description={options.description}
        timer={options.timer}
        variant={options.variant}
      />
      {children}
    </ToastContext.Provider>
  );
};

export default ToastContextProvider;
