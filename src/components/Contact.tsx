import { useState, memo } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = memo(() => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast({
      title: "Message sent!",
      description: "I'll get back to you as soon as possible.",
    });
    
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const inputClasses = (field: string) => `
    w-full px-0 py-4 bg-transparent border-b text-foreground 
    placeholder:text-muted-foreground/50 focus:outline-none transition-colors duration-300
    ${focusedField === field ? 'border-primary' : 'border-border'}
  `;

  return (
    <section id="contact" className="py-12 md:py-12 px-6 md:px-12 lg:px-24">
      <div className="max-w-xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-display font-normal text-foreground mb-5 tracking-tight">
            Let's Build Something{" "}
            <span className="italic text-gradient">Great</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-md mx-auto">
            Whether it's a full-time position, freelance contract, or potential collaboration — I'm eager to hear about it.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          onSubmit={handleSubmit}
          className="space-y-2"
        >
          <div>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              onFocus={() => setFocusedField('name')}
              onBlur={() => setFocusedField(null)}
              required
              className={inputClasses('name')}
            />
          </div>
          
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              onFocus={() => setFocusedField('email')}
              onBlur={() => setFocusedField(null)}
              required
              className={inputClasses('email')}
            />
          </div>
          
          <div>
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              onFocus={() => setFocusedField('message')}
              onBlur={() => setFocusedField(null)}
              required
              rows={4}
              className={`${inputClasses('message')} resize-none`}
            />
          </div>
          
          <div className="pt-6">
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className="btn-primary w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </div>
        </motion.form>
      </div>
    </section>
  );
});

Contact.displayName = "Contact";

export default Contact;
