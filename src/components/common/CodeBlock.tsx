'use client';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import {
  HiCheckCircle as CheckIcon,
  HiOutlineClipboardCopy as CopyIcon,
} from 'react-icons/hi';
// @ts-ignore
import { type as CodeProps } from 'react-markdown/lib';
// @ts-ignore
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
// @ts-ignore
import css from 'react-syntax-highlighter/dist/cjs/languages/prism/css';
// @ts-ignore
import diff from 'react-syntax-highlighter/dist/cjs/languages/prism/diff';
// @ts-ignore
import javascript from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript';
// @ts-ignore
import tsx from 'react-syntax-highlighter/dist/cjs/languages/prism/tsx';
// @ts-ignore
import typescript from 'react-syntax-highlighter/dist/cjs/languages/prism/typescript';
// @ts-ignore
import { a11yDark as themeColor } from 'react-syntax-highlighter/dist/cjs/styles/prism';
// @ts-ignore
import { useCopyToClipboard } from 'usehooks-ts';

const languages = {
  javascript: 'javascript',
  typescript: 'typescript',
  diff: 'diff',
  tsx: 'tsx',
  css: 'css',
};

SyntaxHighlighter.registerLanguage(languages.javascript, javascript);
SyntaxHighlighter.registerLanguage(languages.typescript, typescript);
SyntaxHighlighter.registerLanguage(languages.diff, diff);
SyntaxHighlighter.registerLanguage(languages.tsx, tsx);
SyntaxHighlighter.registerLanguage(languages.css, css);

const CodeBlock = ({
  className = '',
  children,
  inline,
  ...props
}: CodeProps) => {
  const [isCopied, setIsCopied] = useState<boolean>(false);
  // eslint-disable-next-line unused-imports/no-unused-vars
  const [value, copy] = useCopyToClipboard();
  const match = /language-(\w+)/.exec(className || '');

  const handleCopy = (code: string) => {
    copy(code);
    setIsCopied(true);
  };

  useEffect(() => {
    if (isCopied) {
      const timeout = setTimeout(() => {
        setIsCopied(false);
      }, 2000);

      return () => clearTimeout(timeout);
    }
  }, [isCopied]);

  return (
    <>
      {!inline ? (
        <div className='relative'>
          <button
            className='absolute top-3 right-3 rounded-lg border border-neutral-700 p-2 hover:bg-neutral-800'
            type='button'
            aria-label='Copy to Clipboard'
            onClick={() => handleCopy(children.toString())}
            data-umami-event='Click Copy Code'
          >
            {!isCopied ? (
              <CopyIcon size={18} className='text-neutral-400' />
            ) : (
              <CheckIcon size={18} className='text-green-600' />
            )}
          </button>

          <SyntaxHighlighter
            {...props}
            style={themeColor}
            customStyle={{
              padding: '20px',
              fontSize: '14px',
              borderRadius: '8px',
              paddingRight: '50px',
            }}
            PreTag='div'
            language={match ? match[1] : 'javascript'}
            wrapLongLines={true}
          >
            {String(children).replace(/\n$/, '')}
          </SyntaxHighlighter>
        </div>
      ) : (
        <code className='rounded-md bg-neutral-200 px-2 py-1 text-[14px] font-light text-sky-600 dark:bg-neutral-700 dark:text-sky-300'>
          {children}
        </code>
      )}
    </>
  );
};

const LoadingPlaceholder = () => <div className='mt-12 mb-12 h-36 w-full' />;

export default dynamic(() => Promise.resolve(CodeBlock), {
  ssr: false,
  loading: LoadingPlaceholder,
});
