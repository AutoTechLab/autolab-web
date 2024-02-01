import {
  CheckCircleIcon,
  ExclamationCircleIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,
} from '@heroicons/react/24/outline';

export const iconMapping = {
  error: <ExclamationCircleIcon width={24} height={24} />,
  warning: <ExclamationTriangleIcon width={24} height={24} />,
  info: <InformationCircleIcon width={24} height={24} />,
  success: <CheckCircleIcon width={24} height={24} />,
};
