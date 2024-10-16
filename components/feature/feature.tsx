import { cn } from '@/lib/utils';
import { DatabaseIcon, SailosIcon, ObjectStorageIcon } from '../ui/icons';
import Image from 'next/image';
import { MagicCard } from '../ui/magic-card';
import { AnimateElement } from '../ui/animated-wrapper';

const features = [
  {
    title: 'Cloud OS',
    description:
      'Unlock the Full Potential of Containers: Native K8s Management, Container Cluster Creation in One Click, and Automated Container Application Deployment.',
    icon: <SailosIcon />,
  },
  {
    title: 'High Availability Database',
    description:
      'Click to automatically deploy a high-availability distributed database, no need to build a complex multi-node architecture, fully compatible with mysql/redis/mongo/pgsql and other ecosystems.',
    icon: <DatabaseIcon />,
  },
  {
    title: 'Object Storage',
    description:
      'Effortlessly migrate data from TB to PB scale to the cloud with robust redundancy and disaster recovery capabilities. Seamlessly integrate your applications with our SDKs available in multiple languages.',
    icon: <ObjectStorageIcon />,
  },
];

const features2 = [
  {
    title: 'Environmental Safety Isolation',
    description:
      'Collaborate Effortlessly! All team members can access the same Devbox environment, sharing code repositories, configuration files, and test data for seamless project development in the cloud. This significantly reduces the need for complex environment coordination, accelerating your development process and boosting team productivity.',
    icon: '🛡️',
    image: '/images/foundation-2-1.svg',
  },
  {
    title: 'Unmatched Performance',
    description:
      'Our custom-built lightweight load balancer can handle massive clusters of tens of thousands of nodes, providing unparalleled performance.',
    icon: '🚀',
    image: '/images/foundation-2-2.svg',
  },
  {
    title: 'Access from Any Network',
    description:
      'Devbox provides both intranet and Internet access addresses, with automated SSL certificate provisioning for enhanced security and flexibility. This empowers developers to work seamlessly across networks while maintaining a secure connection.',
    icon: '🌐',
    image: '/images/foundation-2-3.svg',
  },
];

const performanceStats = [
  {
    icon: '/images/efficient-1.svg',
    percentage: '90%',
    description: 'Cost Reduction',
  },
  {
    icon: '/images/efficient-2.svg',
    percentage: '500%',
    description: 'Performance Improvement',
  },
  {
    icon: '/images/efficient-3.svg',
    percentage: '99.99999%',
    description: 'Extremely Stable',
  },
  {
    icon: '/images/efficient-4.svg',
    percentage: '100%',
    description: 'Safety Protection',
  },
];

export default function Feature() {
  return (
    <div className="mt-52">
      <AnimateElement type="slideUp">
        <div className="text-center text-4xl font-bold text-black">
          The Foundation for Your Data Success
        </div>
      </AnimateElement>

      <AnimateElement type="slideUp">
        <div className="mt-16 flex justify-center gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative flex w-1/3 flex-col justify-between rounded-lg bg-white"
              style={{
                boxShadow:
                  '0px 12px 40px -25px rgba(6, 26, 65, 0.20), 0px 0px 1px 0px rgba(19, 51, 107, 0.20)',
              }}
            >
              <AnimateElement type="slideUp">
                <div className="flex  gap-4 p-6 pb-0">
                  <div className="text-5xl">{feature.icon}</div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-lg font-semibold">{feature.title}</h3>
                    <p className="mb-4 text-xs text-custom-secondary-text">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </AnimateElement>
              <div className="relative z-10 flex-1 overflow-hidden rounded-lg">
                <AnimateElement type="slideUp" delay={0.6}>
                  <Image
                    src={`/images/foundation-${index + 1}.svg`}
                    alt={feature.title}
                    width={411}
                    height={285}
                    className="z-10 h-full w-full object-cover"
                  />
                </AnimateElement>
              </div>
              {index === 1 && (
                <div className="absolute left-1/2 top-2/3 z-0 h-[75px] w-[250px] -translate-x-1/2 -translate-y-1/2 bg-[#3DA7FF66] blur-[100px]"></div>
              )}
            </div>
          ))}
        </div>
      </AnimateElement>

      <div className="mt-[140px] flex flex-col gap-16">
        {features2.map((feature, index) => (
          <div key={index}>
            <AnimateElement
              className={cn(
                'flex h-[350px] gap-16 text-right',
                index === 1 && 'flex-row-reverse text-left',
              )}
              type="slideUp"
              delay={[0.5, 0.6, 0.7][index]}
            >
              <MagicCard
                gradientColor="#9ADFFF66"
                gradientSize={300}
                className="relative w-1/2 rounded border border-dashed border-[#9DCBE6] bg-transparent"
              >
                <Image src={feature.image} alt={feature.title} fill />
              </MagicCard>
              <div className="flex w-1/2 flex-col justify-center">
                <h3 className="mb-5 text-[28px] font-bold">{feature.title}</h3>
                <p className="text-base font-medium text-custom-secondary-text">
                  {feature.description}
                </p>
              </div>
            </AnimateElement>
          </div>
        ))}
      </div>

      <AnimateElement type="slideUp">
        <div className="mt-[200px] text-center text-4xl font-bold text-black">
          Discover How Efficient Your Team Could Be
        </div>
        <div className="mt-16 flex items-center justify-between rounded border border-dashed border-[#9DCBE6] px-20 py-9">
          {performanceStats.map((stat, index) => (
            <div key={index} className="flex items-center">
              <div>
                <Image
                  src={stat.icon}
                  alt={stat.description}
                  width={80}
                  height={80}
                />
              </div>
              <div className="flex flex-col">
                <div className="text-[28px] font-bold text-black">
                  {stat.percentage}
                </div>
                <div className="text-sm font-medium text-custom-secondary-text">
                  {stat.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </AnimateElement>
    </div>
  );
}
