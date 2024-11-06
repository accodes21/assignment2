import { createContext, useContext, useState } from "react";
import {
  IRequisitionDetails,
  IJobDetails,
  IInterViewSettings,
} from "../../interface/forms";

interface IFormContext {
  requisitionDetails: IRequisitionDetails;
  jobDetails: IJobDetails;
  interviewSettings: IInterViewSettings;
  setRequisitionDetails: (values: IRequisitionDetails) => void;
  setJobDetails: (values: IJobDetails) => void;
  setInterviewSettings: (values: IInterViewSettings) => void;
}

const FormContext = createContext<IFormContext | undefined>(undefined);

export const FormProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [requisitionDetails, setRequisitionDetails] =
    useState<IRequisitionDetails>({
      requisitionTitle: "",
      noOfOpenings: 0,
      urgency: "",
      gender: "",
    });

  const [jobDetails, setJobDetails] = useState<IJobDetails>({
    jobTitle: "",
    jobDetails: "",
    jobLocation: "",
  });

  const [interviewSettings, setInterviewSettings] =
    useState<IInterViewSettings>({
      interviewMode: "",
      interviewDuration: "",
      interviewLanguage: "",
    });

  return (
    <FormContext.Provider
      value={{
        requisitionDetails,
        jobDetails,
        interviewSettings,
        setRequisitionDetails,
        setJobDetails,
        setInterviewSettings,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("useFormContext must be used within a FormProvider");
  }
  return context;
};
