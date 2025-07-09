import { FC } from 'react';
import { motion } from 'framer-motion';

interface CodeBlockProps {
  code: string;
  language?: string;
}

const CodeBlock: FC<CodeBlockProps> = ({ code, language = 'javascript' }) => {
  return (
    <motion.div
      className="my-8 overflow-hidden rounded-xl border border-[#3BACB6]/20 shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center bg-[#181A20] px-5 py-3 text-sm border-b border-[#3BACB6]/20">
        <span className="text-slate-400 font-mono uppercase tracking-wide">{language}</span>
        <div className="ml-auto flex space-x-2">
  <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" title="Close" aria-label="Close window"></div>
  <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" title="Minimize" aria-label="Minimize window"></div>
  <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" title="Zoom" aria-label="Zoom window"></div>
</div>
      </div>
      <pre className="bg-[#181A20] p-6 overflow-x-auto font-mono text-sm leading-relaxed text-slate-200 scrollbar-thin scrollbar-thumb-[#23272e] scrollbar-track-[#181A20]">
        <code>{code}</code>
      </pre>
    </motion.div>
  );
};

export default CodeBlock;
