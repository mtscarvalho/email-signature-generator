import { useState, useRef } from 'react';

const useClipboard = () => {
  const [isCopied, setIsCopied] = useState<boolean | null>(null);
  const elementToCopy = useRef<HTMLDivElement | null>(null);

  const copyToClipboard = () => {
    if (elementToCopy.current) {
      const range = document.createRange();
      const selection = window.getSelection();

      range.selectNode(elementToCopy.current);

      if (selection !== null) {
        selection.removeAllRanges();
        selection.addRange(range);

        try {
          document.execCommand('copy');
          setIsCopied(true);
        } catch (error) {
          console.error('Failed to copy to clipboard: ', error);
          setIsCopied(false);
        }

        selection.removeAllRanges();
      }
    }
  };

  return {
    copyToClipboard,
    isCopied,
    elementToCopy,
  };
};

export default useClipboard;
