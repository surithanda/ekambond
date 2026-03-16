import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Formik } from "formik";
import { initialValues, validationSchema } from "./form/formconfig";
import FormFields from "./form/form-fields";
import SuccessMessage from "./form/success-message";


interface ContactFormContentProps {
  isSubmitted: boolean;
  setIsSubmitted: (value: boolean) => void;
  containerRef: React.RefObject<HTMLDivElement>;
}

const ContactFormContent: React.FC<ContactFormContentProps> = ({
  isSubmitted,
  setIsSubmitted,
  containerRef,
}) => {
  const handleSubmit = async (values: typeof initialValues, { resetForm }: any) => {
    try {
      console.log("✅ Form submitted:", values);
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setIsSubmitted(true);
      resetForm();
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      console.log("Error Submitting Contact Form:", error);
    }
  };

  return (
    <motion.div
      className="lg:col-span-2 bg-primary/40 backdrop-blur-2xl rounded-[2.5rem] p-10 md:p-12 shadow-2xl border border-surface/40 relative overflow-hidden"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.4, duration: 0.8 }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/50 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-orange to-surface" />

      <AnimatePresence mode="wait">
        {!isSubmitted ? (
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {(formikProps) => <FormFields {...formikProps} />}
          </Formik>
        ) : (
          <SuccessMessage />
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ContactFormContent;