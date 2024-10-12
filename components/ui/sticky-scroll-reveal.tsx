import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { cn } from '@/lib/utils';

const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode | any;
  }[];
  contentClassName?: string;
}) => {
  const targetRef = useRef<any>(null);
  const containerRef = useRef<any>(null);
  const [activeCard, setActiveCard] = useState(0);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end end'],
  });

  const cardLength = content.length;

  const activeRanges = [
    [0, 0.23],
    [0.23, 0.77],
    [0.77, 1],
  ];

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    for (let i = 0; i < activeRanges.length; i++) {
      console.log(latest, activeRanges[i][0], activeRanges[i][1]);
      if (latest >= activeRanges[i][0] && latest < activeRanges[i][1]) {
        setActiveCard(i);
        break;
      }
    }
  });

  return (
    <motion.div
      ref={targetRef}
      className="relative flex min-h-screen justify-between gap-16 py-20"
    >
      <div className="basis-2/5 space-y-16 py-20 ">
        {content.map((item, index) => (
          <motion.div
            key={item.title + index}
            className="flex gap-5"
            initial={{ opacity: 0.2 }}
            animate={{ opacity: activeCard === index ? 1 : 0.2 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-lg bg-[#F4FCFF]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                viewBox="0 0 35 35"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M17.7323 22.3496C20.1602 22.3496 22.1284 20.3814 22.1284 17.9535C22.1284 15.5256 20.1602 13.5574 17.7323 13.5574C15.3044 13.5574 13.3362 15.5256 13.3362 17.9535C13.3362 20.3814 15.3044 22.3496 17.7323 22.3496ZM17.7323 19.5163C18.5954 19.5163 19.2951 18.8166 19.2951 17.9535C19.2951 17.0904 18.5954 16.3908 17.7323 16.3908C16.8692 16.3908 16.1695 17.0904 16.1695 17.9535C16.1695 18.8166 16.8692 19.5163 17.7323 19.5163Z"
                  fill="#0099BB"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4.6685 4.87889C2.25832 7.28907 2.50553 11.7762 4.86195 16.5807C4.63706 16.9869 4.50903 17.4541 4.50903 17.9512C4.50903 18.4484 4.63707 18.9156 4.86196 19.3217C2.50554 24.1263 2.25834 28.6134 4.66851 31.0236C7.30668 33.6618 12.4333 33.116 17.7409 30.1053C23.0484 33.116 28.175 33.6618 30.8132 31.0236C33.4514 28.3854 32.9056 23.2588 29.8949 17.9513C32.9056 12.6437 33.4514 7.51706 30.8132 4.87889C28.175 2.24072 23.0484 2.78646 17.7409 5.79722C12.4333 2.78646 7.30667 2.24072 4.6685 4.87889ZM20.4753 7.55967C19.5828 7.99076 18.6658 8.51021 17.7409 9.11566C16.816 8.51021 15.8989 7.99076 15.0064 7.55967C14.1452 7.14367 13.307 6.80994 12.5067 6.56063C9.27639 5.55425 7.4502 6.10413 6.67197 6.88236C5.89374 7.66059 5.34386 9.48678 6.35024 12.7171C6.59003 13.4868 6.90789 14.2916 7.30194 15.1182L7.34236 15.1179C7.50763 15.1179 7.66958 15.1321 7.82709 15.1592C8.83604 13.9839 10.0414 12.6799 11.1164 11.5929C11.6666 11.0366 12.5632 11.06 13.1022 11.6271C13.6411 12.1943 13.6184 13.0908 13.0689 13.6478C12.078 14.6521 10.952 15.867 10.0021 16.9726C10.1144 17.2776 10.1757 17.6073 10.1757 17.9512C10.1757 19.516 8.90717 20.7846 7.34236 20.7846L7.30195 20.7843C6.9079 21.6109 6.59004 22.4157 6.35025 23.1854C5.34387 26.4157 5.89375 28.2419 6.67198 29.0201C7.45021 29.7984 9.2764 30.3482 12.5067 29.3419C13.307 29.0925 14.1452 28.7588 15.0064 28.3428L15.0645 28.3147C13.8427 27.3752 12.4676 26.2472 11.3049 25.1869C10.7268 24.6597 10.7272 23.7624 11.2804 23.2091C11.8337 22.6559 12.7306 22.6558 13.3105 23.1811C14.7003 24.4398 16.439 25.8301 17.7929 26.8208C18.7001 27.4117 19.5995 27.9198 20.4753 28.3428C21.3365 28.7588 22.1747 29.0925 22.975 29.3419C26.2053 30.3482 28.0315 29.7984 28.8097 29.0201C29.588 28.2419 30.1378 26.4157 29.1315 23.1854C28.8932 22.4207 28.578 21.6214 28.1875 20.8005C27.6175 21.6316 27.0272 22.4149 26.4269 23.17C26.5022 23.4248 26.5426 23.6947 26.5426 23.974C26.5426 25.5388 25.2741 26.8073 23.7092 26.8073C22.1444 26.8073 20.8759 25.5388 20.8759 23.974C20.8759 22.4092 22.1444 21.1406 23.7092 21.1406C23.9332 21.1406 24.1511 21.1666 24.3601 21.2157C25.1596 20.2 25.9171 19.1554 26.62 18.019C25.8295 16.8074 24.9762 15.6927 24.0765 14.5924C23.9563 14.608 23.8337 14.616 23.7092 14.616C22.1444 14.616 20.8759 13.3475 20.8759 11.7827C20.8759 10.2179 22.1444 8.94933 23.7092 8.94933C25.2741 8.94933 26.5426 10.2179 26.5426 11.7827C26.5426 12.1674 26.4659 12.5342 26.327 12.8687C26.94 13.6204 27.5457 14.3958 28.1331 15.2154C28.5488 14.3547 28.8823 13.5169 29.1315 12.7171C30.1378 9.48678 29.588 7.66059 28.8097 6.88236C28.0315 6.10413 26.2053 5.55425 22.975 6.56063C22.1747 6.80994 21.3365 7.14367 20.4753 7.55967Z"
                  fill="#0099BB"
                />
              </svg>
            </div>
            <div className="flex flex-col gap-3">
              <h2 className="text-2xl font-bold">{item.title}</h2>
              <p className="text-lg text-[#4E6185]">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="relative basis-1/2">
        <div
          className={cn(
            'sticky top-[200px] h-2/5 max-h-[400px] w-full overflow-hidden',
            contentClassName,
          )}
        >
          {content[activeCard].content ?? null}
        </div>
      </div>
    </motion.div>
  );
};

export default StickyScroll;