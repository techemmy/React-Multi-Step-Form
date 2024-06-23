export default function Sidebar({ step: currentStep, handleStepChange }) {
  const steps = {
    1: "Your info",
    2: "Select plan",
    3: "Add-ons",
    4: "Summary"
  }

  return (
    <nav
      className="bg-sidebarDesktop ssmax:bg-sidebarMobile bg-cover bg-no-repeat bg-bottom py-5 px-5 sm:pl-8 ssmax:h-60 ssmin:rounded-xl uppercase">
      <ol
        className="counter__list gap-x-4 mt-3 ssmax:flex ssmax:flex-row ssmax:justify-center ssmax:items-start ssmax:h-full">
        {Object.keys(steps).map(step => {
          const activeState = parseInt(step) === currentStep ? 'active' : ''
          const activeThankYouPage = !Object.keys(steps).includes(currentStep.toString()) && parseInt(step) === 4 ? 'active' : ''
          return (
            <li key={`step-${steps[step]}`} onClick={() => handleStepChange(parseInt(step))} className={`${activeState} counter flex items-center mb-5 ssmin:before:mr-5 ${activeThankYouPage}`} >
              <p className="ssmax:hidden flex flex-col justify-center">
                <span className="text-coolGray">Step {step}</span>
                <span className="text-white font-medium">{steps[step]}</span>
              </p>
            </li>
          )
        })}
      </ol>
    </nav >
  )
}
