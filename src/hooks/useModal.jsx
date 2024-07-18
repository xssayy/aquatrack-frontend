import { useState, useEffect, useRef } from 'react';

const useModal = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [operationType, setOperationType] = useState('add');
  const [initialValues, setInitialValues] = useState({});
  const modalRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = event => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };

    const handleClickOutside = event => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const openModal = (type, initialValues = {}) => {
    setIsVisible(true);
    setOperationType(type);
    setInitialValues(initialValues);
  };

  const closeModal = () => {
    setIsVisible(false);
    setOperationType('add');
    setInitialValues({});
  };

  return {
    isVisible,
    operationType,
    initialValues,
    openModal,
    closeModal,
    modalRef,
  };
};

export default useModal;
