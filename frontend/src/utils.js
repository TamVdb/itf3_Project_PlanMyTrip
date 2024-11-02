import toast from 'react-hot-toast';

export const handleSuccess = (message) => {
   toast.success(message, {
      duration: 2000,
      position: 'top-center',
   });
};

export const handleError = (message) => {
   toast.error(message, {
      duration: 2000,
      position: 'top-center',
   });
};