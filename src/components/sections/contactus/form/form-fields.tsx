import React from "react";
import { motion } from "framer-motion";
import { Form, Field } from "formik";
import { MessageSquare, Send, Rocket } from "lucide-react";
import EnhancedField from "./enhance-field";

interface FormFieldsProps {
  isSubmitting: boolean;
  isValid: boolean;
  dirty: boolean;
}

const FormFields: React.FC<FormFieldsProps> = ({
  isSubmitting,
  isValid,
  dirty,
}) => {
  return (
    <motion.div
      key="form"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="relative z-10"
    >
      <div className="flex items-start gap-4 mb-10">
        <motion.div
          className="p-4 rounded-2xl bg-gradient-to-br from-accent to-orange shadow-xl"
          whileHover={{ rotate: [0, -10, 10, 0] }}
          transition={{ duration: 0.5 }}
        >
          <MessageSquare className="w-7 h-7 text-primary" />
        </motion.div>
        <div>
          <h2 className="text-3xl md:text-4xl font-neue-haas-medium text-secondary mb-2">
            Start Your Journey
          </h2>
          <p className="text-muted text-lg font-neue-haas-regular">
            Fill out the form and we'll respond within 24 hours
          </p>
        </div>
      </div>

      <Form className="space-y-7">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <EnhancedField name="name" placeholder="Full Name" />
          <EnhancedField name="phone" type="tel" placeholder="Phone Number" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <EnhancedField name="email" type="email" placeholder="Email Address" />
          <EnhancedField name="subject" placeholder="Subject" />
        </div>

        <EnhancedField
          name="message"
          as="textarea"
          placeholder="Tell us about your project..."
          rows={5}
        />

        <SubmitButton 
          isSubmitting={isSubmitting} 
          isValid={isValid} 
          dirty={dirty} 
        />
      </Form>
    </motion.div>
  );
};

const SubmitButton = ({ isSubmitting, isValid, dirty }: any) => (
  <motion.button
    type="submit"
    disabled={isSubmitting || !isValid || !dirty}
    className="w-full bg-gradient-to-r from-accent via-orange to-accent text-primary px-10 py-6 rounded-3xl font-black text-lg transition-all duration-500 shadow-2xl hover:shadow-3xl disabled:opacity-40 disabled:cursor-not-allowed group relative overflow-hidden"
    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
    whileTap={{ scale: 0.98 }}
  >
    <motion.div
      className="absolute inset-0 bg-gradient-to-r from-orange via-accent to-orange"
      initial={{ x: "-100%" }}
      whileHover={{ x: "100%" }}
      transition={{ duration: 0.6 }}
    />

    <span className="relative z-10 flex items-center justify-center gap-3">
      {isSubmitting ? (
        <>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <Rocket className="w-6 h-6" />
          </motion.div>
          LAUNCHING...
        </>
      ) : (
        <>
          <Send className="w-6 h-6" />
          SEND MESSAGE
        </>
      )}
    </span>
  </motion.button>
);

export default FormFields;