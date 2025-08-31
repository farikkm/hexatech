export const scrollIntoApplicationForm = () => {
  const applicationForm = document.getElementById("applicant-form");
  applicationForm.scrollIntoView({ behavior: "smooth", block: "start" });
};
