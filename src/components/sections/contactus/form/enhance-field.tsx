import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Field } from "formik";
import { CheckCircle, AlertCircle } from "lucide-react";

interface EnhancedFieldProps {
  name: string;
  type?: string;
  placeholder: string;
  as?: string;
  rows?: number;
}

const EnhancedField: React.FC<EnhancedFieldProps> = ({
  name,
  type = "text",
  placeholder,
  as = "input",
  rows,
}) => {
  const [activeField, setActiveField] = React.useState<string | null>(null);

  return (
    <Field name={name}>
      {({ field, meta }: any) => (
        <div className="relative group">
          {as === "textarea" ? (
            <textarea
              {...field}
              placeholder={placeholder}
              rows={rows}
              onFocus={() => setActiveField(name)}
              onBlur={() => setActiveField(null)}
              className={`w-full px-6 py-5 bg-white/80 backdrop-blur-xl border-2 rounded-3xl focus:outline-none transition-all duration-500 text-base resize-none font-medium shadow-lg
              ${
                meta.error && meta.touched
                  ? "border-orange/60 focus:border-orange shadow-orange/20"
                  : "border-surface/40 focus:border-accent shadow-accent/10 focus:shadow-accent/30"
              }
              placeholder:text-gray-500 text-gray-900 hover:shadow-xl`}
            />
          ) : (
            <input
              {...field}
              type={type}
              placeholder={placeholder}
              onFocus={() => setActiveField(name)}
              onBlur={() => setActiveField(null)}
              className={`w-full px-6 py-5 bg-white/80 backdrop-blur-xl border-2 rounded-3xl focus:outline-none transition-all duration-500 text-base font-medium shadow-lg
              ${
                meta.error && meta.touched
                  ? "border-orange/60 focus:border-orange shadow-orange/20"
                  : "border-surface/40 focus:border-accent shadow-accent/10 focus:shadow-accent/30"
              }
              placeholder:text-gray-500 text-gray-900 hover:shadow-xl`}
            />
          )}

          <AnimatePresence>
            {meta.error && meta.touched && (
              <motion.div
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                className="absolute -bottom-7 left-2 flex items-center gap-1.5 bg-orange/10 px-3 py-1 rounded-full backdrop-blur-xl"
              >
                <AlertCircle className="w-3.5 h-3.5 text-orange" />
                <span className="text-orange text-xs font-semibold">
                  {meta.error}
                </span>
              </motion.div>
            )}
          </AnimatePresence>

          {!meta.error && meta.touched && field.value && (
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              className="absolute right-5 top-1/2 -translate-y-1/2"
            >
              <CheckCircle className="w-6 h-6 text-accent drop-shadow-lg" />
            </motion.div>
          )}

          <AnimatePresence>
            {activeField === name && (
              <motion.div
                layoutId="activeFieldGlow"
                className="absolute inset-0 rounded-3xl bg-gradient-to-r from-accent/30 to-orange/30 blur-xl -z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              />
            )}
          </AnimatePresence>
        </div>
      )}
    </Field>
  );
};

export default EnhancedField;