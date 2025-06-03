
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "How many Credits can I earn per week?",
      answer: "You can earn up to 8 Marketplace Credits per week by completing simple weekly goals such as logging in and attending events. Over the 8-week beta period, you could earn up to 64 Credits total!"
    },
    {
      question: "What can I buy with Marketplace Credits?",
      answer: "Credits can be used for primary sales of Polygon Wearables and Emotes priced at 1 MANA or more. You can use them alone or combine them with other payment methods for larger purchases."
    },
    {
      question: "Do Credits expire?",
      answer: "Yes, any unused Credits from this beta run will expire on July 27 at 23:59 UTC. Make sure to use them while they're still valid!"
    },
    {
      question: "Can I trade or transfer Credits?",
      answer: "No, Marketplace Credits are non-transferable rewards. They're not actual MANA and cannot be redeemed, traded, or used outside the Decentraland Marketplace."
    },
    {
      question: "How do I claim my earned Credits?",
      answer: "Once you complete a goal, you'll get a notification and a CAPTCHA will appear. Solve it to claim your Credits. Make sure to claim them before the weekly cycle resets (every Sunday at 23:59 UTC) or they'll disappear."
    },
    {
      question: "When does the weekly cycle reset?",
      answer: "Each week begins at 00:00 UTC on Monday and ends at 23:59 UTC on Sunday. You'll have the same set of goals to complete each week."
    },
    {
      question: "Where can I track my progress?",
      answer: "You'll see a Marketplace Credit icon in the sidebar menu in the Explorer. That's where you can track goal progress, claim Credits, and head straight to the Marketplace."
    },
    {
      question: "How do I find eligible items in the Marketplace?",
      answer: "Browse items with the 'Get with Credits' filter turned on. You can find it under 'Special Filters' in the Marketplace menu to see only eligible Wearables and Emotes."
    }
  ];

  return (
    <section className="py-24 px-4 bg-gradient-to-br from-blue-900/40 to-purple-900/40 backdrop-blur-sm relative">
      {/* Background overlay */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1920&h=1080')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
            Frequently Asked Questions
          </h2>
          <p className="text-2xl text-gray-200">
            Everything you need to know about Marketplace Credits
          </p>
        </div>
        
        <div className="bg-gradient-to-br from-cyan-500/20 to-purple-500/20 backdrop-blur-md rounded-3xl border border-cyan-400/30 p-10">
          <Accordion type="single" collapsible className="space-y-6">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-cyan-400/20 rounded-2xl px-8 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 hover:from-cyan-500/20 hover:to-purple-500/20 transition-all duration-300 backdrop-blur-sm"
              >
                <AccordionTrigger className="text-white hover:text-cyan-300 text-left font-bold py-8 text-lg">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-200 pb-8 leading-relaxed text-lg">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
