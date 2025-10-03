import React, { useState, useEffect } from 'react';
import { ChevronRight, X, Bot, Target, Database, Zap, Users, Shield, ChevronDown } from 'lucide-react';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqData = [
    {
      question: "What is agentic AI?",
      answer: "Agentic AI describes self-directed AI systems capable of making decisions and carrying out tasks on their own. These systems continuously adjust to changes in workflow and environment, ensuring operations remain smooth and responsive."
    },
    {
      question: "How can AI automation scale operations with intelligent agents?",
      answer: "AI automation enhances business efficiency by allowing intelligent agents to independently handle workflows, fine-tune performance, and increase output at scale. By applying adaptive AI, organizations can eliminate repetitive work, accelerate decision-making, and integrate advanced intelligence directly into their daily processes."
    },
    {
      question: "What are our AI tools and their benefits?",
      answer: "Not every AI platform operates at the same level. Our approach goes beyond rule-based automation by deploying self-learning agents that adapt to evolving business demands. These agents refine workflows over time, becoming more efficient and accurate with each iteration.\n\nKey advantages include:\nAccelerated Process Execution — Agents complete tasks quickly with minimal manual input.\nLower Operational Costs — Automated processes cut labor expenses and boost productivity.\nScalable AI Teams — Multiple agents can be deployed without the overhead of hiring additional staff."
    },
    {
      question: "What AI courses are available for businesses?",
      answer: "To help organizations fully leverage AI automation, our Academy offers hands-on training and tutorials. These courses walk teams through building, deploying, and optimizing AI agents for real business use. Participants learn how to streamline operations, strengthen decision-making, and seamlessly embed AI into their company's structure."
    }
  ];

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0B0B0F] text-white font-condensed font-extralight">
      {/* Top Navigation */}
      <nav className="sticky top-0 z-50 bg-black border-b border-[#141414] h-[72px]">
        <div className="max-w-[1200px] mx-auto px-6 h-full flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img src="assets/Logo.svg" alt="E.AI Logo" className="h-12 w-auto" />
          </div>

          {/* Center Navigation */}
          

          {/* Right Actions */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="text-white/70 hover:text-white transition-all duration-300 text-sm tracking-wide hover:scale-105"
            >
              Get Started 
            </button>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-2 rounded-full text-sm font-medium tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
            >
              Engage with Our AI
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-[88px] pb-[88px] md:pt-[120px] md:pb-[120px] px-6">
        <div className="max-w-[1200px] mx-auto text-center">
          {/* Pill Badge */}
          <div className="inline-flex items-center border border-[#2A2A2A] rounded-full px-4 py-2 mb-8 text-xs font-condensed font-extralight tracking-wide">
            <span className="text-white">Priority Access </span>
            <span className="text-[#C8C8C8] mx-2">—</span>
            <span className="text-white">Get Started</span>
          </div>
          
          {/* H1 - Only one on page */}
          <h1 className="text-[34px] md:text-[56px] lg:text-[64px] font-bold leading-tight mb-8 max-w-4xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
            Hire Self-Evolving AI Agents to Run Your Operations.
          </h1>
          
          {/* Subtext */}
          <p className="text-lg text-[#C8C8C8] mb-12 max-w-[650px] mx-auto leading-relaxed font-condensed font-extralight">
            The premier platform for agentic AI automation. Designed for companies that demand precision and leverage, our intelligent agents run operations seamlessly—unlocking efficiency and growth at scale.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-[16px] text-sm font-medium tracking-wide transition-all duration-300 font-condensed hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25 transform"
            >
              Request Access
            </button>
            <button className="border border-[#2A2A2A] text-white px-8 py-4 rounded-[16px] text-sm font-medium tracking-wide hover:border-white/50 hover:bg-white/10 transition-all duration-300 font-condensed hover:scale-105 hover:shadow-lg transform">
              Learn More
            </button>
          </div>
         
        </div>
      </section>

      {/* AI Agents Section */}
      <section id="ai-agents" className="pt-[88px] pb-[88px] md:pt-[88px] md:pb-[88px] px-6">
        <div className="max-w-[1200px] mx-auto">
          {/* Overline Badge */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center border border-[#2A2A2A] rounded-full px-4 py-2 text-xs font-condensed font-extralight tracking-wide">
              <span className="text-white">AI Agents Templates</span>
            </div>
          </div>
          
          {/* H2 and Description */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-condensed font-extralight tracking-[0.15em] uppercase mb-8 text-white">
              AI Agents: Reliable Workforce With Human-Level Performance.
            </h2>
            
            <p className="text-lg text-[#C8C8C8] max-w-[700px] mx-auto leading-relaxed font-condensed font-extralight mb-12">
              AI agents deliver precise, efficient task automation with human-level performance across complex workflows. Deploy specialized agents that learn, adapt, and execute with unprecedented accuracy and reliability.
            </p>
            
        
          </div>
          
          {/* Agent Cards Grid */}
          <div className="relative overflow-x-auto scrollbar-hide">
            <div className="flex gap-8 pb-4">
              {/* Email Triage AI Agent */}
              <div className="flex-shrink-0 w-80 border border-[#2A2A2A] rounded-[16px] overflow-hidden hover:border-white/30 transition-all duration-300">
                <div className="h-48 relative overflow-hidden bg-[#1A1A1A]">
                  <img 
                    src="assets/Email-&_Communication.png" 
                    alt="Email & Communication AI Agent"
                    className="w-full h-full object-cover rounded-t-[16px]"
                  />
                </div>
                <div className="p-6">
                  <div className="inline-block px-3 py-1 bg-[#2A2A2A]/50 rounded-full text-xs font-condensed font-extralight tracking-wide text-[#C8C8C8] mb-4">
                    EMAIL & COMMUNICATION
                  </div>
                  <h3 className="text-lg font-condensed font-extralight tracking-wide text-white mb-4">
                    Email Triage AI Agent
                  </h3>
                  <ul className="space-y-2 text-sm font-condensed font-extralight text-[#C8C8C8]">
                    <li>• Auto-sorting and forwarding</li>
                    <li>• Automatic replies generation</li>
                    <li>• Priority-based classification</li>
                  </ul>
                </div>
              </div>

              {/* Content Aggregation AI Agent */}
              <div className="flex-shrink-0 w-80 border border-[#2A2A2A] rounded-[16px] overflow-hidden hover:border-white/30 transition-all duration-300">
                <div className="h-48 relative overflow-hidden bg-[#1A1A1A]">
                  <img 
                    src="assets/General-Problem-Solving.png" 
                    alt="General Problem Solvers AI Agent"
                    className="w-full h-full object-cover rounded-t-[16px]"
                  />
                </div>
                <div className="p-6">
                  <div className="inline-block px-3 py-1 bg-[#2A2A2A]/50 rounded-full text-xs font-condensed font-extralight tracking-wide text-[#C8C8C8] mb-4">
                    GENERAL PROBLEM SOLVERS
                  </div>
                  <h3 className="text-lg font-condensed font-extralight tracking-wide text-white mb-4">
                    Content Aggregation AI Agent
                  </h3>
                  <ul className="space-y-2 text-sm font-condensed font-extralight text-[#C8C8C8]">
                    <li>• Multi-source content gathering</li>
                    <li>• Intelligent content curation</li>
                    <li>• Automated publishing workflows</li>
                  </ul>
                </div>
              </div>

              {/* Customer Service AI Agent */}
              <div className="flex-shrink-0 w-80 border border-[#2A2A2A] rounded-[16px] overflow-hidden hover:border-white/30 transition-all duration-300">
                <div className="h-48 relative overflow-hidden bg-[#1A1A1A]">
                  <img 
                    src="assets/Customer-Support.png" 
                    alt="Customer Support AI Agent"
                    className="w-full h-full object-cover rounded-t-[16px]"
                  />
                </div>
                <div className="p-6">
                  <div className="inline-block px-3 py-1 bg-[#2A2A2A]/50 rounded-full text-xs font-condensed font-extralight tracking-wide text-[#C8C8C8] mb-4">
                    CUSTOMER SUPPORT
                  </div>
                  <h3 className="text-lg font-condensed font-extralight tracking-wide text-white mb-4">
                    Customer Service AI Agent
                  </h3>
                  <ul className="space-y-2 text-sm font-condensed font-extralight text-[#C8C8C8]">
                    <li>• Order status & returns handling</li>
                    <li>• Subscription queries support</li>
                    <li>• Multi-channel communication</li>
                  </ul>
                </div>
              </div>

              {/* Candidate Outreach AI Agent */}
              <div className="flex-shrink-0 w-80 border border-[#2A2A2A] rounded-[16px] overflow-hidden hover:border-white/30 transition-all duration-300">
                <div className="h-48 relative overflow-hidden bg-[#1A1A1A]">
                  <img 
                    src="assets/Human-Resources.png" 
                    alt="Human Resources AI Agent"
                    className="w-full h-full object-cover rounded-t-[16px]"
                  />
                </div>
                <div className="p-6">
                  <div className="inline-block px-3 py-1 bg-[#2A2A2A]/50 rounded-full text-xs font-condensed font-extralight tracking-wide text-[#C8C8C8] mb-4">
                    HUMAN RESOURCES
                  </div>
                  <h3 className="text-lg font-condensed font-extralight tracking-wide text-white mb-4">
                    Candidate Outreach AI Agent
                  </h3>
                  <ul className="space-y-2 text-sm font-condensed font-extralight text-[#C8C8C8]">
                    <li>• Crafting outreach messages</li>
                    <li>• Follow-up automation</li>
                    <li>• Recruitment messaging optimization</li>
                  </ul>
                </div>
              </div>

              {/* Data Entry AI Agent */}
              <div className="flex-shrink-0 w-80 border border-[#2A2A2A] rounded-[16px] overflow-hidden hover:border-white/30 transition-all duration-300">
                <div className="h-48 relative overflow-hidden bg-[#1A1A1A]">
                  <img 
                    src="assets/Data-Processing.png" 
                    alt="Data Processing AI Agent"
                    className="w-full h-full object-cover rounded-t-[16px]"
                  />
                </div>
                <div className="p-6">
                  <div className="inline-block px-3 py-1 bg-[#2A2A2A]/50 rounded-full text-xs font-condensed font-extralight tracking-wide text-[#C8C8C8] mb-4">
                    DATA PROCESSING
                  </div>
                  <h3 className="text-lg font-condensed font-extralight tracking-wide text-white mb-4">
                    Data Entry AI Agent
                  </h3>
                  <ul className="space-y-2 text-sm font-condensed font-extralight text-[#C8C8C8]">
                    <li>• Document extraction & parsing</li>
                    <li>• Data cleaning & validation</li>
                    <li>• Automated cataloguing</li>
                  </ul>
                </div>
              </div>

              {/* Interview Scheduler AI Agent */}
              <div className="flex-shrink-0 w-80 border border-[#2A2A2A] rounded-[16px] overflow-hidden hover:border-white/30 transition-all duration-300">
                <div className="h-48 relative overflow-hidden bg-[#1A1A1A]">
                  <img 
                    src="/assets/Human-Resources2.png" 
                    alt="Human Resources 2 AI Agent"
                    className="w-full h-full object-cover rounded-t-[16px]"
                  />
                </div>
                <div className="p-6">
                  <div className="inline-block px-3 py-1 bg-[#2A2A2A]/50 rounded-full text-xs font-condensed font-extralight tracking-wide text-[#C8C8C8] mb-4">
                    HUMAN RESOURCES
                  </div>
                  <h3 className="text-lg font-condensed font-extralight tracking-wide text-white mb-4">
                    Interview Scheduler AI Agent
                  </h3>
                  <ul className="space-y-2 text-sm font-condensed font-extralight text-[#C8C8C8]">
                    <li>• Schedule coordination automation</li>
                    <li>• Calendar management</li>
                    <li>• Interview logistics handling</li>
                  </ul>
                </div>
              </div>

              {/* Voice Interactions AI Agent */}
              <div className="flex-shrink-0 w-80 border border-[#2A2A2A] rounded-[16px] overflow-hidden hover:border-white/30 transition-all duration-300">
                <div className="h-48 relative overflow-hidden bg-[#1A1A1A]">
                  <img 
                    src="assets/Customer-Support2.png" 
                    alt="Customer Support 2 AI Agent"
                    className="w-full h-full object-cover rounded-t-[16px]"
                  />
                </div>
                <div className="p-6">
                  <div className="inline-block px-3 py-1 bg-[#2A2A2A]/50 rounded-full text-xs font-condensed font-extralight tracking-wide text-[#C8C8C8] mb-4">
                    CUSTOMER SUPPORT
                  </div>
                  <h3 className="text-lg font-condensed font-extralight tracking-wide text-white mb-4">
                    Voice Interactions AI Agent
                  </h3>
                  <ul className="space-y-2 text-sm font-condensed font-extralight text-[#C8C8C8]">
                    <li>• Voice-based customer support</li>
                    <li>• Speech recognition & processing</li>
                    <li>• Natural language responses</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

 
          
     


     

     

      {/* Benefits Section */}
      <section className="pt-[88px] pb-[88px] px-6 border-t border-[#2A2A2A]">
        <div className="max-w-[1200px] mx-auto">
          {/* Overline Badge */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center border border-[#2A2A2A] rounded-full px-4 py-2 text-xs font-condensed font-extralight tracking-wide">
              <span className="text-white">Benefits</span>
            </div>
          </div>
          
          {/* H2 and Description */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-condensed font-extralight tracking-[0.15em] uppercase mb-8 text-white">
              Boost Efficiency & Build Leverage. Fast.
            </h2>
            
            <p className="text-lg text-[#C8C8C8] max-w-[700px] mx-auto leading-relaxed font-condensed font-extralight mb-12">
              Utilize the power of AI agents to optimize workflows and amplify your business's efficiency. These agents fine-tune processes, cut downtime, and drive greater output—giving your business the speed and accuracy needed to stay ahead of the competition.
            </p>
          </div>
          
          {/* Benefits Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl mb-2">98%</div>
              <div className="text-xs uppercase tracking-[0.2em] text-[#C8C8C8]">Uptime guaranteed</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl mb-2">70%</div>
              <div className="text-xs uppercase tracking-[0.2em] text-[#C8C8C8]">Lower costs</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl mb-2">2x</div>
              <div className="text-xs uppercase tracking-[0.2em] text-[#C8C8C8]">Faster decisions</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl mb-2">90%</div>
              <div className="text-xs uppercase tracking-[0.2em] text-[#C8C8C8]">Happier customers</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="pt-[88px] pb-[88px] px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="bg-gradient-to-br from-[#6A0DAD] to-[#0D0D3A] rounded-[32px] px-6 md:px-8 py-12 md:py-16 text-center shadow-2xl shadow-purple-900/30">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-condensed font-extralight tracking-[0.1em] md:tracking-[0.15em] uppercase mb-6 text-white leading-tight">
              INITIATE TRANSFORMATION
            </h2>
            <p className="text-base md:text-lg font-condensed font-extralight text-[#C8C8C8] mb-8 max-w-2xl mx-auto leading-relaxed px-2">
              Build an AI workforce that automates tasks efficiently. Implement intelligent agents to enhance operations and improve performance across your business today!
            </p>
            <button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-condensed font-medium tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-400/50 transform hover:brightness-110 text-sm md:text-base">
              Speak to us
            </button>
          </div>
        </div>
      </section>


      
      {/* FAQ Section */}
      <section className="pt-[88px] pb-[88px] px-6">
        <div className="max-w-[1200px] mx-auto">
          {/* Overline Badge */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center border border-[#2A2A2A] rounded-full px-4 py-2 text-xs font-condensed font-extralight tracking-wide">
              <span className="text-white">FAQ</span>
            </div>
          </div>
          
          {/* H2 */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-condensed font-extralight tracking-[0.15em] uppercase text-white">
              Frequently Asked Questions
            </h2>
          </div>
          
          {/* FAQ Accordion */}
          <div className="max-w-4xl mx-auto space-y-4">
            {faqData.map((faq, index) => (
              <div key={index} className="border border-[#2A2A2A] rounded-[16px] overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-[#2A2A2A]/20 transition-colors duration-200"
                >
                  <h3 className="text-xl font-condensed font-extralight text-white pr-4">
                    {faq.question}
                  </h3>
                  <ChevronDown 
                    className={`w-6 h-6 text-[#C8C8C8] transition-transform duration-300 flex-shrink-0 ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-8 pb-6">
                    <div className="text-[#C8C8C8] font-condensed font-extralight leading-relaxed whitespace-pre-line">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      
    

      {/* Footer */}
      <footer className="pt-[56px] pb-[56px] px-6 border-t border-[#2A2A2A]">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center mb-4">
                <img src="/assets/El hajj ai w-o background .svg" alt="E.AI Logo" className="h-10 w-auto" />
              </div>
              <p className="text-[#C8C8C8] text-xs tracking-wide leading-relaxed">
                Advanced AI automation systems for enterprise-level optimization and intelligent workflow management.
              </p>
            </div>
          
            <div>
              <h4 className="tracking-[0.15em] uppercase mb-4 text-sm">Contact</h4>
              <div className="space-y-2 text-xs text-[#C8C8C8] tracking-wide">
                <div>hello@eai-systems.com</div>
                <div>+1 (555) 123-4567</div>
                <div>Use </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-[#2A2A2A] pt-8 text-center">
            <div className="text-xs uppercase tracking-[0.2em] text-[#C8C8C8]">
              {new Date().getFullYear()} E.AI Systems • All Rights Reserved • Enterprise AI Solutions
            </div>
          </div>
        </div>
      </footer>

      {/* Contact Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/90" onClick={() => setIsModalOpen(false)}></div>
          
          <div className="relative bg-[#0B0B0F] border-2 border-[#2A2A2A] p-8 max-w-md w-full rounded-[16px]">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-[#C8C8C8] hover:text-white transition-colors duration-200"
            >
              <X className="w-6 h-6" />
            </button>
            
            <div className="mb-8">
              <h3 className="text-xl tracking-[0.15em] uppercase mb-4">
                Secure Channel
              </h3>
              <div className="w-12 h-px bg-white mb-4"></div>
            </div>
            
            <form className="space-y-6">
              <div>
                <label className="block text-xs uppercase tracking-[0.15em] mb-2 text-[#C8C8C8]">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full p-3 bg-transparent border border-[#2A2A2A] text-white placeholder-[#C8C8C8] focus:border-white focus:outline-none transition-colors duration-300 rounded-[16px]"
                  placeholder="Enter your name"
                />
              </div>
              
              <div>
                <label className="block text-xs uppercase tracking-[0.15em] mb-2 text-[#C8C8C8]">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full p-3 bg-transparent border border-[#2A2A2A] text-white placeholder-[#C8C8C8] focus:border-white focus:outline-none transition-colors duration-300 rounded-[16px]"
                  placeholder="Enter your email"
                />
              </div>
              
              <div>
                <label className="block text-xs uppercase tracking-[0.15em] mb-2 text-[#C8C8C8]">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="w-full p-3 bg-transparent border border-[#2A2A2A] text-white placeholder-[#C8C8C8] focus:border-white focus:outline-none transition-colors duration-300 rounded-[16px]"
                  placeholder="Enter your phone"
                />
              </div>
              
              <div>
                <label className="block text-xs uppercase tracking-[0.15em] mb-2 text-[#C8C8C8]">
                  Requirements
                </label>
                <textarea
                  rows={4}
                  className="w-full p-3 bg-transparent border border-[#2A2A2A] text-white placeholder-[#C8C8C8] focus:border-white focus:outline-none transition-colors duration-300 resize-none rounded-[16px]"
                  placeholder="Describe your automation requirements..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white tracking-[0.15em] uppercase text-sm transition-all duration-300 rounded-[16px] hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 transform"
              >
                Transmit Request
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;