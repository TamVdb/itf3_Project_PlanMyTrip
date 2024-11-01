import toast, { Toaster } from 'react-hot-toast';

export const handleSuccess = (message) => {
   toast.success(message, {
      duration: 3000,
      position: 'top-center',
   });
};

export const handleError = (message) => {
   toast.error(message, {
      duration: 3000,
      position: 'top-center',
   });
};