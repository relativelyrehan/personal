import { NextSeo } from 'next-seo';
import { History } from '../components/history/History';
import { Input } from '../components/input';
import React from 'react';
import { banner } from '../utils/bin';
import config from '../../config.json';
import { useHistory } from '../components/history/hook';

interface IndexPageProps {
  inputRef: React.MutableRefObject<HTMLInputElement>;
}

const TerminalPage: React.FC<IndexPageProps> = ({ inputRef }) => {
  const containerRef = React.useRef(null);
  const {
    history,
    command,
    lastCommandIndex,
    setCommand,
    setHistory,
    clearHistory,
    setLastCommandIndex,
  } = useHistory([]);

  const init = React.useCallback(() => setHistory(banner()), []);

  React.useEffect(() => {
    init();
  }, [init]);

  React.useEffect(() => {
    if (inputRef.current) {
      inputRef.current.scrollIntoView();
      inputRef.current.focus({ preventScroll: true });
    }
  }, [history]);

  return (
    <>
      <NextSeo
        title="LiveTerm"
        description="Terminal themed porfolio by Rehan"
        openGraph={{
          type: 'website',
          url: 'https://www.relativelyrehan.co/terminal',
          title: `${config.title}`,
          description: 'Open Graph Description',
          images: [
            {
              url: 'https://www.relativelyrehan.co/favicon.svg',
              width: 800,
              height: 600,
              alt: 'Liveterm by rehan',
            },
            {
              url: 'https://www.relativelyrehan.co/favicon.svg',
              width: 800,
              height: 600,
              alt: 'Liveterm by rehan',
            },
          ],
        }}
      />

      <div className="p-8 overflow-hidden h-full border-2 rounded border-light-yellow dark:border-dark-yellow">
        <div ref={containerRef} className="overflow-y-auto h-full">
          <History history={history} />

          <Input
            inputRef={inputRef}
            containerRef={containerRef}
            command={command}
            history={history}
            lastCommandIndex={lastCommandIndex}
            setCommand={setCommand}
            setHistory={setHistory}
            setLastCommandIndex={setLastCommandIndex}
            clearHistory={clearHistory}
          />
        </div>
      </div>
    </>
  );
};

export default TerminalPage;
