import { motion } from 'motion/react';

const events = [
  {
    year: '2002',
    title: 'The Origin',
    description: 'Born into a world at the dawn of the social internet era.',
    color: '#3b82f6',
  },
  {
    year: '2018',
    title: 'First Lines of Code',
    description: 'Started the journey with C and basic algorithms, discovering a passion for building.',
    color: '#3b82f6',
  },
  {
    year: '2020-2020',
    title: 'Resilience Through Covid-19',
    description: 'Successfully balanced academic responsibilities during a global crisis. This period was pivotal in developing my ability to learn complex technical concepts independently while staying focused on my long-term goals.',
    color: '#3b82f6',
  },
  {
    year: '2022',
    title: 'A New Journey',
    description: 'Started my B.Sc. in Engineering, transitioning from a curious learner to a student developer. This marked the beginning of my deep dive into algorithms, data structures, and system design.',
    color: '#3b82f6',
  },
  {
    year: '2026',
    title: 'Vision Forward',
    description: 'Completing degree and bridging the gap between system design and user experience.',
    color: '#3b82f6',
  },
];

export default function Journey() {
  return (
    <div className="py-24 px-6 md:px-12 bg-background min-h-screen">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-headline text-5xl md:text-7xl font-bold tracking-tighter mb-4"
          >
            Journey <span className="text-primary-dim">Timeline</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-text-dim text-lg"
          >
            The architecture of a developer, from first line to today.
          </motion.p>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-[20px] md:left-1/2 md:-translate-x-1/2 h-full w-[2px] bg-surface-high"></div>

          <div className="space-y-24">
            {events.map((event, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={event.year} className="relative flex items-center justify-start md:justify-center">
                  {/* Timeline Dot */}
                  <div 
                    className="absolute left-0 md:left-1/2 md:-translate-x-1/2 z-10 w-10 h-10 rounded-full bg-background border-4 border-surface-high flex items-center justify-center p-1"
                  >
                    <div 
                      className="w-full h-full rounded-full"
                      style={{ 
                        backgroundColor: event.color,
                        boxShadow: `0 0 20px ${event.color}44` 
                      }}
                    />
                  </div>

                  {/* Desktop Layout (Alternating) */}
                  <div className="hidden md:flex w-full">
                    {isEven ? (
                      <>
                        <motion.div 
                          initial={{ opacity: 0, x: -50 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          className="w-1/2 pr-12 text-right"
                        >
                          <h4 className="font-headline text-4xl font-bold text-text-dim/30 mb-2">{event.year}</h4>
                          <h3 className="text-2xl font-bold mb-4">{event.title}</h3>
                          <p className="text-text-dim leading-relaxed">{event.description}</p>
                        </motion.div>
                        <div className="w-1/2"></div>
                      </>
                    ) : (
                      <>
                        <div className="w-1/2"></div>
                        <motion.div 
                          initial={{ opacity: 0, x: 50 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          className="w-1/2 pl-12 text-left"
                        >
                          <h4 className="font-headline text-4xl font-bold text-text-dim/30 mb-2">{event.year}</h4>
                          <h3 className="text-2xl font-bold mb-4">{event.title}</h3>
                          <p className="text-text-dim leading-relaxed">{event.description}</p>
                        </motion.div>
                      </>
                    )}
                  </div>

                  {/* Mobile Layout (All Right) */}
                  <motion.div 
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex md:hidden w-full pl-16 flex-col"
                  >
                    <h4 className="font-headline text-3xl font-bold text-text-dim/30 mb-1">{event.year}</h4>
                    <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                    <p className="text-text-dim text-sm leading-relaxed">{event.description}</p>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
